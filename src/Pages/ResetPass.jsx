






// // ResetPassword.js
// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';
// import { resetPassword } from '../api/auth'; // Import the resetPassword API call
// import { useNavigate, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const ResetPass = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extract email from location state
//   const email = location.state?.email;
//   console.log(email);
  
//   const handlePasswordReset = async () => {
//     if (newPassword !== confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }

//     if (!email) {
//       toast.error('Email is missing. Please retry the process.');
//       navigate('/verifyotp');
//       return;
//     }

//     try {
//       await resetPassword(email, newPassword); // Pass the email and new password to the resetPassword function
//       toast.success('Password has been reset successfully.');
//       console.log('success');
      
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









import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { resetPassword } from '../api/auth'; // Import the resetPassword API call
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader'; // Import ClipLoader from react-spinners

const ResetPass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner
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

    setLoading(true); // Start loading spinner

    try {
      await resetPassword(email, newPassword); // Pass the email and new password to the resetPassword function
      toast.success('Password has been reset successfully.');
      console.log('success');
      
      navigate('/login'); // Redirect to login page after reset
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Failed to reset password. Please try again.');
    } finally {
      setLoading(false); // Stop loading spinner
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
        <button onClick={handlePasswordReset} disabled={loading}>
          {loading ? (
            <ClipLoader size={20} color={"#ffffff"} /> // Display the spinner
          ) : (
            'Reset Password'
          )}
        </button>
      </div>
    </div>
  );
};

export default ResetPass;
