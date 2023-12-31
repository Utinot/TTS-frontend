import React from 'react'
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import { UserOutlined } from '@ant-design/icons';
import SearchProduct from './SearchProduct';
const { Header } = Layout;

const Headers = () => {
  const carts = useSelector((state: any) => state.cart.carts)
  let total = 0;
  if (carts == null) {

  } else {
    carts.map((item: any) => {
      return <div>
        {total += item.price * item.quantity}
      </div>
    })
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Link to={`/`}><img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1690873321/lbefgephujjss0llooje.png" alt="" width={'100%'} />
        </Link>
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
        <a href="" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      ),
      key: 'blog',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          Category
        </a>
      ),
      key: 'Category',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          shop
        </a>
      ),
      key: 'shop',
    },
    {
      label: (
        <a href="" target="_blank" rel="noopener noreferrer">
          Others
        </a>
      ),
      key: 'Others',
    },
    {
      label: (
        <SearchProduct />
      ),

      key: 'alipay',
      style: { marginLeft: '15%', }
    },
    {
      label: (
        <a href="" > <UserOutlined style={{ fontSize: '20px' }} />Login</a>
      ),
      key: 'login',
      style: { marginLeft: '10%', }
    },
    {
      label: (
        <NavLink to={'/carts'}>
          <span style={{ fontWeight: '700', color: 'red' }}><img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1690877367/to7hfzgfgyrwkt9abbuj.png" width={"15%"} /> $ {total} </span>
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
      <div>
        <Breadcrumbs />
      </div>
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