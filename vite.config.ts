// import { sentrySvelteKit } from '@sentry/sveltekit';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["svelte"],
    },
  },
});
