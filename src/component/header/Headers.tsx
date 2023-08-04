import React, { useState } from 'react'
import { Layout, Menu, Input } from 'antd';
import type { MenuProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;

const Headers = (props: any) => {
  const carts = useSelector((state: any) => state.cart.carts)
  let sum = 0;
  if (carts == null) {

  } else {
    carts.map((item: any) => {
      return <div>
        {sum += item.price * item.quantity}
      </div>
    })
  }
  console.log(sum);

  const items: MenuProps['items'] = [
    {
      label: (
        <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1690873321/lbefgephujjss0llooje.png" alt="" width={'100%'} />
      ),
      key: 'logo',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          Home
        </a>
      ),
      key: 'Home',
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      ),
      key: 'blog',
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Category
        </a>
      ),
      key: 'Category',
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          shop
        </a>
      ),
      key: 'shop',
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Others
        </a>
      ),
      key: 'Others',
    },
    {
      label: (
        // <ZoomInOutlined />
        <Search placeholder="input search text" enterButton
          style={{ paddingTop: '8%', width: '100%' }}
        />
      ),

      key: 'alipay',
      style: { marginLeft: '30%', }
    },
    {
      label: (
        <a href="">login</a>
      ),
      key: 'login',
    },
    {
      label: (
        <NavLink to={'/carts'}>
          <span style={{ fontWeight: '700', color: 'red' }}><img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1690877367/to7hfzgfgyrwkt9abbuj.png" width={"20%"} /> $ {sum} </span>
        </NavLink>
      ),
      key: 'card',
    },
  ];


  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Menu style={MenuStyle} mode="horizontal" items={items}>
        </Menu>
      </Header>
    </Layout>
  )
}



const layoutStyle: React.CSSProperties = {
  margin: 'auto',
}

const headerStyle: React.CSSProperties = {
  maxWidth: '100%',
  backgroundColor: 'black',
}

const MenuStyle: React.CSSProperties = {
  backgroundColor: 'black',
  color: '#fff',
  paddingLeft: '10%',
}


export default Headers