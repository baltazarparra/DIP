import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://baltz.github.io',
  base: '/DIP',
  integrations: [tailwind()],
});
