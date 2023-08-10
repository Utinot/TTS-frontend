import React from 'react'
import Headers from '../header/Headers.tsx'
import Benner from '../header/Benner.tsx';
import Category from '../category/Category.tsx';
import Footer from '../footer/Footer.tsx';
import { Outlet } from 'react-router-dom';


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
            <main>
                <Outlet />
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home