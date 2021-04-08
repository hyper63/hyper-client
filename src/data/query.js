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
export const query = (config, type) => (selector, options={}) => {

  selector = { ...selector, type }

  return fetch(config.url('data') + '/_query', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify({...options, selector})
  })
    .then(res => res.json())
  
}
