import { Router } from 'express'
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller'

const router = Router()

router.get('/products', getProducts)
router.post('/brand/:brandId/product', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router
