export const del = (config, type) => id =>
  fetch(config.url('data') + '/' + id, {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json', 
      authorization: `Bearer ${config.token()}`
    }
  })
    .then(res => res.json())
