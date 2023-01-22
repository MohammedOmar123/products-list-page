import {
  createContext, ReactNode, useEffect, useState,
} from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

import { IData } from '../interfaces/IProducts';
import { IContext } from '../interfaces';

export const ProductContext = createContext<IContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<{ price: string, name: string }>({
    price: "",
    name: "",
  });


  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const categoriesString = categories.join(",");
      const response = await
        axios.get(`/api/v1/products/?offset=${offset}&category=${categoriesString}&price=${orderBy.price}&name=${orderBy.name}`);
      setData(response.data);
      setIsLoading(false)
    } catch (error: any) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong',
      })
    }
  }

  useEffect(() => {
    fetchData();
  }, [categories, orderBy, offset]);

  return (
    <ProductContext.Provider
      value={{
        data, setData, isLoading, setIsLoading,
        setCategories, categories, orderBy, setOrderBy,
        setOffset, offset
      }}>
      {children}
    </ProductContext.Provider>
  );
};