import Link from "next/link";

export default function Header() {
    return(
      <header className="sticky top-0 left-0 w-full bg-gray-100 z-50">
        <div className="flex justify-between items-center p-4 mx-auto max-w-6xl">
          <h1 className="font-bold mr-8">Site</h1>
          <nav className="flex gap-8">
            <Link href="/" className="hover:underline">Главная</Link>
            <Link href="/about" className="hover:underline">О проекте</Link>
            <Link href="/services"  className="hover:underline">Услуги / тарифы</Link>
            <Link href="/contacts"  className="hover:underline">Контакты</Link>
          </nav>
        </div>
      </header>
  );
}
