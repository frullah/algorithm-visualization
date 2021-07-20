import preprocess from 'svelte-preprocess';
import VitePluginWindicss from 'vite-plugin-windicss';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		vite: {
			plugins: [
				VitePluginWindicss.default()
			],
			resolve: {
				alias: {
					"~": path.resolve("src")
				}
			}
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
