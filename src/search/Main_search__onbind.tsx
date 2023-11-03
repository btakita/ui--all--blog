/// <reference lib="dom" />
import { type SearchItem, van_ } from '@btakita/domain--all--blog'
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { render } from 'solid-js/web'
import type { CoreVan } from 'van-type-delegate'
import { UI_search } from './UI_search'
import { V_UI_search } from './V_UI_search.ts'
export const Main_search__onbind = id__dom__handler_(
	'Main_search__onbind',
	(Main_search:HTMLElement, ctx:Ctx)=>{
		// const search_item_a = JSON.parse(Main_search.dataset.search_item_a!) as SearchItem[]
		const search_item_a = JSON.parse(
			Main_search.querySelector('#V_main_search__search_item_a')!.innerHTML) as SearchItem[]
		// van_<CoreVan>(ctx).add(Main_search, V_UI_search({
		// 	ctx,
		// 	search_item_a
		// }))
		render(()=>
			<UI_search
				ctx={ctx}
				search_item_a={search_item_a}
			/>, Main_search)
	})
