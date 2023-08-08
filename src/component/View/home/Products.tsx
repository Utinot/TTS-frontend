import React, { useState } from 'react'
import { Card, Col, Row } from 'antd';
import { listProduct } from '../../../Model/api/Products';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {}


const Products = (props: Props) => {
    const [getProducts, setProducts] = useState<any>([]);

    useEffect(() => {
        getDataProduct()
    }, [])

    const getDataProduct = async () => {
        const { data } = await listProduct();
        setProducts(data);
    }

    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <form >
                <Row gutter={8}>
                    {getProducts?.map((item: any, index: any) => {
                        return <Col span={4} key={index++}>
                            <Card bordered={false} style={styleCrad}>
                                <img src={item.img} alt="" width={'80%'} />
                                <div style={textStyle}>
                                    <NavLink style={{ color: 'black', fontSize: '22px', paddingTop: '5px' }} to={`/products/${item.id}`}>
                                        {item.name}
                                    </NavLink>
                                    <p style={{ color: 'black', fontSize: '22px', fontWeight: 'bold' }}> <span> ${item.price} </span> </p>
                                </div>
                            </Card>
                        </Col>
                    })}
                </Row>
            </form>
        </div>
    )
}
const styleCrad: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '5%'
}
const textStyle: React.CSSProperties = {
    textAlign: 'left',
    paddingLeft: '10%',
}

export default Products