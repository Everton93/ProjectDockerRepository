import {Request , Response, NextFunction} from "express";
import redis from "redis";  
import {RateLimiterRedis} from "rate-limiter-flexible";
import AppError from "@shared/errors/error";

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || undefined,    
});


const limiter = new RateLimiterRedis({
    storeClient : redisClient,
    keyPrefix : "ratelimit",
    points : 5,
    duration : 1
})

export default async function rateLimiter(
    request : Request, 
    response : Response, 
    nextFunction : NextFunction) : Promise <void>
{
    try {
        await limiter.consume(request.ip);
    
        return nextFunction();
    }catch (err) 
    {
        throw new AppError("Muitas requisições !!", 429);
    }
    
}
 

