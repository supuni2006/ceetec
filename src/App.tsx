import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Courses from './components/Courses';
import Tutors from './components/Tutors';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [prefilledSubject, setPrefilledSubject] = useState<string>('General Guidance');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Trigger Enquiry desk modal from any child component
  const handleOpenEnquiry = (subject: string = 'General Guidance') => {
    setPrefilledSubject(subject);
    setIsEnquiryOpen(true);
  };

  // Fast scroll callback from Hero to Courses
  const handleDiscoverCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll active state listener (IntersectionObserver for modern scrolling updates)
  useEffect(() => {
    const sections = ['home', 'about', 'features', 'courses', 'facilities', 'faq', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Target middle of the view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((secId) => {
        const el = document.getElementById(secId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="w-full relative min-h-screen flex flex-col justify-between selection:bg-brand-orange selection:text-white" id="ceetec-app-root">
      
      {/* Sticky top headers */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry('General Guidance')}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero
          onDiscoverCourses={handleDiscoverCourses}
          onOpenEnquiry={() => handleOpenEnquiry('Free Academic Counseling')}
        />

        {/* Benefits and Trust Badges */}
        <Features />

        {/* Dynamic narrative and counters */}
        <About />

        {/* Interactive courses database */}
        <Courses
          onOpenEnquiry={(courseTitle) => handleOpenEnquiry(courseTitle || 'Course Booking')}
        />

        {/* Expert tutors profiles */}
        <Tutors />

        {/* High visual quote review sliders */}
        <Testimonials />

        {/* Accordions FAQs */}
        <FAQSection />

        {/* Feedback form desk */}
        <ContactForm />

      </main>

      {/* Corporate compliant Footers */}
      <Footer />

      {/* Centralised callback scheduling modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        prefilledSubject={prefilledSubject}
      />

    </div>
  );
}
