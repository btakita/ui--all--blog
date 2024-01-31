import { class_ } from '@ctx-core/html'
import { is_server_ } from 'ctx-core/all'
import { fragment_, type relement_env_T } from 'relementjs'
import { div_, span_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
export function blog_datetime__div_<env_T extends relement_env_T>({
	datetime,
	locale,
	size,
	class: _class,
}:{
	datetime:string|Date
	locale?:Intl.LocalesArgument
	size?:'sm'|'lg'
	class?:string
}) {
	size ??= 'sm'
	return (
		div_<env_T>({
			class: class_(
				'flex',
				'items-center',
				'space-x-2',
				_class)
		}, [
			svg_({
				xmlns: 'http://www.w3.org/2000/svg',
				class: class_(
					size === 'sm' ? 'scale-90' : 'scale-100',
					'inline-block',
					'h-6',
					'w-6',
					'fill-skin-base'),
				'aria-hidden': true
			}, [
				path_({ d: 'M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z' }),
				path_(
					{ d: 'M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z' })
			]),
			span_({ class: 'sr-only' }, 'Posted on:'),
			span_({
				class: class_(
					'italic',
					size === 'sm' ? 'text-sm' : 'text-base')
			}, [
				formatted_datetime__fragment_({ datetime, locale })
			])
		])
	)
}
function formatted_datetime__fragment_<env_T extends relement_env_T>({
	datetime,
	locale
}:{
	datetime:string|Date
	locale?:Intl.LocalesArgument
}) {
	locale ??= 'en-EN'
	const _date = new Date(
		typeof datetime === 'string' && is_server_()
			? datetime.replace(/Z$/, '')
			: datetime)
	const date = _date.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	const time = _date.toLocaleTimeString(locale, {
		hour: '2-digit',
		minute: '2-digit',
	})
	return (
		fragment_<env_T>(
			date,
			span_({ 'aria-hidden': true }, ' | '),
			span_({ class: 'sr-only' }, ' at '),
			time))
}
