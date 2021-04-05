import R from 'ramda'

export const find = R.curry((config, type, criteria) => 
  fetch(`${config.url('search')}/_query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify({
      query: criteria,
      filter: { type }
    })
  })
)
