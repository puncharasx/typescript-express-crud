import { Router } from 'express'
import { Insert, Update, Blog, Delete, BlogById } from '../../controllers/Blog/blogController'
const router = Router()


router.get('/',Blog)
router.get('/:id',BlogById)
router.post('/',Insert)
router.put('/',Update)
router.delete('/',Delete)

export default router