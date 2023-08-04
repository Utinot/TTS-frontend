import React, { useEffect } from 'react'
import Headers from '../../component/header/Headers'
import { useSelector, useDispatch } from 'react-redux';
import { DecrementRe, IncrementRe, readCarts, removeCart } from '../../features/cart/Cart.silce';
import { DeleteOutlined } from '@ant-design/icons';


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

    const Decrement = (info: any) => {
        dispatch(DecrementRe(info))
    }
    const Increment = (info: any) => {
        dispatch(IncrementRe(info))
    }


    return (
        <div>
            <div>
                <Headers />
            </div>
            <div >
                <table style={{ width: '100%', textAlign: 'center' }}>
                    <thead style={{ borderStyle: 'solid', borderColor: 'inherit', borderWidth: '1px', paddingTop:'50px' }}>
                        <tr>
                            <th >STT</th>
                            <th >Ảnh</th>
                            <th >Giá</th>
                            <th >Số lượng</th>
                            <th >Tên sản phẩm</th>
                            <th >Màu</th>
                            <th >action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {carts.map((item: any, index: any) => {
                            return <tr style={{ borderStyle: 'solid', borderColor: 'inherit', borderWidth: '1px', }}>
                                <td>{index + 1}</td>
                                <td> <img src={item.img} alt="" width={100} /> </td>
                                <td>{item.price}</td>
                                <td>
                                    <input type="submit" value='-' onClick={() => Decrement({ _id: item._id })} />
                                    <span style={{ padding: '0px 3% 0px 3%' }} >{item.quantity} </span>
                                    <input style={{}} type="submit" value='+' onClick={() => Increment({ _id: item._id })} />
                                </td>
                                <td>{item.name}</td>
                                <td> {item.color} </td>
                                <td> <a href="" onClick={() => onDeleteProduct({ _id: item._id })}>  <DeleteOutlined /> </a> </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div style={{ padding: '3%' }}>
                    <h1> Tổng Tiền : <span style={{ fontWeight: '800', fontSize: '30px', color: 'red' }}> {sum} </span>  </h1>
                </div>
            </div>
        </div>
    )
}

export default Carts