import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc'

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name: 'Jogo do Bicho - Resultado',
    short_name: 'Jogo do Bicho - Resultado',
    description: 'Visualizar resultado do jogo do bicho Deu no Poste',
    icons:[{
      src: './public/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'./public/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: './public/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: './public/maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn)
  ]
})
