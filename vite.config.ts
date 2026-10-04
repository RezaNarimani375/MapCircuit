import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import dyadComponentTagger from '@dyad-sh/react-vite-component-tagger'

export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    dyadComponentTagger(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.svg',
        'icons/apple-touch-icon.png',
      ],

      manifest: {
        name: 'MapCircuit',
        short_name: 'MapCircuit',

        description:
          'MapCircuit - نرم‌افزار تخصصی ECU و مدارهای الکترونیکی خودرو',

        start_url: '/',
        scope: '/',

        display: 'standalone',
        orientation: 'portrait',

        theme_color: '#000000',
        background_color: '#000000',

        lang: 'fa',
        dir: 'rtl',

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',

              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
})
