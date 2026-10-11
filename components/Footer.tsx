import Link from 'next/link';
import Image from 'next/image';
import Logo2 from '@/assets/logo2.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#282828] border-t-2 border-[#383838] text-[#9d9d9d] mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='flex flex-row gap-4 items-center'>
                        <Image src={Logo2} alt="EduCode" className='w-8'/>
                        <p>&copy; {currentYear} EduCode. Все права защищены.</p>
                    </div>
                    <div className='flex gap-8'>
                            <Link href='' className="hover:underline hover:text-white w-full">Помощь</Link>
                            <Link href='' className="hover:underline hover:text-white w-full">Юридическая информация</Link>
                            <Link href='' className="hover:underline hover:text-white w-full">Политика конфиденциальности</Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}