import { post } from './post.js'
import { query } from './query.js'
import { get } from './get.js'
import { put } from './put.js'
import { del } from './delete.js'

import { default as R } from 'ramda'

const { curry } = R

/** @type {import('../types.ts').Data} */
export const data = curry((config, type) =>
  Object.freeze({
    post: post(config, type),
    query: query(config, type),
    get: get(config, type),
    put: put(config, type),
    'delete': del(config, type),
    validate: data => {
      return config.data[type](data)
    }
  })
)
