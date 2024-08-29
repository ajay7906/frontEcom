// import React from 'react'
// import './CSS/LoginSignup.css'
// import {Link} from 'react-router-dom'
// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Your Name' />
//           <input type="email" placeholder='Email Address' />
//           <input type="password" placeholder='Password' />
//         </div>
//         <button>Continue</button>
//         <p className='loginsignup-login'>Already have an account? <Link to='/Login'>SignUp here</Link></p>
//         {/* <div className='loginsignup-agree'>
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, i agree to the terms of use and privacy policy.</p>
//         </div> */}
//       </div>
//     </div>
//   )
// }

// export default LoginSignup








// LoginSignup.js
import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import {  signup } from '../api/auth'; // Import the registerUser API call
import { toast } from 'react-toastify'; // Import toast for notifications

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log('click');
    
    if (!name || !email || !password) {
      toast.error('All fields are required.');
      console.log('some');
      
      return;
    }

    try {
      const userData = { name, email, password };
      await signup(userData); // Call the registerUser function with user data
      console.log('succes');
      
      toast.success('Registration successful! Please log in.');
      navigate('/Login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Failed to register. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        <p className='loginsignup-login'>
          Already have an account? <Link to='/login'>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
