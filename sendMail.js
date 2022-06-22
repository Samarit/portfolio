const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
require('dotenv').config() 

const _createTransporter = async () => {
  // Prepaere auth client
  const oauth2client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )

  oauth2client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  })

  const accessToken = await new Promise((resolve, reject) => {
    oauth2client.getAccessToken((err, token) => {
      if (err) {
        reject(err)
      }
      resolve(token)
    })
  })

  //For developement
  //const testAccount = await nodemailer.createTestAccount()
  //const authTest = {
  //  user: testAccount.user,
  //  pass: testAccount.pass
  //}

  let auth = {
    type: "OAuth2",
    user: process.env.EMAIL,
    accessToken,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth
  })

  return transporter
}

const sendMail = async ( data = { name: '', email: '', text: ''} ) => {

  const { name, email, phone} = data
  const emailTransporter = await _createTransporter()

  const status = await emailTransporter.sendMail({
    from: `${name} <${email}>`,
    to: "warlockultras2008@yandex.ru",
    subject: "Test mail",
    text: text
  })

  console.log(`Email sent: ${status.messageId}`)
  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(status)}`)

  return status
}

module.exports = sendMail