import Link from "next/link";
import Image from 'next/image';
import Logo1 from '@/assets/logo1.svg';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full bg-[#282828] text-[#9d9d9d] border-b-2 border-[#383838]">
      <div className="flex justify-between items-center p-4 mx-auto max-w-6xl">

        <Image
          src={Logo1}
          alt="amam"
          className="w-28"
        />
        <nav className="flex gap-8">
          <Link href="/" className="hover:underline hover:text-white">Главная</Link>
          <Link href="/about" className="hover:underline hover:text-white">О проекте</Link>
          <Link href="/services" className="hover:underline hover:text-white">Услуги / тарифы</Link>
          <Link href="/contacts" className="hover:underline hover:text-white">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}
