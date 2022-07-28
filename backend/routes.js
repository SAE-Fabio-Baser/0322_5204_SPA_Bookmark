import { Bookmark, User } from './models/index.js'
import loggedIn, { getGoogleInfo } from './lib/loggedIn.js'

function routes(app) {
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

  app.post('/auth/link')

  app.get('/api/bookmarks', loggedIn, async (req, res) => {
    const bookmarks = await Bookmark.find()
    res.json({ code: 'success', data: bookmarks })
  })

  app.post('/api/bookmarks/create', loggedIn, async (req, res) => {
    const { name, externalUrl } = req.body
    const { sub } = req.body.user

    const bookmark = new Bookmark({
      creator: sub,
      name,
      favorite: false,
      externalUrl,
      createdAt: Date.now(),
    })

    bookmark
      .save()
      .then(r => res.json(r))
      .catch(err => {
        res.sendStatus(500)
        console.error(err)
      })
  })
}

export default routes