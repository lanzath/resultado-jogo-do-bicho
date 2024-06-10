import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['react.svg'],
      manifest: {
        name: 'Jogo do Bicho - Resultado',
        short_name: 'Jogo do Bicho - Resultado',
        description: 'Visualizar resultado do jogo do bicho Deu no Poste',
        icons: [
          {
            src: '/android-chrome-dog-256x256.png',
            sizes: '256',
            type: 'image/png'
          },
          {
            src: '/android-chrome-dog-512x512.png',
            sizes: '512',
            type: 'image/png'
          },
          {
            src: '/android-chrome-dog-256x256.png',
            sizes: '256',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ],
        theme_color: '#171717',
        background_color: '#f3f3f3',
        scope: '/',
        display: 'standalone',
        start_url: '/',
        orientation: 'portrait'
      }
    }
    )],
})
