import Link from 'next/link';
import Image from 'next/image';
import Logo1 from '@/assets/logo1.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#282828] border-t-2 border-[#383838] text-[#9d9d9d] mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Image src={Logo1} alt="EduCode" className='w-32'/>
                        <p>&copy; {currentYear} EduCode. Все права защищены.</p>
                    </div>
                    <div className='flex gap-8'>
                        {/* <ul>
                            <li>
                                <Link href='/' className="hover:underline">Главная</Link>
                            </li>
                            <li>
                                <Link href='/about' className="hover:underline">О нас</Link>
                            </li>
                            <li>
                                <Link href='/contacts' className="hover:underline">Контакты</Link>
                            </li>
                            <li>
                                <Link href='/services' className="hover:underline">Услуги / сервисы</Link>
                            </li>
                        </ul> */}
                            <Link href='/' className="hover:underline hover:text-white">Помощь</Link>
                            <Link href='/about' className="hover:underline hover:text-white">Юридическая информация</Link>
                            <Link href='/contacts' className="hover:underline hover:text-white">Политика конфиденциальности</Link>


                    </div>
{/* 
                    <div>
                        <h4 className="text-white mb-3">Контакты</h4>
                        <ul>
                            <li>Email: info@example.com</li>
                            <li>Телефон: +7 (999) 123-45-67</li>
                            <li>Адрес: г.Якутск, ул. Кулаковского, 48</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}