import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const dist = 'dist';
const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else files.push(p.replace(/\\/g, '/'));
  }
}
walk(dist);
files.sort();
const h = crypto.createHash('sha256');
for (const f of files) h.update(f + ':' + fs.readFileSync(f).length + '\n');
const hash = h.digest('hex').slice(0, 12);

const rel = JSON.stringify({ name: 'di-tu-online', milestone: 1, version: '0.1.0', buildHash: hash, files: files.length }, null, 2) + '\n';
fs.writeFileSync('release.json', rel);
fs.writeFileSync(path.join(dist, 'release.json'), rel);

const sw = `const CACHE = 'di-tu-online-${hash}';\nself.addEventListener('install', () => self.skipWaiting());\nself.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));\n`;
fs.writeFileSync('sw.js', sw);
fs.writeFileSync(path.join(dist, 'sw.js'), sw);
