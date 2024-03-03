import { path_, polyline_, rect_, svg_ } from 'relementjs/svg'
export function tabler_mail_($p?:{ class?:string }) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			...$p,
		}, [
			path_({ stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }),
			rect_({ x: 3, y: 5, width: 18, height: 14, rx: 2 }),
			polyline_({ points: '3 7 12 13 21 7' })
		])
	)
}
