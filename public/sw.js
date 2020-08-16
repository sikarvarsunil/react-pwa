let cacheData = 'appV1';

this.addEventListener('install', (event)=> {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                'static/js/0.chunk.js',
                'static/js/main.chunk.js',
                'static/css/main.chunk.css',
                'static/css/main.chunk.css',
                '/bootstrap.min.css',
                '/index.html',
                '/'
            ])
        })
    )
});

this.addEventListener('fetch', (event) => {
    if(!navigator.onLine) {
        if(event.request.url === 'http://localhost:3000/static/js/main.chunk.js') {
            event.waitUntil(
                this.registration.showNotification('Notification', {
                    body: 'Your Internet is not working',
                    icon: './notification.png'
                })
            )
        }
    
        event.respondWith(
            caches.match(event.request).then((res) => {
                if(res) return res;
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        )
    }
})