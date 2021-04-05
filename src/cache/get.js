import R from 'ramda'
const { curry } = R

export const get = curry((config, type, id) =>
  fetch(`${config.url('cache')}/${type}-${id}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.token()}`
    }
  }).then(res => res.json())
)
