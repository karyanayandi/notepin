import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"

export default defineConfig({
  output: "server",
  integrations: [tailwind(), svelte()],
  adapter: vercel(),
})
