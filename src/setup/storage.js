
export const storage = config => {

  const init = () => {
    // initialize database
    return fetch(config.url('storage'), { method: 'PUT' }).then(res => res.ok 
      ? console.log(`${config.url('storage')} initialized!`)
      : console.log(`${config.url('storage')} could not be initialized!`)
    )
  }

  return Object.freeze({
    init
  })
}
