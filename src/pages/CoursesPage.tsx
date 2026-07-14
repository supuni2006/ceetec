import Courses from "../components/Courses";

export default function CoursesPage() {

  const handleOpenEnquiry = (course?: string) => {
    console.log(course);
  };

  return (
    <Courses onOpenEnquiry={handleOpenEnquiry} />
  );
}