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

const SidebarMenu = ({ setShowSidebarMenu, showSidebarMenu }) => {
  const services = [
    {
      name: 'Digital Transformation',
      img: service1
    },
    {
      name: 'Data Insight',
      img: service2
    },
    {
      name: 'BPA & RPA',
      img: service3
    },
    {
      name: 'EA',
      img: service4
    },
    {
      name: 'IT Governance',
      img: service5
    },
    {
      name: 'IT Auditing',
      img: service6
    },
    {
      name: 'Business Solutions',
      img: service7
    },
    {
      name: 'RA/RM',
      img: service8
    },
    {
      name: 'Cybersecurity',
      img: service9
    },
    {
      name: 'BCDR',
      img: service10
    },
    {
      name: 'VCIO',
      img: service11
    },
    {
      name: 'VCISO',
      img: service12
    },
    {
      name: 'Cloud',
      img: service13
    },
    {
      name: 'Integration & Development',
      img: service14
    },
    {
      name: 'DevOps',
      img: service15
    }
  ];
  const links = [
    {
      name: 'Customers',
      location: '/'
    },
    {
      name: 'Privacy Policy',
      location: '/'
    },
    {
      name: 'Terms of Use',
      location: '/'
    },
    {
      name: 'Careers',
      location: '/'
    },
    {
      name: 'About Us',
      location: '/'
    },
    {
      name: 'Contact Us ',
      location: '/'
    },
    {
      name: 'Partners',
      location: '/'
    }
  ];
  return (
    <>
      <div className={`w-full lg:w-[501px] fixed z-30 top-0 transition-all duration-500 bottom-0 overflow-y-scroll custom-scrollbar lg:rounded-se-3xl lg:rounded-ee-3xl lg:border border-white border-opacity-30 bg-white bg-opacity-5 backdrop-blur-[10px] ${showSidebarMenu ? 'lg:-left-2' : 'lg:-left-[502px]'} `}>
        <div className="sticky right-7 top-12 pr-7 w-full">
          <svg onClick={() => setShowSidebarMenu(false)} className="cursor-pointer ml-auto" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M15.4517 17.5117C15.7343 17.8146 16.2089 17.8309 16.5117 17.5483C16.8146 17.2657 16.8309 16.7911 16.5483 16.4883L10.0259 9.5L16.5483 2.51174C16.8309 2.20893 16.8146 1.73433 16.5117 1.45171C16.2089 1.16908 15.7343 1.18545 15.4517 1.48826L9 8.40081L2.54829 1.48826C2.26567 1.18545 1.79107 1.16908 1.48826 1.45171C1.18545 1.73433 1.16908 2.20893 1.45171 2.51174L7.97409 9.5L1.45171 16.4883C1.16908 16.7911 1.18545 17.2657 1.48826 17.5483C1.79107 17.8309 2.26567 17.8146 2.54829 17.5117L9 10.5992L15.4517 17.5117Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="pl-[30px] lg:pl-[66px]">
          <h2 className="font-GilroyBlack font-black text-[36px] lg:text-[44px] text-white pt-[90px] mb-7">IIT</h2>
          <div className="grid grid-cols-3 gap-6 pb-16 pr-11 lg:pr-[50px] lg:pb-20">
            {services.map((service, i) => {
              return (
                <div key={i} className="text-center">
                  <div className="h-[56px] w-[59px] lg:w-[71px] lg:h-[67px] rounded-md mx-auto bg-white bg-opacity-5 border border-white border-opacity-20 flex items-center justify-center">
                    <Image src={service.img} alt="Service Icon" />
                  </div>
                  <p className="max-w-[100px] lg:max-w-[121px] mx-auto font-Gilroy font-semibold mt-4 lg:mt-2.5 text-xs lg:text-sm text-yellow">{service.name}</p>
                </div>
              );
            })}
          </div>
          <ul className="flex flex-col items-start gap-1 pr-11 lg:pr-12">
            <li className="border-b border-white border-opacity-10 flex-1 w-full">
              <small className="text-white capitalize font-Gilroy text-xs leading-[41px] lg:leading-[50px] lg:text-base">Segments</small>
            </li>

            {links.map((link, i) => (
              <li key={i} className="border-b border-white border-opacity-10 flex-1 w-full">
                <a className="text-white capitalize font-Gilroy text-xs leading-[41px] lg:leading-[50px] lg:text-base " href={link.location}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="language mt-20 flex gap-4 mb-3">
            <button className="w-12 h-12 rounded-full border cursor-pointer border-white flex justify-center items-center text-white text-lg leading-none lg:text-[22px]">AR</button>
            <button className="w-12 h-12 rounded-full border cursor-pointer border-yellow flex justify-center items-center text-yellow text-lg leading-none lg:text-[22px]">EN</button>
          </div>
        </div>
      </div>
      <div onClick={() => setShowSidebarMenu(false)} className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${showSidebarMenu ? '' : 'hidden'} `}></div>
    </>
  );
};

export default SidebarMenu;
