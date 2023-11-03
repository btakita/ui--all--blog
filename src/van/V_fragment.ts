/// <reference lib="dom" />
import { H_, type van__elementProto_T, van_internals_ } from '@btakita/domain--all--blog'
import { compact } from '@ctx-core/array'
import { fragment_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, CoreChildDom, CoreVan, PlateElement, PlateVan, VanShape } from 'van-type-delegate'
export function V_fragment<
	V extends VanShape,
	R extends (ChildDom<V>|V_fragment__return_T<V>) = V_fragment__return_T<V>
>(
	{ ctx }:{ ctx:Ctx },
	..._children:ChildDom<V>[]
):R {
	if (globalThis['window']) return window__fragment_()
	const { elementProto, plainValue, protoOf } = van_internals_<V>(ctx)
	const children = compact(_children)
	return Object.setPrototypeOf({
		children,
		renderToBuf(buf:any[]) {
			for (const c of this.children) {
				const plainC = plainValue(c)
				protoOf(plainC) === elementProto
					? (plainC as van__elementProto_T).renderToBuf(buf)
					// TODO: use buf.push(escape(plainC!.toString())) instead?
					: buf.push(plainC!.toString())
			}
		},
		render: elementProto.render
	}, elementProto) as PlateElement as R
	function window__fragment_() {
		const fragment = fragment_()
		const div = H_<CoreVan>(ctx).div(...children as CoreChildDom[])
		let child:Node|null
		while (child = (div as Element).firstChild) {
			fragment.appendChild(child)
		}
		return fragment as R
	}
}
type V_fragment__return_T<V extends VanShape> = V extends PlateVan ? PlateElement : DocumentFragment
