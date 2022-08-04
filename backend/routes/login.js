import { getGoogleInfo } from '../lib/loggedIn.js'
import { User } from '../models/index.js'

export default function (app) {
  console.log('Hallo aus der Route')

  /**
   * @swagger
   * /auth/login:
   *  post:
   *    tags: [Auth]
   *    summary: Logs a user in
   *    requestBody:
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            required:
   *              - idToken
   *            properties:
   *              idToken:
   *                type: string
   *                default: eyH0pkwfeoijef...
   *
   *    responses:
   *      "200":
   *        description: A user was logged in
   *
   */
  app.post('/auth/login', (req, res) => {
    const { idToken } = req.body

    getGoogleInfo(idToken)
      .then(async loginTicket => {
        const { sub, iss, name } = loginTicket.payload

        const providerNames = {
          'https://accounts.google.com': 'google',
        }

        const currentProviderName = providerNames[iss]

        const existingUser = await User.where(
          'providers.' + currentProviderName,
          sub
        )

        console.log(existingUser)

        if (existingUser.length === 0) {
          const newUser = new User({
            displayName: name,
            createdAt: Date.now(),
            providers: {
              [currentProviderName]: sub,
            },
            collections: [],
            tags: [],
          })

          newUser
            .save()
            .then(r => res.json(r))
            .catch(err => {
              res.sendStatus(500)
              console.error(err)
            })
        } else {
          res.json(existingUser[0])
        }
      })
      .catch(console.error)
  })
}