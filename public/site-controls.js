document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.language-switch a').forEach(link => {
    const topic = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    link.href = link.textContent.trim() === 'EN' ? (topic === '/' ? '/en/' : '/en' + topic) : topic;
  });
  if ('serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then(items => items.forEach(item => item.unregister())).catch(() => {});
  if ('caches' in window) caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('paseocosta-')).map(key => caches.delete(key)))).catch(() => {});
});
