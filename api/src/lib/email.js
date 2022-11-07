import * as nodemailer from 'nodemailer'

const Transport = require('nodemailer-sendinblue-transport')

export async function sendEmail({ to, subject, text, html }) {
  console.log('Sending email to:', to)

  // create reusable transporter object using SendInBlue for SMTP
  const transporter = nodemailer.createTransport(
    new Transport({ apiKey: process.env.SEND_IN_BLUE_KEY })
  )

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Brent Scheibelhut" <brent@schybo.com>',
    to: Array.isArray(to) ? to : [to], // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  })

  return info
}
