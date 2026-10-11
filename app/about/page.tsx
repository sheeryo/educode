import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О проекте | EduCode',
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      
      {/* заголовок страницы */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          О платформе EduCode
        </h1>
        <p className="text-[#9d9d9d] text-xl">
          Мы создаем образовательную экосистему нового поколения, где каждый может освоить программирование с нуля и построить успешную карьеру в IT.
        </p>
      </div>

      {/*нашее призвааниее*/}
      <div className="bg-[#282828] p-8 mb-8 rounded-2xl border border-[#383838]">
        <h2 className="text-2xl font-bold mb-4">Наша <span className='text-[#ffa116]'>миссия</span></h2>
        <p className="text-[#9d9d9d] leading-relaxed mb-4">
          Сделать качественное IT-образование доступным, понятным и максимально практическим. Мы убеждены, что теория имеет ценность только тогда, когда она сразу подкрепляется написанием реального кода.
        </p>
        <p className="text-[#9d9d9d] leading-relaxed">
          Вместо заучивания устаревших концепций наши студенты решают задачи, с которыми ежедневно сталкиваются разработчики в реальных коммерческих проектах.
        </p>
      </div>
      {/*типа реальная статистика да да for real*/}
      <div className="bg-[#282828] border border-[#383838] rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-10">EduCode в цифрах</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#ffa116] mb-2">2500+</div>
            <p className="text-[#9d9d9d]">Выпускников платформы</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#ffa116] mb-2">10+</div>
            <p className="text-[#9d9d9d]">Актуальных курсов и направлений</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#ffa116] mb-2">90%</div>
            <p className="text-[#9d9d9d]">Успешно трудоустроены в IT</p>
          </div>
        </div>
      </div>

    </div>
  );
}