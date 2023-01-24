import { Dispatch, SetStateAction } from 'react';

import { IData, IProduct } from './IProducts';

export interface IContext {
  data: IData | null;
  setData: Dispatch<SetStateAction<IData | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setCategories: Dispatch<SetStateAction<string[]>>;
  categories: string[];
  orderBy: IOrderBy;
  setOrderBy: Dispatch<SetStateAction<{ price: string, name: string }>>;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  products: IProduct[] | null;
}

export interface IOrderBy {
  price: string;
  name: string;
}
