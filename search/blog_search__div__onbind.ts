/// <reference lib="dom" />
import { type dehydrated_post_meta_T } from '@btakita/domain--any--blog'
import { id__dom__handler_ } from '@ctx-core/dom'
import { attach } from 'relementjs'
import { blog_search__div_ } from './blog_search__div.js'
export const blog_search__div__onbind = id__dom__handler_(
	'blog_search__div__onbind',
	(Main_search:HTMLElement)=>{
		const dehydrated_post_meta_a1 = JSON.parse(
			Main_search.dataset.dehydrated_post_meta_a1!) as dehydrated_post_meta_T[]
		attach(Main_search, blog_search__div_<'browser'>({
			dehydrated_post_meta_a1
		}))
	})
