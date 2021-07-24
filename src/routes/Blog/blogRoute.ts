import { Router } from 'express'
import { Insert, Update, Blog, Delete, BlogById } from '../../controllers/Blog/blogController'
import auth_login from '../../middlewares/auth'
const router = Router()

router.get('/',auth_login,Blog)
router.get('/:id',BlogById)
router.post('/',Insert)
router.put('/:id',Update)
router.delete('/:id',Delete)

export default router