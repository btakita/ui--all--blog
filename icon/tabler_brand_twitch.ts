import { path_, svg_ } from 'relementjs/svg'
export function tabler_brand_twitch_($p?:{ class?:string }) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			...$p,
		}, [
			path_({
				d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'
			})
		])
	)
}
