import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as fs from 'fs';

const frameworkConfig = JSON.parse(fs.readFileSync('./framework.json', 'utf-8'));

const environment = process.env.NODE_ENV || 'development';
const envConfig = frameworkConfig.environments[environment] || {};

export default defineConfig({
  root: frameworkConfig.project.root,
  build: {
    outDir: `../${frameworkConfig.project.outputPath}`,
    sourcemap: envConfig.sourcemap !== undefined ? envConfig.sourcemap : frameworkConfig.buildOptions.sourcemap,
    minify: envConfig.minify !== undefined ? (envConfig.minify ? 'terser' : false) : frameworkConfig.buildOptions.minify,
  },
  plugins: [
    checker({ typescript: true }),
    tsconfigPaths()
  ],
});
