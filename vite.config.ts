import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve('src') }],
	},
	build: {
		// Does vite actually use rollup for prod 🤔
		rollupOptions: {
			plugins: [
				alias({
					entries: [
						{ find: '@', replacement: path.resolve('src') }
					]
				})
			]
		}
	}
})
