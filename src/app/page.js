'use client';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import Services from '@/components/Services';
import StarBg from '@/components/StarBg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SidebarMenu from '@/components/SidebarMenu';

export default function Home() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [activeScrollMenu, setActiveScrollMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  useEffect(() => {
    // Function to handle scroll events
    function scrollFunction() {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        setActiveScrollMenu(true);
      } else {
        setActiveScrollMenu(false);
      }
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', scrollFunction);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <>
      <Header activeScrollMenu={activeScrollMenu} setShowSidebarMenu={setShowSidebarMenu} setShowContact={setShowContact} />
      <main className="relative z-10">
        <Services />
        <Expertise />
      </main>
      <Footer />
      <SidebarMenu showSidebarMenu={showSidebarMenu} setShowSidebarMenu={setShowSidebarMenu} />
      <Contact showContact={showContact} setShowContact={setShowContact} />
      <StarBg />
    </>
  );
}
