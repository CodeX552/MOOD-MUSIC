import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MOOD-MUSIC/", // 👈 repo name goes here
});
