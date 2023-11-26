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
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { arabicLanguage } = useAppContext();
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
      <Header showSidebarMenu={showSidebarMenu} activeScrollMenu={activeScrollMenu} setShowSidebarMenu={setShowSidebarMenu} setShowContact={setShowContact} arabicLanguage={arabicLanguage} />
      <StarBg />
      <main className="relative z-10">
        <Services arabicLanguage={arabicLanguage} />
        <Expertise arabicLanguage={arabicLanguage} />
      </main>
      <Footer arabicLanguage={arabicLanguage} />
      <SidebarMenu setShowContact={setShowContact} showSidebarMenu={showSidebarMenu} setShowSidebarMenu={setShowSidebarMenu} arabicLanguage={arabicLanguage} />
      <Contact showContact={showContact} setShowContact={setShowContact} arabicLanguage={arabicLanguage} />
    </>
  );
}
