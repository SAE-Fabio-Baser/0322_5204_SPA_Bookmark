export default function getTime(app) {
  app.get('/time', (req, res) => {
    res.send(`${Date.now()}`)
  })
}