import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useEffect } from 'react';

const TwoColumnSection = ({ imgSrc, lineOne, lineTwo, para, classes, name, lineOneColor, lineTwoColor }) => {
  const { arabicLanguage } = useAppContext();

  return (
    <section className="relative" name={name}>
      <div className={`flex flex-col gap-[30px] lg:gap-14 items-center justify-center ${classes}`}>
        <div className="img" data-aos="fade-up">
          <Image src={imgSrc} alt="Service Image" />
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2.5 lg:gap-[30px] max-w-[610px]">
          <h2 className={`max-w-[613px] font-black font-GilroyBlack capitalize text-xl lg:text-5xl lg:leading-[56px] ${lineOneColor}`}>
            {lineOne} <span className={`${lineTwoColor}`}>{lineTwo}</span>
          </h2>
          <p className="text-xs lg:text-lg capitalize text-white">{para}</p>
          <button className="text-textColor text-[10px] leading-tight w-[92px] lg:w-[199px] py-2 text-center lg:text-lg font-semibold bg-yellow hover:bg-yellowHover lg:py-[18px] lg:px-[50px] rounded-full cursor-pointer">{arabicLanguage ? ' يتعلم أكثر' : 'Learn More'}</button>
        </div>
      </div>
      <div className="blur-[157px] bg-blurColor bg-opacity-25 w-full lg:w-[850px] rounded-[850px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default TwoColumnSection;
