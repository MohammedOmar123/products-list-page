import { FC } from 'react';

import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import './style.css';

const NotFound:FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      style={{ margin: '90px auto' }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={() => navigate('/')} type="primary">Back Home</Button>}
    />
  );
};

export default NotFound;
