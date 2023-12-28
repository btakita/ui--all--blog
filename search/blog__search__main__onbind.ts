/// <reference lib="dom" />
import { type SearchItem } from '@btakita/domain--any--blog'
import { id__dom__handler_ } from '@ctx-core/dom'
import { attach } from 'relementjs'
import { blog__search_c_ } from './blog__search_c_.js'
export const blog__search__main__onbind = id__dom__handler_(
	'blog__search__main__onbind',
	(Main_search:HTMLElement)=>{
		const search_item_a = JSON.parse(
			Main_search.dataset.search_item_a!) as SearchItem[]
		attach(Main_search, blog__search_c_<'browser'>({ search_item_a }))
	})
