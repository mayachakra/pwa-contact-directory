// TODO: Create a service worker that caches static assets:
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';


precacheAndRoute(self.__WB_MANIFEST);

// Register route for caching static assets
registerRoute(
    /\.(?:js|css|html|png|jpg|jpeg|svg|gif)$/,
    new CacheFirst({
    cacheName: 'static-assests-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
