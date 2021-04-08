const assoc = (key, value, object) => ({ ...object, [key]: value }) 

export const post = (config, type) => data =>
  fetch(config.url('data'), {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify(assoc('type', type, data))
  })
    .then(res => res.json())
