import { Request, Response } from 'express'
import { Brand } from '../entities/Brand'
import { Product } from '../entities/Product'

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({ relations: ['brand'] })
  return res.json(products)
}

export const createProduct = async (req: Request, res: Response) => {
  const { brandId } = req.params
  const { name, price, stock } = req.body

  const brand = await Brand.findOneBy({ id: parseInt(brandId) })

  if (!brand) return res.json({ msg: 'Brand Not Found' })

  const product = Product.create({
    name,
    price,
    stock,
    brand,
  })

  await product.save()
  return res.json({ message: 'Product added' })
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, price, stock, brandId } = req.body

  const product = await Product.findOne({ where: { id: parseInt(id) } })
  const brand = await Brand.findOne({ where: { id: parseInt(brandId) } })

  if (!product) {
    throw new Error('Product not found')
  }

  if (!brand) {
    throw new Error('Brand not found')
  }

  product.name = name
  product.price = price
  product.stock = stock
  product.brand = brand

  await product.save()
  return res.send('Product Updated')
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  const productToDelete = await Product.delete(id)
  return res.json(productToDelete)
}
