import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api/blogs": {
        target: "https://full-stack-blog-mern-stack.vercel.app/",
        changeOrigin: true,
        secure: false,
      },
      "/api/": {
        target: "https://full-stack-blog-mern-stack.vercel.app/api",
        changeOrigin: true,
        secure: false,
      },
      "/api/comments": {
        target: "https://full-stack-blog-mern-stack.vercel.app/api",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
