import { useAppContext } from '@/context/AppContext';
import { Button } from 'react-scroll';

const Hero = () => {
  const { arabicLanguage } = useAppContext();
  const handleSetActive = to => {
    console.log(to);
  };

  return (
    <div className="pt-[95px] pb-[144px] flex flex-col gap-[30px] items-center">
      <h1 className="font-GilroyBlack font-black text-white text-center text-[66px] leading-[86px] capitalize">
        {arabicLanguage ? 'المستقبل هو التقنيات المتكاملة،' : 'The future is integrated technologies'} <span className="text-yellow block">{arabicLanguage ? 'المستقبل هو iIT' : 'the future is iIT'}</span>
      </h1>
      <p className={`capitalize text-lg text-white ${arabicLanguage ? 'max-w-[640px]' : 'max-w-[852px]'} text-center`}>{arabicLanguage ? 'نحن فريق عالمي من التقنيين الذين يدفعون المؤسسات إلى الأمام من خلال المنتجات والمنصات والخدمات والعمليات الرقمية.' : 'We are a global team of technologists that propels enterprises forward with digital products, platforms, services, and processes.'}</p>
      <Button onSetActive={handleSetActive} activeClass="active" to="services" spy={true} smooth={true} offset={-300} duration={500} className="text-textColor text-[10px] leading-tight w-[92px] lg:w-auto py-2 text-center lg:text-lg font-semibold bg-yellow hover:bg-yellowHover lg:py-[18px] lg:px-[50px] rounded-full cursor-pointer">
        {arabicLanguage ? ' يتعلم أكثر' : 'Learn More'}
        <svg className="inline-block ml-2.5" xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
          <path d="M1 1.31616L8.5 9.31616L16 1.31616" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </div>
  );
};

export default Hero;
