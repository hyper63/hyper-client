import R from 'ramda'

const { curry } = R

export const del = curry((config, type, key) => 
  fetch(`${config.url('cache')}/${type}-${key}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.token()}`
    }
  })
)
