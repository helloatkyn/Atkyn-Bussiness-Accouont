import React, { useState } from 'react';


// Form Components
import BusinessNameForm from './Components/BusinessNameForm';
import BusinessTypeForm from './Components/BusinessTypeForm';
import BusinessCategoryForm from './Components/BusinessCategoryForm';
import BusinessAddressForm from './Components/BusinessAddressForm';
import ContactDetailsForm from './Components/ContactDetailsForm';
import PlacePinForm from './PlacePinForm';
import PutBusinessOnMap from './PutBusinessOnMap';

// Landing Page Components
import Navbar from './Components/Navbar';
import SubNav from './Components/SubNav';
import Hero from './Components/Hero';
import ConnectSection from './Components/ConnectSection';
import SalesSection from './Components/SalesSection';
import SuccessStory from './Components/SuccessStory';
import InsightsSection from './Components/InsightsSection';
import StepsSection from './Components/StepsSection';
import FaqSection from './Components/FaqSection';
import Footer from './Components/Footer';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessTypes: [],
    businessCategory: '',
    address: {},
    contactDetails: {},
    preferences: {}
  });

// 👉 Page switch karne ka function
  const handleNavigate = (pageName) => {
    setActivePage(pageName);
    setCurrentStep(0); // Form band karke seedha page dikhaye
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Step 1: Open Form from Navbar/Hero
  const openOnboarding = () => setCurrentStep(1);

  // Step 1 -> 2
  const handleNameContinue = (name) => {
    setFormData((prev) => ({ ...prev, businessName: name }));
    setCurrentStep(2);
  };

  // Step 2 -> 3
  const handleTypeNext = (types) => {
    setFormData((prev) => ({ ...prev, businessTypes: types }));
    setCurrentStep(3);
  };

  // Step 3 -> 4
  const handleCategoryNext = (category) => {
    setFormData((prev) => ({ ...prev, businessCategory: category }));
    setCurrentStep(4);
  };

  // Step 4 -> 5
  const handleAddressNext = (address) => {
    setFormData((prev) => ({ ...prev, address: address }));
    setCurrentStep(5);
  };

  // Step 5 -> 6
  const handlePinConfirm = () => {
    setCurrentStep(6);
  };

  // Step 6 -> 7
  const handleContactNext = (contactData) => {
    setFormData((prev) => ({ ...prev, contactDetails: contactData }));
    setCurrentStep(7);
  };

  const handleContactSkip = () => {
    setCurrentStep(7);
  };

  // -----------------------------------------------------------------
  // YEH RAHA WOH CODE (Final Step: PHP API Call)
  // -----------------------------------------------------------------
  const handleMapContinue = async (preferences) => {
    const finalPayload = {
      ...formData,
      preferences: preferences
    };

    try {
      const response = await fetch("http://localhost/google-api/save_business.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalPayload)
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Profile successfully saved in database!");
        setCurrentStep(0); // Wapas home screen par
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Server connect nahi ho paya. XAMPP me Apache aur MySQL on karein.");
    }
  };
  // -----------------------------------------------------------------

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col justify-between">
      <div>
        <SubNav />
{/* 👉 3. Navbar ko onNavigate pass kiya */}
        <Navbar 
onSignIn={openOnboarding} 
onStartNow={openOnboarding}
  onNavigate={handleNavigate}
/>

      {/* ----------------- MULTI-STEP FORMS (Step 1 se 7) ----------------- */}
        {currentStep === 0 && (
          <main>
            <Hero onStart={openOnboarding} />
            <ConnectSection />
            <SalesSection />
            <SuccessStory />
            <InsightsSection />
            <StepsSection />
            <FaqSection />
          </main>
        )}

        {/* Multi-step forms */}
        {currentStep === 1 && (
          <BusinessNameForm onContinue={handleNameContinue} />
        )}

        {currentStep === 2 && (
          <BusinessTypeForm 
            businessName={formData.businessName} 
            onNext={handleTypeNext} 
            onBack={() => setCurrentStep(1)} 
          />
        )}

        {currentStep === 3 && (
          <BusinessCategoryForm 
            businessName={formData.businessName}
            onNext={handleCategoryNext} 
            onBack={() => setCurrentStep(2)} 
          />
        )}

        {currentStep === 4 && (
          <BusinessAddressForm 
            onNext={handleAddressNext} 
            onBack={() => setCurrentStep(3)} 
          />
        )}

        {currentStep === 5 && (
          <PlacePinForm 
            onConfirm={handlePinConfirm} 
            onBack={() => setCurrentStep(4)} 
          />
        )}

        {currentStep === 6 && (
          <ContactDetailsForm 
            onNext={handleContactNext} 
            onSkip={handleContactSkip} 
            onBack={() => setCurrentStep(5)} 
          />
        )}

        {currentStep === 7 && (
          <PutBusinessOnMap 
            onContinue={handleMapContinue} 
            onBack={() => setCurrentStep(6)} 
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;