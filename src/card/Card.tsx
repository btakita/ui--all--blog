import { type Post, type SearchItem } from '@btakita/domain--all--blog'
import { class_, style_ } from '@ctx-core/html'
import { slug } from 'github-slugger'
import { Show, type VoidProps } from 'solid-js'
import { Datetime } from '../date'
export function Card(
	$p:VoidProps<{
		class?:string
		href?:string
		post:Post|SearchItem
		show_heading?:boolean
		locale?:string
	}>
) {
	const href = $p.href
	const post = $p.post
	const data = post.data
	const show_heading = $p.show_heading
	const title = data.title
	const pubDate = data.pubDate
	const description = data.description
	const h_props = {
		style: style_({
			'view-transition-name': slug(title)
		}),
		class: 'text-lg font-medium decoration-dashed hover:underline',
	}
	return (
		<li class={class_('Card my-6', $p.class)}>
			<a
				href={href}
				class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>
				<Show when={show_heading} fallback={<h3 {...h_props}>{title}</h3>}>
					<h2 {...h_props}>{title}</h2>
				</Show>
			</a>
			<Datetime datetime={pubDate} locale={$p.locale}/>
			<p>{description}</p>
		</li>
	)
}
