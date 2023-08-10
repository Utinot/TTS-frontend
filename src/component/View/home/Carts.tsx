import Headers from '../header/Headers'
import { DeleteOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../Model/app/hook';
import { decreQuantity, increQuantity, removeCart } from '../../../Controller/features/cart/CartSlice';
import { Link } from 'react-router-dom';

const list_Th = [
    { id: 1, name: 'STT' },
    { id: 1, name: 'Ảnh' },
    { id: 1, name: 'Đơn giá' },
    { id: 1, name: 'Số lượng' },
    { id: 1, name: 'Tên sản phẩm' },
    { id: 1, name: 'Tổng đơn giá' },
    { id: 1, name: 'Action' },
]

const Carts = () => {
    const { carts } = useAppSelector(item => item.cart)
    const dispatch = useAppDispatch()

    let total = 0;
    if (carts == null) {

    } else {
        carts.map((item: any) => {
            return <div>
                {total += item.price * item.quantity}
            </div>
        })
    }
    const increment = (id: any) => {
        dispatch(increQuantity(id))
    }

    const decrement = (id: any) => {
        dispatch(decreQuantity(id));
    }

    const remove = (id: any) => {
        const confỉrm = window.confirm("Bạn có muốn xóa ?");
        if (confỉrm) {
            dispatch(removeCart(id));
        }
    }

    return (
        <div>
            <div>
                <Headers />
            </div>
            <div>
                <h1 style={titleStyle}> Cart</h1>
            </div>
            <div style={{ margin: 'auto', width: '70%', paddingTop: '7%' }}>
                <Row>
                    <Col span={16}>
                        <table style={{ width: '100%', textAlign: 'center' }}>
                            <thead style={{ borderBottom: '2px solid #DDDDDD', paddingBottom: '20px' }}>
                                <tr >
                                    {list_Th.map((item: any, index: any) => {
                                        return <th style={{ paddingBottom: '3%' }} key={index++} > {item.name} </th>
                                    })}
                                </tr>
                            </thead>
                            <tbody >
                                {carts?.map((item: any, index: any) => {
                                    return <tr key={index++} style={{ borderBottom: '2px solid #DDDDDD', paddingBottom: '20px' }}>
                                        <td>{index + 1}</td>
                                        <td> <img src={item.img} alt="" width={100} /> </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <input type="submit" value='-' onClick={() => decrement(item.id)} />
                                            <span style={{ padding: '0px 3% 0px 3%' }} >{item.quantity} </span>
                                            <input style={{}} type="submit" value='+' onClick={() => increment(item.id)} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td> {item.price * item.quantity} </td>
                                        <td> <a href="" onClick={() => remove(item.id)}>  <DeleteOutlined /> </a> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </Col>
                    <Col span={7}>
                        <div style={boxText}>
                            <div style={{ width: '80%', margin: 'auto' }}>
                                <h2 style={{ paddingTop: '10%', borderBottom: '1px solid #DDDDDD', paddingBottom: '6%' }}>Tổng số tiền hàng</h2>
                                <div>
                                    <h2 style={{ paddingTop: '15%', borderBottom: '1px solid #DDDDDD', paddingBottom: '6%' }}> Tổng cộng <span style={{ float: 'right' }}> {total} </span></h2>
                                </div>
                                <div style={{ width: '100%', margin: '15% 0px 15%', textAlign: 'center', backgroundColor: '#f6eb16', padding: '6%', borderRadius: '10px', border: 'none' }}>

                                    <Link to={''} style={{ fontSize: '20px', fontWeight: '500', color: 'black' }}>Kiểm tra hàng</Link>
                                </div>
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
const titleStyle: React.CSSProperties = {
    fontFamily: "var(--wp--preset--font - family--dm - sans)",
    color: "var(--wp--preset--color--secondary)",
    textAlign: 'center',
    margin: 'auto',
    fontSize: '40px',
    fontWeight: '700',
    paddingTop: '30px'
}

export default Carts