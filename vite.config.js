import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
});