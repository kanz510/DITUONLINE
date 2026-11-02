const CACHE = 'di-tu-online-b523cfc49f1d';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
