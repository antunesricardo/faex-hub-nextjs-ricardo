const secoesRodape = {
  produto: ["Recursos", "Documentação", "Exemplos", "Roadmap"],
  empresa: ["Sobre", "Blog", "Contato", "Suporte"],
  legal: ["Privacidade", "Termos", "Cookies", "Licença"],
} as const;

const linksSociais = ["Twitter", "LinkedIn", "GitHub", "Discord"] as const;

export default function Rodape(): JSX.Element {
  return (
    <footer className="w-full bg-black dark:bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                RD
              </div>
              <span className="text-lg font-bold">Ricardo Dev</span>
            </div>
            <p className="text-gray-400 text-sm">
              Landing page moderna e responsiva desenvolvida com Next.js 14.
            </p>
          </div>

          {Object.entries(secoesRodape).map(([key, items]) => (
            <div key={key}>
              <h4 className="font-bold mb-4 capitalize">
                {key === "legal" ? "Legal" : key === "produto" ? "Produto" : "Empresa"}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2026 Ricardo Dev. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {linksSociais.map((link) => (
              <a key={link} href="#" className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
