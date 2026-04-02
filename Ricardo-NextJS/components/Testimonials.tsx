interface DepoimentoInterface {
  nome: string;
  cargo: string;
  conteudo: string;
  avaliacao: number;
}

const depoimentos: DepoimentoInterface[] = [
  {
    nome: "Maria Silva",
    cargo: "Desenvolvedora Frontend",
    conteudo: "Projeto excelente! A estrutura é limpa e fácil de entender. Perfeito para começar.",
    avaliacao: 5,
  },
  {
    nome: "João Santos",
    cargo: "Full Stack Developer",
    conteudo: "Adorei a documentação e a organização do código. Muito profissional!",
    avaliacao: 5,
  },
  {
    nome: "Ana Costa",
    cargo: "UI/UX Designer",
    conteudo: "O design é moderno e responsivo. Excelente trabalho com Tailwind CSS!",
    avaliacao: 5,
  },
  {
    nome: "Pedro Oliveira",
    cargo: "Tech Lead",
    conteudo: "Implementação perfeita de Next.js 14. Código de qualidade profissional.",
    avaliacao: 5,
  },
  {
    nome: "Carla Mendes",
    cargo: "Product Manager",
    conteudo: "Landing page impressionante! Excelente para apresentar um projeto.",
    avaliacao: 5,
  },
  {
    nome: "Lucas Ferreira",
    cargo: "Freelancer",
    conteudo: "Projeto bem estruturado e fácil de customizar. Recomendo muito!",
    avaliacao: 5,
  },
];

export default function DepoimentosSecao(): JSX.Element {
  const cores = [
    "from-orange-400 to-pink-500",
    "from-blue-400 to-purple-500",
    "from-green-400 to-teal-500",
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            O que dizem sobre o projeto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feedback de desenvolvedores e profissionais que utilizaram este projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${cores[index % cores.length]}`}
                />
                <div>
                  <h4 className="font-bold text-black dark:text-white">
                    {testimonial.nome}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.cargo}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.avaliacao }).map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                "{testimonial.conteudo}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
