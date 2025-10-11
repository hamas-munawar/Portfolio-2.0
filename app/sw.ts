import { Serwist } from "serwist";

import { defaultCache } from "@serwist/next/worker";

import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
// Define the global Service Worker scope for Serwist
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: WorkerGlobalScope;

const serwist = new Serwist({
  // Serwist injects the list of files to precache here during the build
  precacheEntries: self.__SW_MANIFEST,

  // Cache strategy for runtime requests (images, API calls)
  runtimeCaching: defaultCache,

  // Service Worker control options
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
});

serwist.addEventListeners();
