import { H_, Post, SearchItem } from '@btakita/domain--all--blog'
import { class_, style_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { slug } from 'github-slugger'
import type { VanShape } from 'van-type-delegate'
import { V_datetime } from '../date'
export function V_card<V extends VanShape>({
	ctx, href, post, show_heading, locale, ...$p
}:{
	ctx:Ctx
	class?:string
	href?:string
	post:Post|SearchItem
	show_heading?:boolean
	locale?:string
}) {
	const { data } = post
	const {
		title,
		pubDate,
		description
	} = data
	const h_props = {
		style: style_({
			'view-transition-name': slug(title)
		}),
		class: 'text-lg font-medium decoration-dashed hover:underline',
	}
	const H = H_<V>(ctx)
	return (
		H.li({ class: class_('Card my-6', $p.class) },
			H.a({
					href,
					class: 'inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0'
				},
				show_heading
					? H.h2({ ...h_props }, title)
					: H.h3({ ...h_props }, title)),
			V_datetime({ ctx, datetime: pubDate, locale }),
			H.p(description))
	)
}
