/// <reference lib="dom" />
import { type SearchItem } from '@btakita/domain--all--blog'
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { van_ } from '@ctx-core/vanjs'
import type { CoreVan } from 'van-type-delegate'
import { V_UI_search } from './V_UI_search.ts'
export const Main_search__onbind = id__dom__handler_(
	'Main_search__onbind',
	(Main_search:HTMLElement, ctx:Ctx)=>{
		let search_item_a = JSON.parse(
			Main_search.querySelector('#V_main_search__search_item_a')!.innerHTML) as SearchItem[]
		let van = van_<CoreVan>(ctx)
		van.add(Main_search, V_UI_search({ ctx, search_item_a }))
	})
