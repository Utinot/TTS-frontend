import React from 'react'
import { Col, Row, Select } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

type Props = {}

const mangFooter3 = [
    { id: '2', name: 'Về chúng tôi' },
    { id: '3', name: 'Liên hệ chúng tôi' },
    { id: '4', name: 'Trung tâm trợ giúp' },
    { id: '5', name: 'Chính sách bảo mật' },
    { id: '5', name: 'Chính sách hoàn tiền và hoàn trả' },
];

const mangFooter1 = [
    { id: '2', name: 'TV & Rạp hát tại nhà' },
    { id: '3', name: 'Máy tính & Máy tính bảng' },
    { id: '4', name: 'Trung tâm trợ Máy ảnh, Máy quay & Máy bay không người lái' },
    { id: '5', name: 'Điện thoại cầm tay' },
    { id: '6', name: 'âm thanh' },
    { id: '7', name: 'Trò chơi điện tử' },
    { id: '8', name: 'Phim & Nhạc ' },
    { id: '9', name: 'Điện tử ô tô & GPS' },
    { id: '10', name: 'Công nghệ may mặc ' },
    { id: '11', name: 'Sức khỏe & Sức khỏe' },
    { id: '12', name: 'nhà thông minh' },
];

const mangFooter2 = [
    { id: '2', name: 'Apple' },
    { id: '3', name: 'Samsung' },
    { id: '4', name: 'Xiaomi' },
    { id: '5', name: 'Dyson' },
    { id: '6', name: 'HP' },
    { id: '7', name: 'Sony' },
    { id: '8', name: 'Philips' },
    { id: '9', name: 'LG' },
    { id: '10', name: 'Lenova' },
    { id: '11', name: 'Dell' },
    { id: '12', name: 'All Brands' },
];

const mangFooter4 = [
    { id: '2', name: 'thanh toán' },
    { id: '3', name: 'Theo dõi đơn hàng' },
    { id: '4', name: 'Trả lại sản phẩm' },
    { id: '5', name: 'danh sách yêu thích' },
    { id: '5', name: 'Giỏ hàng' },
    { id: '6', name: 'Thủ tục thanh toán' },
];

const mangFooter5 = [
    { id: '2', name: 'Đăng ký để nhận thông báo về việc ra mắt sản phẩm, ưu đãi đặc biệt và tin tức.' },
    { id: '3', name: 'Theo chúng tôi' },
];


const Footer = (props: Props) => {
    return (
        <div>
            <footer>
                <div>
                    <Row style={rowStyle}>
                        <Col span={6}>
                            <div style={{ paddingLeft: '10%' }}>
                                <Row>
                                    <Col span={18} push={6} style={text}>
                                        <p>Giao hàng miễn phí cho đơn hàng $80 trở lên</p>
                                        <p>Chúng tôi giao hàng tối đa trong 48 giờ!</p>
                                    </Col>
                                    <Col span={6} pull={18} style={{ paddingTop: '2%' }}>
                                        <img src="https://onmenta.com/wp-content/themes/emart-1/assets/images/icon-1.svg" alt="" width={'60%'} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{ paddingLeft: '10%' }}>
                                <Row>
                                    <Col span={18} push={6} style={text}>
                                        <p>Hài lòng hoặc hoàn lại tiền</p>
                                        <p>Đổi trả miễn phí trong vòng 14 ngày</p>
                                    </Col>
                                    <Col span={6} pull={18} style={{ paddingTop: '2%' }}>
                                        <img src="https://onmenta.com/wp-content/themes/emart-1/assets/images/icon-2.svg" alt="" width={'60%'} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{ paddingLeft: '10%' }}>
                                <Row>
                                    <Col span={18} push={6} style={text}>
                                        <p>Giao hàng miễn phí cho đơn hàng $80 trở lên</p>
                                        <p>Chúng tôi giao hàng tối đa trong 48 giờ!</p>
                                    </Col>
                                    <Col span={6} pull={18} style={{ paddingTop: '2%' }}>
                                        <img src="https://onmenta.com/wp-content/themes/emart-1/assets/images/icon-3.svg" alt="" width={'60%'} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{ paddingLeft: '10%' }}>
                                <Row>
                                    <Col span={18} push={6} style={text}>
                                        <p>Giao hàng miễn phí cho đơn hàng $80 trở lên</p>
                                        <p>Chúng tôi giao hàng tối đa trong 48 giờ!</p>
                                    </Col>
                                    <Col span={6} pull={18} style={{ paddingTop: '2%' }}>
                                        <img src="https://onmenta.com/wp-content/themes/emart-1/assets/images/icon-4.svg" alt="" width={'60%'} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{ background: 'black' }}>
                    <Row style={styleFooter}>
                        <Col span={4}>
                            <h2>Danh mục phổ biến</h2>
                            {mangFooter1?.map((item, index) => {
                                return <div style={{ paddingTop: '6%', }} key={index}>
                                    <li style={{ display: 'initial', }}><a href="" style={textA}> {item.name} </a></li>
                                </div>
                            })}
                        </Col>
                        <Col span={5} style={{ paddingLeft: '3%' }}>
                            <h2>Chăm sóc khách hàng</h2>
                            {mangFooter2?.map((item, index) => {
                                return <div style={{ paddingTop: '6%', }} key={index}>
                                    <li style={{ display: 'initial', }}><a href="" style={textA}> {item.name} </a></li>
                                </div>
                            })}
                        </Col>
                        <Col span={5} style={{ paddingLeft: '2%' }}>
                            <h2>Liên kết hữu ích</h2>
                            {mangFooter3?.map((item, index) => {
                                return <div style={{ paddingTop: '6%', }} key={index}>
                                    <li style={{ display: 'initial', }}><a href="" style={textA}> {item.name} </a></li>
                                </div>
                            })}
                        </Col>
                        <Col span={5} style={{ paddingLeft: '2%' }}>
                            <h2>Chăm sóc khách hàng</h2>
                            {mangFooter4?.map((item, index) => {
                                return <div style={{ paddingTop: '6%', }} key={index}>
                                    <li style={{ display: 'initial', }}><a href="" style={textA}> {item.name} </a></li>
                                </div>
                            })}
                        </Col>
                        <Col span={5} style={{ paddingLeft: '2%' }}>
                            <h2>Liên kết hữu ích</h2>
                            {mangFooter5?.map((item, index) => {
                                return <div style={{ paddingTop: '6%', }} key={index}>
                                    <li style={{ display: 'initial', }}><a href="" style={textA}> {item.name} </a></li>
                                </div>
                            })}
                            <div >
                                <FacebookOutlined style={iconFooter} />
                                <InstagramOutlined style={iconFooter} />
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <hr />
                        <div>
                            <Row style={{ color: '#fff', maxWidth: '80%', margin: 'auto' }}>
                                <Col span={8} style={{padding:'2%'}}>© Beemart – Bảo lưu mọi quyền</Col>
                                <Col span={8} style={{paddingTop: '2px', textAlign:'center'}}><img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1690873321/lbefgephujjss0llooje.png" alt="" /></Col>
                                <Col span={8} style={{padding:'10px 4%', textAlign:'end'}}>
                                    <select name="" id="" style={{ background: 'black', padding: '2%', borderRadius: '10px' }}>
                                        <option value="">Hoa Kỳ (USD$)</option>
                                        <option value="">ansd</option>
                                        <option value="">ansd</option>
                                    </select>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}
const rowStyle: React.CSSProperties = {
    textAlign: 'center',
    paddingTop: '2%',
    maxWidth: '80%',
    margin: 'auto',
}
const textA: React.CSSProperties = {
    display: 'inline',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    fontSize: '15px',

}

const text: React.CSSProperties = {
    fontWeight: '500',
    fontSize: '15px',
    paddingTop: '2%',
    textAlign: 'center'
}
const styleFooter: React.CSSProperties = {
    // textAlign: 'center',
    paddingTop: '3%',
    color: '#fff',
    maxWidth: '80%',
    margin: 'auto',
}
const iconFooter: React.CSSProperties = {
    fontSize: '40px',
    padding: '3%'
}


export default Footer