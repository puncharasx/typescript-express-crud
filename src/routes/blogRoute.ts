import { Router } from 'express'
import { Insert } from '../controllers/blogController'
const router = Router()


router.post('/',Insert)

export default router