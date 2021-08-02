export default interface IUpdateUser
{
    id_usuario : string,
    nome :string;
    email : string;
    password?: string;
    old_password? : string;
}
