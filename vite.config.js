import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vite's default port. Deliberately not 5502 - that is VS Code Live
  // Server's port, and Live Server cannot compile JSX.
  server: { port: 5173, open: true },
});
