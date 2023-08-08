import React from 'react'
import './Benner.css'

type Props = {}


const Benner = (props: Props) => {
    return (
        <div>
            <div className='benner'>
                <div className='conten-text'>
                    <div className='text'>
                        <h5>Dyson</h5>
                        <h1>Máy hút bụi thông minh</h1>
                        <h3>$ 1200</h3>
                        <button> Mua hàng </button>
                    </div>
                </div>
                <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1690878315/idvffhm7wahlccgcdbst.png" alt="" width={'100%'} />
            </div>
        </div>

    )
}

export default Benner