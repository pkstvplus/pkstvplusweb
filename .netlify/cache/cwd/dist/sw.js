importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js')

workbox.precaching.precacheAndRoute([{"revision":"13a8305c73153c657a230ecfefc878e0","url":"img/logo/logo.png"},{"revision":"c3b65e3fc5f77b34039e09007d43822a","url":"img/logo/logo-box.png"},{"revision":"a49eb37745b2e97ef8bf8d11ba28bc2b","url":"img/logo/logo-dark.png"},{"revision":"fcc74a3a7794e68c58bdd2a74740da6d","url":"404.html"},{"revision":"89590b4642ded1837d12a5df5e16dad6","url":"offline.html"},{"revision":"96b48a35c62887e9ac47e328c04bf4c7","url":"manifest.json"},{"revision":"b3c7f26fc66ac5cbdbce70ed28ed7821","url":"browserconfig.xml"},{"revision":"972a6a873488088e89aad61e22cfb5ac","url":"favicon-16x16.png"},{"revision":"dbad34a11ab4ebb4e18e2dbc41fc3bc1","url":"favicon-32x32.png"},{"revision":"3ad73cc696e111c91d27f6d35ae3f4fd","url":"favicon.ico"},{"revision":"33f1515765cfb20dc95c020bcef78b9a","url":"android-chrome-192x192.png"},{"revision":"7c30c37b77e0ef17b5ce4e6906c2e991","url":"android-chrome-512x512.png"},{"revision":"218f2aabbc2a204cb7dd5a9c5031dded","url":"apple-touch-icon.png"},{"revision":"a4ee182be3fe9d8d3e6db561b880a05c","url":"mstile-150x150.png"},{"revision":"8e92837c6e92cc1dfd5d37ed2f921bf9","url":"safari-pinned-tab.svg"}])

workbox.routing.setDefaultHandler(
    new workbox.strategies.NetworkFirst({
        cacheName: 'default'
    })
)

workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
        cacheName: 'fonts',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30 * 3
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'resources'
    })
)

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'image',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 3,
                maxEntries: 100
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({request}) => request.destination === 'audio' || request.destination === 'video',
    new workbox.strategies.CacheFirst({
        cacheName: 'media',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 3,
                maxEntries: 10
            }),
            new workbox.rangeRequests.RangeRequestsPlugin()
        ]
    })
)

workbox.routing.registerRoute(
    ({url}) => url.pathname.includes('browser-sync'),
    new workbox.strategies.NetworkOnly(),
    'GET'
)

workbox.routing.registerRoute(
    ({url}) => url.pathname.includes('browser-sync'),
    new workbox.strategies.NetworkOnly(),
    'POST'
)
