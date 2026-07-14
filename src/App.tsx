import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import CoursesPage from "./pages/CoursesPage";
import TutorsPage from "./pages/TutorsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

function SiteNavbar({
  onOpenEnquiry,
}: {
  onOpenEnquiry: () => void;
}) {
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
  // Modal State
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // Optional: prefill subject if needed later
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleOpenEnquiry = (subject?: string) => {
    if (subject) {
      setSelectedSubject(subject);
    } else {
      setSelectedSubject("");
    }

    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <BrowserRouter>
      <SiteNavbar
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/features" element={<FeaturesPage />} />

          <Route path="/facilities" element={<FacilitiesPage />} />

          <Route path="/courses" element={<CoursesPage />} />

          <Route path="/tutors" element={<TutorsPage />} />

          <Route
            path="/testimonials"
            element={<TestimonialsPage />}
          />

          <Route path="/faq" element={<FAQPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        prefilledSubject={selectedSubject}
      />
    </BrowserRouter>
  );
}