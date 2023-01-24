import { FC } from 'react';

import { Filters } from '../../components';
import { ProductsContainer } from '../../components/';
import { ItemsSummary } from '../../components';

import './style.css';

const Products: FC = () => {
  return (
    <div className="products-page">
      <Filters />
      <div>      
        <ItemsSummary />
        <ProductsContainer /></div>

    </div>
  );
};

export default Products;