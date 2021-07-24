import handlebars from "handlebars"


export default class HandlebarsTemplateMail {

    public async parse ({template, variables} : IParseMailTemplate): Promise <string>
    {

        const parseTemplate = handlebars.compile(template);

        return parseTemplate(variables);
    }
}
