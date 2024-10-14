export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			api: process.env.NUXT_PUBLIC_API_HOST,
		}
	},

	css: ['@/assets/styles/index.scss'],

	modules: [
		'@vueuse/nuxt',
		'@pinia/nuxt',
	],

	nitro: {
		devProxy: {
			'/element': {
				target: process.env.NUXT_PUBLIC_ELEMENT_HOST,
				changeOrigin: true
			},
		}
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/styles/base/_variables.scss";  @import "@/assets/styles/base/_mixins.scss";`,
					silenceDeprecations: ['legacy-js-api'],
				},
			},
		},
	},
})