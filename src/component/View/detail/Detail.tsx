import React, { useEffect, useState } from 'react'
import { detailProducts, listProduct } from '../../../Model/api/Products'
import { useParams } from 'react-router-dom';
import Headers from '../header/Headers'
import { Col, Row } from 'antd'
import { useDispatch } from 'react-redux';
import "toastr/build/toastr.min.css";
import Footer from '../footer/Footer'
import Category from '../category/Category'
import { addToCart } from '../../../Controller/features/cart/CartSlice'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Type from '../home/Type';

const Detail = () => {
    const { id } = useParams();
    const [getDetail, setDetail] = useState<any>([]);
    const [getProduct, setProduct] = useState<any>([]);
    const dispatch = useDispatch<any>()

    const addTo = (item: any) => {
        dispatch(addToCart(item));
    }
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
        <div>

            <div>
                <Headers />
            </div>
            <div>
                <Category />
            </div>
            <div style={{ marginTop: '3%', }}>
                <Row style={{ maxWidth: '80%', margin: 'auto', borderBottom: '2px solid #DDDDDD' }}>
                    <Col span={12}>
                        <div style={styleImg}>
                            <img src={getDetail.img} className='img' alt="" style={{ width: '100%', height: 'auto', display: 'block', transition: ' all .3s ease' }} />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <h1 style={{ paddingTop: '5%' }}>{getDetail.name}</h1>
                            <hr />
                            <p style={{ paddingTop: '5%', fontWeight: '400', fontSize: '20px' }}>{getDetail.description}</p>
                            <span style={{ color: 'black', fontWeight: '700', fontSize: '30px', paddingTop: '3%' }}> ${getDetail.price} </span>
                            <p style={{ fontWeight: '400', fontSize: '30px', paddingTop: '3%' }}>Màu sắc : <span> {getDetail.color} </span></p>
                            <button onClick={() => addTo(getDetail)} type='submit' style={{ padding: '2%', borderRadius: '5px', backgroundColor: '#F6BE16', fontWeight: '400', fontSize: '18px' }}> <span><ShoppingCartOutlined /></span> THÊM VÀO GIỎ HÀNG </button>
                        </div>
                    </Col>
                </Row>
            </div>

            <Type />

            <div>
                <Footer />
            </div>
        </div>
    )
}

const styleImg: React.CSSProperties = {
    padding: '2%',
    textAlign: 'center',
    width: '60%',
    height: '100%',
    overflow: 'hidden',
    display: 'block',
}




export default Detail