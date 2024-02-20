import { class_ } from 'ctx-core/html'
import { line_, path_, rect_, svg_ } from 'relementjs/svg'
export function tabler_brand_linkedin_($p?:{ class?:string }) {
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
			rect_({ x: 4, y: 4, width: 16, height: 16, rx: 2 }),
			line_({ x1: 8, y1: 11, x2: 8, y2: 16 }),
			line_({ x1: 8, y1: 8, x2: 8, y2: 8.01 }),
			line_({ x1: 12, y1: 16, x2: 12, y2: 11 }),
			path_({ d: 'M16 16v-3a2 2 0 0 0 -4 0' })
		])
	)
}
