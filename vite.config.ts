import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import dyadComponentTagger from '@dyad-sh/react-vite-component-tagger'

// GitHub Pages repository name is /MapCircuit/
const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.VITE_BASE_URL || (isProd ? '/MapCircuit/' : '/')

export default defineConfig({
  base: basePath,
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

        start_url: basePath,
        scope: basePath,

        display: 'standalone',
        orientation: 'portrait',

        theme_color: '#000000',
        background_color: '#000000',

        lang: 'fa',
        dir: 'rtl',

        icons: [
          {
            src: `${basePath}icons/icon-192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `${basePath}icons/icon-512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: `${basePath}icons/icon-512.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: `${basePath}index.html`,
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
