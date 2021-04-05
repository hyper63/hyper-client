import R from 'ramda'

const { compose, fromPairs, lensProp, map, set } = R

const alwaysValid = d => ({ success: true, data: d})

export const data = config => {

  const init = () => {
    // initialize database
    return fetch(config.url('data'), { 
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${config.token()}`
      }
    }).then(res => res.ok 
      ? (console.log(`${config.url('data')} initialized!`), res.json())
      : (console.log(`${config.url('data')} could not be initialized!`), res.json())
    )
  }

  const createIndex = (idx) => fetch(config.url('data') + '/_index', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        authorization: `Bearer ${config.token()}` 
      },
      body: JSON.stringify(idx)
  }).then(res => res.json())

  const configure = dts => set(
    lensProp('data'), 
    compose(
      fromPairs, 
      map(d => [d.type, d.validate || alwaysValid ])
    )(dts),
    config
  )

  return Object.freeze({
    init,
    createIndex,
    configure
  })
}
