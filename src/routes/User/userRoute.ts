import { Router } from 'express'
import { SignUp, SignIn } from '../../controllers/User/userController'


const router = Router()

router.post('/signup',SignUp)
router.post('/signin',SignIn)

export default router