import { FC, useContext, useState } from 'react';

import { Checkbox, Select, Layout } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import { ProductContext } from '../../context/ProductContext';
import { categories } from '../../data/FakeData';
import './style.css';

const { Sider } = Layout;

const Filters: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const context = useContext(ProductContext);

  const onChange = (e: CheckboxChangeEvent): void => {
    const { name } = e.target;
    if (e.target.checked && name) {
      context?.setCategories((prev) => [...prev, name]);
    } else {
      context?.setCategories((prev) => prev.filter((category) => category !== name));
    }
  };

  const handleOrderByPrice = (price: string): void => {
    context?.setOrderBy(() => ({ name: '', price }));
  };

  const handleOrderByName = (name: string): void => {
    context?.setOrderBy(() => ({ price: '', name }));
  };

  return (

    <Layout style={{ minHeight: '100vh', color: '#eee' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ overflow: 'hidden' }}
        width={230}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <div className="filters-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px ' }}>
            <h2 className="filters">Categories</h2>
            {
              categories.map((category) => (
                <div key={category.id}>
                  <Checkbox
                    name={category.name}
                    onChange={onChange}
                    style={{ color: '#eee' }}
                  >
                    {category.name}
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
              width: '200px',
            }}
            >
              <p>Price</p>
              <Select
                value={context?.orderBy.price}
                style={{ width: '150px' }}
                onChange={handleOrderByPrice}
                options={[
                  { value: 'ASC', label: 'Lowest To Highest' },
                  { value: 'DESC', label: 'Highest To Lowest' },
                  { value: '', label: '' },
                ]}
              />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '200px',
            }}
            >
              <p>Name</p>
              <Select
                value={context?.orderBy.name}
                style={{ width: '150px' }}
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

      </Sider>
    </Layout>
  );
};
export default Filters;
