export const cache = config => {

  const init = () => {
    // initialize cache
    return fetch(config.url('cache'), { method: 'PUT' }).then(res => res.ok 
      ? (console.log(`${config.url('cache')} initialized!`), res.json())
      : (console.log(`${config.url('cache')} could not be initialized!`), res.json())
    )
  }

  return Object.freeze({
    init
  })
}
