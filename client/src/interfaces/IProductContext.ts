import { Dispatch, SetStateAction } from 'react';

import { IData } from './IProducts';

export interface IContext {
  data:IData |null;
  setData: Dispatch<SetStateAction<IData | null>>;
  isLoading:boolean;
  setIsLoading : Dispatch<SetStateAction<boolean>>;
  setCategories: Dispatch<SetStateAction<string[]>>;
  categories :string[];
  orderBy:{ price:string, name:string  };
  setOrderBy: Dispatch<SetStateAction<{ price:string, name:string  }>>;
  offset:number;
  setOffset: Dispatch<SetStateAction<number>>;
}