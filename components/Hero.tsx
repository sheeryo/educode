import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '@/assets/Hero.svg'

export default function Hero() {
  return (
    <section className='bg-[#282828] text-white pt-24 pb-16 px-8 border-1 border-[#383838] rounded-2xl'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className='w-full flex flex-col items-start'>
          <h1 className="text-2xl md:text-4xl font-extrabold">
            EduCode - платформа онлайн-курсов по языкам программирования
          </h1>
          <p className="mt-4 text-[#9d9d9d] md:text-lg">
            Интерактивные онлайн-курсы по Python, JavaScript, C++ и другим языкам. Учитесь на реальных проектах, пишите код в браузере и постройте карьеру в IT под руководством опытных менторов.
          </p>
          <div className="mt-8">
            <Link
              href="/services"
            >
              <button className="bg-[#423726] hover:bg-[#ffa11633] text-[#ffa116] p-4 rounded-xl cursor-pointer border-1 border-[#ffa116]">Выбрать курс</button>
            </Link>
          </div>
        </div>
        
        <div className='w-full rounded-xl'>
          <Image
            src={HeroImage}
            alt="Платформа EduCode"
          />
        </div>
      </div>
    </section> 
  );
}