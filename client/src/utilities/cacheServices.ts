import Cookies from 'universal-cookie';

import { ICachedProducts, IOrderBy } from '../interfaces';

const cookie = new Cookies();
export class CacheServices {
  static saveToCache = (
    newProducts: ICachedProducts,
    cachedProducts: ICachedProducts[] | undefined,
  ): void => {
    // Check if there is array of products in cache or create a new one.
    const newCache = [];
    if (cachedProducts) {
      cachedProducts.push(newProducts);
    } else {
      newCache.push(newProducts);
    }

    // Set Expire time
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);

    // Save to Cache
    cookie.set('bayatProducts', cachedProducts || newCache, { expires });
  };

  static getDataFromCache = (): ICachedProducts[] | undefined => cookie.get('bayatProducts');

  static isItemsStoredInCache = (
    cachedProducts: ICachedProducts[],
    offset: number,
    orderBy: IOrderBy,
    categories: string[],
  ): ICachedProducts => {
    const [products] = cachedProducts.filter((product) => {
      const { price, name } = product;

      // check page number and other settings
      if (product.offset === offset && price === orderBy.price && name === orderBy.name) {
        if (!this.isSameSelectedCategories(product.categories, categories)) return false;

        return true;
      }
      return false;
    });
    return products;
  };

  // Check if the selected categories are the same cached categories.
  // if they are the same, that means the user requests the same data that is stored in the cache.
  static isSameSelectedCategories = (
    cachedCategories: string[],
    selectedCategories: string[],
  ):boolean => {
    if (cachedCategories.length !== selectedCategories.length) return false;

    if (cachedCategories.filter((ele) => !selectedCategories.includes(ele)).length) return false;

    return true;
  };
}
