import react from "@vitejs/plugin-react"

import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    define: {
      __APP_ENV__: env.APP_ENV,
      "process.env": {},
    },

    // rest of Vite config
    plugins: [react()],
  }
})
