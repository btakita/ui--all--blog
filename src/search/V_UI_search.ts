/// <reference lib="dom" />
import { H_, post__path__new, S_, type SearchItem, SearchResult, van_ } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import Fuse from 'fuse.js'
import type { ChildDom, CoreVan } from 'van-type-delegate'
import vanx from 'vanjs-ext'
import { V_card } from '../card'
export function V_UI_search<V extends CoreVan>(
	{ ctx, search_item_a }:{ ctx:Ctx, search_item_a:SearchItem[] }
):ChildDom<V> {
	const van = van_(ctx)
	const input$ = van.state<HTMLInputElement|undefined>(undefined)
	const input__value$ = van.state('')
	const search_result_a$ = van.state<SearchResult[]>([])
	const search_result_a__length$ = van.derive(()=>
		search_result_a$.val.length)
	const highlight__idx$ = van.state(0)
	const fuse$ = van.derive(()=>
		new Fuse(search_item_a, {
			keys: ['title', 'description'],
			includeMatches: true,
			minMatchCharLength: 2,
			threshold: 0.5,
		}))
	van.derive(()=>{
		// if URL has search query,
		// insert that search query in input field
		const search_url = new URLSearchParams(window.location.search)
		const search_str = search_url.get('q')
		if (search_str) input__value$.val = search_str
		// put focus cursor at the end of the string
		setTimeout(function() {
			input$.val!.selectionStart = input$.val!.selectionEnd =
				search_str?.length || 0
		}, 50)
	})
	van.derive(()=>{
		// Add search result only if
		// input value is more than one character
		console.debug('search|debug|1', {
			input__value: input__value$.val,
		})
		let search_result_a =
			input__value$.val.length > 1
				? fuse$.val.search(input__value$.val)
				: []
		search_result_a$.val = search_result_a
		console.debug('search|debug|2', {
			search_result_a: search_result_a,
		})
		// Update search string in URL
		if (input__value$.val.length > 0) {
			const searchParams = new URLSearchParams(window.location.search)
			searchParams.set('q', input__value$.val)
			const newRelativePathQuery =
				window.location.pathname + '?' + searchParams.toString()
			history.replaceState(history.state, '', newRelativePathQuery)
		}
		else {
			history.replaceState(history.state, '', window.location.pathname)
		}
	})
	const H = H_(ctx)
	const S = S_(ctx)
	return (
		H.div({ class: 'UI_search' },
			H.label({ class: 'relative block' },
				H.span({ class: 'absolute inset-y-0 left-0 flex items-center pl-2 opacity-75' },
					S.svg({
							xmlns: 'http://www.w3.org/2000/svg',
							'aria-hidden': true
						},
						S.path({
							d: 'M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'
						}))),
				input_()),
			input__value$.val.length > 1
				? H.div({ class: 'mt-8' },
					`Found `,
					search_result_a__length$,
					` result`,
					()=>search_result_a__length$.val === 1 ? '' : 's',
					` for `,
					input__value$.val)
				: undefined,
			H.ul(
				search_result_a$.val.map((search_result, idx)=>{
					const item = search_result.item
					return (
						V_card({
							ctx,
							href: post__path__new(item),
							class: idx === highlight__idx$.val ? 'highlight' : '',
							post: item
						}))
				})))) as ChildDom<V>
	function input_() {
		const input =
			H.input({
				class:
					'block w-full rounded border border-skin-fill border-opacity-40 bg-skin-fill py-3 pl-10 pr-3' +
					' placeholder:italic placeholder:text-opacity-75 focus:border-skin-accent focus:outline-none',
				placeholder: 'Search for anything…',
				type: 'text',
				name: 'search',
				value: input__value$,
				onkeydown: input__onkeydown,
				onkeyup: input__onkeyup,
				autocomplete: 'off',
				autofocus: true,
			}) as HTMLInputElement
		input$.val = input
		return input
	}
	function input__onkeydown(e:KeyboardEvent&{ currentTarget:HTMLInputElement }) {
		console.debug('input__onkeydown|debug|1', { e })
		switch (true) {
			case e.key === 'ArrowUp':
				e.preventDefault()
				highlight__idx$.val = (highlight__idx$.val + 1) % search_result_a$.val.length
				break
			case e.key === 'ArrowDown':
				e.preventDefault()
				highlight__idx$.val = (highlight__idx$.val + search_result_a$.val.length - 1) % search_result_a$.val.length
				break
			case e.key === 'Enter':
				e.preventDefault()
				window.location.href = post__path__new(search_result_a$.val[highlight__idx$.val].item)
				break
		}
	}
	function input__onkeyup(e:KeyboardEvent&{ currentTarget:HTMLInputElement }) {
		input__value$.val = e.currentTarget.value
	}
}
