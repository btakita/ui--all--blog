/// <reference lib="dom" />
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { render } from 'solid-js/web'
import { UI_search } from './UI_search'
export const Main_search__onbind = id__dom__handler_(
	'Main_search__onbind',
	(Main_search:HTMLElement, ctx:Ctx)=>{
		render(()=><UI_search ctx={ctx}></UI_search>, Main_search)
	})
