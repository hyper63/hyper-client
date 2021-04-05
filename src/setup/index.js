import { data } from './data.js'
import { cache } from './cache.js'
import { search } from './search.js'
import { storage } from './storage.js'
import { queue } from './queue.js'

export const setup = config => {
  return Object.freeze({
    cache: cache(config),
    data: data(config),
    search: search(config),
    storage: storage(config),
    queue: queue(config)
  })
}
