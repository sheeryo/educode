import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тарифы | EduCode',
};
export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      
      {/*заголовок*/}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Тарифы EduCode
        </h1>
        <p className="text-[#9d9d9d] text-xl">
          Выберите подходящий формат обучения: от самостоятельного изучения базовых языков до полноценной подготовки к трудоустройству с личным ментором.
        </p>
      </div>

      {/*сетка тарифов */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/*start */}
        <div className="flex flex-col justify-between bg-[#282828] p-8 rounded-2xl border border-[#383838]">
          <div>
            <h2 className="text-2xl font-bold mb-2">Start</h2>
            <p className="text-[#9d9d9d] text-s mb-4">Для тех, кто хочет попробовать свои силы и учиться в своем темпе.</p>
            
            <div className="text-2xl font-bold mb-6">
              1 900 руб <span className="text-sm text-[#9d9d9d]">/ месяц</span>
            </div>

            <ul className="text-[#9d9d9d] mb-8 text-sm">
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Доступ к базовым курсам (Python, JS)
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Интерактивный тренажер в браузере
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Автоматическая проверка задач
              </li>
            </ul>
          </div>

          <Link 
            href="/contacts" 
            className="block text-center bg-[#423726] hover:bg-[#ffa11633] text-[#ffa116] py-3 rounded-xl border-1 border-[#ffa116]"
          >
            Выбрать тариф
          </Link>
        </div>

        {/*plus*/}
        <div className="flex flex-col justify-between bg-[#282828] p-8 rounded-2xl border border-[#383838]">
          <div>
            <h2 className="text-2xl font-bold mb-2">Plus</h2>
            <p className="text-[#9d9d9d] text-s mb-4">Полноценное погружение в профессию с экспертной поддержкой.</p>
            
            <div className="text-2xl font-bold mb-6">
                4 900 руб <span className="text-sm text-[#9d9d9d]">/ месяц</span>
            </div>

            <ul className="text-[#9d9d9d] mb-8 text-sm">
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Доступ ко всем курсам платформы
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Проверка домашних заданий ментором
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Живой чат с преподавателями
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Закрытое сообщество студентов
              </li>
            </ul>
          </div>

          <Link 
            href="/contacts" 
            className="block text-center bg-[#423726] hover:bg-[#ffa11633] text-[#ffa116] py-3 rounded-xl border-1 border-[#ffa116]"
          >
            Выбрать тариф
          </Link>
        </div>

        {/*pro*/}
        <div className="flex flex-col justify-between bg-[#282828] p-8 rounded-2xl border border-[#383838]">
          <div>
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <p className="text-[#9d9d9d] text-s mb-4">Максимальная поддержка и сопровождение до трудоустройства.</p>
            
            <div className="text-2xl font-bold mb-6">
              9 900 руб <span className="text-sm text-[#9d9d9d]">/ месяц</span>
            </div>

            <ul className="text-[#9d9d9d] mb-8 text-sm">
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Все функции платформы доступны
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Личный наставник на весь период
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Помощь с резюме и портфолио
              </li>
              <li className="flex items-center gap-2 mb-2">
                <span className="text-[#ffa116] font-bold">•</span> Репетиция технических собеседований
              </li>
            </ul>
          </div>

          <Link 
            href="/contacts" 
            className="block text-center bg-[#423726] hover:bg-[#ffa11633] text-[#ffa116] py-3 rounded-xl border-1 border-[#ffa116]"
          >
            Выбрать тариф
          </Link>
        </div>

      </div>

    </div>
  );
}
