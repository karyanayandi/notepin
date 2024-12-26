import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"

export default defineConfig({
  integrations: [tailwind(), svelte()],
  adapter: vercel(),
})
