import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Pics/logo.png'
import cart_icon from '../Pics/cart_icon.png'
import {Link, useNavigate} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop_menu from '../Pics/drop-down1.jpg'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is in local storage
    // const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    // setIsLoggedIn(!!token);
    setIsLoggedIn(false);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page
  };  

const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
}

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo"/>
        <p>E-MART</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_menu} alt=''/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'> 
      {/* <Link to='/LoginSignup'><button>Login</button></Link> */}

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to='/LoginSignup'><button>Login</button></Link>
      )}



      <Link to='/cart'><img src={cart_icon} alt=''/></Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
 
export default Navbar
