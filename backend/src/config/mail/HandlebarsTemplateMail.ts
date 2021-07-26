import handlebars from "handlebars";
import fs from "fs";



export default class HandlebarsTemplateMail {

    public async parse (
        {
        file,
        variables} : IParseMailTemplate): Promise <string>
    {
        const templateFileContent = await fs.promises.readFile(file , {encoding : 'utf-8'});

        const parseTemplate = handlebars.compile(templateFileContent);

        return parseTemplate(variables);
    }
}
