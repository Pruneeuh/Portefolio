import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // REMPLACEZ 'mon-eportfolio' par le nom exact de votre dépôt GitHub !
  base: '/Portefolio/',
})