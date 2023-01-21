import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export interface IProduct
  extends Model<InferAttributes<IProduct>, InferCreationAttributes<IProduct>> {
  id: CreationOptional<number>;
  name: string;
  image: string;
  price: number;
  category: string;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}
