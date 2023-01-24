import { ICachedProducts, } from "../interfaces";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export class CacheServices {

  static saveToCache = (newProducts: ICachedProducts, cachedProducts: ICachedProducts[] | undefined) => {
    console.log(newProducts || cachedProducts)
    // Check if there is array of products in cache or create a new one.
    const newCache = [];
    if (cachedProducts) {
      cachedProducts.push(newProducts);
    } else {
      newCache.push(newProducts);
    }

    // Set Expire time
    const date = new Date();
    date.setMinutes(date.getMinutes() + 5);

    // Save to Cache
    cookie.set('bayatProducts', cachedProducts || newCache, { expires: date })
  }


  static getDataFromCache = (): ICachedProducts[] | undefined => {
    return cookie.get('bayatProducts');
  }

  static isItemsStoredInCache = (cachedProducts: ICachedProducts[],
    offset: number,
    orderBy: { price: string, name: string },
    categories: string[]) => {
    console.log("All  cachedProducts");
    console.log(cachedProducts);
    console.log(" selected categories")
    console.log(categories)
    const [products] = cachedProducts.filter((product) => {
      const { price, name } = product;

      if (product.offset === offset && price === orderBy.price && name === orderBy.name) {
       
      
        if (!this.isSameSelectedCategories(product.categories, categories)) return false;

        return true;

      } else {
        return false;
      }
    });
    return products;
  }

  static isSameSelectedCategories = (storedCategories: string[], selectedCategories: string[]) => {
    console.log(storedCategories);
    console.log(selectedCategories)
    console.log(storedCategories.length, selectedCategories.length)
    if (storedCategories.length !== selectedCategories.length) return false

    if (storedCategories.filter((ele) => !selectedCategories.includes(ele)).length) return false;

    return true
  }
}