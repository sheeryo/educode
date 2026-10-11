import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | EduCode',
};

export default function ContactsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      
      {/*заголовок */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Свяжитесь с нами
        </h1>
        <p className="text-[#9d9d9d] text-xl">
          Остались вопросы по выбору курса, оплате или формату обучения? Напишите нам, и наша команда ответит вам в течение 15 минут.
        </p>
      </div>

      <div className="bg-[#282828] p-8 rounded-2xl border border-[#383838]">
          <h2 className="text-2xl font-bold mb-8">Задать вопрос</h2>
          
          <form>
            <div className='mb-4'>
              <label className="inline-block text-sm font-medium text-[#9d9d9d] mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                required
                placeholder="Иван Иванов"
                className="w-full bg-[#212121] border-1 border-[#383838] rounded-xl px-4 py-3 text-white placeholder-[#9d9d9d]"
              />
            </div>

            <div className='mb-4'>
              <label className="inline-block text-sm font-medium text-[#9d9d9d] mb-2">
                Ваша почта
              </label>
              <input
                type="email"
                required
                placeholder="example@mail.ru"
                className="w-full bg-[#212121] border-1 border-[#383838] rounded-xl px-4 py-3 text-white placeholder-[#9d9d9d]"
              />
            </div>

            <div className='mb-4'>
              <label className="inline-block text-sm font-medium text-[#9d9d9d] mb-2">
                Сообщение
              </label>
              <input
                type="email"
                required
                placeholder="Расскажите какой курс вас интересует или задайте вопрос..."
                className="w-full bg-[#212121] border-1 border-[#383838] rounded-xl px-4 py-3 text-white placeholder-[#9d9d9d]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#423726] transition-all hover:bg-[#ffa11633] border-1 border-[#ffa116] text-[#ffa116] py-4 rounded-xl cursor-pointer"
            >
              Отправить сообщение
            </button>
          </form>
        </div>

      </div>
  );
}