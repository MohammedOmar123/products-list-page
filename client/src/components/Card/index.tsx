import { FC } from 'react';

import { Rate } from 'antd';

import { IProduct } from '../../interfaces/IProducts';
import Image from '../../asset/images/productHealth.jpg';

import './style.css';

const Card:FC<{ product:IProduct }> = ({ product }) => (
  <div className="card">
    <img src={product.image} alt="product" onError={(e) => { e.currentTarget.src = Image; }} />
    <div>
      <p className="product-name" style={{ textAlign: 'center' }}>
        {product.name}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px' }}>
        <p>
          {product.price}
          $
        </p>
        <p>{product.category}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Rate
          style={{ display: 'block', color: '#3577f0', fontSize: '16px' }}
          disabled
          defaultValue={4}
        />
      </div>
    </div>
  </div>
);

export default Card;
