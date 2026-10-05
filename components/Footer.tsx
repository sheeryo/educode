import Link from 'next/link';

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="bg-gray-500 border-t border-gray-700 mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">Site</h3>
                    </div>
                    <div>
                        <h4 className="text-white mb-3">Навигация</h4>
                        <ul>
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
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-3">Контакты</h4>
                        <ul>
                            <li>Email: info@example.com</li>
                            <li>Телефон: +7 (999) 123-45-67</li>
                            <li>Адрес: г.Якутск, ул. Кулаковского, 48</li>
                        </ul>
                    </div>
                    <div>
                        <p>&copy; {currentYear} Site. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}