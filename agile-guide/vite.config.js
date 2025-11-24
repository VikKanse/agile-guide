import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.VITE_APP_DEPLOY_ENV === 'github';
const basePath = isGitHubPages ? './' : '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite sets the BASE_URL environment variable from this value.
  base: basePath,
});
