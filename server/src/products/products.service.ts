import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities';
import { fn, col } from 'sequelize';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  async findAll(offset: number, category: string) {
    const where = {};
    if (category) {
      where['category'] = category;
    }
    const limit = 9;
    const products = await this.productRepository.findAll({
      attributes: [
        'id',
        'name',
        'category',
        'price',
        'image',
        [fn('sum', col('price')), 'totalPrice'],
      ],
      where,
      offset,
      limit,
      group: 'Product.id',
    });

    const totalPrice = products.reduce(
      (acc, product) => acc + product.price,
      0,
    );
    return { totalPrice, count: products.length, products };
  }
}
