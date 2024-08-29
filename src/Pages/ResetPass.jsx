






// // ResetPassword.js
// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';
// import { resetPassword } from '../api/auth'; // Import the resetPassword API call
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const ResetPass = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handlePasswordReset = async () => {
//     if (newPassword !== confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }

//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    
//     if (!token) {
//       toast.error('Token not found. Please login again.');
//       navigate('/login');
//       return;
//     }

//     try {
//       await resetPassword(token, newPassword); // Pass the token and new password to the resetPassword function
//       toast.success('Password has been reset successfully.');
//       localStorage.removeItem('token'); // Optionally, remove the token after reset
//       navigate('/login'); // Redirect to login page after reset
//     } catch (error) {
//       console.error('Error resetting password:', error);
//       toast.error('Failed to reset password. Please try again.');
//     }
//   };

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Reset Password</h1>
//         <div className="loginsignup-fields">
//           <input
//             type="password"
//             placeholder='New Password'
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder='Confirm Password'
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button onClick={handlePasswordReset}>Reset Password</button>
//       </div>
//     </div>
//   );
// };

// export default ResetPass;







// ResetPassword.js
import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { resetPassword } from '../api/auth'; // Import the resetPassword API call
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email from location state
  const email = location.state?.email;
  console.log(email);
  
  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!email) {
      toast.error('Email is missing. Please retry the process.');
      navigate('/verifyotp');
      return;
    }

    try {
      await resetPassword(email, newPassword); // Pass the email and new password to the resetPassword function
      toast.success('Password has been reset successfully.');
      console.log('success');
      
      navigate('/login'); // Redirect to login page after reset
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Reset Password</h1>
        <div className="loginsignup-fields">
          <input
            type="password"
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handlePasswordReset}>Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPass;
