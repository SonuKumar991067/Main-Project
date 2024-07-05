
import './App.css'
import Layout from './components/layout/layout'
import { Routes, Route } from 'react-router-dom'
import AllFoods from './components/pages/AllFoods';
import Login from './components/pages/Login';
import Cart from './components/pages/Cart';

import New from './components/pages/New';


const App = () =>{


  return (


    <Layout>
      <Routes>
        
        <Route path='/' element={<AllFoods/>}></Route>
        <Route path='/New' element={<New />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>


    </Layout>



  )
}

export default App;
