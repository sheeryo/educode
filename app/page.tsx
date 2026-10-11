import Link from "next/link";
import Hero from "@/components/Hero";
import Image from "next/image";
import pythonLogo from "@/assets/python_logo.svg";
import frontendLogo from "@/assets/frontend.png";
import cppLogo from "@/assets/cpp.svg";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EduCode',
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="bg-[#282828] text-white pt-8 pb-16 px-8 mt-4 border-1 border-[#383838] rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <h1 className="font-extrabold w-full text-center text-4xl mb-8 md:mb-0">
            Почему выбирают нас?
          </h1>
          <ul className="flex flex-col">
            <li className="mb-6">
              <h2 className="text-xl"><span className="text-[#ffa116] font-bold">•</span> 80% практики с первых минут</h2>
              <p className="text-lg text-[#9d9d9d]">Забудьте про скучные лекции. Вы будете писать реальный код прямо в браузере и сразу видеть результаты своей работы.</p>
            </li>
            <li className="mb-6">
              <h2 className="text-xl"><span className="text-[#ffa116] font-bold">•</span> Карьерный старт под ключ</h2>
              <p className="text-lg text-[#9d9d9d]">Мы не просто учим программировать, но и помогаем собрать сильное портфолио, составить резюме и подготовиться к техническим собеседованиям.</p>
            </li>
            <li className="mb-6">
              <h2 className="text-xl"><span className="text-[#ffa116] font-bold">•</span> Настоящие код-ревью и менторы</h2>
              <p className="text-lg text-[#9d9d9d]">Ваш код проверяют практикующие разработчики из ведущих IT-компаний. Они укажут на ошибки и подскажут лучшие архитектурные решения.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-white pt-8 pb-16 px-8 mt-8">
        <h1 className="text-4xl text-center mb-8">Курсы для востребованных специалистов</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* карточка */}
          <Link href='/services'>
            <div className="flex flex-col justify-between bg-[#282828] text-white p-6 rounded-xl border-1 border-[#383838] cursor-pointer">
              <div>
                <div className="flex flex-col items-center justify-center bg-[#323232] h-48 mb-6 rounded-xl">
                  <Image src={pythonLogo} alt="Python" className="w-20 h-20 object-contain"/>
                </div>
                <h1>Python-разработчик</h1>
                <p className="text-[#9d9d9d]">Создавайте веб-приложения, автоматизируйте процессы и изучайте Data Science.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#383838] text-sm text-[#9d9d9d]">
                С нуля • 6 месяцев
              </div>
            </div>
          </Link>

          <Link href='/services'>
            <div className="flex flex-col bg-[#282828] text-white p-6 rounded-xl border-1 border-[#383838] cursor-pointer">
              <div>
              <div className="flex flex-col items-center justify-center bg-[#323232] h-48 mb-6 rounded-xl">
                  <Image src={cppLogo} alt="C++" className="w-20 h-20 object-contain"/>
                </div>
                <h1>Разработчик на C++</h1>
                <p className="text-[#9d9d9d]">Освойте системное программирование, алгоритмы и высокопроизводительный код.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#383838] text-sm text-[#9d9d9d]">
                С нуля • 9 месяцев
              </div>
            </div>
          </Link>

          <Link href='/services'>
            <div className="flex flex-col bg-[#282828] text-white p-6 rounded-xl border-1 border-[#383838] cursor-pointer">
              <div>
              <div className="flex flex-col items-center justify-center bg-[#323232] h-48 mb-6 rounded-xl">
                  <Image src={frontendLogo} alt="Frontend" className="w-20 h-20 object-contain"/>
                </div>
                <h1>Frontend-разработчик</h1>
                <p className="text-[#9d9d9d]">Изучите HTML, CSS, JavaScript и React для создания современных интерфейсов.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#383838] text-sm text-[#9d9d9d]">
                С нуля • 8 месяцев
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

