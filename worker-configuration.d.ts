/// <reference types="vite/client" />

declare module '@cloudflare/workers-types' {
  interface Env {}
}

declare const self: ServiceWorkerGlobalScope;
export {};
