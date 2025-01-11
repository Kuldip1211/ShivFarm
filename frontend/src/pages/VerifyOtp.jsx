import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";


const OTPVerificationWithBoxes = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Store OTP in individual boxes
  const [error, setError] = useState(""); // Store error messages
  const [isVerified, setIsVerified] = useState(false);
  const { token, setToken } = useContext(ShopContext); // Store OTP verification status
  const navigat = useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value;
    const otpCopy = [...otp];
    if (value === "" || /^[0-9]$/.test(value)) {
      otpCopy[index] = value;
    }
    setOtp(otpCopy);

    // Automatically move to the next input when a digit is entered
    if (value !== "" && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const otpString = otp.join("");

    // Basic validation for OTP length (6 digits)
    if (otpString.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    
    try {
     const response = await axios.post("http://localhost:3035/api/user/verify", {
       otp: otpString,
     });
     console.log(response.data);
     if (response.data.success) {
      const tk = response.data.token;
      setToken(tk);
      localStorage.setItem("token", tk);
  toast.success("Welcome to ShivShakti Nursery & Farm!");
  navigat("/");

    } else {
       toast.error("Invalid OTP. Please try again.");
     }
   } catch (error) {
     setError("Something went wrong! Please try again later.");
     toast.error("Error verifying OTP");
   }
 };

  return (
    <div className="flex justify-center items-center h-[300px] pt-36">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">OTP Verification</h1>

        {isVerified ? (
          <div className="text-center">
            <h2 className="text-lg text-green-500 font-semibold">OTP Verified!</h2>
            <p className="text-sm text-gray-600">You have successfully verified your email.</p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-center text-gray-600">Enter the OTP sent to your email address.</p>

            <form onSubmit={handleSubmit} className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </form>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mt-4"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPVerificationWithBoxes;
