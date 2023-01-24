import { FC, useContext } from 'react';

import { Checkbox, Select } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { v4 as uuidv4 } from 'uuid';

import { ProductContext } from '../../context/ProductContext';
import { categories } from '../../data/FakeData';
import './style.css';

const Filters: FC = () => {
  const context = useContext(ProductContext);
  const onChange = (e: CheckboxChangeEvent): void => {
    const { name } = e.target;
    if (e.target.checked && name) {
      context?.setCategories((prev) => [...prev, name]);
    } else {
      context?.setCategories((prev) => prev.filter((category) => category !== name));
    }
  };

  const handleOrderByPrice = (price: string) : void => {
    context?.setOrderBy((prev) => ({ ...prev, price }));
  };

  const handleOrderByName = (name: string) : void => {
    context?.setOrderBy((prev) => ({ ...prev, name }));
  };

  return (
    <div className="filters-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px ' }}>
        <h2 className="filters">Categories</h2>
        {
          categories.map((category) => (
            <div key={uuidv4()}>
              <Checkbox
                name={category}
                onChange={onChange}
              >
                {category}
              </Checkbox>
            </div>
          ))
}
      </div>
      <div>
        <h3 className="filters">Sort by</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        >
          <h4>Price</h4>
          <Select
            defaultValue=""
            style={{ width: 185 }}
            onChange={handleOrderByPrice}
            options={[
              { value: 'ASC', label: 'From Lowest To Highest' },
              { value: 'DESC', label: 'From Highest To Lowest' },
              { value: '', label: '' },

            ]}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h4>Name</h4>
          <Select
            defaultValue=""
            style={{ width: 185 }}
            onChange={handleOrderByName}
            options={[
              { value: 'ASC', label: 'A - Z' },
              { value: 'DESC', label: 'Z - A' },
              { value: '', label: '' },

            ]}
          />
        </div>

      </div>
    </div>
  );
};
export default Filters;
