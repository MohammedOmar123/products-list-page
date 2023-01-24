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
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
      // eslint-disable-next-line max-len
      axios.get(`/api/v1/products/?offset=${offset}&category=${categoriesString}&price=${orderBy.price}&name=${orderBy.name}`);
      setData(response.data);
      setProducts(response.data.products);
      setIsLoading(false);

      const {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        count, totalPrice, totalNumberOfItems, products,
      } = response.data;

      // Add the new returned products to cache
      const newProducts = {
        products,
        offset,
        categories,
        ...orderBy,
        count,
        totalPrice,
        totalNumberOfItems,
      };

      const cachedProducts = CacheServices.getDataFromCache();

      CacheServices.saveToCache(newProducts, cachedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (): Promise<void> => {
    try {
      // check if there is any data in the cache
      const cachedProducts = CacheServices.getDataFromCache();

      if (cachedProducts) {
        // check if the requested items exists in the cache
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const data = CacheServices.isItemsStoredInCache(
          cachedProducts,
          offset,
          orderBy,
          categories,
        );
        if (data && data.products) {
          setProducts(data.products);
          setCount(data.totalNumberOfItems);
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
    fetchData();
  }, [categories, orderBy, offset]);

  return (
    <ProductContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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
