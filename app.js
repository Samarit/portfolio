const express = require('express')
const app = express()
const PORT = 7777

app.listen(PORT, () => {
  console.log('Server has been started...')
})

app.post('/api/sendmail', (req, res) => {
  console.log(`${req.url}, ${req.method}, ${req.ip}`)
  res.send({res: 'privet'})
})

