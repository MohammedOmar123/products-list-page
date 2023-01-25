import { FC } from 'react';
import { Card as AntCard, Tag } from 'antd/lib';

import { IProduct } from '../../interfaces/IProducts';

import './style.css';

const { Meta } = AntCard;

const Card:FC<{ product:IProduct }> = ({ product }) => (
  <AntCard
    hoverable
    style={{ width: 235 }}
    cover={(
      <img
        src={product.image}
        alt={product.name}
        style={{
          objectFit: 'contain',
          width: 235,
          height: '180px',
        }}
      />
)}
  >
    <Meta title={product.name} description="www.instagram.com" />
    <div className="price-category">
      <p className="price">
        {product.price}
        $
      </p>
      <Tag color="blue">{product.category}</Tag>

    </div>
  </AntCard>
);

export default Card;
