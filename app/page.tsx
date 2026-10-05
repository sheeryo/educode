import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Добро пожаловать на наш сайт!</h2>
      <p className="text-gray-600 mb-6">
        Это главная страница, которая загружается по умолчанию. Здесь вы можете разместить баннеры, 
        преимущества вашей компании или последние новости.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Наши услуги</h3>
          <p className="text-sm text-gray-500">Делаем сайты быстро, качественно и с адаптивным дизайном.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Наше портфолио</h3>
          <p className="text-sm text-gray-500">Посмотрите наши лучшие кейсы в специальном разделе.</p>
        </div>
      </div>

      <div className="text-6xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit recusandae quibusdam alias deserunt, numquam eum, dignissimos facilis reprehenderit ipsum nihil doloremque. Veniam sapiente recusandae voluptatum quidem porro quisquam excepturi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nisi reprehenderit dolorum dolorem a suscipit quia consequatur aliquid voluptate pariatur totam facilis, dolore possimus tenetur nemo facere accusamus ipsam repellat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero voluptatem expedita, ad molestias ratione facilis pariatur accusamus consequatur vitae ex explicabo veniam praesentium tempora, ab corrupti voluptatibus impedit rem.
      </div>
    </div>
  );
}

