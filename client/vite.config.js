import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api/blogs": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/api/": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/api/comments": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
