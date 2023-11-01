import { ChildDom, VanShape } from 'mini-van-plate/shared'
import { ElementProto } from 'mini-van-plate/van-plate'
export function Raw<V extends VanShape>(van:V, html:string):ChildDom<V> {
	if (globalThis['window']) return htmlDocumentFragment(html) as ChildDom<V>
	const { __proto__ } = van.tags.div() as { __proto__:ElementProto }
	return {
		__proto__,
		renderToBuf(buf:any[]) {
			buf.push(html)
		},
	} as ChildDom<V>
}
function htmlDocumentFragment(html:string) {
	const frag = document.createDocumentFragment()
	const temp = document.createElement('div')
	temp.innerHTML = html
	while (temp.firstChild) {
		frag.appendChild(temp.firstChild)
	}
	return frag
}
