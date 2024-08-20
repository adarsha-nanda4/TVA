const CACHE_NAME = "offline-v1";
const OFFLINE_URLS = ["/offline.html", "/offline.gif"];

// Install event
self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

function preLoad() {
  console.log("Installing web app");
  return caches.open(CACHE_NAME).then(function(cache) {
    console.log("Caching index and important routes");
    return cache.addAll(OFFLINE_URLS);
  });
}

// Fetch event
self.addEventListener("fetch", function(event) {
  event.respondWith(
    checkResponse(event.request).catch(() => returnFromCache(event.request))
  );
  event.waitUntil(
    addToCache(event.request)
  );
});

function checkResponse(request) {
  return fetch(request).then(response => {
    if (response.status === 404) {
      return Promise.reject("Not found");
    }
    return response;
  }).catch(() => {
    // Handle network fetch error (e.g., logging)
    return caches.match("/offline.html");
  });
}

function returnFromCache(request) {
  return caches.open(CACHE_NAME).then(cache => {
    return cache.match(request).then(matching => {
      return matching || cache.match("/offline.html");
    });
  });
}

function addToCache(request) {
  return caches.open(CACHE_NAME).then(cache => {
    return fetch(request).then(response => {
      if (response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    }).catch(() => {
      // Handle network fetch error (e.g., logging)
    });
  });
}

// Activate event - to clean up old caches
self.addEventListener("activate", function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
