import React, { useState } from 'react'
import { Card, Col, Row } from 'antd';
import { listProduct } from '../../api/Products';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {}


const Products = (props: Props) => {
    const [getProducts, setProducts] = useState<any>([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data } = await listProduct();
        setProducts(data);
    }

    return (
        <div>
            <form >
                <Row gutter={8}>
                    {getProducts?.map((item: any, index: any) => {
                        return <Col span={4} key={index++}>
                            <Card bordered={false} style={styleCrad}>
                                <img src={item.img} alt="" width={'80%'} />
                                <div style={textStyle}>
                                    <NavLink style={{ color: 'black', fontSize: '28px', paddingTop: '5px' }} to={`/products/${item.id}`}>
                                        {item.name}
                                    </NavLink>
                                    <p style={{ color: 'red', fontSize: '28px' }}> <span> ${item.price} </span> </p>
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
}
const textStyle: React.CSSProperties = {
    textAlign: 'left',
    paddingLeft: '10%',
}

export default Products