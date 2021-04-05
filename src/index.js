import { data } from './data/index.js'
import { cache } from './cache/index.js'
import { search } from './search/index.js'
import { setup } from './setup/index.js'
import { config } from './config.js'

import fetch from 'node-fetch'

globalThis.fetch = fetch

const c = config()

/** @type {import('./types.ts').hyper} */
export const hyper = (cfg=[]) => {
  let c = config()
  let s = setup(c)
  c = s.data.configure(cfg)

  return Object.freeze({
    setup: s,
    data: data(c),
    cache: cache(c),
    search: search(c)
  })
}
