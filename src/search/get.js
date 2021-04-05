import R from 'ramda'

export const get = R.curry((config, type, key) => 
  fetch(`${config.url('search')}/${type}-${key}`, { 
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.token()}`
    }
  }).then(res => res.json())
)
