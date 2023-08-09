import 'antd/dist/reset.css'
import { Routes, Route } from 'react-router-dom';
import Detail from './component/View/detail/Detail';
import Home from './component/View/home/Home';
import Carts from './component/View/home/Carts';
import CategoryProduct from './component/View/category/CategoryProduct';
import Products from './component/View/home/Products';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Products />} />
          <Route path='/category/:id' element={<CategoryProduct />} />
        </Route>
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/carts' element={<Carts />} />
      </Routes>
    </div>
  )
}

export default App
