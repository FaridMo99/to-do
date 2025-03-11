import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/to-do/",

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
