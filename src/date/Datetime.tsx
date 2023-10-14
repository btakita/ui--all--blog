import { class_ } from '@ctx-core/html'
import { createMemo, type VoidProps } from 'solid-js'
export function Datetime(
	$p:VoidProps<{
		datetime:string|Date
		locale?:string
		size?:'sm'|'lg'
		class?:string
	}>
) {
	const size = $p.size || 'sm'
	return (
		<div class={class_('flex items-center space-x-2 opacity-80', $p.class)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class={`${
					size === 'sm' ? 'scale-90' : 'scale-100'
				} inline-block h-6 w-6 fill-skin-base`}
				aria-hidden="true"
			>
				<path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
				<path
					d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
			</svg>
			<span class="sr-only">Posted on:</span>
			<span class={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
				<FormattedDatetime datetime={$p.datetime} locale={$p.locale}/>
			</span>
		</div>
	)
}
function FormattedDatetime($p:VoidProps<{
	datetime:string|Date
	locale?:string
}>) {
	const datetime = $p.datetime
	const locale_ = createMemo(()=>
		$p.locale ?? 'en-EN')
	const myDatetime = new Date(datetime)
	const date = myDatetime.toLocaleDateString(locale_(), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	const time = myDatetime.toLocaleTimeString(locale_(), {
		hour: '2-digit',
		minute: '2-digit',
	})
	return (
		<>
			{date}
			<span aria-hidden="true"> | </span>
			<span class="sr-only">&nbsp;at&nbsp;</span>
			{time}
		</>
	)
}
