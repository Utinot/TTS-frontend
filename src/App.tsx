import 'antd/dist/reset.css'
import { Routes, Route } from 'react-router-dom';
import Detail from './component/View/detail/Detail';
import Home from './component/View/home/Home';
import Carts from './component/View/home/Carts';



function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/products/:id' element={<Detail />} />
          <Route path='/carts' element={<Carts />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
