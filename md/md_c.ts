import { marked } from 'marked'
import { raw_ } from 'relementjs'
export function md_c_(md:string) {
  return raw_(marked.parse(md))
}
