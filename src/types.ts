export interface Course {
  id: string;
  title: string;
  category: 'technology' | 'business' | 'languages' | 'design';
  categoryLabel: string;
  price: number | string;
  rating: number;
  reviewCount: number;
  image: string;
  tutor: {
    name: string;
    avatar: string;
    role: string;
  };
  durationHours: number;
  durationWeeks: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  description: string;
  curriculum: string[];
  badges?: string[];
}

export interface Tutor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  rating: number;
  coursesCount: number;
  studentsCount: number;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  avatar: string;
  courseTaken: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  commentsCount: number;
  image: string;
  summary: string;
  author: string;
}
