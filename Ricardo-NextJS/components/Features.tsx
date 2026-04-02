const funcionalidades = [
  {
    title: "Performance Otimizada",
    description: "Desenvolvido com Next.js 14 para máxima velocidade e eficiência em produção.",
  },
  {
    title: "Design Responsivo",
    description: "Interface adaptável que funciona perfeitamente em todos os dispositivos e tamanhos de tela.",
  },
  {
    title: "Fácil de Customizar",
    description: "Código limpo e bem estruturado, pronto para ser personalizado conforme suas necessidades.",
  },
] as const;

export default function FuncionalidadesSecao(): JSX.Element {
  return (
    <section className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Recursos Principais
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tudo que você precisa para criar uma landing page moderna e profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {funcionalidades.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
