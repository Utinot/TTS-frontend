import React from 'react'
import { Layout, Menu, type MenuProps } from 'antd';
import { AlignLeftOutlined, RocketOutlined, SmileOutlined } from '@ant-design/icons';
const { Header } = Layout;


const items: MenuProps['items'] = [
    {
        label: (
            <a href="" style={{ borderRight: '2px solid #DDDDDD', paddingRight: '15px', height: '100%' }}><AlignLeftOutlined style={{ fontSize: '20px' }} /> ALL Category</a>
        ),
        key: 'Category',
    },
    {
        label: (
            <a href=""> <SmileOutlined style={{ fontSize: '20px' }} /> Top Deals</a>
        ),
        key: 'Deals',
    },
    {
        label: (
            <a href=""><RocketOutlined  style={{ fontSize: '20px' }} /> Flash Sale</a>
        ),
        key: 'Sale',
    },
    {
        label: (
            <a href=""> <RocketOutlined  style={{ fontSize: '20px' }} /> Computers</a>
        ),
        key: 'Computers',
    },
    {
        label: (
            <a href=""> <RocketOutlined  style={{ fontSize: '20px' }} /> Cameras</a>
        ),
        key: 'Cameras',
    },
    {
        label: (
            <a href=""><RocketOutlined style={{ fontSize: '20px' }} /> TV & Video</a>
        ),
        key: 'Video',
    },
    {
        label: (
            <a href=""> <RocketOutlined style={{ fontSize: '20px' }} /> Headphones</a>
        ),
        key: 'Headphones',
    },
    {
        label: (
            <a href=""><RocketOutlined style={{ fontSize: '20px' }}  /> Phones</a>
        ),
        key: 'Phones',
    },
    {
        label: (
            <a href=""><RocketOutlined style={{ fontSize: '20px' }} /> Watches
            </a>
        ),
        key: 'Watches',
    },
];

const Category = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <Menu style={categoryStyle} mode="horizontal" items={items}>
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
    backgroundColor: '#fff',
}

const categoryStyle: React.CSSProperties = {
    paddingLeft: '10%',
    fontSize: '19px',
    // fontWeight: 'bold',
    color: 'black'
}

export default Category