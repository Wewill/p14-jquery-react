import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         react: ["react", "react-dom"],
  //         tanstack: ["@tanstack/react-table"],
  //       },
  //     },
  //   },
  // },
});
