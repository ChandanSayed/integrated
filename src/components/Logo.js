import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <Link href={'/'}>
        <Image className="max-lg:w-[125px]" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
