import React, { useState } from "react";
import axios from "axios";
import InputField from "./components/InputField";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const requestOTP = async () => {
    try {
      const response = await axios.post("http://localhost:8000/request-otp", { email });
      setMessage(response.data || "OTP sent successfully.");
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to send OTP.");
    }
  };
  
  const verifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:8000/verify-otp", { email, otp });
      setMessage(response.data || "OTP verified successfully.");
    } catch (error) {
      setMessage(error.response?.data || "Failed to verify OTP.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="company-name">Accelerate Auction</h2>
        <p className="company-subtitle">Your Premium Auto Auction Platform</p>
        <h1>OTP Verification</h1>
        {step === 1 ? (
          <>
            <InputField
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Button onClick={requestOTP}>
              Request OTP
            </Button>
          </>
        ) : (
          <>
            <InputField
              label="Enter OTP"
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter your OTP"
            />
            <Button onClick={verifyOTP}>
              Verify OTP
            </Button>
          </>
        )}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;