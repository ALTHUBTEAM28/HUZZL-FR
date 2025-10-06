import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

// Landing Page Components
import Navbar from "./Components/NavBar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Signup Flow Components
import CreateAccount from "./components/CreateAccount";
import ProfileSetup from "./components/ProfileSetup";
import ServiceListing from "./components/ServiceListing";
import SuccessPage from "./components/SuccessPage";

=======
import CreateAccount from "./Components/CreateAccount";
import ProfileSetup from "./Components/ProfileSetup";
import ServiceListing from "./Components/ServiceListing";
import AboutPage from "./Components/AboutPage";
import Login from "./Components/Login";
import SuccessPage from "./Components/SuccessPage";
>>>>>>> bce808dee029d0bd3607e8a6f86afc56f1bacb58
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
<<<<<<< HEAD
    <div className="app-container">
      {step === 1 && <CreateAccount onContinue={handleContinue} />}
      {step === 2 && <ProfileSetup onContinue={handleContinue} />}
      {step === 3 && <ServiceListing onSubmit={handleFinish} />}
      {step === 4 && <SuccessPage />}
    </div>
  );
=======
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
>>>>>>> bce808dee029d0bd3607e8a6f86afc56f1bacb58
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <WhyChoose />
              <HowItWorks />
              <Categories />
              <Features />
              <CTA />
              <Footer />
            </>
          }
        />

        {/* Signup Flow */}
        <Route path="/signup" element={<SignupFlow />} />
      </Routes>
    </Router>
  );
}

export default App;
