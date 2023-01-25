import { FC, useContext, useState } from 'react';

import { Col, Pagination, Row } from 'antd/lib';

import ProductCard from '../Card';
import Loading from '../Loading';
import { ProductContext } from '../../context/ProductContext';
import './style.css';

const ProductsContainer: FC = () => {
  const context = useContext(ProductContext);
  const [prevPage, setPrevPage] = useState<number>(1);
  const handleChange = (page: number):void => {
    if (context?.count) {
      const { setOffset } = context;
      if (page > prevPage) {
        setOffset((prev) => prev + 9);
      } else {
        setOffset((prev) => prev - 9);
      }
      setPrevPage(page);
    }
  };

  if (context?.isLoading || !context?.products) return <Loading />;

  return (
    <div>
      <div
        className="products-container"
      >
        {context?.products?.length ? (
          <Row gutter={[24, 24]}>
            {context?.products?.map((product) => (
              <Col
                xs={24}
                sm={16}
                md={12}
                lg={8}
                xl={6}
                key={product.id}
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )
          : <div style={{ height: '80Vh' }}><p> No data Matched </p></div>}

      </div>
      {/** Page size is the number of items per page */}
      <Pagination
        total={context?.data?.totalNumberOfItems || context?.count}
        pageSize={9}
        onChange={handleChange}
        simple
        current={prevPage}
        style={{
          margin: '20px auto', display: 'block', width: '250px',
        }}
      />
    </div>
  );
};

export default ProductsContainer;
