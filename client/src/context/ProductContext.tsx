/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, ReactNode, useEffect, useState,
} from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
  IContext, IOrderBy, IData, IProduct,
} from '../interfaces';
import { CacheServices } from '../utilities/cacheServices';

export const ProductContext = createContext<IContext | null>(null);
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData | null>(null);
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(9);
  const [orderBy, setOrderBy] = useState<IOrderBy>({
    price: '',
    name: '',
  });

  const sendApiRequest = async (): Promise<void> => {
    try {
      const categoriesString = categories.join(',');
      const response = await
      axios.get(`/api/v1/products/?offset=${offset}
      &category=${categoriesString}&price=${orderBy.price}&name=${orderBy.name}`);
      setData(response.data);
      setProducts(response.data.products);
      setIsLoading(false);
      // Add the new returned products to cache
      const newProducts = {
        offset,
        categories,
        ...orderBy,
        ...response.data,
      };

      const cachedProducts = CacheServices.getDataFromCache();

      CacheServices.saveToCache(newProducts, cachedProducts);
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong',
      });
    }
  };

  const fetchData = async (): Promise<void> => {
    try {
      // check if there is any data in the cache
      const cachedProducts = CacheServices.getDataFromCache();

      if (cachedProducts) {
        // check if the requested items exists in the cache
        const storedItems = CacheServices.isItemsStoredInCache(
          cachedProducts,
          offset,
          orderBy,
          categories,
        );

        if (storedItems && storedItems.products) {
          setProducts(storedItems.products);
          setData(storedItems);
          setIsLoading(false);
        } else {
          // if there is no data in the cache.
          sendApiRequest();
        }
      } else {
        // if the requested data doesn't exist in the cache send a new request.
        sendApiRequest();
      }
    } catch (error: any) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong',
      });
    }
  };

  useEffect(() => {
    // Start from here
    fetchData();
  }, [categories, orderBy, offset]);

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        products,
        setCategories,
        categories,
        orderBy,
        setOrderBy,
        setOffset,
        offset,
        count,
        setCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
