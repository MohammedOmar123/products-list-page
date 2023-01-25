import { FC } from 'react';

import { Filters, ProductsContainer, ItemsSummary } from '../../components';

import './style.css';

const Products: FC = () => (
  <div className="products-page">
    <Filters />
    <div style={{ minWidth: '80%' }}>
      <ItemsSummary />
      <ProductsContainer />
    </div>
  </div>
);

export default Products;
