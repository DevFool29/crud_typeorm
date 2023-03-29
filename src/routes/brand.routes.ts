import { Router } from 'express'
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
} from '../controllers/brand.controller'

const router = Router()

router.get('/brands', getBrands)

router.post('/brands', createBrand)

router.put('/brands/:id', updateBrand)

router.delete('/brands/:id', deleteBrand)

router.get('/brands/:id', getBrand)

export default router
