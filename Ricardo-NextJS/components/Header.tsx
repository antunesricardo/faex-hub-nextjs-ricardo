const itens_navegacao = ["Recursos", "Sobre", "Contato"] as const;

export default function Cabecalho(): JSX.Element {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            RD
          </div>
          <span className="text-xl font-bold text-black dark:text-white">Ricardo Dev</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {itens_navegacao.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition">
            Começar
          </button>
        </div>
      </div>
    </header>
  );
}
