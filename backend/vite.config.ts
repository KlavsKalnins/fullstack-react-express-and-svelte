import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginNode } from 'vite-plugin-node';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: { // (https://vitejs.dev/config/#server-host)
    // port: 3001,
    open: '/users'
  },
  build: {
    ssr: './src/index.ts',
    outDir: './dist',
    emptyOutDir: true
  },
  plugins: [react(),
    ...VitePluginNode({
      // adapters 'express', 'nest', 'koa' and 'fastify'
      adapter: 'express', 
      appPath: './src/index.ts',

      // Optional, default: 'viteNodeApp' 
      // the name of named export of you app from the appPath file
      exportName: 'viteNodeApp',

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      tsCompiler: 'esbuild',
    })
  ],
})
