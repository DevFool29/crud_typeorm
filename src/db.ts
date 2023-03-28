import { DataSource } from 'typeorm'
import { Brand } from './entities/Brand'
import { Product } from './entities/Product'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 2023,
  username: 'postgres',
  password: '12345',
  database: 'crud',
  synchronize: true,
  entities: [Product, Brand],
  logging: true,
})
