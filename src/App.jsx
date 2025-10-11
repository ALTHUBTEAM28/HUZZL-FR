import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Page Components
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import WhyChoose from "./Components/WhyChoose";
import HowItWorks from "./Components/HowItWorks";
import Categories from "./Components/Categories";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

// Signup Flow Components
import CreateAccount from "./Components/CreateAccount";
import ProfileSetup from "./Components/ProfileSetup";
import ServiceListing from "./Components/ServiceListing";
import SuccessPage from "./Components/SuccessPage";
import AboutPage from "./Components/AboutPage";
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import VendorProfile, { exampleVendorData } from "./Components/VendorProfile";
import ClientDashboard from "./Components/ClientDashboard";
import VendorDashboard from "./Components/VendorDashboard"; 
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
    <div className="app-container">
      {step === 1 && <CreateAccount onContinue={handleContinue} />}
      {step === 2 && <ProfileSetup onContinue={handleContinue} />}
      {step === 3 && <ServiceListing onSubmit={handleFinish} />}
      {step === 4 && <SuccessPage />}
    </div>
  );
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
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/vendor/:id" element={<VendorProfile vendorData={exampleVendorData} />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard/>} />


      </Routes>
    </Router>
  );
}

export default App;
