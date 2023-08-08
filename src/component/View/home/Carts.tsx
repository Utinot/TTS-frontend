import Headers from '../header/Headers'
import { useSelector, useDispatch } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { DecrementRe, IncrementRe, removeCart } from '../../../Controller/features/cart/CartSlice';
import { Col, Row } from 'antd';
// import toastr from 'toastr';


type Props = {}
const Carts = (props: Props) => {
    const carts = useSelector((state: any) => state.cart.carts)
    const dispatch = useDispatch<any>()

    let sum = 0;
    if (carts == null) {

    } else {
        carts.map((item: any) => {
            return <div>
                {sum += item.price * item.quantity}
            </div>
        })
    }
    const onDeleteProduct = (info: any) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
        if (confirm) {
            dispatch(removeCart(info))
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
            <div style={{ margin: 'auto', width: '70%', paddingTop: '7%' }}>
                <Row>
                    <Col span={16}>
                        <table style={{ width: '100%', textAlign: 'center' }}>
                            <thead style={{ borderBottom: '2px solid #DDDDDD', paddingBottom: '20px' }}>
                                <tr>
                                    <th >STT</th>
                                    <th >Ảnh</th>
                                    <th >Sản Phẩm</th>
                                    <th >Đơn giá</th>
                                    <th >Số lượng</th>
                                    <th >Tổng đơn giá</th>
                                    <th >action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {carts?.map((item: any, index: any) => {
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
                                        <td> {item.price * item.quantity} </td>
                                        <td> <a href="" onClick={() => onDeleteProduct({ _id: item._id })}>  <DeleteOutlined /> </a> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </Col>
                    <Col span={7}>
                        <div style={boxText}>
                            <div style={{ width: '80%', margin: 'auto' }}>
                                <h2 style={{ paddingTop: '10%' }}>Tổng số tiền hàng</h2>
                                <div>
                                    <h1 style={{ paddingTop: '15%' }}> Tổng cộng: <span> {sum} </span></h1>
                                </div>
                                <button style={{ width: '100%', borderRadius: '10px', backgroundColor: 'yellow', border: 'none', padding: '5%', margin: '10% 0px 10%' }}>Kiểm tra hàng</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
const boxText: React.CSSProperties = {
    marginLeft: '50px',
    borderRadius: '8px',
    border: '1px solid #DDDDDD',
    backgroundColor: 'var(--wp--preset--color--white)',
    boxShadow: '0px 6px 15px 0px rgba(64, 79, 104, 0.05)',
}


export default Carts