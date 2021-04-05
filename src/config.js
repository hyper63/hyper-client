import jwt from 'jsonwebtoken'
const hyper = new URL(process.env.HYPER || 'http://key:secret@localhost:6363/app')


export const config = () => Object.freeze({
  url: svc => `${hyper.origin}/${svc}${hyper.pathname}`,
  token: () => jwt.sign({ sub: hyper.username }, hyper.password)
})


