import { circle_, line_, path_, rect_, svg_ } from 'relementjs/svg'
export function tabler_brand_instagram_($p?:{ class?:string }) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			...$p,
		}, [
			path_({ stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }),
			rect_({ x: 4, y: 4, width: 16, height: 16, rx: 4 }),
			circle_({ cx: 12, cy: 12, r: 3 }),
			line_({ x1: 16.5, y1: 7.5, x2: 16.5, y2: 7.501 })
		])
	)
}
