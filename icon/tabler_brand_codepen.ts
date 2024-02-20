import { class_ } from 'ctx-core/html'
import { line_, path_, svg_ } from 'relementjs/svg'
export function tabler_brand_codepen_($p?:{ class?:string }) {
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
			path_({ d: 'M3 15l9 6l9 -6l-9 -6l-9 6' }),
			path_({ d: 'M3 9l9 6l9 -6l-9 -6l-9 6' }),
			line_({ x1: 3, y1: 9, x2: 3, y2: 15 }),
			line_({ x1: 21, y1: 9, x2: 21, y2: 15 }),
			line_({ x1: 12, y1: 3, x2: 12, y2: 9 }),
			line_({ x1: 12, y1: 15, x2: 12, y2: 21 }),
		])
	)
}
