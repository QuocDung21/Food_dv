import Redis from "ioredis";
//Redis
const redis = new Redis("redis://localhost:6379/");
export default async (req: any, res: any) => {
    const count = await redis.incr("counter");
    res.status(200).json({count});
};