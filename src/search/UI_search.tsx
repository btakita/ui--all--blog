/// <reference lib="dom" />
import { blog__ctx__new, post__path__new, type SearchItem, type SearchResult } from '@btakita/domain--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import Fuse from 'fuse.js'
import { createEffect, createMemo, createSignal, For, Show, type VoidProps } from 'solid-js'
import { Card } from '../card'
import './UI_search.css'
export function UI_search($p:VoidProps<{
	ctx?:Ctx
	search_item_a:SearchItem[]
}>) {
	const ctx = $p.ctx || ctx__Context__use() || blog__ctx__new()
	const search_item_a = $p.search_item_a
	const [input_, input__set] = createSignal<HTMLInputElement>()
	const [input__value_, input__value__set] = createSignal('')
	const [search_result_a_, search_result_a___set] = createSignal<SearchResult[]>(
		[])
	const [highlight__idx_, highlight__idx__set] = createSignal(0)
	const fuse_ = createMemo(()=>
		new Fuse(search_item_a, {
			keys: ['title', 'description'],
			includeMatches: true,
			minMatchCharLength: 2,
			threshold: 0.5,
		}))
	createEffect(()=>{
		// if URL has search query,
		// insert that search query in input field
		const search_url = new URLSearchParams(window.location.search)
		const search_str = search_url.get('q')
		if (search_str) input__value__set(search_str)
		// put focus cursor at the end of the string
		setTimeout(function() {
			input_()!.selectionStart = input_()!.selectionEnd =
				search_str?.length || 0
		}, 50)
	}, [])
	createEffect(()=>{
		// Add search result only if
		// input value is more than one character
		let search_result_a =
			input__value_().length > 1
				? fuse_().search(input__value_())
				: []
		search_result_a___set(search_result_a)
		// Update search string in URL
		if (input__value_().length > 0) {
			const searchParams = new URLSearchParams(window.location.search)
			searchParams.set('q', input__value_())
			const newRelativePathQuery =
				window.location.pathname + '?' + searchParams.toString()
			history.replaceState(history.state, '', newRelativePathQuery)
		}
		else {
			history.replaceState(history.state, '', window.location.pathname)
		}
	}, [input__value_()])
	return (
		<ctx__Context.Provider value={ctx}>
			<div class="UI_search">
				<label class="relative block">
					<span class="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
						<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path
								d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
						</svg>
					</span>
					<input
						class="block w-full rounded border border-skin-fill
						border-opacity-40 bg-skin-fill py-3 pl-10
						pr-3 placeholder:italic placeholder:text-opacity-75
						focus:border-skin-accent focus:outline-none"
						placeholder="Search for anything…"
						type="text"
						name="search"
						value={input__value_()}
						onkeydown={input__onkeydown}
						onkeyup={input__onkeyup}
						autocomplete="off"
						autofocus={true}
						ref={$=>input__set($)}
					/>
				</label>
				<Show when={input__value_().length > 1}>
					<div class="mt-8">
						Found {search_result_a_().length}
						<Show
							when={search_result_a_().length && search_result_a_().length === 1}
							fallback={' results'}
						>
							{' '}resultu
						</Show>{' '}
						for '{input__value_()}'
					</div>
				</Show>
				<ul>
					<For each={search_result_a_()}>{(search_result, idx_)=>{
						const item = search_result.item
						return (
							<Card
								href={post__path__new(item)}
								class={class_(idx_() === highlight__idx_() ? 'highlight' : null)}
								post={item}
							/>
						)
					}}
					</For>
				</ul>
			</div>
		</ctx__Context.Provider>
	)
	function input__onkeydown(e:KeyboardEvent&{ currentTarget:HTMLInputElement }) {
		switch (true) {
			case e.key === 'ArrowUp':
				e.preventDefault()
				highlight__idx__set(
					(highlight__idx_() + 1) % search_result_a_().length)
				break
			case e.key === 'ArrowDown':
				e.preventDefault()
				highlight__idx__set(
					(highlight__idx_() + search_result_a_().length - 1) % search_result_a_().length)
				break
			case e.key === 'Enter':
				e.preventDefault()
				window.location.href = post__path__new(search_result_a_()[highlight__idx_()].item)
				break
		}
	}
	function input__onkeyup(e:KeyboardEvent&{ currentTarget:HTMLInputElement }) {
		input__value__set(e.currentTarget.value)
	}
}
