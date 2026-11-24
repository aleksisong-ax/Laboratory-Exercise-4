import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Allow Vite to serve the app through the hosted preview URL.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
