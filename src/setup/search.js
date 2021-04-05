export const search = config => {

  const init = () => {
    // initialize database
    return fetch(config.url('search'), { method: 'PUT' }).then(res => res.ok 
      ? console.log(`${config.url('search')} initialized!`)
      : console.log(`${config.url('search')} could not be initialized!`)
    )
  }

  return Object.freeze({
    init
  })
}
