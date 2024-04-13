import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { slug__new } from '@rappstack/domain--any--blog/slug'
import { class_, style_ } from 'ctx-core/html'
import { memo_, raw_, type relement_env_T, run_or_val_, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_, h2_, li_, p_ } from 'relementjs/html'
import { blog_author_date_reading_time__div_ } from './blog_author_date_reading_time__div.js'
type blog_card__li_props_T = {
	ctx:wide_ctx_T,
	class?:string|(()=>string)
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
	a_class?:string
	a_props?:Exclude<tag_props_T<HTMLAnchorElement>, 'class'>
	href?:string
	dehydrated_post_meta:dehydrated_post_meta_T
	locale?:Intl.LocalesArgument
	datetime_class?:string
	description_class?:string
}
export function blog_card__li_<env_T extends relement_env_T>($p:blog_card__li_props_T, ...children:tag_dom_T[]) {
	const {
		class: _class,
		li_props,
		a_class,
		a_props,
		href,
		dehydrated_post_meta,
		description_class,
	} = $p
	const {
		title,
		description,
		description_html,
	} = dehydrated_post_meta
	return (
		li_<env_T>({
			class: memo_(()=>
				class_(
					'blog_card__li',
					'my-6',
					'[&>ul]:list-disc',
					'[&>ul]:pl-4',
					run_or_val_(_class))),
			...li_props
		}, [
			a_({
				href,
				class: class_(
					'inline-block',
					'font-medium',
					'text-skin-accent',
					'decoration-dashed',
					'underline-offset-4',
					'focus-visible:no-underline',
					'focus-visible:underline-offset-0',
					'prose',
					a_class),
				...a_props
			}, [
				h2_({
					style: style_({
						'view-transition-name': slug__new(title)
					}),
					class: class_(
						'decoration-dashed',
						'hover:underline'),
				}, title)
			]),
			blog_author_date_reading_time__div_({
				dehydrated_post_meta,
				class: 'my-3',
				copy_class: 'italic'
			}),
			description_html
				? raw_(description_html)
				: p_({ class: description_class }, description),
			...children
		])
	)
}
