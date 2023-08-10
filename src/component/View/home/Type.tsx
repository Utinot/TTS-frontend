import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { detailProducts, listProduct } from '../../../Model/api/Products';
import { Card, Col, Row } from 'antd';

const Type = () => {

    const { id } = useParams();
    const [getDetail, setDetail] = useState<any>([]);
    const [getProduct, setProduct] = useState<any>([]);

    useEffect(() => {
        getDataDetail(),
            getDataProduct()
    }, [])

    const getDataDetail = async () => {
        const { data } = await detailProducts(id)
        setDetail(data)
    }

    const getDataProduct = async () => {
        const { data } = await listProduct()
        setProduct(data)
    }
    return (
        <div style={{ width: '80%', margin: 'auto', paddingTop: '2%' }}>
            <h1> Sản phẩm liên quan </h1>
            <Row gutter={8}>
                {getProduct?.map((item: any, index: any) => {
                    if (item.type === getDetail.type) {
                        return <Col span={4} key={index++} >
                            <Card bordered={false} style={styleCrad} hoverable>
                                <img src={item.img} alt="" width={'80%'} />
                                <div style={textStyle}>
                                    <a href={`/products/${item.id}`} style={{ color: 'black', fontSize: '22px', paddingTop: '5px' }} >
                                        {item.name}
                                    </a>
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
export default Type