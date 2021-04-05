import R from 'ramda'

export const add = R.curry((config, type, key, doc) => 
  fetch(`${config.url('search')}`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify({
      key: `${type}-${key}`,
      doc: {
        type,
        ...doc
      }
    })
  }).then(res => res.json())
)
