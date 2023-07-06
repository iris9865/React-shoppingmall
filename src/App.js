import './App.css';
import { useState, useEffect } from 'react';
import {Routes , Route} from 'react-router-dom'
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import PrivateRouter from './Components/PrivateRouter';

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true 값이면 로그인, false 값이면 로그인이 안 된 상태
  useEffect(() => {
    console.log("Login", authenticate);
  }, [authenticate]);
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
