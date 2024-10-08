import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    preact(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
});
