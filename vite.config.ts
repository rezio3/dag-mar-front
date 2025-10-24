import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // <- to pozwala na dostęp z sieci lokalnej
    port: 5173, // <- możesz zmienić port, jeśli chcesz
  },
});
