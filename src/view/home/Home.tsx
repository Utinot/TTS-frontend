import React from 'react'
import Headers from '../../component/header/Headers.tsx'
import Benner from '../../component/header/Benner.tsx';
import Category from '../../component/header/Category.tsx';
import Footer from '../../component/footer/Footer.tsx';


type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <div>
                <Headers />
            </div>
            <div>
                <Benner />
            </div>
            <div>
                <Category />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home