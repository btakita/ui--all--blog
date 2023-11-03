/// <reference lib="dom" />
import { van_internals_ } from '@btakita/domain--all--blog'
import { html__fragment_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, PlateElement, PlateVan, VanShape } from 'van-type-delegate'
export function V_raw<
	V extends VanShape,
	R extends (ChildDom<V>|V_raw__return_T<V>) = V_raw__return_T<V>
>({ ctx, html }:{
	ctx:Ctx 
	html:string
}):R {
	if (globalThis['window']) return html__fragment_(html) as R
	const { elementProto } = van_internals_(ctx)
	return Object.setPrototypeOf({
		renderToBuf(buf:any[]) {
			buf.push(html)
		},
		render: elementProto.render
	}, elementProto) as PlateElement as R
}
type V_raw__return_T<V extends VanShape> = V extends PlateVan ? PlateElement : DocumentFragment
