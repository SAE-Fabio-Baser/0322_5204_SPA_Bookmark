import { OAuth2Client } from 'google-auth-library'

export function getGoogleInfo(idToken) {
  return new Promise((resolve, reject) => {
    const auth = new OAuth2Client()
    auth.verifyIdToken({ idToken }).then(resolve).catch(reject)
  })
}

function loggedIn(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    res.json({ code: 'noAuthHeader' })
    return
  }

  const [bearerType, token] = authorization.split(' ')

  if (bearerType !== 'Bearer') {
    console.log(bearerType)
    res.json({ code: 'authHeaderMustBeBearer' })
    return
  }

  getGoogleInfo(token)
    .then(loginTicket => {
      console.log(loginTicket)
      req.body.user = loginTicket.payload
      next()
    })
    .catch(error => {
      console.error(error)
      res.send({ code: 'invalidToken' })
    })
}

export default loggedIn