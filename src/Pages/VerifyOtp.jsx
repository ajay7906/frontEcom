





// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';
// import { requestOtp,  verifyOtp } from '../api/auth';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


// const VerifyOtp = () => {
//   const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for OTP input
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate();

//   const handleEmailSubmit = async () => {
//     if (!email) {
//       toast.error('Please enter a valid email address.');
//       console.log('enter email');
      
//       return;
//     }
//     try {
//       await requestOtp(email);
//       toast.success('OTP has been sent to your email.');
//       setStep(2); // Proceed to OTP verification step
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       toast.error('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleOtpSubmit = async () => {
//     if (!otp) {
//       toast.error('Please enter the OTP.');
//       console.log('correct otp');
      
//       return;
//     }
//     try {
//       await verifyOtp(email, otp);
//       toast.success('OTP verified successfully.');
//       console.log('otp succes');
      
//       navigate('/reset-password', { state: { email } }); // Navigate to reset password
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       toast.error('Invalid OTP. Please try again.');
//     }
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
import { requestOtp, verifyOtp } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader'; // Import ClipLoader from react-spinners

const VerifyOtp = () => {
  const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for OTP input
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate();

  const handleEmailSubmit = async () => {
    if (!email) {
      toast.error('Please enter a valid email address.');
      console.log('enter email');
      return;
    }

    setLoading(true); // Start loading spinner

    try {
      await requestOtp(email);
      toast.success('OTP has been sent to your email.');
      setStep(2); // Proceed to OTP verification step
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleOtpSubmit = async () => {
    if (!otp) {
      toast.error('Please enter the OTP.');
      console.log('correct otp');
      return;
    }

    setLoading(true); // Start loading spinner

    try {
      await verifyOtp(email, otp);
      toast.success('OTP verified successfully.');
      console.log('otp success');
      navigate('/reset-password', { state: { email } }); // Navigate to reset password
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Invalid OTP. Please try again.');
    } finally {
      setLoading(false); // Stop loading spinner
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
            <button onClick={handleEmailSubmit} disabled={loading}>
              {loading ? (
                <ClipLoader size={20} color={"#ffffff"} /> // Display the spinner
              ) : (
                'Continue'
              )}
            </button>
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
            <button onClick={handleOtpSubmit} disabled={loading}>
              {loading ? (
                <ClipLoader size={20} color={"#ffffff"} /> // Display the spinner
              ) : (
                'Verify OTP'
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;
