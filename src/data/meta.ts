import bannerImage from '/icons/rigear-logo.svg'
import keyboardsImage from '/products/keyboards/cow-full.webp'
import keycapsImage from '/products/keycaps/cap2.webp'
import deskmatsImage from '/products/deskmats/grrr-full.webp'
import { meta, metaContainer } from './meta-types.ts'

export const landingPageMeta: meta = {
	title: 'Regear tech store',
	description:
		'We sell custom mechanical keyboards, keycaps and deskmats for your gaming and office setup, right in the heart of Berlin.',
	image: bannerImage,
}

export const categoryPageMeta: metaContainer = {
	keyboards: {
		title: 'All Mechanical Keyboards | Regear tech store',
		description:
			'Explore our selection of high quality mechanical keyboards that will elevate your typing experience.',
		image: keyboardsImage,
	},
	keycaps: {
		title: 'All Custom Keycaps | Regear tech store',
		description:
			'Enjoy typing with style and upgrade your custom mechanical keyboard with our elegant keycaps',
		image: keycapsImage,
	},
	deskmats: {
		title: 'All Deskmats | Regear tech store',
		description:
			'Make yourself comfortable in your work or gaming setup with one of our Regear tech store deskmats. Soft and stylish!',
		image: deskmatsImage,
	},
}

export const checkoutPageMeta: meta = {
	title: 'Checkout',
	description: 'Complete your purchase.',
	image: bannerImage,
}

export const fofPageMeta: meta = {
	title: '404: Page not found.',
	description: '404: Page not found.',
	image: bannerImage,
}
