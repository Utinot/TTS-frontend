import React, { useState } from 'react'
import { Card, Col, Row } from 'antd';
import { listProduct } from '../../../Model/api/Products';
import { useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { listCategoryProduct } from '../../../Model/api/Category';

type Props = {}


const CategoryProduct = (props: Props) => {
    const { id } = useParams();
    const [getProducts, setProducts] = useState<any>([]);
    const [getCategory, setCategory] = useState<any>()

    useEffect(() => {
        getDataProduct();
        getDataCategory();
    }, [])

    const getDataProduct = async () => {
        const { data } = await listProduct();
        setProducts(data);
    }

    const getDataCategory = async () => {
        const { data } = await listCategoryProduct(id)
        setCategory(data)
    }

    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <Row gutter={8}>
                {getProducts?.map((item: any, index: any) => {
                    if (getCategory?.id === item.category) {
                        return <Col span={4} key={index++} >
                            <Card bordered={false} style={styleCrad} hoverable>
                                <img src={item.img} alt="" width={'80%'} />
                                <div style={textStyle}>
                                    <NavLink style={{ color: 'black', fontSize: '22px', paddingTop: '5px' }} to={`/products/${item.id}`}>
                                        {item.name}
                                    </NavLink>
                                    <p style={{ color: 'black', fontSize: '22px', fontWeight: 'bold' }}> <span> ${item.price} </span> </p>
                                </div>
                            </Card>
                        </Col>
                    }


                })}
            </Row>
        </div>
    )
}
const styleCrad: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '5%',
}
const textStyle: React.CSSProperties = {
    textAlign: 'left',
    paddingLeft: '10%',
}

export default CategoryProduct