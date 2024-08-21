import { defineConfig } from 'vite'
import path from "path"
import dts from 'vite-plugin-dts'
import alias from "../../alias.config"

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
      insertTypesEntry : true,
    }),
  ],
  resolve : {
    alias
  },
  build: {
    outDir : "dist",
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
})