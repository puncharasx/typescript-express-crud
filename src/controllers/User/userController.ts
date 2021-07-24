import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs' 
import config from '../../config/index'
import jwt from 'jsonwebtoken'
import userModel from '../../models/User/userModel'

export const SignUp = async (req: Request, res: Response, next: NextFunction,) => {
    try {
        const { name,lastname,email,password } = req.body
        const hashPassword = await bcrypt.hash(password,10)
        const doc = new userModel({
            name: name,
            lastname: lastname,
            email: email,
            password: hashPassword
        })
        const save = await doc.save()
        res.status(200).json({
            status: 200,
            message: 'Singup Successfuly !',
            data: save
        })
    }catch(err) {
        next(err)
    }
}

export const SignIn = async (req: Request, res: Response, next: NextFunction,) => {
    try {
        const { email, password } = req.body   
        const doc: any = await userModel.findOne( { email: email  } )
        console.log(doc)
         if(!doc) {
            const error :any = new Error('Not found user')
            error.status = 404
            throw error
        }
        const checkPassword = await bcrypt.compare(password,doc.password)
        if(!checkPassword) {
            const error :any = new Error('Password not correct !!')
            error.status = 400
            throw error
        }
        const token = jwt.sign({
            id: doc._id,
            email: doc.email
        },config.JWT_SECRET)
        res.status(200).json({
            status: 200,
            token: token
        })
    }catch(err) {
        next(err)
    }
}
