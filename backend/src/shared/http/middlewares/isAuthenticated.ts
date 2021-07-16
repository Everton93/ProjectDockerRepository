import AppError from '@shared/errors/error';
import {Request, Response , NextFunction } from 'express'
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth'

export default function isAuthenticated (
    request : Request,
    response : Response,
    next : NextFunction
) : void {
    const authHeader = request.headers.authorization;

    if(!authHeader) throw new AppError('Jwt Token is Missing');

    const [ ,token] = authHeader.split(' ');

    try {

        const decodeToken = verify(token, authConfig.jwt.secret)

        console.log(decodeToken);

        return next();

    } catch (error)
    {
        throw new AppError(' JWT token invalido');
    }
}
