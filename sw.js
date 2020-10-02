// install service worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed', evt);
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('Service worker has been activated', evt);
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('Service worker event', evt);
});