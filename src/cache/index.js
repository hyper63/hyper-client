import R from 'ramda'
import { get } from './get.js'
import { set } from './set.js'
import { del } from './delete.js'

const { curry } = R

export const cache = curry((config, type) =>
  Object.freeze({
    get: get(config, type),
    set: set(config, type),
    'delete': del(config, type)
  })
)
