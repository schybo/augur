import { augur } from 'src/lib/augur'
import { db } from 'src/lib/db'
import { sendEmail } from 'src/lib/email'
import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

async function sendTestEmail(emailAddress) {
  const cResults = await augur()

  const subject = 'Test Email'
  let text =
    'This is a manually triggered test email.\n\n' +
    'It was sent from a RedwoodJS application.\n\n'
  let html =
    'This is a manually triggered test email.<br><br>' +
    'It was sent from a RedwoodJS application.<br><br>'

  for (const [key, value] of Object.entries(cResults)) {
    const { message, size, brand, garmentType, numberOfResults } = value

    const previousGarmentResult = await db.garmentCheck.findFirst({
      where: { size, brand, garmentType },
      orderBy: {
        id: 'desc',
      },
    })

    let changeInResults = numberOfResults

    if (previousGarmentResult) {
      changeInResults = changeInResults - previousGarmentResult.numberOfResults
    }

    let emailMessage = `Number of ${size} ${brand} ${garmentType} since last check: ${changeInResults}`

    text = text + emailMessage + '\n\n'
    html = html + emailMessage + '<br><br>'

    await db.garmentCheck.create({
      data: {
        message,
        numberOfResults,
        size,
        brand,
        garmentType,
      },
    })
  }

  return sendEmail({ to: emailAddress, subject, text, html })
}

export const handler = async (event, context) => {
  logger.info('Invoked shoppingChecker function')
  await sendTestEmail('brent.scheibelhut@gmail.com')

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'shoppingChecker function',
    }),
  }
}
