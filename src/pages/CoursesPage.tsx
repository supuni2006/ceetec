import Courses from "../components/Courses";

interface CoursesPageProps {
  onOpenEnquiry: (course?: string) => void;
}

export default function CoursesPage({ onOpenEnquiry }: CoursesPageProps) {
  return (
    <Courses onOpenEnquiry={onOpenEnquiry} />
  );
}