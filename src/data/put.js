import R from 'ramda'

const { assoc, curry } = R

export const put = curry((config, type, id, data) =>
  fetch(config.url('data') + '/' + id, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify(
      assoc('type', type, data)
    )
  })
    .then(res => res.json())
)
