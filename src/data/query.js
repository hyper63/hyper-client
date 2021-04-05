import R from 'ramda'

const { assoc, compose, curry, identity, ifElse } = R 

/**
 * @type {{[k:string]: unknown}} Selector
 * @type {{use_index: string, limit: number}} Options
 */
/**
 * @param {import('../../types.ts').Config} config 
 * @param {string} type - type of document
 * @param {Selector} q - object containing filter information
 * @param {Options} options - object containing filter options
 */
export const query = curry((config, type, q, options={}) => {

  const selector = compose(
    assoc('type', type)
  )(q)

  const body = compose(
    ifElse(() => options.limit, assoc('limit', options.limit), identity),
    ifElse(() => options.use_index, assoc('use_index', options.use_index), identity)
  )({ selector })

  return fetch(config.url('data') + '/_query', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
  
})
