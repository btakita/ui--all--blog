import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function tabler_brand_tiktok_($p?:{ class?:string }) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			class: class_(
				'icon-tabler',
				$p?.class),
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round'
		}, [
			path_({ stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }),
			path_({
				d: 'M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5'
			}),
		])
	)
}
