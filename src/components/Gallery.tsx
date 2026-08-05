import React, { useState } from 'react';
import { Images, Eye, X, ChevronRight, ChevronLeft, ArrowLeft, FolderOpen } from 'lucide-react';
import SafeImage from './SafeImage';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

interface AlbumBox {
  id: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

const ALBUMS: AlbumBox[] = [
  {
    id: 'campus-labs',
    title: 'Campus & Labs',
    description: 'Lecture halls, lounges & sandbox labs',
    items: [
      { id: 'cl-1', title: 'Executive Lecture Hall', image: 'images/class20.jpg' },
      { id: 'cl-2', title: 'Executive Boardroom', image: 'images/class10.jpg' },
      { id: 'cl-3', title: 'CEETEC University', image: 'images/class18.jpg' },
      { id: 'cl-4', title: 'Students Collaborating', image: 'images/class6.jpg' },
      { id: 'cl-5', title: 'Digital Campus Life', image: 'images/class12.jpg' },
      { id: 'cl-6', title: 'Practical Lab', image: 'images/class19.jpg' },
    ],
  },
  {
    id: 'classes',
    title: 'Classes',
    description: 'Inside our classrooms in session',
    items: [
      { id: 'cs-1', title: 'Classroom Session', image: 'images/class16.jpg' },
      { id: 'cs-2', title: 'Classroom Session', image: 'images/class13.jpg' },
      { id: 'cs-3', title: 'Classroom Session', image: 'images/class4.jpg' },
      { id: 'cs-4', title: 'Classroom Session', image: 'images/class5.jpg' },
      { id: 'cs-5', title: 'Classroom Session', image: 'images/class6.jpg' },
      { id: 'cs-6', title: 'Classroom Session', image: 'images/class7.jpg' },
      { id: 'cs-7', title: 'Classroom Session', image: 'images/class8.jpg' },
      { id: 'cs-5', title: 'Classroom Session', image: 'images/class11.jpg' },
      { id: 'cs-6', title: 'Classroom Session', image: 'images/class9.jpg' },
    ],
  },
  {
    id: 'courses',
    title: 'Courses',
    description: 'Business, tech & language programs',
    items: [
      { id: 'co-1', title: 'Business & Management Courses', image: 'images/ceetec_course_business_1782582707087.jpg' },
      { id: 'co-2', title: 'Language Programs', image: 'images/ceetec_course_languages_1782582724412.jpg' },
      { id: 'co-3', title: 'Technology & Cloud Courses', image: 'images/ceetec_course_tech_1782582693249.jpg' },
      { id: 'co-4', title: 'Japanese Language Course', image: 'images/japanese_course_banner_1782799974067.jpg' },
      { id: 'co-5', title: 'Linux Administration', image: 'images/linux_admin_banner_1782801937407.jpg' },
      { id: 'co-6', title: 'M365 Specialist', image: 'images/m365_specialist_banner_1782800511070.jpg' },
      { id: 'co-7', title: 'Solar PV Systems', image: 'images/solar_pv_banner_1782799423837.jpg' },
      { id: 'co-8', title: 'Drone Course', image: 'images/solar_pv_banner_1782799423837.jpg' },

    ],
  },
  {
    id: 'cloud-certifications',
    title: 'Cloud Certifications',
    description: 'AWS & Azure certification tracks',
    items: [
      { id: 'cc-1', title: 'AWS Cloud & AI', image: 'images/aws_cloud_ai_banner_1782646206591.jpg' },
      { id: 'cc-2', title: 'AWS Security Specialty', image: 'images/aws_security_specialty_banner_1782649423803.jpg' },
      { id: 'cc-3', title: 'AWS Solutions Architect', image: 'images/aws_solutions_architect_banner_1782646582236.jpg' },
      { id: 'cc-4', title: 'Azure Cloud & AI', image: 'images/azure_cloud_ai_banner_1782646449494.jpg' },
    ],
  },
  {
    id: 'workshops',
    title: 'Workshops & Seminars',
    description: 'Hands-on workshops and guest seminars',
    items: [
      { id: 'w-1', title: 'Container Specialist Workshop', image: 'images/container_specialist_banner_1782647403137.jpg' },
      { id: 'w-2', title: 'AWS Workshop', image: 'images/class1.jpg' },
      { id: 'w-3', title: 'AWS Workshop', image: 'images/class2.jpg' },
      { id: 'w-4', title: 'Solar Technology Workshop', image: 'images/seminar1.jpg' },
      { id: 'w-5', title: 'Solar Technology Workshop', image: 'images/seminar2.jpg' },
      { id: 'w-6', title: 'Solar Technology Workshop', image: 'images/seminar3.jpg' },
      { id: 'w-7', title: 'Solar PV Systems', image: 'images/class13.jpg' },
    ],
  },
  {
    id: 'events',
    title: 'Events & Celebrations',
    description: 'Graduations, internships & milestones',
    items: [
      { id: 'e-1', title: 'AI Sandbox Sessions', image: 'images/news_ai_sandbox.jpg' },
      { id: 'e-2', title: 'Graduation & Celebrations', image: 'images/news_celebration.jpg' },
      { id: 'e-3', title: 'Internship Placements', image: 'images/news_internships.jpg' },
    ],
  },
];

export default function Gallery() {
  const [activeAlbumId, setActiveAlbumId] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeAlbum = activeAlbumId ? ALBUMS.find((a) => a.id === activeAlbumId) ?? null : null;
  const albumItems = activeAlbum?.items ?? [];
  const selectedItem = selectedIndex !== null ? albumItems[selectedIndex] : null;

  const openAlbum = (id: string) => {
    setActiveAlbumId(id);
    setSelectedIndex(null);
  };

  const closeAlbum = () => {
    setActiveAlbumId(null);
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + albumItems.length) % albumItems.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % albumItems.length);
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

        {!activeAlbum ? (
          /* ALBUM BOX GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALBUMS.map((album) => {
              const cover = album.items[0];
              return (
                <div
                  key={album.id}
                  onClick={() => openAlbum(album.id)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-2 rounded-xl bg-white/40 border border-white/60 rotate-2 group-hover:rotate-3 transition-transform duration-500 -z-0"></div>
                    <div className="absolute inset-1 rounded-xl overflow-hidden -rotate-1 group-hover:-rotate-2 transition-transform duration-500">
                      <SafeImage
                        src={cover.image}
                        alt={album.title}
                        fallbackType="hero"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/95 text-brand-blue flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-md backdrop-blur-sm z-10">
                      <FolderOpen className="w-3 h-3 text-brand-orange" />
                      {album.items.length}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-white/95 text-brand-blue flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-semibold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Open Album</span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="font-display text-white text-lg font-bold leading-tight">{album.title}</h3>
                      <p className="text-white/75 text-xs mt-1 font-light">{album.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* OPEN ALBUM VIEW */
          <div>
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={closeAlbum}
                className="flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold text-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Albums
              </button>
              <div className="text-right">
                <h3 className="font-display text-xl font-bold text-brand-blue">{activeAlbum.title}</h3>
                <p className="text-slate-400 text-xs">{activeAlbum.items.length} photos</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {albumItems.map((item, index) => (
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
        )}

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
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 text-white/95 hover:text-white bg-black/40 hover:bg-brand-orange p-1.5 rounded-full transition-colors z-30 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {albumItems.length > 1 && (
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
              <div className="aspect-video relative bg-slate-100 overflow-hidden">
                <SafeImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fallbackType="hero"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-mono font-bold tracking-widest text-brand-orange uppercase">{activeAlbum?.title}</p>
                    <h4 className="font-display text-brand-blue font-bold mt-1">{selectedItem.title}</h4>
                  </div>
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-semibold cursor-pointer shrink-0"
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