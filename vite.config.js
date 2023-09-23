import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import RubyPlugin from "vite-plugin-ruby";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith("ion-"); // (return true)
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      $: fileURLToPath(
        // new URL("./node_modules/jquery/dist/jquery.min.js", import.meta.url)
        new URL("@/assets/js/jquery-1.11.1.min.js", import.meta.url)
      ),
    },
  },
});
