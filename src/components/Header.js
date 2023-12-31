import { Button as ScrollLink } from 'react-scroll';

import Hero from './Hero';
import Logo from './Logo';

const Header = ({ activeScrollMenu, setShowSidebarMenu, setShowContact, arabicLanguage, showSidebarMenu }) => {
  const handleSetActive = to => {
    console.log(to);
  };

  function handleScrollLink(e) {
    // e.target.classList.add('active');
  }

  function openMenu() {
    setShowSidebarMenu(prev => !prev);
    if (document.body.style.overflow) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
  function openContact() {
    setShowContact(true);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setShowSidebarMenu(false);
    document.body.style.overflow = '';
  }

  return (
    <header className="container xl:max-w-[1268px] mx-auto px-4 mt-8 lg:mt-[54px] relative z-20">
      <div className="fixed z-20 top-0 left-0 right-0 w-full bg-[#000000ff]">
        <nav className={`flex justify-between items-center mx-auto px-4 xl:px-5`}>
          <div className="menu w-[73.8px] lg:w-[200.3px]">
            {/* <Image className={`cursor-pointer max-lg:w-[18px] object-cover w-6 fixed z-30 top-4 lg:top-[19px] ${arabicLanguage ? 'ml-auto right-4' : 'left-4'}`} onClick={openMenu} src={menu} alt="menu" /> */}
            <div className={`ham cursor-pointer fixed z-30 ${showSidebarMenu ? 'open top-4 lg:top-7' : 'lg:top-[19px] top-1.5'} ${arabicLanguage ? 'ml-auto right-5' : 'left-5'}`} onClick={openMenu}>
              <span></span>
              <span></span>
            </div>
            <div onClick={closeMenu} className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${showSidebarMenu ? '' : 'hidden'} `}></div>
          </div>
          <Logo />
          <div className="contact-btn w-[76px] lg:w-[200.3px]">
            <button onClick={openContact} className={`lg:h-[38.4px] border border-white rounded-full text-center lg:text-base text-white capitalize font-semibold text-[10px] py-1.5 px-2.5 lg:px-[50px] lg:py-1.5 hover:bg-white hover:text-textColor block ${!arabicLanguage ? 'ml-auto' : 'mr-auto'}`}>
              {arabicLanguage ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </nav>
        <ul data-aos="fade-up" className={`nav-items flex-wrap gap-x-[51px] justify-center text-white max-w-[1268px] mx-auto px-4 pb-2 hidden ${activeScrollMenu ? 'lg:flex' : ''}`}>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="one" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'التحول الرقمي' : 'Digital Transformation'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="two" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'رؤية البيانات' : 'Data Insight'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="three" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'BPA وRPA' : 'BPA & RPA'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="four" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'عصام' : 'EA'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="five" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'حوكمة تقنية المعلومات' : 'IT Governance'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="six" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'تدقيق تكنولوجيا المعلومات' : ' IT Auditing'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="seven" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'غرفة البحرين لتسوية المنازعات' : 'BCDR'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="eight" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'را/م' : 'RA/RM'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="nine" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'حلول الأعمال' : 'Cybersecurity'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="ten" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'VCIO' : ' Business Solutions'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="eleven" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'VCISO' : 'VCIO'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="twelve" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'سحاب' : 'VCISO'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="thirteen" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'التكامل والتطوير' : 'Cloud'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="fourteen" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'ديف أوبس' : 'Integration & Development'}
            </ScrollLink>
          </li>
          <li className="mt-1">
            <ScrollLink onSetActive={handleSetActive} onClick={handleScrollLink} to="fifteen" spy={true} smooth={true} offset={-180} duration={1000} delay={1000} activeClass="active" className="font-Gilroy text-sm text-white hover:text-[#787878] cursor-pointer">
              {arabicLanguage ? 'الأمن الإلكتروني' : 'DevOps'}
            </ScrollLink>
          </li>
        </ul>
      </div>

      <Hero arabicLanguage={arabicLanguage} />
    </header>
  );
};

export default Header;
