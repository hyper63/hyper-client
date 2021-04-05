import { add } from './add.js'
import { find } from './find.js'
import { get } from './get.js'

import R from 'ramda'

export const search = R.curry((config, type) => 
  Object.freeze({
    add: add(config, type),
    find: find(config, type),
    get: get(config, type)
  })
)

