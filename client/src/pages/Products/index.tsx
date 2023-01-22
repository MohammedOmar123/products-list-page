import { FC } from 'react';

import  { Filters }  from '../../components';
import { ProductsContainer } from '../../components/';

import './style.css';

 const Products:FC = () => {
  return (
    <div className="products-page">
      <Filters />
      <ProductsContainer />
    </div>
  );
};

export default Products;