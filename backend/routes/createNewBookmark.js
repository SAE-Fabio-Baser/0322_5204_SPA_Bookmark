import loggedIn from '../lib/loggedIn.js'
import { Bookmark } from '../models/index.js'

export default function createNewBookmark(app) {
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