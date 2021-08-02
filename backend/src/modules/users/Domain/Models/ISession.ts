import IUser from "./IUser";

export default interface ISession
{
    user : IUser;
    token: string;
}
