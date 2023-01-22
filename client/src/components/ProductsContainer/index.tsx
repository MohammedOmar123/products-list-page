import { FC, useContext, useState } from 'react';

import Card from '../Card/';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductContext';
import { Pagination } from 'antd';

import './style.css';

const ProductsContainer: FC = () => {
  const [previousPage, setPreviousPage] = useState<number>(1);
  const [count, setCount] = useState<number>(10);
  const context = useContext(ProductContext);
  const limit = 9;
  const handleChange = (currentPage: number) => {

    if (previousPage > currentPage) context?.setOffset((prev) => prev - limit)
    else context?.setOffset((prev) => prev + limit)
    setPreviousPage(currentPage);
    if(context?.data?.count) {
      setCount(context?.data?.count+10);
      console.log(context.data.count)
    }
  
  }
  if (context?.isLoading || !context?.data) return <Loading />;

  return (
    <div>
      <div className="products-container">
        {
          context.data?.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}

      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={context.data.count}
          simple={true}
          total={count}
          current={previousPage}
          onChange={handleChange}
          
        />
      </div>

    </div>
  );
};

export default ProductsContainer;
