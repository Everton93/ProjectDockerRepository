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
                name : from.name,
                address: from.email
            },
            to :{
                name: to.name || 'Fake Email Test',
                address : to.email || 'fakemailtest@fakemail.com'
            },
            subject: 'Recuperação de Senha',
            html : await mailTemplate.parse(templateData)

        });

        console.log('Message sent : %s',message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}
