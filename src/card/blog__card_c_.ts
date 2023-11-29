import { type Post, type SearchItem } from '@btakita/domain--any--blog'
import { class_, style_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { slug } from 'github-slugger'
import { type Node_T, type relement_env_T } from 'relementjs'
import { a_, h2_, h3_, li_, p_ } from 'relementjs/html'
import { blog__datetime_c_ } from '../date/index.js'
export function blog__card_c_<env_T extends relement_env_T>({
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
	return (
		li_({ class: class_('Card my-6', $p.class) },
			a_({
					href,
					class: 'inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0'
				},
				show_heading
					? h2_({ ...h_props }, title)
					: h3_({ ...h_props }, title)),
			blog__datetime_c_<env_T>({ ctx, datetime: pubDate, locale }),
			p_(description))
	) as Node_T<env_T, HTMLElementTagNameMap['li']>
}
