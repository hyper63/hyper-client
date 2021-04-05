import R from 'ramda'

const { curry } = R

export const set = curry((config, type, key, value) =>
  fetch(`${config.url('cache')}`, { method:'POST', 
    header: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify({
      key,
      value
    })
  }).then(res => res.json())
)

