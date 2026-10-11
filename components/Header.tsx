'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Logo1 from '@/assets/logo1.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-[#282828] text-[#9d9d9d] border-b-2 border-[#383838] z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        
        {/* Логотип */}
        <Link href="/"><Image src={Logo1} alt="Logo" className="w-28" /></Link>

        {/* Навигация (десктоп / мобилка) */}
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#282828] md:bg-transparent p-4 md:p-0 gap-6 border-b md:border-none border-[#383838]`}>
          <Link href="/" className="hover:text-white">Главная</Link>
          <Link href="/about" className="hover:text-white">О проекте</Link>
          <Link href="/services" className="hover:text-white">Услуги / тарифы</Link>
          <Link href="/contacts" className="hover:text-white">Контакты</Link>
        </nav>

        {/* Кнопка бургера */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>

      </div>
    </header>
  );
}