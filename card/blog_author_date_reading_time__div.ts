import { blog_post__estimate_read_minutes__new, type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { site__author_, site__author_img_url_ } from '@rappstack/domain--server/site'
import { class_ } from 'ctx-core/html'
import { type wide_ctx_T } from 'relementjs'
import { div_, img_, span_ } from 'relementjs/html'
import { formatted_date_ } from '../date/index.js'
type blog_author_date_reading_time__div_props_T = {
	ctx:wide_ctx_T
	dehydrated_post_meta:dehydrated_post_meta_T
	blog_post__text?:string
	class?:string
}
export function blog_author_date_reading_time__div_($p:blog_author_date_reading_time__div_props_T) {
	let { ctx, dehydrated_post_meta, blog_post__text } = $p
	const author = dehydrated_post_meta?.author
	const pub_date = dehydrated_post_meta?.pub_date
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
				src: site__author_img_url_(ctx),
				alt: site__author_(ctx),
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
