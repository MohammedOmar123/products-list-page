import { FC, useContext } from 'react';
import { Checkbox, Divider, Select } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


import { ProductContext } from '../../context/ProductContext';
import { categories } from '../../data/FakeData';
import './style.css';

const Filters: FC = () => {


  const productContext = useContext(ProductContext);
  const onChange = (e: CheckboxChangeEvent): void => {
    const { name } = e.target;
    if (e.target.checked && name) {
      productContext?.setCategories((prev) => [...prev, name])
    } else {
      productContext?.setCategories((prev) => prev.filter((e) => { console.log(e) }))
    }

  }

  const handleOrderByPrice = (price: string) => {
    productContext?.setOrderBy((prev) => {
      return { ...prev, price };
    });
  };

  const handleOrderByName = (name: string) => {
    productContext?.setOrderBy((prev) => {
      return { ...prev, name };
    });
  };


  return (
    <div className="filters-container">
      <div style={{ display: "flex", flexDirection: "column", gap: "4px " }}>
        <h2>Category</h2>
        {
          categories.map((category, i) => (
            <div>
              <Checkbox
                name={category}
                key={i}
                onChange={onChange}>
                {category}
              </Checkbox>
            </div>
          ))}
      </div>

      <Divider />
      <h3>Sort by</h3>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <h4>Price</h4>
        <Select
          defaultValue=""
          style={{ width: 185 }}
          onChange={handleOrderByPrice}
          options={[
            { value: 'ASC', label: 'From Lowest To Highest' },
            { value: 'DESC', label: 'From Highest To Lowest' },
          ]}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h4>Name</h4>
        <Select
          defaultValue=""
          style={{ width: 185 }}
          onChange={handleOrderByName}
          options={[
            { value: 'ASC', label: 'A - Z' },
            { value: 'DESC', label: 'Z - A' },
          ]}
        />
      </div>


    </div>
  );
};
export default Filters;