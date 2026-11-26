/* Diét'Académie — service worker (fonctionnement hors ligne)
   À chaque mise à jour, on change VERSION pour rafraîchir le cache. */
var VERSION = 'dietacademie-2026-11-26f';
var COQUILLE = ['./', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest', 'icone.svg', 'icone-192.png', 'icone-512.png', 'catalogue.json', 'nunito-latin-500-normal.woff2', 'nunito-latin-600-normal.woff2', 'nunito-latin-700-normal.woff2', 'nunito-latin-800-normal.woff2', 'nunito-latin-900-normal.woff2'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (cache) {
    return cache.addAll(COQUILLE).then(function () {
      // On met aussi en cache tous les cours disponibles, pour réviser hors ligne
      return fetch('catalogue.json').then(function (r) { return r.json(); }).then(function (cat) {
        var fichiers = [];
        cat.univers.forEach(function (u) { u.matieres.forEach(function (m) { m.sections.forEach(function (s) { s.cours.forEach(function (c) { if (c.fichier) fichiers.push(c.fichier); }); }); }); });
        return cache.addAll(fichiers);
      }).catch(function () {});
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Réseau d'abord (pour avoir les nouveaux cours), cache si pas de réseau ou réseau trop lent */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(new Promise(function (repondre) {
    var fini = false;
    function depuisCache() { return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); }); }
    var minuteur = setTimeout(function () { depuisCache().then(function (r) { if (r && !fini) { fini = true; repondre(r); } }); }, 3000);
    fetch(e.request).then(function (r) {
      if (r && r.ok) { var copie = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copie); }); }
      if (!fini) { fini = true; clearTimeout(minuteur); repondre(r); }
    }).catch(function () {
      clearTimeout(minuteur);
      if (!fini) depuisCache().then(function (r) { fini = true; repondre(r || Response.error()); });
    });
  }));
});
