import React from "react";
import {
  Building2,
  Monitor,
  Wifi,
  Library,
  Coffee,
  Car
} from "lucide-react";


export default function Facilities() {


  const facilities = [
    {
      icon: Building2,
      title: "Modern Classrooms",
      description:
        "Comfortable and well-equipped classrooms designed to provide an effective learning environment."
    },

    {
      icon: Monitor,
      title: "Computer Laboratories",
      description:
        "Advanced computer labs with modern hardware and software to support practical learning."
    },

    {
      icon: Wifi,
      title: "High Speed Internet",
      description:
        "Reliable internet connectivity available for online learning, research and digital activities."
    },

    {
      icon: Library,
      title: "Learning Resources",
      description:
        "Access valuable learning materials and resources to support academic development."
    },

    {
      icon: Coffee,
      title: "Student Common Area",
      description:
        "A comfortable space where students can relax, collaborate and share ideas."
    },

    {
      icon: Car,
      title: "Parking Facilities",
      description:
        "Convenient parking facilities available for students and visitors."
    }
  ];


  return (
    <section className="py-20 bg-white relative overflow-hidden">


      {/* Background Decoration */}
      <div className="
        absolute top-20 left-10 
        w-72 h-72 
        bg-brand-orange/10 
        rounded-full 
        blur-3xl
      "></div>


      <div className="
        absolute bottom-20 right-10 
        w-72 h-72 
        bg-brand-blue/10 
        rounded-full 
        blur-3xl
      "></div>



      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">


        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="
            text-xs
            font-bold
            tracking-widest
            uppercase
            text-brand-orange
            bg-brand-orange/10
            px-3
            py-1
            rounded
          ">
            Our Campus
          </span>


          <h2 className="
            mt-4
            text-3xl
            md:text-4xl
            font-bold
            text-brand-blue
          ">
            World-Class Learning Facilities
          </h2>


          <div className="
            w-16
            h-1
            bg-brand-gold
            mx-auto
            mt-4
            rounded
          "></div>


          <p className="
            mt-5
            text-slate-500
            leading-relaxed
          ">
            CEETEC University provides modern facilities and a technology-focused
            environment to help students achieve their academic and professional goals.
          </p>


        </div>




        {/* Facilities Cards */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">


        {
          facilities.map((facility, index) => {


            const Icon = facility.icon;


            return (

              <div
                key={index}
                className="
                  bg-slate-50
                  border
                  border-slate-100
                  rounded-2xl
                  p-8
                  hover:bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  group
                "
              >


                <div className="
                  w-14
                  h-14
                  rounded-xl
                  bg-brand-blue
                  text-white
                  flex
                  items-center
                  justify-center
                  mb-6
                  group-hover:bg-brand-orange
                  transition
                ">

                  <Icon className="w-7 h-7"/>

                </div>



                <h3 className="
                  text-xl
                  font-bold
                  text-brand-blue
                  mb-3
                ">
                  {facility.title}
                </h3>



                <p className="
                  text-slate-500
                  text-sm
                  leading-relaxed
                ">
                  {facility.description}
                </p>


              </div>

            );

          })
        }


        </div>


      </div>


    </section>
  );
}