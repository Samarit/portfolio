const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
require('dotenv').config()

const sendMail = async ( data = { name: '', email: '', text: ''} ) => {
  
  
  try {
    //Test account
    let testAccount = await nodemailer.createTestAccount()
    let authTest = {
      user: testAccount.user,
      pass: testAccount.pass
    }
    let auth = {
      user: 'samarit.bot@gmail.com',
      pass: 'Prikol1993',
      
    }

    console.log(`authTest: ${authTest.user}, ${authTest.pass}`)

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth
    })

    let status = await transporter.sendMail({
      from: `${data.name} <${data.email}>`,
      to: "warlockultras2008@yandex.ru",
      subject: "Test mail",
      text: data.text
    })

    console.log(`Email sent: ${status.messageId}`)
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(status)}`)

    return status

  } catch(err) {
    console.log(new Error(err))
  }
}

module.exports = sendMail