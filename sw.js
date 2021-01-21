const CACHE_NAME = "V1_cache_contador_app";
const urlsToCache = [
    "./",
    "./img/iconfinder_calculator_1055102.png",
    "./img/calcutor32.png",
    "./img/calcutor64.png",
    "./img/calcutor128.png",
    "./img/calcutor256.png",
    "./img/calcutor512.png",
    "./img/calcutor1024.png",
    "./js/main.js",
    "./js/mount.js",
    "./css/normalize.css",
    ".css/style.css",
    "https://unpkg.com/vue@next"
]

self.addEventListener("install",(e) =>{
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => 
        cache.addAll(urlsToCache).then(
            () => self.skipWaiting()
            ).catch(
                (error) => console.log(error)
            )
        )
    );
});

self.addEventListener("activate", e => {
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(
                   cacheNames.map((cacheName) => {
                           if(cacheWhitelist.indexOf(cacheName)== -1){
                               return caches.delete(cacheName);
                           }
                       }) 
                );
            })
            .then(() => self.clients.claim())
    );
});


self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((res) => {
                if(res){
                    return res;
                }
                return fetch(e.request);
        })
    );
});