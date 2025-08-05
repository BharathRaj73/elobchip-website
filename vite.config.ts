import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./", // ✅ Keeps assets relative, good for most hosts

  plugins: [react()], // ✅ Remove `lovable-tagger` unless needed

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
