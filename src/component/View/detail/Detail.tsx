import React, { useEffect, useState } from 'react'
import { detailProducts } from '../../../Model/api/Products'
import { useParams } from 'react-router-dom'
import Headers from '../header/Headers'
import { Col, Row } from 'antd'
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form'
import "toastr/build/toastr.min.css";
// import toastr from 'toastr';
import { addCart } from '../../../Controller/features/cart/CartSlice'
import Footer from '../footer/Footer'

type Props = {}


const Detail = (props: Props) => {
    const { id } = useParams();
    const [getDetail, setDetail] = useState<any>([]);
    document.title = getDetail.name;
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch<any>()
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        getDataDetail()
    }, [])

    const getDataDetail = async () => {
        const { data } = await detailProducts(id)
        setDetail(data)
    }

    const ProductCart = {
        _id: getDetail.id,
        name: getDetail.name,
        price: getDetail.price,
        color: getDetail.color,
        img: getDetail.img,
        quantity,

    }


    const on_Click_Cart: SubmitHandler<any> = () => {
        dispatch(addCart(ProductCart))
    }

    return (
        <div>

            <div>
                <Headers />
            </div>
            <div>
                <form action="" onSubmit={handleSubmit(on_Click_Cart)}>
                    <Row style={{ maxWidth: '80%', margin: 'auto' }}>
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

                                <span style={{ color: 'red', fontWeight: '700', fontSize: '30px', paddingTop: '3%' }}> ${getDetail.price} </span>
                                <p style={{ fontWeight: '400', fontSize: '30px', paddingTop: '3%' }}>Màu sắc : <span> {getDetail.color} </span></p>
                                <button type='submit' style={{ padding: '2%', borderRadius: '5px', backgroundColor: 'red', fontWeight: '700', fontSize: '18px' }}> Thêm vào giỏ hàng </button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
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