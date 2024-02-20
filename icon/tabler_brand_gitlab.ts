import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function tabler_brand_gitlab_($p?:{ class?:string }) {
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
			path_({ d: 'M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z' }),
		])
	)
}
