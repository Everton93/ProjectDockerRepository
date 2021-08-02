import ITokenUser from "@modules/users/Domain/Models/ITokenUser";

export default interface IUserTokenRepository
{
    findByToken(token: string): Promise<ITokenUser | undefined>;
    findById(id_token: string): Promise<ITokenUser | undefined>;
    generateToken(usuario_id : string): Promise<ITokenUser>
    saveToken(user: ITokenUser): Promise<ITokenUser>;
}
