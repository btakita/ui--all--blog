import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function tabler_brand_snapchat_($p?:{ class?:string }) {
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
				d: 'M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118'
			}),
		])
	)
}
