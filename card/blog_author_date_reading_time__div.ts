import { blog_post__estimate_read_minutes__new, type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { class_ } from 'ctx-core/html'
import { div_, img_, span_ } from 'relementjs/html'
import { formatted_date_ } from '../date/index.js'
type blog_author_date_reading_time__div_props_T = {
	dehydrated_post_meta:dehydrated_post_meta_T
	blog_post__text?:string
	class?:string
}
export function blog_author_date_reading_time__div_($p:blog_author_date_reading_time__div_props_T) {
	let { dehydrated_post_meta, blog_post__text } = $p
	const { author, author_img_url, pub_date } = dehydrated_post_meta
	const blog_post__estimate_read_minutes = blog_post__estimate_read_minutes__new(blog_post__text)
	return (
		div_({
			class: class_(
				'flex',
				'flex-row',
				'w-full',
				'mb-6',
				'text-base',
				$p.class),
		}, [
			img_({
				src: author_img_url,
				alt: author,
				class: class_(
					'inline-block',
					'w-12',
					'h-12',
					'sm:w-12',
					'sm:h-12',
					'm-0',
					'rounded-full')
			}),
			div_({
				class: class_(
					'inline-flex',
					'flex-col',
					'ml-4',
					'text-skin-base')
			}, [
				span_({ class: 'sr-only' }, 'Author:'),
				author,
				div_([
					span_({ class: 'sr-only' }, 'Posted on:'),
					formatted_date_({ date: pub_date }),
				]),
			]),
			blog_post__estimate_read_minutes != null
				? [
					div_({
						class: class_(
							'ml-auto',
							'flex',
							'items-end',
							'text-skin-base')
					}, [
						blog_post__estimate_read_minutes,
						' minute',
						blog_post__estimate_read_minutes !== 1
							? 's'
							: ''
					])
				] : null,
		])
	)
}
