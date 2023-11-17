import Image from 'next/image';

import menu from '/public/images/menu.svg';
import { Button as ScrollLink } from 'react-scroll';

import { useAppContext } from '@/context/AppContext';
import Hero from './Hero';
import Logo from './Logo';

const Header = ({ activeScrollMenu, setShowSidebarMenu, setShowContact }) => {
  const { arabicLanguage } = useAppContext();

  const handleSetActive = to => {
    console.log(to);
  };

  function handleScrollLink(e) {
    e.target.classList.add('active');
  }

  function openMenu() {
    setShowSidebarMenu(true);
    document.body.style.overflow = 'hidden';
  }
  function openContact() {
    setShowContact(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <header className="container xl:max-w-[1268px] mx-auto px-4 mt-[104px] relative z-20">
      <div className="fixed z-20 top-0 left-0 right-0 w-full pt-4 bg-[#0f101b]">
        <nav className={`flex ${arabicLanguage && 'flex-row-reverse'} justify-between items-center mx-auto px-4 xl:px-5`}>
          <div className="menu w-[73.8px] lg:w-[200.3px]">
            <Image className={`cursor-pointer max-lg:w-[18px] object-cover ${arabicLanguage ? 'ml-auto' : ''}`} onClick={openMenu} src={menu} alt="menu" />
          </div>
          <Logo />
          <div className="contact-btn w-[73.8px] lg:w-[200.3px]">
            <button onClick={openContact} className={`lg:h-16 border border-white rounded-full text-center lg:text-lg text-white capitalize font-semibold text-[10px] py-1.5 px-2.5 lg:px-[50px] lg:py-[18px] hover:bg-white hover:text-textColor block ${!arabicLanguage ? 'ml-auto' : ''}`}>
              {arabicLanguage ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </nav>
        <ul data-aos="fade-up" className={`nav-items flex-wrap gap-x-[51px] justify-center text-white max-w-[1268px] mx-auto px-4 pb-6 hidden ${activeScrollMenu ? 'lg:flex' : ''}`}>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="one" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'التحول الرقمي' : 'Digital Transformation'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="two" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'رؤية البيانات' : 'Data Insight'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="three" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'BPA وRPA' : 'BPA & RPA'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="four" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'عصام' : 'EA'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="five" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'حوكمة تقنية المعلومات' : 'IT Governance'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="six" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'تدقيق تكنولوجيا المعلومات' : ' IT Auditing'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="seven" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'غرفة البحرين لتسوية المنازعات' : 'BCDR'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="eight" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'را/م' : 'RA/RM'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="nine" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'حلول الأعمال' : 'Cybersecurity'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="ten" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'VCIO' : ' Business Solutions'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="eleven" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'VCISO' : 'VCIO'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="twelve" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'سحاب' : 'VCISO'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="thirteen" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'التكامل والتطوير' : 'Cloud'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="fourteen" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'ديف أوبس' : 'Integration & Development'}
            </ScrollLink>
          </li>
          <li className="mt-6">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="fifteen" spy={true} smooth={true} offset={-300} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-lg text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'الأمن الإلكتروني' : 'DevOps'}
            </ScrollLink>
          </li>
        </ul>
      </div>

      <Hero />
    </header>
  );
};

export default Header;
