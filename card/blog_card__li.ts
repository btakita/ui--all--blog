import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog'
import { class_, style_ } from 'ctx-core/html'
import { slug } from 'github-slugger'
import { memo_, type relement_env_T, run_or_val_ } from 'relementjs'
import { a_, h2_, h3_, li_, p_ } from 'relementjs/html'
import { blog_datetime__div_ } from '../date/index.js'
export function blog_card__li_<env_T extends relement_env_T>({
	class: _class,
	href,
	dehydrated_post_meta,
	show_heading,
	locale,
}:{
	class?:string|(()=>string)
	href?:string
	dehydrated_post_meta:dehydrated_post_meta_T
	show_heading?:boolean
	locale?:Intl.LocalesArgument
}) {
	const {
		title,
		pub_date,
		description
	} = dehydrated_post_meta
	const h_props = {
		style: style_({
			'view-transition-name': slug(title)
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
					run_or_val_(_class)))
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
			}, description)
		])
	)
}
