import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
type props_T = { class?:string }
export function cruip_facebook_($p?:props_T) {
	return svg_({
		class: class_(
			'fill-current',
			$p?.class,),
		viewBox: '0 0 32 32',
		xmlns: 'http://www.w3.org/2000/svg'
	}, [
		path_(
			{ d: 'M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' })
	])
}
