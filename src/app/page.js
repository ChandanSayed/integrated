'use client';
import Header from '@/components/Header';
import StarBg from '@/components/StarBg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <StarBg />
        {/* <h2 className="font-quickSand text-white">Hello</h2>
        <h2 className="font-GilroyBlack text-white text-center text-[66px] leading-[86px] capitalize">The future is integrated technologies the future is iIT</h2> */}
      </main>
    </>
  );
}
