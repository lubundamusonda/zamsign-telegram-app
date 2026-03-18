import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert';
import localtunnel from 'vite-plugin-localtunnel';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    process.env.HTTPS && mkcert(),
  ],
  build: {
    target: 'esnext',
    minify: 'terser'
  },
  server: process.env.REMOTE ? {
    host: 'zamsign.com',
    https: {
      cert: readFileSync(resolve('.perms/zamsign.com+2.pem')), // <-- YOUR CERT
      key: readFileSync(resolve('.perms/zamsign.com+2-key.pem')), //  <-- YOUR KEY
    },
    port: 443
  } : {
    host: true,
    port: 3000
  },
})

export default config
