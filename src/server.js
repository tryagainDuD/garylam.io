// const nodemailer = require('nodemailer')
// const { google } = require('googleapis')

// const USER = 'gary9632@gmail.com'
// const CLIENT_ID = '404700184362-4bach7ttgq6gufi5kptfi23qo51e46ru.apps.googleusercontent.com'
// const CLIENT_SECRET = '9JOxL3gOJZZrhJXnX_xeldqP'
// const REDIRECT_URL = 'https://developers.google.com/oauthplayground'
// const REFRESH_TOKEN = 
//         '1//0482nX_46wtoXCgYIARAAGAQSNwF-L9Ir_2sjbFAyYGIZAhTyWsAQGFaAwPJq5uV5n1fBCg817ELDf0OwdVEJ_Me8rmSHdRm5uqk'

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail() {
    try {

        const nodemailer = require('nodemailer')
        const { google } = require('googleapis')

        const USER = 'gary9632@gmail.com'
        const CLIENT_ID = '404700184362-4bach7ttgq6gufi5kptfi23qo51e46ru.apps.googleusercontent.com'
        const CLIENT_SECRET = '9JOxL3gOJZZrhJXnX_xeldqP'
        const REDIRECT_URL = 'https://developers.google.com/oauthplayground'
        const REFRESH_TOKEN = 
                '1//0482nX_46wtoXCgYIARAAGAQSNwF-L9Ir_2sjbFAyYGIZAhTyWsAQGFaAwPJq5uV5n1fBCg817ELDf0OwdVEJ_Me8rmSHdRm5uqk'

        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

        const accessToken = oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: USER,
            to: 'garylamofficial@gmail.com',
            subject: 'Hello from gmail using API',
            text: 'Hello World',
            html: '<h1>Hello World</h1>',
        }

        const result = await transport.sendMail(mailOptions)
        return result

    } catch(error) {
        return error
    }
}

sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));