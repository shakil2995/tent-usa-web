'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d78af15652d1adb39577643e2c35e78f",
"assets/AssetManifest.bin.json": "bc00bbf3c425ac7d45ea882a64b8c52c",
"assets/AssetManifest.json": "e6e18e744d10516cb0952616da76a887",
"assets/assets/fonts/Montserrat-Bold.otf": "9c71d42b6a840ecfda8fc555040a1c76",
"assets/assets/fonts/Montserrat-Medium.otf": "d815b0a29adf3450c55f56e2fb813be4",
"assets/assets/fonts/Montserrat-SemiBold.otf": "bb3740d350b0186ce32b5678972bf061",
"assets/assets/fonts/MonumentExtended-Ultrabold.otf": "3b24078346a6ae8b9caeca47834fcea9",
"assets/assets/home/banners/0.jpg": "c5691d522ab91bf1bedfbc4858107627",
"assets/assets/home/banners/1.jpg": "9c0593e0b38883f7a9e1bf5537546489",
"assets/assets/home/banners/2.jpg": "57412cdf25349159348d63d491fc77e4",
"assets/assets/home/banners/3.jpg": "7191ab648f2a54973f4bde49dc35085a",
"assets/assets/home/banners/4.jpg": "76babd33bfb388ebd04ebab013b9c932",
"assets/assets/home/bottom_image.png": "eef39f3a509abb8d492f1bf885d26145",
"assets/assets/home/hero/1.jpg": "42eba8f9896080c8693be5709747ad1c",
"assets/assets/home/hero/2.jpg": "f1f175796d284ac8b0d2eda9094e7093",
"assets/assets/home/Heroimage%2520animation%2520example.mp4": "9245b13de40469833669dbd9ef8e68ef",
"assets/assets/home/reviews/0.jpg": "2748bb1f23f361864faba1a5a8eff828",
"assets/assets/home/reviews/1.jpg": "2748bb1f23f361864faba1a5a8eff828",
"assets/assets/home/reviews/10.jpg": "b113703e55d903aaaec70902fcee7ece",
"assets/assets/home/reviews/11.jpg": "db16e5f486537cd349ac96c2408deaf7",
"assets/assets/home/reviews/12.jpg": "6b264e6b9c0f11d80a9bd956acffa6d3",
"assets/assets/home/reviews/13.jpg": "91a311101179ee72a719ae66470bc470",
"assets/assets/home/reviews/14.jpg": "2daae8ae2961d6e0337b9bb6fde50315",
"assets/assets/home/reviews/15.jpg": "363d0b5c43caeee9df29681d0d95e7fd",
"assets/assets/home/reviews/16.jpg": "88616d9625a76c5cef082758418ea5d7",
"assets/assets/home/reviews/17.jpg": "dd1c0b2a58862023e2804b58f79709c2",
"assets/assets/home/reviews/18.jpg": "0bc8f6c28161af6ec3440d76c2dcce79",
"assets/assets/home/reviews/19.jpg": "f13d472045ce8e30b80b9eb324de0098",
"assets/assets/home/reviews/2.jpg": "61c50aa37a1c9bb75a252e0f9bce83bb",
"assets/assets/home/reviews/20.jpg": "f575c725702892378feb65324ddf725d",
"assets/assets/home/reviews/3.jpg": "93998c4d751fa79b8490220cbab7bb91",
"assets/assets/home/reviews/4.jpg": "0b0391435abf28a6bd73888ad8682002",
"assets/assets/home/reviews/5.jpg": "e75f073bfc89f077d80aa91f34d4fac8",
"assets/assets/home/reviews/6.jpg": "05d9342a2895233f147f3ebaaf6b2460",
"assets/assets/home/reviews/7.jpg": "79327c82673a5af16d254a77e9fe9459",
"assets/assets/home/reviews/8.jpg": "1474428cbd45182aeacb64b023829edb",
"assets/assets/home/reviews/9.jpg": "44b525f4674c3762492b9d410bc84067",
"assets/assets/logo/Color%2520Palette.pdf": "f868094927f3fd1232c8570978ca7ca2",
"assets/assets/logo/logo.png": "28a365b6ec40075313868843188c5abe",
"assets/assets/logo/logoL.png": "bb502ae29a97f8b01e4291c50da7613f",
"assets/FontManifest.json": "c3755e9490c3934c70fe7358cac159e6",
"assets/fonts/MaterialIcons-Regular.otf": "00667852da4f3322950a5acf08488bd4",
"assets/NOTICES": "b161aac0db19aec6ae7818717947ed1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d0090b24effd22dcaf542d94465ce800",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "14aca2bcf6f8097b1f209bb431791fbc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "8c1af3a5ec2a2913e711702276c227e2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "66b2ed576b92c291f3f8ddd9ee62b4bd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9f7b1758e17497447ca1e830e656aa4",
"/": "e9f7b1758e17497447ca1e830e656aa4",
"main.dart.js": "e415c6718e71d1a466bf4e93989f190e",
"manifest.json": "f69056783c17805a4d302e99d6a5604b",
"version.json": "ccb73ce08b88c301042bca20b5a07aa8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
