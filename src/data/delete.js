import { default as R } from 'ramda'

const { assoc, curry } = R

export const del = curry((config, type, id) =>
  fetch(config.url('data') + '/' + id, {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    }
  })
    .then(res => res.json())
)
