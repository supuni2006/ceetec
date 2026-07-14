import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import CoursesPage from "./pages/CoursesPage";
import TutorsPage from "./pages/TutorsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";


// Scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}


function SiteNavbar({ onOpenEnquiry }: { onOpenEnquiry: () => void }) {

  const location = useLocation();

  const activeSection =
    location.pathname === "/"
      ? "home"
      : location.pathname.replace(/^\//, "").split("/")[0];


  return (
    <Navbar
      onOpenEnquiry={onOpenEnquiry}
      activeSection={activeSection}
    />
  );
}



export default function App() {

  const handleOpenEnquiry = () => {
    console.log("Open Enquiry Form");
  };


  return (

    <BrowserRouter>

      <ScrollToTop />


      <SiteNavbar
        onOpenEnquiry={handleOpenEnquiry}
      />


      <main>

        <Routes>

          <Route 
            path="/" 
            element={<Home />} 
          />


          <Route 
            path="/about" 
            element={<AboutPage />} 
          />


          <Route 
            path="/features" 
            element={<FeaturesPage />} 
          />


          <Route 
            path="/facilities" 
            element={<FacilitiesPage />} 
          />


          <Route 
            path="/courses" 
            element={<CoursesPage />} 
          />


          <Route 
            path="/tutors" 
            element={<TutorsPage />} 
          />


          <Route 
            path="/testimonials" 
            element={<TestimonialsPage />} 
          />


          <Route 
            path="/faq" 
            element={<FAQPage />} 
          />


          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />


          {/* fallback */}
          <Route 
            path="*" 
            element={<Home />} 
          />

        </Routes>

      </main>


      <Footer />

    </BrowserRouter>

  );
}