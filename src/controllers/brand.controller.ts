import { Request, Response } from 'express'
import { Brand } from '../entities/Brand'

export const getBrands = async (req: Request, res: Response) => {
  const brands = await Brand.find()
  return res.json(brands)
}

export const createBrand = async (req: Request, res: Response) => {
  const { name } = req.body
  const brand = new Brand()
  brand.name = name

  await brand.save()
  console.log(brand)
  return res.json(brand)
}

export const updateBrand = async (req: Request, res: Response) => {
  const { name } = req.body
  const brand = await Brand.findOneBy({ id: parseInt(req.params.id) })

  if (!brand) return res.status(404).json({ message: 'Brand not found' })
  brand.name = name
  await brand.save()
  return res.json(brand)
}

export const deleteBrand = async (req: Request, res: Response) => {
  const { id } = req.params
  const brandToDelete = await Brand.delete(id)
  return res.json(brandToDelete)
}

export const getBrand = async (req: Request, res: Response) => {
  const { id } = req.params
  const brand = await Brand.findOneBy({ id: parseInt(id) })
  return res.json(brand)
}
