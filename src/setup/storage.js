
export const storage = config => {

  const init = () => {
    // initialize database
    return fetch(config.url('storage'), { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${config.token()}`
      }
    }).then(res => res.ok 
      ? (console.log(`${config.url('storage')} initialized!`), res.json())
      : (console.log(`${config.url('storage')} could not be initialized!`), res.json())
    )
  }

  return Object.freeze({
    init
  })
}
