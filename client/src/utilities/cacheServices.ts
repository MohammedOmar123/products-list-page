import { ICachedProducts, } from "../interfaces";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export class CacheServices {

  static saveToCache = (newProducts: ICachedProducts, cachedProducts: ICachedProducts[] | undefined) => {

    // Check if there is array of products in cache or create a new one.
    const newCache = [];
    if (cachedProducts) {
      cachedProducts.push(newProducts);
    } else {
      newCache.push(newProducts);
    }

    // Set Expire time
    const date = new Date();
    date.setMinutes(date.getMinutes() + 2);

    // Save to Cache
    cookie.set('bayatProducts', cachedProducts || newCache, { expires: date })
  }


  static getDataFromCache = (): ICachedProducts[] | undefined => {
    return cookie.get('bayatProducts');
  }

  static isItemsStoredInCache = (cachedProducts: ICachedProducts[],
    offset: number, orderBy: { price:string, name :string }, categories: string[]) => {

    const [products] = cachedProducts.filter((product) => {
      if (product.offset === offset && product.price === orderBy.price
        && product.name === orderBy.name && product.categories === categories.join(",")
      ) {
        return true;
      }
    });
    return products;
  }


}