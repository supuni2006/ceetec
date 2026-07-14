import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Tutors from "../components/Tutors";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ContactForm from "../components/ContactForm";


export default function Home() {

  const handleDiscoverCourses = () => {
    window.location.href = "/courses";
  };


  const handleOpenEnquiry = (course?: string) => {
    console.log(course);
  };


  return (
    <>
      <Hero
        onDiscoverCourses={handleDiscoverCourses}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <About />

      <Features />

      <Courses
        onOpenEnquiry={handleOpenEnquiry}
      />

      <Tutors />

      <Testimonials />

      <FAQSection />

      <ContactForm />
    </>
  );
}