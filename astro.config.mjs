import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://elitgamaliel.com",
    integrations: [sitemap()]
});
