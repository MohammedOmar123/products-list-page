import { Controller, Get, Query } from '@nestjs/common';
import { QueryDto } from './dto/queryDto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() dto: QueryDto) {
    return this.productsService.findAll(+dto.offset, dto.category);
  }
}
