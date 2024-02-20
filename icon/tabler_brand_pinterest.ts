import { class_ } from 'ctx-core/html'
import { circle_, line_, path_, svg_ } from 'relementjs/svg'
export function tabler_brand_pinterest_($p?:{ class?:string }) {
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
			line_({ x1: 8, y1: 20, x2: 12, y2: 11 }),
			path_({
				d: 'M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7'
			}),
			circle_({ cx: 12, cy: 12, r: 9 })
		])
	)
}
