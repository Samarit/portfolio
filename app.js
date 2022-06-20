const express = require('express')
const app = express()
const PORT = 7777

app.listen(PORT, () => {
  console.log('Server has been started...')
})

app.use(express.json())

app.post('/api/sendmail', (req, res) => {
  console.log(`${req.url}, ${req.method}`)
  console.log(req.body)
  res.send(req.body)
})

