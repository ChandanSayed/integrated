import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/logo.svg';

const Logo = ({ arabicLanguage }) => {
  return (
    <div className="logo">
      <Link href={'/'}>
        <Image className={`max-lg:w-[125px] max-h-[54px] ${arabicLanguage ? 'ml-auto' : ''}`} src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
