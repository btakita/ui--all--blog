/// <reference lib="dom" />
import { type SearchItem } from '@btakita/domain--any--blog'
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from 'ctx-core/object'
import { attach } from 'relementjs'
import { blog__search_c_ } from './blog__search_c_.ts'
export const blog__search__main__onbind = id__dom__handler_(
	'blog__search__main__onbind',
	(Main_search:HTMLElement, ctx:Ctx)=>{
		let search_item_a = JSON.parse(
			Main_search.querySelector('#blog__search_item_a_c')!.innerHTML) as SearchItem[]
		attach(Main_search, blog__search_c_({ ctx, search_item_a }))
	})
