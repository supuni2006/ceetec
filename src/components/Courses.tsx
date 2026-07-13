import React, { useState } from 'react';
import { COURSES } from '../data';
import { Course } from '../types';
import { Search, Filter, BookOpen, Clock, Calendar, Star, ArrowRight, User, X, Check, Award, Mail, Phone } from 'lucide-react';
import CertificationBadge from './CertificationBadge';
import SafeImage from './SafeImage';

interface CoursesProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export default function Courses({ onOpenEnquiry }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [activeDetailCourse, setActiveDetailCourse] = useState<Course | null>(null);

  // Enrollment State within Modal
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '', phone: '' });
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const categories = [
    { id: 'all', label: 'All Fields' },
    { id: 'technology', label: 'Technology' },
    { id: 'business', label: 'Business' },
    { id: 'languages', label: 'Languages' },
    { id: 'design', label: 'Design' }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'Beginner', label: 'Beginner' },
    { id: 'Intermediate', label: 'Intermediate' },
    { id: 'Advanced', label: 'Advanced' }
  ];

  // Filters logic
  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tutor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enrollForm.name && enrollForm.email && enrollForm.phone) {
      setEnrollSuccess(true);
      setTimeout(() => {
        setEnrollSuccess(false);
        setEnrollForm({ name: '', email: '', phone: '' });
        setActiveDetailCourse(null);
      }, 4000);
    }
  };

  return (
    <section id="courses" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded">
            Our Syllabus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mt-3 tracking-tight">
            Explore Professional Certification Courses
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded"></div>
          <p className="text-slate-500 mt-4 text-base font-light">
            Each syllabus is calibrated directly to international benchmarks, equipping you with practical, verifiable, and project-based competencies.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12" id="courses-filter-panel">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            {/* Left: Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-semibold px-4 py-2.5 rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/10'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-blue/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Right: Search Input & Level Dropdown */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch">
              {/* Search */}
              <div className="relative flex-grow sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-xs text-slate-800 pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-white text-xs text-slate-700 pl-10 pr-8 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange appearance-none cursor-pointer w-full"
                >
                  {levels.map((lvl) => (
                    <option key={lvl.id} value={lvl.id}>
                      {lvl.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-grid">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-100 hover:border-brand-gold/20 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
              >
                {/* Course Image Wrapper */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                  <SafeImage
                    src={course.image}
                    alt={course.title}
                    fallbackType={
                      course.category === 'business'
                        ? 'course-business'
                        : course.category === 'languages'
                        ? 'course-languages'
                        : 'course-tech'
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-brand-blue/90 text-brand-gold text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded shadow-sm tracking-wide">
                    {course.categoryLabel}
                  </span>
                  {/* Level label */}
                  <span className={`absolute top-4 right-4 text-white text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded shadow-sm tracking-wide ${
                    course.level === 'Advanced' ? 'bg-red-500' :
                    course.level === 'Intermediate' ? 'bg-brand-orange' : 'bg-emerald-500'
                  }`}>
                    {course.level}
                  </span>
                </div>

                {/* Course Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-brand-blue group-hover:text-brand-orange transition-colors duration-300 mb-2 leading-snug">
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-500 line-clamp-2 font-light mb-4">
                      {course.description}
                    </p>

                    {/* Target Certifications Badges */}
                    {course.badges && course.badges.length > 0 && (
                      <div className="mb-4 bg-slate-50/50 border border-slate-100 p-3 rounded-xl">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">Target Credentials</span>
                        <div className="flex gap-4">
                          {course.badges.map((badge) => (
                            <CertificationBadge key={badge} type={badge} size="sm" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Quick Stats: Hours, Weeks, Rating */}
                    <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-3 mb-4 text-[11px] font-mono font-medium text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{course.durationHours} Hrs</span>
                      </div>
                      <div className="flex items-center gap-1 justify-center border-x border-slate-100">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        <span>
                          {course.id === 'solar-1' ? '2 Days' : course.id === 'lang-1' ? '3 Months' : `${course.durationWeeks} Wks`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 justify-end text-brand-gold font-bold">
                        <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    {/* Bottom row: Price and Syllabus CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-mono">Course Fee</span>
                        <span className="text-xl font-bold font-display text-brand-blue">
                          ${course.price}
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveDetailCourse(course)}
                        className="bg-slate-100 hover:bg-brand-orange text-brand-blue hover:text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Syllabus</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-3xl" id="courses-no-results">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg text-slate-700">No courses match your criteria</h3>
            <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto font-light">
              Try updating your search query, selecting "All Fields", or clearing filters to locate other training guides.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="mt-4 text-xs font-semibold text-brand-orange hover:underline cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Dynamic Highlight Card */}
        <div className="mt-16 bg-slate-50 border border-slate-150 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6" id="courses-custom-path">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-brand-blue">Custom / Corporate Training Packages</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xl font-light">
                Do you represent a corporate entity or academic unit in Sri Lanka? ceetec configures tailored bootcamps, language modules, and staff assessment protocols to match your team objectives.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiry('Corporate Custom Training')}
            className="bg-brand-blue hover:bg-brand-orange text-white text-xs font-semibold px-6 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Request Corporate Proposal
          </button>
        </div>
      </div>

      {/* SYLLABUS & ENROLLMENT MODAL */}
      {activeDetailCourse && (
        <div className="fixed inset-0 bg-brand-blue/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveDetailCourse(null);
                setEnrollSuccess(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-brand-orange p-1.5 hover:bg-slate-100 rounded-full transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Side: Syllabus Details */}
              <div className="lg:col-span-7 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded">
                  {activeDetailCourse.categoryLabel} Syllabus
                </span>
                <h3 className="font-display font-bold text-2xl text-brand-blue mt-3 mb-2">
                  {activeDetailCourse.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-gold" /> {activeDetailCourse.durationHours} Hours Classroom Labs</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />{' '}
                    {activeDetailCourse.id === 'solar-1'
                      ? '2 Days Intensive'
                      : activeDetailCourse.id === 'lang-1'
                      ? '3 Months Cohort'
                      : `${activeDetailCourse.durationWeeks} Weeks Cohort`}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                  {activeDetailCourse.description}
                </p>

                {/* Dual Official Credentials section in Modal */}
                {activeDetailCourse.badges && activeDetailCourse.badges.length > 0 && (
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-6">
                    <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-orange mb-3">
                      {activeDetailCourse.badges.includes('nvq-level-4')
                        ? 'Earn NVQ Level 4 Certification'
                        : activeDetailCourse.badges.includes('ms-900')
                          ? 'Earn Dual Microsoft 365 Credentials'
                          : activeDetailCourse.badges.includes('linux-essentials')
                            ? 'Earn Official Linux Institute Credentials'
                            : activeDetailCourse.badges.includes('jlpt-n5-n4')
                              ? 'Official JLPT Foundation Preparation'
                            : activeDetailCourse.badges.length === 3 
                              ? 'Earn Triple Official Credentials' 
                              : (activeDetailCourse.badges.includes('aws-solutions-architect-associate') || activeDetailCourse.badges.includes('aws-security-specialty'))
                                ? 'Earn AWS Certification'
                                : 'Earn Dual Official Credentials'}
                    </h5>
                    <div className="flex gap-5 items-center flex-col sm:flex-row">
                      <div className="flex gap-4">
                        {activeDetailCourse.badges.map((badge) => (
                          <CertificationBadge key={badge} type={badge} size="md" />
                        ))}
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          {activeDetailCourse.badges.includes('nvq-level-4') ? (
                            <>
                              This Solar PV Technician Course is a professional, certification-level program. After successful completion, you will be prepared and eligible to obtain the prestigious <strong>National Vocational Qualification (NVQ) Level 4</strong> certification, widely recognized by state and private engineering councils in Sri Lanka and abroad.
                            </>
                          ) : activeDetailCourse.badges.includes('jlpt-n5-n4') ? (
                            <>
                              Our 3-Month Foundation Program is comprehensively mapped against the official <strong>Japanese Language Proficiency Test (JLPT) N5 & N4</strong> syllabus. CEETEC provides essential alphabet masterclasses, character workbooks, standard listening audio scripts, mock exams with paper discussions, and official completion certificates to prepare you for global educational pathways in Japan.
                            </>
                          ) : activeDetailCourse.badges.includes('docker-dca') ? (
                            <>
                              This training path is comprehensively mapped against the official <strong>Docker Certified Associate (DCA)</strong>, <strong>Kubernetes and Cloud Native Associate (KCNA)</strong>, and <strong>Certified Kubernetes Administrator (CKA)</strong> certification syllabuses. ceetec delivers premium cloud-native sandboxes and custom-tailored guidance for professional certification readiness.
                            </>
                          ) : activeDetailCourse.badges.includes('aws-solutions-architect-associate') ? (
                            <>
                              This master class is rigorously structured to align with the <strong>AWS Certified Solutions Architect – Associate (SAA-C03)</strong> syllabus. ceetec provides official courseware, practice exam sandboxes, and personalized guidance for global examination pathways.
                            </>
                          ) : activeDetailCourse.badges.includes('aws-security-specialty') ? (
                            <>
                              This specialty master class is rigorously mapped against the official <strong>AWS Certified Security - Specialty (SCS-C03)</strong> syllabus. ceetec provides custom-built security labs, real-world scenario threat modeling, and expert-led pathways for specialty-level certification readiness.
                            </>
                          ) : activeDetailCourse.badges.some(badge => badge.startsWith('azure')) ? (
                            <>
                              This master class is rigorously structured to align with both <strong>Microsoft Certified: Azure Fundamentals (AZ-900)</strong> and <strong>Microsoft Certified: Azure AI Fundamentals (AI-900)</strong> syllabuses. ceetec provides official courseware, practice exam sandboxes, and personalized guidance for global examination pathways.
                            </>
                          ) : activeDetailCourse.badges.includes('ms-900') ? (
                            <>
                              This dual-certification program is meticulously mapped against the official <strong>Microsoft 365 Fundamentals (MS-900)</strong> and <strong>Microsoft 365 Administrator (MS-102)</strong> syllabus standards. ceetec provides complete official practice simulation environments, comprehensive workbook guides, and dedicated laboratory sessions.
                            </>
                          ) : activeDetailCourse.badges.includes('linux-essentials') ? (
                            <>
                              This complete track is perfectly mapped against the official <strong>Linux Professional Institute (LPI)</strong> Linux Essentials, LPIC-1 (Exams 101 & 102), and LPIC-2 (Exams 201 & 202) certification curricula. CEETEC provides real-world distro containers (RHEL, Debian, Rocky), command-line sandboxes, bash shell playgrounds, and exam simulator preparation.
                            </>
                          ) : (
                            <>
                              This master class is rigorously structured to align with both <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> and <strong>AWS Certified AI Practitioner (AIF-C01)</strong> syllabuses. ceetec provides official courseware, practice exam sandboxes, and personalized guidance for global examination pathways.
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <h4 className="font-display font-semibold text-sm text-brand-blue mb-4 uppercase tracking-wider">
                  Curriculum Milestones ({activeDetailCourse.curriculum.length} Units)
                </h4>

                <div className="space-y-3">
                  {activeDetailCourse.curriculum.map((unit, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="bg-slate-100 text-slate-700 font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{unit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Fast Registration Form */}
              <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/50 flex flex-col justify-center">
                {enrollSuccess ? (
                  <div className="text-center py-12 px-4 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-brand-blue">Enrollment Submitted!</h4>
                    <p className="text-xs text-slate-500 mt-2 font-light">
                      Thank you for choosing ceetec. An executive coordinator has reserved your preliminary seat and will email/call you within 12 working hours to confirm times and payment setup.
                    </p>
                    <div className="mt-6 text-[10px] text-slate-400 font-mono">
                      Ref Code: CEETEC-REG-{Math.floor(1000 + Math.random() * 9000)}
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <h4 className="font-display font-bold text-lg text-brand-blue mb-1">
                      Fast Enrollment
                    </h4>
                    <p className="text-xs text-slate-400 font-light mb-6">
                      Submit details below to lock your seats & initiate orientation schedules.
                    </p>

                    <form onSubmit={handleEnrollSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                          <input
                            type="text"
                            required
                            placeholder="Student's Name"
                            value={enrollForm.name}
                            onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                            className="w-full bg-white text-xs text-slate-800 pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                          <input
                            type="email"
                            required
                            placeholder="Student's Email"
                            value={enrollForm.email}
                            onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                            className="w-full bg-white text-xs text-slate-800 pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                          <input
                            type="tel"
                            required
                            placeholder="+94 70 615 6075"
                            value={enrollForm.phone}
                            onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                            className="w-full bg-white text-xs text-slate-800 pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-semibold py-3 rounded-lg transition-all shadow-md shadow-brand-orange/10 flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Confirm Seat Reservation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <p className="text-[10px] text-center text-slate-400 mt-3 font-light">
                          * Your details are secure and processed in accordance with ceetec privacy terms.
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
