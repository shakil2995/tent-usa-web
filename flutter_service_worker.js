'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb186fbe7d92834f9945b333d75cfaa1",
"assets/AssetManifest.bin.json": "0614a148d1ceedec84bb744c9dfa83f6",
"assets/AssetManifest.json": "7a3564b9c5f39a739df7b04bca2c10e5",
"assets/assets/about/1.png": "9171bbba543ada75896f9f6dce387177",
"assets/assets/contact/1.jpg": "e91c0e6afe2abe37a714e37ffd80a91d",
"assets/assets/contact/1.png": "783a6ad6392b695f7f94f891f9ad629f",
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
"assets/assets/portfolio/1.jpg": "8d904feb3be40c6fa86f7f6f28d046eb",
"assets/assets/portfolio/10.jpg": "5ead67f355f6566bebf5157788e5837a",
"assets/assets/portfolio/11.jpg": "2ea3faf76389024d83e73705d77b0ab7",
"assets/assets/portfolio/12.jpg": "4acfbb4e765f5559b31815432218fd7e",
"assets/assets/portfolio/13.jpg": "b85a8a28bcb52b4388a9760d4d579d3c",
"assets/assets/portfolio/14.jpg": "84c32ed07eccac05b16f46c6a2bd1138",
"assets/assets/portfolio/15.jpg": "20b903ed40a160c9074f17a344f25570",
"assets/assets/portfolio/16.jpg": "83eddd57e4f7ad0b14edfd84b720f116",
"assets/assets/portfolio/17.jpg": "768fe09fc8805ad13fd2d83e1ed59bde",
"assets/assets/portfolio/18.jpg": "59fb70ec0f163ab269562a00835d0cf4",
"assets/assets/portfolio/19.jpg": "cf0b4ae5d3c7a53ebb9c5519f3c22150",
"assets/assets/portfolio/2.jpg": "06074a81062a993a55d707c4545b6354",
"assets/assets/portfolio/20.jpg": "963f95411037537b707919b4bdb5680a",
"assets/assets/portfolio/21.jpg": "15d75c44165986364b794440dbc4ace7",
"assets/assets/portfolio/22.jpg": "017ae404d04e3ec0b9edb8820b5bffb8",
"assets/assets/portfolio/23.jpg": "938f398a12c86aee109a70684819527e",
"assets/assets/portfolio/24.jpg": "1732357633f0e3b1338c964cbed63c7f",
"assets/assets/portfolio/25.jpg": "b7b03cbd145b944c49b7c5f709a5c9ae",
"assets/assets/portfolio/26.jpg": "fe0e3e06d9b2ba0d74dbafeeba9b5804",
"assets/assets/portfolio/27.jpg": "5c1ef0f03e1242439332c6ff2a4fc62a",
"assets/assets/portfolio/28.jpg": "1ebf5bf5f2ec21e421dc8eca96394cd9",
"assets/assets/portfolio/29.jpg": "f43280e6fdc74793afc52a0a4d85f02a",
"assets/assets/portfolio/3.jpg": "b1ba2ab4991d40addf81a0cd61aea5ff",
"assets/assets/portfolio/30.jpg": "ee30879bd0c113f3ea71212986259620",
"assets/assets/portfolio/31.jpg": "972dc6c66d05f293869c861291ee1749",
"assets/assets/portfolio/32.jpg": "ee9b4e761acc27626196f579f50d5c32",
"assets/assets/portfolio/33.jpg": "bda1f7e7a9df2630a61839cad02a3d0f",
"assets/assets/portfolio/34.jpg": "623e91eb35753696b0f59bef2ce4a217",
"assets/assets/portfolio/35.jpg": "8af351f529e2c02ea2d228bbbb9bd0b4",
"assets/assets/portfolio/36.jpg": "0221299e84ea2b2feae9fc6b3c9c0fd6",
"assets/assets/portfolio/37.jpg": "313351789b01f21928feaaa40daf6203",
"assets/assets/portfolio/38.jpg": "0242cc6ec7e30d1d9274caa30d9eabeb",
"assets/assets/portfolio/39.jpg": "5f7cdab5eee73d70d9d5af5a3e70f2bf",
"assets/assets/portfolio/4.jpg": "dd12eae184df126f6843306678c0da80",
"assets/assets/portfolio/40.jpg": "ced7eed9ecf6630cd22354677224af20",
"assets/assets/portfolio/41.jpg": "e762b4413bff50c23e6dc54aa40379bf",
"assets/assets/portfolio/42.jpg": "ce597a337fdc153233f502af15460120",
"assets/assets/portfolio/43.jpg": "9e90935720b12f759852ddc9e637c765",
"assets/assets/portfolio/44.jpg": "b3bae94662823ed7dd3fdede49a9c96e",
"assets/assets/portfolio/45.jpg": "3bf2bcc4105c66ab58fc73659b307a0a",
"assets/assets/portfolio/46.jpg": "9d25cb7cc407b0c8a170a6904f8e457c",
"assets/assets/portfolio/47.jpg": "53c7937b4a9b6d17a94c4860d748c218",
"assets/assets/portfolio/48.jpg": "09aa4acfba6b605dd7fe86f8564ca52e",
"assets/assets/portfolio/49.jpg": "d7f2d86b5118e0dd135807504673cad4",
"assets/assets/portfolio/5.jpg": "f9bba832fe37cfc1ba399b07e02460f7",
"assets/assets/portfolio/50.jpg": "e236b23ce2bb45273ee3e1fcb8f34d90",
"assets/assets/portfolio/51.jpg": "197907f269d1b02322a81905f2298f52",
"assets/assets/portfolio/52.jpg": "3f1da13910a22cbe7033e533aa2b2735",
"assets/assets/portfolio/53.jpg": "7e6f3906ae22e4ae6081b09222c73e47",
"assets/assets/portfolio/54.jpg": "3d9b0a095d8db78dac86d260da49f77a",
"assets/assets/portfolio/55.jpg": "70ff8bf201b3647a5c5e9fb05b0f33ff",
"assets/assets/portfolio/56.jpg": "28885c4a152e1253204336114b94acce",
"assets/assets/portfolio/57.jpg": "c651ceb07dcf9fb712ef0372344b24e0",
"assets/assets/portfolio/58.jpg": "7c87d681616861df06035c6c9456dee3",
"assets/assets/portfolio/59.jpg": "f28533e016345e4823026ff4045246d0",
"assets/assets/portfolio/6.jpg": "c4d94bd028c55298aa2cf7b4904e062a",
"assets/assets/portfolio/60.jpg": "04a2fb275336c29a41b561c8e2bb24ae",
"assets/assets/portfolio/61.jpg": "fdd39cd49ca8ca3117c09502921514cf",
"assets/assets/portfolio/62.jpg": "a5ca044e5e8d9b47b95e7c71628c32cb",
"assets/assets/portfolio/63.jpg": "3520e27ec5dd90702f88aa3cedc2cda3",
"assets/assets/portfolio/64.jpg": "d2b72c485487e9a0aa71980385442185",
"assets/assets/portfolio/65.jpg": "fcb482046f3f98bc10d833213598f37e",
"assets/assets/portfolio/66.jpg": "9f4eb7e6e4eff07310d5b2af2309606e",
"assets/assets/portfolio/67.jpg": "98021a5effbcadd69623217957e9a9b3",
"assets/assets/portfolio/68.jpg": "1ef143f6819d502879917182763f9b68",
"assets/assets/portfolio/69.jpg": "8ef8de01010a679115a4db1285d2ebe4",
"assets/assets/portfolio/7.jpg": "a8afac53c84e41ea158895b6a427470b",
"assets/assets/portfolio/70.jpg": "0703a0a0ed0c7e864aa308992ac87da8",
"assets/assets/portfolio/8.jpg": "bef48afa5b9524c325134f703f6166a1",
"assets/assets/portfolio/9.jpg": "1b58be8b3892b123007d35d4b5a25fa5",
"assets/FontManifest.json": "c3755e9490c3934c70fe7358cac159e6",
"assets/fonts/MaterialIcons-Regular.otf": "87a9484c4e110654773e7d85937cffc1",
"assets/logo.png": "28a365b6ec40075313868843188c5abe",
"assets/NOTICES": "3936094e0bc1ee68fedb4c25aa86558c",
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
"flutter_bootstrap.js": "152630903c32e673841824821af59c7c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4d2454fe415033cdec0bfbc08015c7d",
"/": "c4d2454fe415033cdec0bfbc08015c7d",
"main.dart.js": "727182b276d7ebd883b2f756f5d0d22e",
"main.dart.mjs": "b271525fb0530b863e1b61098e4212a7",
"main.dart.wasm": "63585b692feaf1d1af7c0ecb043384c6",
"main.dart.wasm.map": "6b15eb8d704ba7335c850d71a0d5936f",
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
