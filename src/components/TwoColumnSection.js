import Image from 'next/image';
import { Element } from 'react-scroll';

const TwoColumnSection = ({ imgSrc, lineOne, lineTwo, para, classes, name, lineOneColor, lineTwoColor, arabicLanguage }) => {
  return (
    <Element className="relative" name={name}>
      <div className="blur-[157px] bg-blurColor bg-opacity-25 w-full lg:w-[850px] rounded-[850px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className={`flex flex-col gap-[30px] lg:gap-14 items-center justify-center relative z-10 ${classes}`}>
        <div className="img" data-aos="fade-up">
          <Image src={imgSrc} alt="Service Image" />
        </div>
        <div data-aos="fade-up" className={`flex flex-col gap-2.5 lg:gap-[30px] max-w-[610px]`}>
          <h2 className={`max-w-[613px] font-black font-GilroyBlack capitalize text-xl lg:text-4xl ${lineOneColor} ${arabicLanguage ? 'hidden' : 'block'}`}>
            {lineOne} <span className={`${lineTwoColor}`}>{lineTwo}</span>
          </h2>
          <h2 style={{ direction: 'rtl' }} className={`max-w-[613px] font-black font-GilroyBlack capitalize text-xl lg:text-4zl text-right ${lineOneColor} ${arabicLanguage ? 'block' : 'hidden'}`}>
            {lineTwo} <span className={`${lineTwoColor}`}>{lineOne}</span>
          </h2>
          <p className={`text-xs lg:text-lg capitalize text-white ${arabicLanguage ? 'text-right' : ''}`}>{para}</p>
          <button className="text-textColor text-[10px] leading-tight w-[92px] lg:w-[148px] py-2 text-center lg:text-base font-semibold bg-yellow hover:bg-yellowHover focus:bg-yellowHover lg:py-1.5 lg:px-6 rounded-full cursor-pointer">{arabicLanguage ? ' يتعلم أكثر' : 'Learn More'}</button>
        </div>
      </div>
    </Element>
  );
};

export default TwoColumnSection;
