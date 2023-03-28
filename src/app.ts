import express from 'express'

import morgan from 'morgan'
import cors from 'cors'

import BrandRouter from './routes/brand.routes'
import ProductRouter from './routes/product.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.use(express.json())

app.use(BrandRouter)
app.use(ProductRouter)

export default app
