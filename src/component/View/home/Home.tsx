import React from 'react'
import Headers from '../header/Headers.tsx'
import Benner from '../header/Benner.tsx';
import Category from '../header/Category.tsx';
import Footer from '../footer/Footer.tsx';
import Products from './Products.tsx';


type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <div>
                <Headers />
            </div>
            <div>
                <Category />
            </div>
            <div>
                <Benner />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home