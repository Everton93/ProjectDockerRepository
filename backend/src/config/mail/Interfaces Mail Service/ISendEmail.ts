
interface ISendEmail
{
    to : IMailContact;
    from: IMailContact;
    subject : string;
    templateData : IParseMailTemplate;
}



