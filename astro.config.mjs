import { defineConfig } from 'astro/config';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://isaacpollack.dev',
  output: "server",
  adapter: netlify(),
  integrations: [mdx(), sitemap()]
});