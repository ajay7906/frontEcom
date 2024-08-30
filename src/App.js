import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Pics/banner_mens.png';
import women_banner from './Components/Pics/banner_women.png';
import kid_banner from './Components/Pics/banner_kids.png';
import Login from './Pages/Login';
import VerifyOtp from './Pages/VerifyOtp';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import ResetPass from './Pages/ResetPass';
import 'react-toastify/dist/ReactToastify.css';


import { ToastContainer } from 'react-toastify';
 



<ToastContainer/>

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token is in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
  <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
  <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
  <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
  </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/LoginSignup' element={<LoginSignup/>}/>
  <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
   <Route path='/verifyotp' element={<VerifyOtp/>} />
   <Route path='reset-password' element={<ResetPass/>}/>

</Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
