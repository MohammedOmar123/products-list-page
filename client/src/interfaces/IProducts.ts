export interface IData {
  products: IProduct[],
  count: number,
  totalPrice: number,
}


export interface IProduct  {
  id: string;
  name: string ;
  category: string;
  price: number;
  image: string ;
}

