/// <reference lib="dom" />
import { type SearchItem } from '@btakita/domain--all--blog'
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { render } from 'solid-js/web'
import { UI_search } from './UI_search'
export const Main_search__onbind = id__dom__handler_(
	'Main_search__onbind',
	(Main_search:HTMLElement, ctx:Ctx)=>{
		const search_item_a = JSON.parse(Main_search.dataset.search_item_a!) as SearchItem[]
		render(()=>
			<UI_search
				ctx={ctx}
				search_item_a={search_item_a}
			/>, Main_search)
	})
