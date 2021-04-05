
export const queue = config => {

  const init = () => {
    // initialize database
    return fetch(config.url('queue'), { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${config.token()}`
      }
    }).then(res => res.ok 
      ? console.log(`${config.url('queue')} initialized!`)
      : console.log(`${config.url('queue')} could not be initialized!`)
    )
  }

  return Object.freeze({
    init
  })
}
