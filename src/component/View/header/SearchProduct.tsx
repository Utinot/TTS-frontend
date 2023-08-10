import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;


const SearchProduct: React.FC = () => (
  <Space direction="vertical">
    <Search style={{ marginTop: '7%', width: '140%' }} placeholder="search name" enterButton />
  </Space>
);

export default SearchProduct;