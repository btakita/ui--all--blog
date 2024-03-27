import { post_date_ } from '@rappstack/domain--any--blog/post'
import { class_ } from 'ctx-core/html'
import { fragment_, type nullish, type relement_env_T } from 'relementjs'
import { div_, span_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
type blog_datetime__div_T = {
	datetime:string|Date|nullish
	locale?:Intl.LocalesArgument
	size?:'sm'|'lg'
	class?:string
}
export function blog_datetime__div_<env_T extends relement_env_T>($p:blog_datetime__div_T) {
	let {
		datetime,
		locale,
		size,
		class: _class,
	} = $p
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
				path_({
					d: 'M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z'
				})
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
type formatted_datetime__fragment_props_T = {
	datetime:string|Date|nullish
	locale?:Intl.LocalesArgument
}
export function formatted_datetime__fragment_<env_T extends relement_env_T>($p:formatted_datetime__fragment_props_T) {
	let {
		datetime,
		locale,
	} = $p
	if (!datetime) return '—'
	locale ??= 'en-EN'
	const _date = post_date_(datetime)
	const date = formatted_date_({ date: _date, locale })
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
type formatted_date_props_T = {
	date:string|Date|nullish
	locale?:Intl.LocalesArgument
}
export function formatted_date_($p:formatted_date_props_T) {
	let { date, locale } = $p
	if (!date) return '—'
	const post_date = post_date_(date)
	return post_date.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}
