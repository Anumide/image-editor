// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        title: 'Image Editor',
        htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		]
    },
	css: ['/src/assets/styles/main.scss'],
	alias: {
		'@': '/src'
	},
	components: [
		'./src/components',
		{ path: '@/components', extensions: ['vue'] }
	],
	dir: {
		layouts: './src/layouts',
		pages: './src/pages'
	},
	modules: ['nuxt-icon']
})
