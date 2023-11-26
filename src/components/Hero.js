import { useAppContext } from '@/context/AppContext';
import { Button } from 'react-scroll';

const Hero = ({ arabicLanguage }) => {
  const handleSetActive = to => {
    console.log(to);
  };

  return (
    <div className="relative max-sm:min-h-screen pt-[60px] lg:pt-[130px] pb-[110px] lg:pb-[190px] flex flex-col gap-5 lg:gap-[30px] items-center">
      <h1 className="font-Gilroy text-white text-center text-5xl capitalize max-w-[326px] lg:max-w-[878px] mx-auto max-lg:text-2xl max-lg:leading-9">
        {arabicLanguage ? 'المستقبل هو التقنيات المتكاملة،' : 'The future is integrated technologies'} <span className="text-yellow">{arabicLanguage ? 'المستقبل هو iIT' : 'the future is iIT'}</span>
      </h1>
      <p className={`capitalize text-xs lg:text-xl text-white ${arabicLanguage ? 'max-w-[640px]' : 'max-w-[852px]'} text-center`}>{arabicLanguage ? 'نحن فريق عالمي من التقنيين الذين يدفعون المؤسسات إلى الأمام من خلال المنتجات والمنصات والخدمات والعمليات الرقمية.' : 'We are a global team of technologists that propels enterprises forward with digital products, platforms, services, and processes.'}</p>
      <Button onSetActive={handleSetActive} activeClass="active" to="services" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} className={`text-textColor text-[10px] leading-tight w-[92px] lg:w-auto py-2 text-center lg:text-lg font-semibold bg-yellow hover:bg-yellowHover lg:py-2 lg:px-10 rounded-full cursor-pointer ${arabicLanguage ? 'flex flex-row-reverse items-center justify-center' : ''}`}>
        {arabicLanguage ? ' يتعلم أكثر' : 'Learn More'}
        <svg className={`inline-block ${arabicLanguage ? 'mr-[3px]' : 'ml-[3px]'}  lg:ml-2.5 max-lg:w-[7px]`} xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
          <path d="M1 1.31616L8.5 9.31616L16 1.31616" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
      <div className="blur-[157px] bg-blurColor bg-opacity-25 w-full lg:w-[850px] rounded-[850px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
    </div>
  );
};

export default Hero;
