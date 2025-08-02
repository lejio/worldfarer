// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  env: {
    schema: {
      BETTER_AUTH_SECRET: envField.string({ context: "server", access: 'secret'}),
      BETTER_AUTH_URL: envField.string({ context: "server", access: 'public'}),
      MICROSOFT_CLIENT_ID: envField.string({ context: 'client', access: 'public'}),
      MICROSOFT_CLIENT_SECRET: envField.string({ context: 'server', access: 'secret'}),
      MONGODB_URI: envField.string({ context: 'server', access: 'secret'})
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],
  adapter: vercel()
});