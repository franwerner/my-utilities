import { defineConfig } from 'vite'
import path from "path"
import dts from 'vite-plugin-dts'
import base from "../../vite.base.config"

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
      insertTypesEntry : true,
    }),
  ],
  build: {
    outDir : "dist",
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
  ...base
})