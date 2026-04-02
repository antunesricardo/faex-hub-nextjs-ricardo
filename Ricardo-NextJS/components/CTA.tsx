export default function ChamadaAcao(): JSX.Element {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para começar?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Utilize este projeto como base para criar sua própria landing page profissional e moderna. Personalize conforme suas necessidades!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
            Começar Agora
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
            Ver Documentação
          </button>
        </div>
      </div>
    </section>
  );
}
