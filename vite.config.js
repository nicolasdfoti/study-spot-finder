import { defineConfig } from "vite";
import { resolve } from "path"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        collaborate: resolve(__dirname, "src/collaborate/index.html"),
        favorite_spots: resolve(__dirname, "src/favorite-spots/index.html"),
        coffee_shops: resolve(__dirname, "src/coffee-shops.html"),
        libraries: resolve(__dirname, "src/libraries.html"),
        parks: resolve(__dirname, "src/parks.html")
      }
    }
  }
});