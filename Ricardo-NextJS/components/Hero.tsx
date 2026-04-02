export default function Hero(): JSX.Element {
  const colors = ["pink", "purple", "orange", "green", "blue"];

  return (
    <section className="w-full py-20 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-4">
                Inovação.
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 leading-tight">
                Tecnologia. Futuro.
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
              Explore soluções modernas e inovadoras desenvolvidas com as melhores práticas de tecnologia. Transforme suas ideias em realidade com nossa plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition">
                Começar Agora
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="flex justify-center items-end h-64 md:h-80">
            <div className="flex -space-x-4 justify-center">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-${color}-400 to-${color}-600 shadow-lg hover:scale-110 transition`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
