import React, { useState } from 'react';
import { Images, Eye, X, ChevronRight, ChevronLeft } from 'lucide-react';
import SafeImage from './SafeImage';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'campus' | 'labs' | 'courses' | 'events';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Executive Lecture Hall',
    category: 'campus',
    image: 'images/tutor_lecture_hall.jpg',
  },
  {
    id: 'g-2',
    title: 'Cloud & AI Sandbox Lab',
    category: 'labs',
    image: 'images/tutor_sandbox_lab.jpg',
  },
  {
    id: 'g-3',
    title: 'Student Collaboration Lounge',
    category: 'campus',
    image: 'images/tutor_collab_lounge.jpg',
  },
  {
    id: 'g-4',
    title: 'Academic Counseling Desk',
    category: 'campus',
    image: 'images/tutor_counseling_desk.jpg',
  },
  {
    id: 'g-5',
    title: 'Certified Exam Testing Sandbox',
    category: 'labs',
    image: 'images/tutor_exam_testing.jpg',
  },
  {
    id: 'g-6',
    title: 'Executive Boardroom',
    category: 'campus',
    image: 'images/tutor_boardroom.jpg',
  },
  {
    id: 'g-7',
    title: 'Business & Management Courses',
    category: 'courses',
    image: 'images/ceetec_course_business_1782582707087.jpg',
  },
  {
    id: 'g-8',
    title: 'Language Programs',
    category: 'courses',
    image: 'images/ceetec_course_languages_1782582724412.jpg',
  },
  {
    id: 'g-9',
    title: 'Technology & Cloud Courses',
    category: 'courses',
    image: 'images/ceetec_course_tech_1782582693249.jpg',
  },
  {
    id: 'g-10',
    title: 'Students Collaborating',
    category: 'events',
    image: 'images/about_students_collaborating.jpg',
  },
  {
    id: 'g-11',
    title: 'Graduation & Celebrations',
    category: 'events',
    image: 'images/news_celebration.jpg',
  },
  {
    id: 'g-12',
    title: 'Internship Placements',
    category: 'events',
    image: 'images/news_internships.jpg',
  },
  {
    id: 'g-13',
    title: 'AI Sandbox Sessions',
    category: 'events',
    image: 'images/news_ai_sandbox.jpg',
  },
  {
    id: 'g-14',
    title: 'Campus Overview',
    category: 'campus',
    image: 'images/ceetec_about_banner_1782795055106.jpg',
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS;

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded inline-flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5 text-brand-orange" />
            Photo Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight">
            A Glimpse Into Life at CEETEC
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
          <p className="text-slate-500 mt-4 text-base font-light">
            Explore our campus, labs, courses, and student moments captured across the CEETEC University community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" id="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="aspect-square relative overflow-hidden rounded-2xl bg-slate-100 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                fallbackType="hero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/95 text-brand-blue flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-semibold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-3.5 h-3.5 text-brand-orange" />
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-brand-blue/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="bg-white w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 text-white/95 hover:text-white bg-black/40 hover:bg-brand-orange p-1.5 rounded-full transition-colors z-30 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  className="absolute top-1/2 -translate-y-1/2 left-4 text-white/95 hover:text-white bg-black/40 hover:bg-brand-orange p-1.5 rounded-full transition-colors z-30 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={showNext}
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-white/95 hover:text-white bg-black/40 hover:bg-brand-orange p-1.5 rounded-full transition-colors z-30 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div>
              {/* Photo */}
              <div className="aspect-video relative bg-slate-100 overflow-hidden">
                <SafeImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fallbackType="hero"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Body */}
              <div className="p-6 md:p-8">
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}