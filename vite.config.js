import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        collaborate: resolve(__dirname, "src/collaborate/index.html"),
        favorite_spots: resolve(__dirname, "src/favorite-spots/index.html"),
        coffee_shops: resolve(__dirname, "src/categories/coffee-shops/index.html"),
        libraries: resolve(__dirname, "src/categories/libraries/index.html"),
        parks: resolve(__dirname, "src/categories/parks/index.html"),
        spot_details: resolve(__dirname, "src/detailed-view/index.html"),
        timer: resolve(__dirname, "src/timer/index.html")
      }
    }
  }
});