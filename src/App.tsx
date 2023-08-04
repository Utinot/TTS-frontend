import 'antd/dist/reset.css'
import { Routes, Route } from 'react-router-dom';
import Home from './view/home/Home';
import Detail from './view/detail/Detail';
import Carts from './view/home/Carts';


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
