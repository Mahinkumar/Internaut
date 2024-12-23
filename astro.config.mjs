// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx(), tailwind()],
  adapter: cloudflare()
});