import { ObjectId } from 'mongoose'

export type User = {
    id: ObjectId;
    email: string;
}

export type JwtPayload = User & {
    exp: number
    role: string;
}