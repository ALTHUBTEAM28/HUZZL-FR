import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import ProfileSetup from "./Components/ProfileSetup";
import ServiceListing from "./Components/ServiceListing";
import AboutPage from "./Components/AboutPage";
import Login from "./Components/Login";
import SuccessPage from "./Components/SuccessPage";
import "./App.css";

const SignupFlow = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleContinue = (data) => {
    setUserData({ ...userData, ...data });
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handleFinish = (data) => {
    const finalData = { ...userData, ...data };
    console.log("Final Signup Data:", finalData);
   setStep(4);
  };



  return (
    <>
      {step === 1 && <CreateAccount onContinue={handleContinue} />}
      {step === 2 && <ProfileSetup onContinue={handleContinue} />}
      {step === 3 && <ServiceListing onSubmit={handleFinish} />}
   {step === 4 && <SuccessPage/>}
    </>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<SignupFlow/>}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<AboutPage/>}/>
                 <Route path="/create-account" element={<CreateAccount/>}/>
      </Routes>
</div>
  );
};



export default App;



