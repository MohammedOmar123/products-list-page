import { FC, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const ItemsSummary : FC = () => {
  const context = useContext(ProductContext);
  return (
    <div style={{
      height: 'fit-content',
      display: 'flex ',
      justifyContent: 'flex-end',
      gap: '40px',
      width: '86%',
      marginTop: '10px',
    }}
    >
      <p>
        Showing
        {` ${context?.data?.count} ` || ` ${0} `}

        of

        {` ${context?.data?.totalNumberOfItems} ` || 0}

        results
      </p>
      <p>
        Total Price:
        {' '}
        {` ${context?.data?.totalPrice} ` || 0}
      </p>
    </div>
  );
};

export default ItemsSummary;
