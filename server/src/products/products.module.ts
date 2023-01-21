import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsService } from './products.service';
import { Product } from './entities';
import { ProductsController } from './products.controller';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
