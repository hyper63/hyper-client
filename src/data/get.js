import R from 'ramda'

const { assoc, curry } = R

export const get = curry((config, type, id) =>
  fetch(config.url('data') + '/' + id, {
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    }
  })
    .then(res => res.json())
)
