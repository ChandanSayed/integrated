import Image from 'next/image';
import logo from '/public/images/logo.svg';
import menu from '/public/images/menu.svg';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const Header = () => {
  const { arabicLanguage } = useAppContext();

  return (
    <div className={`flex ${arabicLanguage && 'flex-row-reverse'} justify-between items-center max-w-[1268px] mx-auto px-4 pt-4 relative z-10`}>
      <div className="menu">
        <Image className="cursor-pointer" src={menu} alt="menu" />
      </div>
      <div className="logo">
        <Link href={'/'}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="contact-btn">
        <button className="h-16 border border-white rounded-full text-center text-lg text-white capitalize font-semibold px-[50px] py-[18px] hover:bg-white hover:text-textColor"> {arabicLanguage ? 'اتصل بنا' : 'UsContact'} </button>
      </div>
    </div>
  );
};

export default Header;
