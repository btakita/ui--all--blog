import { marked } from 'marked'
import { raw_ } from 'relementjs'
export function md__raw_(md:string) {
  return raw_(marked.parse(md))
}
