import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const dist = 'dist';
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = pkg.version || '0.3.0';
const milestone = 3;

// 1. Quét toàn bộ tệp assets được Vite xuất ra trong dist/ (loại bỏ release.json và sw.js cũ nếu có)
const assetFiles = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(p);
    } else {
      const rel = path.relative(dist, p).replace(/\\/g, '/');
      if (rel !== 'release.json' && rel !== 'sw.js') {
        assetFiles.push({ fullPath: p, relPath: rel });
      }
    }
  }
}
walk(dist);
assetFiles.sort((a, b) => a.relPath.localeCompare(b.relPath));

// 2. Tính buildHash từ SHA-256 NỘI DUNG THẬT của từng tệp trong dist
const h = crypto.createHash('sha256');
for (const f of assetFiles) {
  h.update(f.relPath + '\n');
  h.update(fs.readFileSync(f.fullPath));
}
const hash = h.digest('hex').slice(0, 12);

// 3. Tạo service worker (sw.js) hoàn chỉnh: có cache, fetch network-first cho HTML/release.json,
// cache-first cho hashed assets, và tự động xóa sạch cache cũ khi version/hash đổi
const swContent = `// Service Worker - Game DI TU ONLINE v${version} (${hash})
const CACHE_NAME = 'di-tu-online-${hash}';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './release.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Caching failed during install:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Xóa cache cũ:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Network-first cho HTML (navigation) và release.json để luôn nhận bản mới ngay lập tức
  if (req.mode === 'navigate' || url.pathname.endsWith('release.json') || url.pathname.endsWith('index.html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first cho tài nguyên tĩnh có mã băm (assets/*.js, assets/*.css), fallback network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      });
    })
  );
});
`;

fs.writeFileSync('sw.js', swContent);
fs.writeFileSync(path.join(dist, 'sw.js'), swContent);

// 4. Nhúng thông tin release đồng bộ vào dist/index.html
const distHtmlPath = path.join(dist, 'index.html');
if (fs.existsSync(distHtmlPath)) {
  let html = fs.readFileSync(distHtmlPath, 'utf8');
  // Xóa fallback redirect trong dist/index.html vì dist đã là bản phân phối gốc
  html = html.replace(/<script>[\s\S]*?location\.replace\('\.\/dist\/'\)[\s\S]*?<\/script>/, '');
  // Xóa đoạn script release cũ nếu có
  html = html.replace(/<script id="__release_meta">[\s\S]*?<\/script>/, '');
  const releaseScript = `<script id="__release_meta">window.__APP_RELEASE__=${JSON.stringify({
    name: 'di-tu-online',
    milestone,
    version,
    buildHash: hash,
  })};</script>`;
  html = html.replace('</head>', `  ${releaseScript}\n  </head>`);
  fs.writeFileSync(distHtmlPath, html);
}

// 5. Đồng bộ default BUILD_HASH trong src/version.ts
const versionTsPath = 'src/version.ts';
if (fs.existsSync(versionTsPath)) {
  let vCode = fs.readFileSync(versionTsPath, 'utf8');
  vCode = vCode.replace(/export let BUILD_HASH = '.*?';/, `export let BUILD_HASH = '${hash}';`);
  vCode = vCode.replace(/export const APP_VERSION = '.*?';/, `export const APP_VERSION = '${version}';`);
  fs.writeFileSync(versionTsPath, vCode);
}

// 6. Đếm chính xác tổng số tệp trong thư mục dist/ (bao gồm cả sw.js và release.json sắp ghi)
let totalFiles = 0;
function countDist(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) countDist(p);
    else totalFiles++;
  }
}
countDist(dist);
// Cộng thêm 1 cho file release.json sẽ được ghi ngay bên dưới
totalFiles += 1;

// 7. Ghi release.json
const relData = {
  name: 'di-tu-online',
  milestone,
  version,
  buildHash: hash,
  files: totalFiles,
};
const relJson = JSON.stringify(relData, null, 2) + '\n';
fs.writeFileSync('release.json', relJson);
fs.writeFileSync(path.join(dist, 'release.json'), relJson);

console.log(`[postbuild] Hoàn tất: v${version} (${hash}), milestone: ${milestone}, files: ${totalFiles}`);
