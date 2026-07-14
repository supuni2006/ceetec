import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import ScrollToTop from "./components/ScrollToTop";

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
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleOpenEnquiry = (subject?: string) => {
    setSelectedSubject(subject || "");
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <BrowserRouter>

      {/* Scroll to top whenever page changes */}
      <ScrollToTop />

      <SiteNavbar
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/features" element={<FeaturesPage />} />

          <Route path="/courses" element={<CoursesPage />} />

          <Route path="/facilities" element={<FacilitiesPage />} />

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