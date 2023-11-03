import { H_, S_ } from '@btakita/domain--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, VanShape } from 'van-type-delegate'
import { V_fragment } from '../van'
export function V_datetime<V extends VanShape>({
	ctx,
	datetime,
	locale,
	...$p
}:{
	ctx:Ctx
	datetime:string|Date
	locale?:string
	size?:'sm'|'lg'
	class?:string
}) {
	const size = $p.size || 'sm'
	const H = H_<V>(ctx)
	const S = S_<V>(ctx)
	return (
		H.div({ class: class_('flex items-center space-x-2', $p.class) },
			S.svg({
					xmlns: 'http://www.w3.org/2000/svg',
					class: class_(size === 'sm' ? 'scale-90' : 'scale-100', 'inline-block h-6 w-6 fill-skin-base'),
					'aria-hidden': true
				},
				S.path({ d: 'M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z' }),
				S.path(
					{ d: 'M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z' })),
			H.span({ class: 'sr-only' }, 'Posted on:'),
			H.span({ class: class_('italic', size === 'sm' ? 'text-sm' : 'text-base') },
				V_formatted_datetime<V>({ ctx, datetime, locale })))
	)
}
function V_formatted_datetime<V extends VanShape>({ ctx, datetime, ...$p }:{
	ctx:Ctx
	datetime:string|Date
	locale?:string
}) {
	const locale = $p.locale || 'en-EN'
	const myDatetime = new Date(datetime)
	const date = myDatetime.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	const time = myDatetime.toLocaleTimeString(locale, {
		hour: '2-digit',
		minute: '2-digit',
	})
	const H = H_<V>(ctx)
	return (
		V_fragment<V, ChildDom<V>>(
			{ ctx },
			date,
			H.span({ 'aria-hidden': true }, ' | '),
			H.span({ class: 'sr-only' }, ' at '),
			time)
	)
}
