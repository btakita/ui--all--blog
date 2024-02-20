import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function tabler_brand_telegram_($p?:{ class?:string }) {
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
				d: 'M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4'
			}),
		])
	)
}
