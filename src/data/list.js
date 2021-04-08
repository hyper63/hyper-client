export const list = (config, type) => _ =>
  fetch(config.url('data') + '/_query', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify({
      selector: {
        type
      }
    })
  })
    .then(res => res.json())
