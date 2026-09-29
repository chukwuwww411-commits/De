import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
  define: {
    "import.meta.env.PAYPAL_CLIENT_ID": JSON.stringify(process.env.PAYPAL_CLIENT_ID || ""),
  },
});
