import { blog_post__estimate_read_minutes__new, type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { class_ } from 'ctx-core/html'
import { a_, div_, img_, span_ } from 'relementjs/html'
import { formatted_date_ } from '../date/index.js'
type blog_author_date_reading_time__div_props_T = {
	dehydrated_post_meta:dehydrated_post_meta_T
	blog_post__text?:string
	class?:string
	copy_class?:string
}
export function blog_author_date_reading_time__div_($p:blog_author_date_reading_time__div_props_T) {
	let { dehydrated_post_meta, blog_post__text, copy_class } = $p
	const { author_a1, pub_date } = dehydrated_post_meta
	const blog_post__estimate_read_minutes = blog_post__estimate_read_minutes__new(blog_post__text)
	return (
		div_({
			class: class_(
				'flex',
				'flex-row',
				'w-full',
				'text-base',
				$p.class),
		}, [
			author_a1[0].image && img_({
				src: author_a1[0].image,
				alt: author_a1[0].name,
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
					'inline-block',
					'grow',
					'flex-col',
					'ml-4',
					'text-skin-base',
					copy_class)
			}, [
				span_({ class: 'sr-only' }, `Author${author_a1.length ? 's' : ''}:`),
				author_a1.map((author, i)=>[
					i ? ' | ' : '',
					author.url
						? (author.a_target_blank ? tb_a_ : a_)({
							href: author.url,
							class: class_(
								'inline'
							),
						}, author.name)
						: author.name
				]),
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
							'text-skin-base',
							copy_class)
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
