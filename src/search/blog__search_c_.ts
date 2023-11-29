/// <reference lib="dom" />
import { post__path__new, type SearchItem, type SearchResult } from '@btakita/domain--any--blog'
import { type Ctx } from 'ctx-core/object'
import Fuse, { FuseResult } from 'fuse.js'
import { attach, memo_, type Node_T, type relement_env_T, sig_ } from 'relementjs'
import { div_, input_, label_, span_, ul_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
import { blog__card_c_ } from '../card/index.js'
import './blog__search_c.css'
export function blog__search_c_<env_T extends relement_env_T>(
	{ ctx, search_item_a }:{
		ctx:Ctx,
		search_item_a:SearchItem[]
	}
) {
	const input$ = sig_<HTMLInputElement|undefined>(undefined)
	const input__value$ = sig_('')
	const highlight__idx$ = sig_(0)
	const fuse$ = sig_(
		new Fuse(search_item_a, {
			keys: ['title', 'description'],
			includeMatches: true,
			minMatchCharLength: 2,
			threshold: 0.5,
		}))
	const search_result_a$ = sig_<FuseResult<SearchItem>[]>([],
		search_result_a$=>{
			// Add search result only if
			// input value is more than one character
			let search_result_a =
				input__value$().length > 1
					? fuse$().search(input__value$())
					: []
			search_result_a$._ = search_result_a
			// Update search string in URL
			if (input__value$().length > 0) {
				const searchParams = new URLSearchParams(window.location.search)
				searchParams.set('q', input__value$())
				const newRelativePathQuery =
					window.location.pathname + '?' + searchParams.toString()
				history.replaceState(history.state, '', newRelativePathQuery)
			}
			else {
				history.replaceState(history.state, '', window.location.pathname)
			}
		})
	const search_result_a__length$ = memo_(()=>
		search_result_a$().length)
	input__init()
	return (
		div_({ class: 'blog__search_c' },
			search__input_c_(),
			search__results_found_c_(),
			search__results_children_c_())) as Node_T<env_T, HTMLElementTagNameMap['div']>
	function input__init() {
		// if URL has search query,
		// insert that search query in input field
		const search_url = new URLSearchParams(window.location.search)
		const search_str = search_url.get('q')
		if (search_str) input__value$._ = search_str
		// put focus cursor at the end of the string
		setTimeout(()=>{
			input$()!.selectionStart = input$()!.selectionEnd =
				search_str?.length || 0
		}, 50)
	}
	function search__input_c_() {
		return (
			label_({ class: 'relative block' },
				span_({ class: 'absolute inset-y-0 left-0 flex items-center pl-2 opacity-75' },
					svg_({
							xmlns: 'http://www.w3.org/2000/svg',
							'aria-hidden': true
						},
						path_({
							d: 'M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'
						}))),
				search__input_())
		)
	}
	function search__results_found_c_() {
		const show$ = memo_(()=>
			input__value$().length > 1)
		return (
			show$()
				? div_({ class: 'mt-8' },
					`Found `,
					search_result_a__length$,
					` result`,
					()=>search_result_a__length$() === 1 ? '' : 's',
					` for `,
					input__value$)
				: undefined
		)
	}
	function search__results_children_c_() {
		let search_result_a:SearchResult[]
		return (_ul?:HTMLUListElement)=>{
			const ul = _ul ?? ul_<'browser'>()
			rerender()
			return ul
			function rerender() {
				while (ul.lastElementChild) {
					ul.removeChild(ul.lastElementChild)
				}
				attach(ul, ...search_result_a$().map((search_result:SearchResult, idx:number)=>{
					const item = search_result.item
					return (()=>
						blog__card_c_({
							ctx,
							href: post__path__new(item),
							class: idx === highlight__idx$() ? 'highlight' : '',
							post: item
						}))
				}))
			}
		}
	}
	function search__input_() {
		const input =
			input_({
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
		input$._ = input
		return input
	}
	function input__onkeydown(e:KeyboardEvent&{
		currentTarget:HTMLInputElement
	}) {
		switch (true) {
			case e.key === 'ArrowDown':
				e.preventDefault()
				highlight__idx$._ = (highlight__idx$() + 1) % search_result_a$().length
				break
			case e.key === 'ArrowUp':
				e.preventDefault()
				highlight__idx$._ = (highlight__idx$() + search_result_a$().length - 1) % search_result_a$().length
				break
			case e.key === 'Enter':
				e.preventDefault()
				window.location.href = post__path__new(search_result_a$()[highlight__idx$()].item)
				break
		}
	}
	function input__onkeyup(e:KeyboardEvent&{
		currentTarget:HTMLInputElement
	}) {
		input__value$._ = e.currentTarget.value
	}
}
