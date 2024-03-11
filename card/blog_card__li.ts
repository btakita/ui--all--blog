import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { slug__new } from '@rappstack/domain--any--blog/slug'
import { class_, style_ } from 'ctx-core/html'
import { memo_, type relement_env_T, run_or_val_, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_, h2_, h3_, li_, p_ } from 'relementjs/html'
import { blog_datetime__div_ } from '../date/index.js'
export function blog_card__li_<env_T extends relement_env_T>({
	ctx,
	class: _class,
	li_props,
	href,
	dehydrated_post_meta,
	show_heading,
	locale,
}:{
	ctx:wide_ctx_T,
	class?:string|(()=>string)
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
	href?:string
	dehydrated_post_meta:dehydrated_post_meta_T
	show_heading?:boolean
	locale?:Intl.LocalesArgument
}, ...children:tag_dom_T[]) {
	const {
		title,
		pub_date,
		description
	} = dehydrated_post_meta
	const h_props = {
		style: style_({
			'view-transition-name': slug__new(title)
		}),
		class: class_(
			'text-lg',
			'font-medium',
			'decoration-dashed',
			'hover:underline'),
	}
	return (
		li_<env_T>({
			class: memo_(()=>
				class_(
					'Card',
					'my-6',
					run_or_val_(_class))),
			...li_props
		}, [
			a_({
				href,
				class: class_(
					'inline-block',
					'text-lg',
					'font-medium',
					'text-skin-accent',
					'decoration-dashed',
					'underline-offset-4',
					'focus-visible:no-underline',
					'focus-visible:underline-offset-0')
			}, [
				show_heading
					? h2_({ ...h_props }, title)
					: h3_({ ...h_props }, title)
			]),
			blog_datetime__div_<env_T>({
				datetime: pub_date,
				locale
			}), p_({
				class: class_('py-2')
			}, description),
			...children
		])
	)
}
