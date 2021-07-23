import { Router, Response, Request, NextFunction } from 'express'

const router = Router()

router.get('/Hello',(req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

export default router