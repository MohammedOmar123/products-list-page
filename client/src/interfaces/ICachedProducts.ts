import { IProduct } from './IProducts';

export interface ICachedProducts {
  categories: string[];
  products: IProduct[];
  count: number;
  offset:number;
  name:string;
  price:string;
  totalNumberOfItems:number;
  totalPrice:number;
}
