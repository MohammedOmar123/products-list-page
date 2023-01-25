import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities';
import { QueryDto } from './dto/queryDto';
@Injectable()
export class ProductsService {
  number = 0;
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  async findAll(dto: QueryDto) {
    this.number += 1;
    const { offset } = dto;
    const where = {};
    if (dto.category) {
      where['category'] = dto.category.split(',');
    }
    let order = [];

    if (dto.name) {
      order = [['name', dto.name]];
    }

    if (dto.price) {
      order = [['price', dto.price]];
    }

    const limit = 9;
    const products = await this.productRepository.findAll({
      attributes: ['id', 'name', 'category', 'price', 'image'],
      where,
      offset,
      limit,
      group: 'Product.id',
      order,
    });

    const totalPrice = products.reduce(
      (acc, product) => acc + product.price,
      0,
    );

    const totalNumberOfItems = await this.productRepository.count({ where });

    return { totalPrice, count: products.length, products, totalNumberOfItems };
  }
}
