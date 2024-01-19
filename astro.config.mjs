import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ivan-herrera-pro.github.io',
  base: '/news-app',
  output: 'server',
  adapter: vercel(),
});
