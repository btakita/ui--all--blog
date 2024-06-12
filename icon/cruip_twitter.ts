import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
type props_T = { class?:string }
export function cruip_twitter_($p?:props_T) {
	return svg_({
		class: class_(
			'fill-current',
			$p?.class,),
		viewBox: '0 0 32 32',
		xmlns: 'http://www.w3.org/2000/svg'
	}, [
		path_(
			{ d: 'm13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z' })
	])
}
