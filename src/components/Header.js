import Image from 'next/image';
import logo from '/public/images/logo.svg';
import menu from '/public/images/menu.svg';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const Header = () => {
  const { arabicLanguage } = useAppContext();

  return (
    <header className="max-w-[1268px] mx-auto px-4 pt-4 relative z-10">
      <nav className={`flex ${arabicLanguage && 'flex-row-reverse'} justify-between items-center`}>
        <div className="menu">
          <Image className="cursor-pointer" src={menu} alt="menu" />
        </div>
        <div className="logo">
          <Link href={'/'}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="contact-btn">
          <button className="h-16 border border-white rounded-full text-center text-lg text-white capitalize font-semibold px-[50px] py-[18px] hover:bg-white hover:text-textColor"> {arabicLanguage ? 'اتصل بنا' : 'Contact Us'} </button>
        </div>
      </nav>
      <ul className="nav-items flex flex-wrap gap-x-[51px] justify-center text-white">
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'التحول الرقمي' : 'Digital Transformation'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'رؤية البيانات' : 'Data Insight'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'BPA وRPA' : 'BPA & RPA'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'عصام' : 'EA'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'حوكمة تقنية المعلومات' : 'IT Governance'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'تدقيق تكنولوجيا المعلومات' : ' IT Auditing'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'غرفة البحرين لتسوية المنازعات' : 'BCDR'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'را/م' : 'RA/RM'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'حلول الأعمال' : 'Cybersecurity'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'VCIO' : ' Business Solutions'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'VCISO' : 'VCIO'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'سحاب' : 'VCISO'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'التكامل والتطوير' : 'Cloud'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'ديف أوبس' : 'Integration & Development'}
          </a>
        </li>
        <li className="mt-[30px]">
          <a href="#" className="font-Gilroy text-lg text-white hover:text-blurColor">
            {arabicLanguage ? 'الأمن الإلكتروني' : 'DevOps'}
          </a>
        </li>
      </ul>
      <div className="pt-[95px] pb-[144px] flex flex-col gap-[30px] items-center">
        <h1 className="font-GilroyBlack text-white text-center text-[66px] leading-[86px] capitalize">
          The future is integrated technologies <span className="text-yellow block">the future is iIT</span>
        </h1>
        <p className="capitalize text-lg text-white">We are a global team of technologists that propels enterprises forward with digital products, platforms, services, and processes.</p>
        <button className="text-textColor text-lg font-semibold bg-yellow hover:bg-yellowHover py-[18px] px-[50px] rounded-full">
          Learn More{' '}
          <svg className="inline-block ml-2.5" xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
            <path d="M1 1.31616L8.5 9.31616L16 1.31616" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
