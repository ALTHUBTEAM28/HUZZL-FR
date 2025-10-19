import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Page Components
import Navbar from "./Components/NavBar";
import Hero from "./Pages/Hero";
import WhyChoose from "./Pages/WhyChoose";
import HowItWorks from "./Pages/HowItWorks";
import Categories from "./Pages/Categories";
import Features from "./Pages/Features";
import CTA from "./Pages/CTA";
import Footer from "./Pages/Footer";

// Signup Flow Components
import CreateAccount from "./Pages/CreateAccount";
import ProfileSetup from "./Pages/ProfileSetup";
import ServiceListing from "./Pages/ServiceListing";
import SuccessPage from "./Pages/SuccessPage";
import AboutPage from "./Pages/AboutPage";
import Login from "./Components/Login";
import ProfilePage from "./Pages/ProfilePage";
import VendorProfile, { exampleVendorData } from "./Pages/VendorProfile";
import VendorSettings from "./Pages/VendorSettings";
import ClientDashboard from "./Pages/ClientDashboard";
import VendorDashboard from "./Pages/VendorDashboard"; 
import ClientSettings from "./Pages/ClientSettings";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
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
         <Route path="/vendor-settings" element={<VendorSettings/>} />
       <Route path="/client-settings" element={<ClientSettings/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/terms" element={<Terms/>} />
      </Routes>
    </Router>
  );
}

export default App;
