import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import SafeImage from "./SafeImage";


interface NavbarProps {
  onOpenEnquiry?: () => void;
}


export default function Navbar({ onOpenEnquiry }: NavbarProps) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Features", path: "/features" },
    { label: "Courses", path: "/courses" },
    { label: "Facilities", path: "/facilities" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];


  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  const linkClass = ({isActive}: {isActive:boolean}) =>
    `
    font-medium text-sm tracking-wide transition-all 
    hover:text-brand-orange relative py-1
    ${
      isActive
      ? "text-brand-orange font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-orange"
      : "text-brand-blue/80"
    }
    `;



  const mobileLinkClass = ({isActive}: {isActive:boolean}) =>
    `
    text-base font-medium py-1 border-b border-slate-50 transition-colors
    ${
      isActive
      ? "text-brand-orange font-semibold pl-2 border-l-2 border-l-brand-orange"
      : "text-brand-blue/90 hover:text-brand-orange"
    }
    `;



  return (

<header className="w-full sticky top-0 z-50">


{/* TOP BAR */}

<div
className={`bg-brand-blue text-white/90 text-xs px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-white/10 gap-2 overflow-hidden transition-all duration-300 ${
isScrolled
? "max-h-0 py-0 opacity-0"
: "max-h-20 py-2 opacity-100"
}`}
>


<div className="flex flex-wrap items-center justify-center gap-4">


<div className="flex items-center gap-1.5">

<Phone className="w-3.5 h-3.5 text-brand-gold"/>

<span>
<a href="tel:+94706156075">
+94 70 615 6075
</a>

{" / "}

<a href="tel:+94706156076">
+94 70 615 6076
</a>

</span>

</div>



<a 
href="mailto:info@ceetec.lk"
className="flex items-center gap-1.5"
>

<Mail className="w-3.5 h-3.5 text-brand-gold"/>

info@ceetec.lk

</a>



<div className="hidden md:flex items-center gap-1.5">

<Clock className="w-3.5 h-3.5 text-brand-gold"/>

Mon - Sun: 8:30 AM - 6:00 PM

</div>


</div>



<div className="flex items-center gap-4">


<div className="flex gap-3">


<a href="https://web.facebook.com" target="_blank">
<Facebook className="w-3.5 h-3.5"/>
</a>


<a href="#">
<Twitter className="w-3.5 h-3.5"/>
</a>


<a href="#">
<Linkedin className="w-3.5 h-3.5"/>
</a>


</div>


<span className="text-[10px] bg-brand-orange px-2 py-0.5 rounded">
Sri Lanka Center
</span>


</div>


</div>





{/* NAVBAR */}

<nav
className={`w-full flex justify-between items-center px-4 md:px-8 py-4 ${
isScrolled
? "bg-white shadow-md"
: "bg-white"
}`}
>


{/* LOGO */}

<NavLink
to="/"
className="flex items-center gap-2.5"
>


<SafeImage
src="ceetec_logo.png"
alt="CEETEC Logo"
fallbackType="logo"
className="w-11 h-11 rounded-full object-cover"
/>


<div>

<div className="font-bold text-2xl text-brand-blue">
CEETEC
</div>


<div className="text-[10px] text-brand-orange font-bold tracking-widest">
UNIVERSITY
</div>

</div>


</NavLink>





{/* DESKTOP MENU */}

<div className="hidden lg:flex items-center gap-8">


{
navItems.map((item)=>(

<NavLink
key={item.path}
to={item.path}
className={linkClass}
>

{item.label}

</NavLink>

))
}


</div>





{/* ENQUIRY BUTTON */}

<div className="hidden lg:block">


<button
onClick={() => onOpenEnquiry?.()}
className="
bg-brand-blue 
hover:bg-brand-orange
text-white
px-5
py-2.5
rounded-lg
flex
items-center
gap-2
transition
"
>

Quick Enquiry

<ArrowRight className="w-4 h-4"/>

</button>


</div>





{/* MOBILE MENU BUTTON */}

<button
onClick={()=>setIsMobileMenuOpen(true)}
className="lg:hidden text-brand-blue"
>

<Menu/>

</button>



</nav>






{/* MOBILE MENU */}


<div
className={`
fixed inset-0 bg-black/40 z-50 lg:hidden
${isMobileMenuOpen ? "block":"hidden"}
`}
onClick={()=>setIsMobileMenuOpen(false)}
>



<div
className="
absolute right-0 top-0
h-full w-[280px]
bg-white
p-6
shadow-xl
"
onClick={(e)=>e.stopPropagation()}
>


<div className="flex justify-between mb-8">


<div className="font-bold text-xl text-brand-blue">
CEETEC
</div>


<button
onClick={()=>setIsMobileMenuOpen(false)}
>

<X/>

</button>


</div>





<div className="flex flex-col gap-5">


{
navItems.map((item)=>(

<NavLink

key={item.path}

to={item.path}

className={mobileLinkClass}

onClick={()=>setIsMobileMenuOpen(false)}

>

{item.label}

</NavLink>

))
}


</div>





<button

onClick={()=>{

setIsMobileMenuOpen(false);
onOpenEnquiry?.();

}}

className="
mt-8
w-full
bg-brand-blue
hover:bg-brand-orange
text-white
py-3
rounded-lg
flex
justify-center
gap-2
"

>

Quick Enquiry

<ArrowRight/>

</button>



</div>


</div>



</header>

  );
}