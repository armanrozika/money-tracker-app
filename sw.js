self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/',
          'index.html',
          'static/js/main.js',
          'static/js/app.50c4a9b13be5704977f6.js',
          'static/js/manifest.2ae2e69a05c33dfc65f8.js',
          'static/js/vendor.c67cbddf1abd9a514d69.js',
          'static/css/app.d9ab212628a22c06daad10efbe277b1e.css',
          'https://fonts.googleapis.com/css?family=Montserrat',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});