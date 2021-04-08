import { data } from './data/index.js'
//import { cache } from './cache/index.js'
//import { search } from './search/index.js'
import { createConnection } from './config.js'

import fetch from 'node-fetch'

globalThis.fetch = fetch

//const c = config()

/** @type {import('./types.ts').hyper} */
export const hyper = (s) => {
  let c = createConnection(s) 
  //let s = setup(c)

  return Object.freeze({
    data: data(c),
    //cache: cache(c),
    //search: search(c)
  })
}
