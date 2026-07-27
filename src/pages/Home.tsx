import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Tutors from "../components/Tutors";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ContactForm from "../components/ContactForm";

interface HomeProps {
  onOpenEnquiry: (course?: string) => void;
}

export default function Home({ onOpenEnquiry }: HomeProps) {
  const navigate = useNavigate();

  const handleDiscoverCourses = () => {
    navigate("/courses");
  };

  return (
    <>
      <Hero
        onDiscoverCourses={handleDiscoverCourses}
        onOpenEnquiry={() => onOpenEnquiry()}
      />

      <About />

      <Features />

      <Courses
        onOpenEnquiry={onOpenEnquiry}
      />

      <Tutors />

      <Testimonials />

      <FAQSection />

      <ContactForm />
    </>
  );
}