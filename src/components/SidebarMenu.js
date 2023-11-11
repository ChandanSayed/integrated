import service1 from '/public/images/service1.svg';
import service2 from '/public/images/service2.svg';
import service3 from '/public/images/service3.svg';
import service4 from '/public/images/service4.svg';
import service5 from '/public/images/service5.svg';
import service6 from '/public/images/service6.svg';
import service7 from '/public/images/service7.svg';
import service8 from '/public/images/service8.svg';
import service9 from '/public/images/service9.svg';
import service10 from '/public/images/service10.svg';
import service11 from '/public/images/service11.svg';
import service12 from '/public/images/service12.svg';
import service13 from '/public/images/service13.svg';
import service14 from '/public/images/service14.svg';
import service15 from '/public/images/service15.svg';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const SidebarMenu = ({ setShowSidebarMenu, showSidebarMenu }) => {
  const { arabicLanguage, setArabicLanguage } = useAppContext();
  const services = [
    {
      name: 'Digital Transformation',
      arabicName: 'التحول الرقمي',
      img: service1
    },
    {
      name: 'Data Insight',
      arabicName: 'رؤية البيانات',
      img: service2
    },
    {
      name: 'BPA & RPA',
      arabicName: 'BPA وRPA',
      img: service3
    },
    {
      name: 'EA',
      arabicName: 'عصام      ',
      img: service4
    },
    {
      name: 'IT Governance',
      arabicName: `حوكمة تقنية
      المعلومات`,
      img: service5
    },
    {
      name: 'IT Auditing',
      arabicName: 'تدقيق تكنولوجيا المعلومات',
      img: service6
    },
    {
      name: 'Business Solutions',
      arabicName: 'حلول الأعمال',
      img: service7
    },
    {
      name: 'RA/RM',
      arabicName: 'را/م',
      img: service8
    },
    {
      name: 'Cybersecurity',
      arabicName: 'الأمن الإلكتروني',
      img: service9
    },
    {
      name: 'BCDR',
      arabicName: 'BCDR',
      img: service10
    },
    {
      name: 'VCIO',
      arabicName: 'VCIO',
      img: service11
    },
    {
      name: 'VCISO',
      arabicName: 'VCISO',
      img: service12
    },
    {
      name: 'Cloud',
      arabicName: 'سحاب',
      img: service13
    },
    {
      name: 'Integration & Development',
      arabicName: 'التكامل والتطوير',
      img: service14
    },
    {
      name: 'DevOps',
      arabicName: 'ديف أوبس',
      img: service15
    }
  ];
  const links = [
    {
      name: 'Customers',
      arabicName: 'عملاء',
      location: '/'
    },
    {
      name: 'Privacy Policy',
      arabicName: 'سياسة الخصوصية',
      location: '/'
    },
    {
      name: 'Terms of Use',
      arabicName: 'سياسة الخصوصية شروط الاستخدام',
      location: '/'
    },
    {
      name: 'Careers',
      arabicName: 'وظائف',
      location: '/'
    },
    {
      name: 'About Us',
      arabicName: 'معلومات عنا',
      location: '/'
    },
    {
      name: 'Contact Us ',
      arabicName: 'شركاء',
      location: '/'
    },
    {
      name: 'Partners',
      arabicName: 'اتصل بنا',
      location: '/'
    }
  ];

  function closeMenu() {
    setShowSidebarMenu(false);
    document.body.style.overflow = '';
  }

  return (
    <>
      <div className={`w-full max-lg:max-w-[400px] lg:w-[501px] fixed z-30 top-0 transition-all duration-500 bottom-0 overflow-y-scroll custom-scrollbar ${arabicLanguage ? 'lg:rounded-ss-3xl lg:rounded-es-3xl' : 'lg:rounded-se-3xl lg:rounded-ee-3xl'} lg:border border-white border-opacity-30 bg-white bg-opacity-5 backdrop-blur-[10px] ${showSidebarMenu ? `${arabicLanguage ? 'right-0 lg:-right-2' : 'left-0 lg:-left-2'}` : `${arabicLanguage ? '-right-[400px] lg:-right-[502px]' : '-left-[400px] lg:-left-[502px]'}`} `}>
        <div className="sticky right-7 top-12 pr-7 w-full">
          <svg onClick={closeMenu} className="cursor-pointer ml-auto" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M15.4517 17.5117C15.7343 17.8146 16.2089 17.8309 16.5117 17.5483C16.8146 17.2657 16.8309 16.7911 16.5483 16.4883L10.0259 9.5L16.5483 2.51174C16.8309 2.20893 16.8146 1.73433 16.5117 1.45171C16.2089 1.16908 15.7343 1.18545 15.4517 1.48826L9 8.40081L2.54829 1.48826C2.26567 1.18545 1.79107 1.16908 1.48826 1.45171C1.18545 1.73433 1.16908 2.20893 1.45171 2.51174L7.97409 9.5L1.45171 16.4883C1.16908 16.7911 1.18545 17.2657 1.48826 17.5483C1.79107 17.8309 2.26567 17.8146 2.54829 17.5117L9 10.5992L15.4517 17.5117Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={`${arabicLanguage ? 'pr-[30px] lg:pr-[66px]' : 'pl-[30px] lg:pl-[66px]'}`}>
          <h2 className={`font-GilroyBlack font-black text-[36px] lg:text-[44px] text-white pt-[90px] mb-7 ${arabicLanguage ? 'text-right' : ''} `}>IIT</h2>
          <div className={`grid grid-cols-3 gap-6 pb-16 lg:pb-20 ${arabicLanguage ? 'pl-11 lg:pl-[50px]' : 'pr-11 lg:pr-[50px]'} `}>
            {services.map((service, i) => {
              return (
                <div key={i} className="text-center">
                  <div className="h-[56px] w-[59px] lg:w-[71px] lg:h-[67px] rounded-md mx-auto bg-white bg-opacity-5 border border-white border-opacity-20 flex items-center justify-center">
                    <Image src={service.img} alt="Service Icon" />
                  </div>
                  <p className="max-w-[100px] lg:max-w-[121px] mx-auto font-Gilroy font-semibold mt-4 lg:mt-2.5 text-xs lg:text-sm text-yellow">{arabicLanguage ? service.arabicName : service.name}</p>
                </div>
              );
            })}
          </div>
          <ul className={`flex flex-col ${arabicLanguage ? 'text-right pl-11 lg:pl-12' : 'pr-11 lg:pr-12'} items-start gap-1`}>
            <li className="border-b border-white border-opacity-10 flex-1 w-full">
              <small className="text-white capitalize font-Gilroy text-xs leading-[41px] lg:leading-[50px] lg:text-base"> {arabicLanguage ? 'اتصل بنا' : 'Segments'} </small>
            </li>

            {links.map((link, i) => (
              <li key={i} className="border-b border-white border-opacity-10 flex-1 w-full">
                <a className="text-white capitalize font-Gilroy text-xs leading-[41px] lg:leading-[50px] lg:text-base " href={link.location}>
                  {arabicLanguage ? link.arabicName : link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={`language mt-20 flex gap-4 mb-3 ${arabicLanguage ? 'justify-end' : ''} `}>
            <button onClick={() => setArabicLanguage(true)} className="w-12 h-12 rounded-full border cursor-pointer border-white flex justify-center items-center text-white text-lg leading-none lg:text-[22px]">
              AR
            </button>
            <button onClick={() => setArabicLanguage(false)} className="w-12 h-12 rounded-full border cursor-pointer border-yellow flex justify-center items-center text-yellow text-lg leading-none lg:text-[22px]">
              EN
            </button>
          </div>
        </div>
      </div>
      <div onClick={closeMenu} className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${showSidebarMenu ? '' : 'hidden'} `}></div>
    </>
  );
};

export default SidebarMenu;
