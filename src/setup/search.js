export const search = config => {

  const init = (fields) => {
    // initialize database
    return fetch(config.url('search'), { 
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${config.token()}`
      },
      body: {
        fields,
        storedFields: fields
      }

    }).then(res => res.ok 
      ? (console.log(`${config.url('search')} initialized!`), res.json())
      : (console.log(`${config.url('search')} could not be initialized!`), res.json())
    )
  }

  return Object.freeze({
    init
  })
}
