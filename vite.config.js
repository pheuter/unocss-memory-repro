import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import presetWebFonts from '@unocss/preset-web-fonts';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte],
			presets: [
				presetUno(),
				presetIcons(),
				presetWebFonts({
					provider: 'google',
					fonts: { sans: 'Inter:400,500,600' }
				})
			]
		}),
		sveltekit()
	]
};

export default config;
