/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("./workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "./workbox-v4.3.1"});

importScripts(
  "./precache-manifest.801e84b30fe3d236ef1916e9cddd36ed.js"
);

workbox.core.setCacheNameDetails({prefix: "supngin"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(?:)/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/\/static/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
