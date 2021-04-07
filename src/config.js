import jwt from 'jsonwebtoken'

export const createConnection = (connection) => {
  const hyper = new URL(connection)
  return Object.freeze({
    url: svc => hyper.hostname === 'localhost' 
      ? `http://${hyper.host}/${svc}${hyper.pathname}`
      : `https://${hyper.host}/${svc}${hyper.pathname}`,
    token: () => jwt.sign({ sub: hyper.username }, hyper.password)
  })
}


