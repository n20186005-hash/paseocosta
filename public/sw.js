// Retire the previous cache-first worker so old weather and photographs are not retained.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(key => key.startsWith('paseocosta-')).map(key => caches.delete(key)));
  await self.registration.unregister();
  await self.clients.claim();
})()));
