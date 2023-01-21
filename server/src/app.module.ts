import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import config from './core/connection';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      ...config,
      sync: { force: true },
      autoLoadModels: true,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
