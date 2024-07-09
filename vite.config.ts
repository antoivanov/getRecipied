import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        /**
         * Т.к. изначально у нас многостраничное приложение, надо отдельно указать сборщику, что у нас много
         * html документов и все они должны попасть в сборку, иначе переходить будет не куда.
         * Сейчас, если запустить компанду build через package.json, появится каталог dist в котором и будут
         * находиться в т.ч. html документы. Если сейчас убрать из объекта строки about/profile/recipes - в сборку они
         * не попадут и при хостинге проекта на сервере эти страницы будут недоступны.
         */ 
        
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        profile: resolve(__dirname, 'profile.html'),
        recipes: resolve(__dirname, 'recipes.html'),
      },
    },
  },
})
