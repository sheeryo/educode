export default function ContactsPage() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
      <p className="text-gray-600 mb-6">Заполните форму или напишите нам на почту.</p>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Ваше имя</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Иван" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded-md" placeholder="ivan@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Сообщение</label>
          <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="Ваш вопрос..."></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Отправить
        </button>
      </form>

      
    </div>
    
  );
}
