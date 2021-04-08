import { list } from './list.js'
import { post } from './post.js'
import { query } from './query.js'
import { get } from './get.js'
import { put } from './put.js'
import { del } from './delete.js'

/** @type {import('../types.ts').Data} */
export const data = config => type =>
  Object.freeze({
    list: list(config, type),
    post: post(config, type),
    query: query(config, type),
    get: get(config, type),
    put: put(config, type),
    'delete': del(config, type),
    // validate: data => {
    //  return config.data[type](data)
    // }
  })
