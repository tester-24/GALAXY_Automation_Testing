const e = require('express');
const nodemailer = require('nodemailer');
const html = `
<p>IPO_Automation_Testing_Report</>
<path="cid:unique@gmail.com">

`;

const emails = ['tester4.elitetechno@gmail.com', 'tester3.elitetechno@gmail.com']

async function main() {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tester3.elitetechno@gmail.com',
            pass: 'turlhuuhgdlyglnx '
        }
    });

    const info = await transporter.sendMail({
        from: 'tester3.elitetechno@gmail.com',
        to: emails,
        subject: 'This is Automation Testing Report',
        html: html,
        attachments: [{
            filename: '',
            path: '' ,  
            cid: 'unique@gmail.com'

        }]

    })

    console.log("Message Sent: " + info.messageId);
    console.log(info.accepted);
    console.log(info.rejected);

}

main()
    .catch(e => console.log(e));

