'use client';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import Services from '@/components/Services';
import StarBg from '@/components/StarBg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Expertise from '@/components/Expertise';
import Footer from './Footer';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [activeScrollMenu, setActiveScrollMenu] = useState(false);

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
      <Header activeScrollMenu={activeScrollMenu} />
      <main className="">
        <StarBg />
        {/* <h2 className="font-quickSand text-white">Hello</h2>
        <h2 className="font-GilroyBlack text-white text-center text-[66px] leading-[86px] capitalize">The future is integrated technologies the future is iIT</h2> */}
        <Services />
        <Expertise />
      </main>
      <Footer />
    </>
  );
}
