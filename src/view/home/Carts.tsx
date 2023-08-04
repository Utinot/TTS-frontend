import React, { useEffect } from 'react'
import Headers from '../../component/header/Headers'
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector, useDispatch } from 'react-redux';
import { DecrementRe, IncrementRe, readCarts, removeCart } from '../../features/cart/Cart.silce';

type Props = {}
const Carts = (props: Props) => {
    const carts = useSelector((state: any) => state.cart.carts)
    const dispatch = useDispatch<any>()

    console.log(carts);
    


    let sum = 0;
    if (carts == null) {

    } else {
        carts.map((item: any) => {
            return <div>
                {sum += item.price * item.quantity}
            </div>
        })
    }

    useEffect(() => {
        dispatch(readCarts())
    }, [dispatch])

    const onDeleteProduct = (info: any) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
        if (confirm) {
            dispatch(removeCart(info))
            console.log('xóa thanh cong');
        }
    }

    const Decrement = (id: any) => {
        dispatch(DecrementRe(id))
    }
    const Increment = (id: any) => {
        dispatch(IncrementRe(id))
    }
    const columns: ColumnsType<any> = [
        {
            title: 'Ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (theImageURL) => (
                <img alt={theImageURL} src={theImageURL} width={100} />
            ),
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity) => (
                <div style={{ fontWeight: '700', }}>
                    <div>
                        <input type="submit" value='-' onClick={() => Decrement({ _id: carts._id })} />
                        <span style={{ padding: '0px 3% 0px 3%' }} >{quantity} </span>
                        <input style={{}} type="submit" value='+' onClick={() => Increment({ _id: carts.id })} />
                    </div>
                </div>
            ),
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'màu',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => onDeleteProduct({ _id: carts.id })} >Delete</a>
                </Space>
            ),
        },
    ];


    return (
        <div>
            <div>
                <Headers />
            </div>
            <div>
                <Table columns={columns} dataSource={carts} />;
                <div style={{ padding: '3%' }}>
                    <h1> Tổng Tiền : <span style={{ fontWeight: '800', fontSize: '30px', color: 'red' }}> {sum} </span>  </h1>
                </div>
            </div>
        </div>
    )
}

export default Carts