// import axios from 'axios';

// // Set up the base URL for your API
// const API_URL = 'http://localhost:5000';

// // Signup function
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/api/auth/register`, userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Login function
// export const login = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Request OTP function
// export const requestOtp = async (email) => {
//   try {
//     const response = await axios.post(`${API_URL}/request-otp`, { email });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };






import axios from 'axios';

// Set up the base URL for your API
// const API_URL = 'http://localhost:5000';
const API_URL =    'https://ecom-88hn.onrender.com'

// Signup function
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login function
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData); // Changed to match the correct endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Request OTP function
export const requestOtp = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/api/otp/send-otp`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Verify OTP function
export const verifyOtp = async (email, otp) => {
  try {
    const response = await axios.post(`${API_URL}/api/otp/verify-otp`, { email, otp });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Reset Password function
export const resetPassword = async (email, newPassword) => {
  try {
    const response = await axios.put(`${API_URL}/api/otp/reset-password`, { email, newPassword });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example function to get user profile
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
