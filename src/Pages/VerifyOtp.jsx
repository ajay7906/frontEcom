







// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';

// const VerifyOtp = () => {
//   const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for OTP input
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');

//   const handleEmailSubmit = () => {
//     // Add logic here to send OTP to the entered email
//     // For example, calling an API endpoint to request the OTP
//     // If successful, proceed to the OTP verification step
//     setStep(2);
//   };

//   const handleOtpSubmit = () => {
//     // Add logic here to verify the entered OTP
//     // For example, calling an API endpoint to verify the OTP
//     // If successful, proceed to reset the password or login
//     console.log('OTP Submitted:', otp);
//   };

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         {step === 1 ? (
//           <>
//             <h1>Reset Password</h1>
//             <div className="loginsignup-fields">
//               <input
//                 type="email"
//                 placeholder='Email Address'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <button onClick={handleEmailSubmit}>Continue</button>
//           </>
//         ) : (
//           <>
//             <h1>Verify OTP</h1>
//             <div className="loginsignup-fields">
//               <input
//                 type="text"
//                 placeholder='Enter OTP'
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//             </div>
//             <button onClick={handleOtpSubmit}>Verify OTP</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;







import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { requestOtp,  verifyOtp } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const VerifyOtp = () => {
  const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for OTP input
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async () => {
    if (!email) {
      toast.error('Please enter a valid email address.');
      console.log('enter email');
      
      return;
    }
    try {
      await requestOtp(email);
      toast.success('OTP has been sent to your email.');
      setStep(2); // Proceed to OTP verification step
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const handleOtpSubmit = async () => {
    if (!otp) {
      toast.error('Please enter the OTP.');
      console.log('correct otp');
      
      return;
    }
    try {
      await verifyOtp(email, otp);
      toast.success('OTP verified successfully.');
      console.log('otp succes');
      
      navigate('/reset-password', { state: { email } }); // Navigate to reset password
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        {step === 1 ? (
          <>
            <h1>Reset Password</h1>
            <div className="loginsignup-fields">
              <input
                type="email"
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button onClick={handleEmailSubmit}>Continue</button>
          </>
        ) : (
          <>
            <h1>Verify OTP</h1>
            <div className="loginsignup-fields">
              <input
                type="text"
                placeholder='Enter OTP'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button onClick={handleOtpSubmit}>Verify OTP</button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;
