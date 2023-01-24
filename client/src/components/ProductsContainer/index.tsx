import { FC, useContext, useState } from 'react';

import ProductCard from '../Card';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductContext';

import { Pagination } from 'antd';

import './style.css';

const ProductsContainer: FC = () => {
  const context = useContext(ProductContext);
  const [prevPage, setPrevPage] = useState<number>(1);
  const handleChange = (page: number) => {
    if (context?.count) {
      if (page > prevPage) {
        context.setOffset((prev) => prev + 9);
      } else {
        context.setOffset((prev) => prev - 9);
      }
      setPrevPage(page);
    }
  }

  if (context?.isLoading || !context?.products) return <Loading />;

  return (
    <div>
      <div className="products-container">
        {
          context?.products?.length ?
            context?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
            : <div style={{ height:"80Vh"}}><p> No data Matched </p></div>
        }

      </div>
      {/** Page size is the number of items per page */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={context?.data?.totalNumberOfItems || context?.count}
          pageSize={9}
          onChange={handleChange}
          simple={true}
          current={prevPage}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
