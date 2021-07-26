import nodemailer from "nodemailer";
import MailTemplate from "./HandlebarsTemplateMail"


export default class EtherealMail{

    static async sendEmail({to,from, subject, templateData }: ISendEmail) : Promise<void>
    {
        const account = await nodemailer.createTestAccount();

        const mailTemplate = new MailTemplate();

        const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });


        const message = await transporter.sendMail({
            from : {
                name : from?.name || 'Fake Email Test',
                address: from?.email || 'fakemailtest@fakemail.com'
            },
            to :{
                name: to.name ,
                address : to.email
            },
            subject,
            html : await mailTemplate.parse(templateData)

        });

        console.log('Message sent : %s',message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}
