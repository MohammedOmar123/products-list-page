import { FC } from 'react';

import { Rate } from 'antd';

import { IProduct } from '../../interfaces/IProducts';
import Image from '../../asset/images/productHealth.jpg'

import './style.css';


const Card:FC<{ product:IProduct }> = ({ product }) => (
  <div className="card">
    <img src={product.image} alt="product" onError={(e) => {e.currentTarget.src = Image}} />
    <div className="card-body">
      <div className="row">
        <h4 className="card-title">{product.category}</h4>
        <p className="price">{product.price} $</p>
      </div>
      <div style={{ display:"flex", flexDirection:"column",alignItems:"center" }}>
        <p className="description">
       {product.name}
      </p>
      <Rate style={{ display: 'block', color: '#08ab0a', fontSize: '16px'}}
        disabled
        defaultValue={4}
      /></div>
    </div>
      {/* <Button type="primary" style={{ border:"15px solid red" }}>add  to Cart</Button> */}
  </div>
);

export default Card;
