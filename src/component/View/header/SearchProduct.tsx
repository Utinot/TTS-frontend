import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;


const onSearch = (value: string) => console.log(value);

const SearchProduct: React.FC = () => (
  <Space direction="vertical">
    <Search style={{ marginTop: '7%', width: '140%' }} placeholder="search name" onSearch={onSearch} enterButton />
  </Space>
);

export default SearchProduct;