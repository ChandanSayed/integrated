'use client';
import Header from '@/components/Header';
import Services from '@/components/Services';
import StarBg from '@/components/StarBg';
import Image from 'next/image';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Header />
      <main className="">
        <StarBg />
        {/* <h2 className="font-quickSand text-white">Hello</h2>
        <h2 className="font-GilroyBlack text-white text-center text-[66px] leading-[86px] capitalize">The future is integrated technologies the future is iIT</h2> */}
        <Services />
      </main>
    </>
  );
}
