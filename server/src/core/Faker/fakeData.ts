import { faker } from '@faker-js/faker';

export const products = [];

export function createRandomProducts(): any {
  return {
    name: faker.commerce.productName(),
    image: faker.image.fashion(),
    price: +faker.commerce.price(),
    category: faker.commerce.department(),
    createdAt: '2022-01-03T20:18:05.833Z',
    updatedAt: '2022-01-03T20:18:05.833Z',
  };
}

createRandomProducts();
Array.from({ length: 30 }).forEach(() => {
  products.push(createRandomProducts());
});
