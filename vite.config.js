import { defineConfig } from "vite";
import { resolve } from "path"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        collaborate: resolve(__dirname, "src/collaborate/index.html"),
        favorite_spots: resolve(__dirname, "src/favorite-spots/index.html")
      }
    }
  }
})