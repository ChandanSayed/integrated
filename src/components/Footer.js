import Logo from '@/components/Logo';
import { useAppContext } from '@/context/AppContext';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

import x from '/public/images/x.svg';
import li from '/public/images/in.svg';
import fb from '/public/images/fb.svg';

const Footer = () => {
  const { arabicLanguage } = useAppContext();
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

  return (
    <footer className="py-10 relative z-10 mt-32 bg-[#0f101b]">
      <div className="flex flex-col gap-[30px] items-center justify-center mb-[60px] relative z-10">
        <Logo />
        <ul className="flex flex-col items-center lg:flex-row gap-5">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a className="text-white" href={link.location}>
                  {arabicLanguage ? link.arabicName : link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center gap-2">
          <li>
            <a href="https://www.linkedin.com/">
              <Image src={li} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <Image src={fb} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <Image src={x} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-black blur-[92px] absolute inset-0"></div>
      <div className="footer-bottom container xl:max-w-[1328px] px-4 mx-auto border-t pt-[30px] pb-2 border-white border-opacity-30 relative z-10">
        <div className="flex flex-col items-center lg:flex-row gap-8 justify-between">
          {arabicLanguage ? (
            <p style={{ direction: 'rtl' }} className={`text-[10px] lg:text-sm text-white text-center ${poppins.className}`}>
              © حقوق الطبع والنشر {new Date().getFullYear()}، جميع الحقوق محفوظة لشركة Logic Saint
            </p>
          ) : (
            <p className={`text-[10px] lg:text-sm text-white text-center ${poppins.className}`}> © Copyright {new Date().getFullYear()}, All Rights Reserved by Logic Saint </p>
          )}

          <p className="text-[10px] lg:text-sm text-white">Integrated@gmail.com</p>
        </div>
      </div>
      {/* <div className=" w-full mx-auto max-w-[1298px] max-lg:hidden h-0"> */}
      <a className={`block ml-auto cursor-pointer fixed bottom-28 ${arabicLanguage ? 'left-6' : 'right-6'}`} href="https://api.whatsapp.com/send?phone=15551234567">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M30.5065 13.4876L30.5072 13.4883C32.6308 15.6013 33.8 18.4138 33.8 21.408C33.8 27.5756 28.7473 32.6045 22.5462 32.6045C20.6612 32.6045 18.81 32.1299 17.1632 31.2372L17.0937 31.1995L17.0172 31.2195L11.2843 32.7189L12.811 27.1418L12.833 27.0614L12.7914 26.9892C11.8147 25.2942 11.2925 23.3736 11.2925 21.3965C11.2925 15.229 16.3452 10.2001 22.5462 10.2001L22.5469 10.2001C24.0266 10.1949 25.4925 10.483 26.8591 11.0475C28.2257 11.6119 29.4656 12.4415 30.5065 13.4876ZM17.5894 29.7217L17.5906 29.7224C19.089 30.6029 20.7998 31.0725 22.5462 31.0725C27.9022 31.0725 32.2699 26.7412 32.2467 21.408C32.2514 20.1363 32.0024 18.8764 31.5141 17.7013C31.0259 16.526 30.3081 15.459 29.4025 14.5619C27.5734 12.7304 25.1301 11.7206 22.5347 11.7206C17.1779 11.7206 12.8111 16.0641 12.8111 21.3965L12.8111 21.3967C12.8124 23.216 13.3277 24.9983 14.2981 26.5401L14.2981 26.5401L14.2995 26.5423L14.4819 26.8236L13.5463 30.2331L13.4547 30.5671L13.7898 30.4795L17.3147 29.5577L17.5894 29.7217ZM19.575 20.8851L19.5749 20.8852L19.578 20.8903C19.7527 21.1801 20.332 22.1341 21.2113 22.9145C22.1671 23.7643 23.0088 24.1236 23.4018 24.2913C23.4651 24.3183 23.5167 24.3404 23.5553 24.3587C23.7121 24.4395 23.8697 24.4912 24.0269 24.4731C24.1934 24.4539 24.3194 24.3617 24.4204 24.2405C24.5838 24.0545 25.1295 23.408 25.3338 23.1096C25.4095 23.0037 25.4588 22.9902 25.4894 22.9868C25.541 22.9811 25.6103 22.9973 25.7465 23.0442C25.9408 23.1244 26.7635 23.5232 27.2894 23.7781C27.4663 23.8639 27.6096 23.9334 27.6842 23.969C27.7495 24.0002 27.8048 24.0255 27.8533 24.0477C27.9215 24.079 27.9762 24.104 28.0264 24.1306C28.1069 24.1732 28.133 24.1993 28.1451 24.2183C28.1438 24.2162 28.1431 24.2151 28.1429 24.2152C28.1423 24.2155 28.1516 24.2386 28.1574 24.3008C28.1636 24.3673 28.1641 24.4582 28.1547 24.5695C28.136 24.7917 28.0792 25.082 27.9638 25.3991L27.9628 25.402C27.8702 25.6693 27.5755 25.9575 27.2003 26.1975C26.8304 26.4341 26.433 26.5916 26.1933 26.6265C25.7102 26.6935 25.1204 26.7244 24.4796 26.519L24.4768 26.5182C24.0649 26.393 23.5414 26.2231 22.8693 25.9283L22.8678 25.9277C20.1852 24.7761 18.3728 22.1443 18.0922 21.7367C18.0792 21.7179 18.0695 21.7038 18.0631 21.6948L18.0632 21.6948L18.0597 21.6901L18.0575 21.6872C17.9865 21.593 17.7061 21.2212 17.4424 20.7047C17.1745 20.1798 16.9327 19.5228 16.9327 18.8665C16.9327 17.6509 17.5161 17.0132 17.8084 16.6937C17.8327 16.6671 17.8551 16.6427 17.8749 16.6203C18.0965 16.3816 18.3395 16.3296 18.4894 16.3296H19.0378C19.0784 16.3321 19.1091 16.3324 19.1342 16.3327C19.1883 16.3334 19.2163 16.3337 19.2599 16.3545C19.3087 16.3779 19.4005 16.4476 19.5064 16.7C19.7357 17.2703 20.317 18.6823 20.3911 18.8298C20.4462 18.9393 20.4674 19.0308 20.4131 19.1471C20.4059 19.1614 20.399 19.1753 20.3922 19.1887C20.3115 19.3499 20.2626 19.4477 20.1525 19.5755C20.1022 19.6339 20.0522 19.6941 20.0034 19.7528C19.9069 19.8689 19.8152 19.9793 19.7353 20.0588L19.7324 20.0617C19.662 20.1317 19.5578 20.2353 19.5077 20.3741C19.4503 20.533 19.4726 20.7032 19.575 20.8851Z" fill="white" stroke="#010205" strokeWidth="0.4" />
          <circle cx="22" cy="22" r="21.5" stroke="white" />
        </svg>
      </a>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
