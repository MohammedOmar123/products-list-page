import { FC } from 'react';

import { Filters, ProductsContainer, ItemsSummary } from '../../components';

import './style.css';

const Products: FC = () => (
  <div className="products-page">
    <Filters />
    <div>
      <ItemsSummary />
      <ProductsContainer />
    </div>
  </div>
);

export default Products;
