const express = require('express')
const sendMail = require('./sendMail')

const app = express()
const PORT = 7777

app.listen(PORT, () => {
  console.log('Server has been started...')
})

app.use(express.json())

app.post('/api/sendmail', async (req, res) => {
  console.log(`${req.url}, ${req.method}`)
  console.log(req.body)
  try {
    const status = await sendMail(req.body)
    res.send(status)
    console.log(status)
  } catch(err) {
    console.log(new Error(err))
  }
  
})

