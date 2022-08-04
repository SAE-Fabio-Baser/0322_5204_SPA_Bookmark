import loggedIn from '../lib/loggedIn.js'
import { Bookmark } from '../models/index.js'

export default function getAllBookmarks(app) {
  app.get('/api/bookmarks', loggedIn, async (req, res) => {
    const bookmarks = await Bookmark.find()
    res.json({ code: 'success', data: bookmarks })
  })
}