// Conteúdo centralizado do site.
// Basta editar este arquivo para trocar textos, telefone, endereço etc.
// sem tocar nos componentes.

export const site = {
  nome: "Clínica Luciana do Vale",
  cidade: "Recife",
  telefone: "(81) 99188-8591",
  whatsapp: "5581991888591",
  email: "contato@lucianadovale.com.br",
  endereco: "Av. Conselheiro Aguiar, 1044 — Boa Viagem, Recife",
  horario: "Seg a sáb · 09h às 19h",
  instagram: "https://www.instagram.com/lucianadovale/",
};

export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Luciana", href: "#sobre" },
  { label: "Espaço", href: "#espaco" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Conceito", href: "#conceito" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Terapia Capilar • Tricologia • Saúde do Couro Cabeludo",
  titulo: "A saúde dos seus fios começa no couro cabeludo.",
  subtitulo:
    "Na Clínica Luciana do Vale, cada tratamento começa com um diagnóstico cuidadoso para identificar a verdadeira causa da queda capilar e das alterações do couro cabeludo. Unimos ciência, tecnologia e atendimento humanizado para desenvolver protocolos personalizados para cada paciente.",
  ctaPrimario: "Agendar avaliação",
  ctaSecundario: "Conhecer a clínica",
  antesDepois: {
    antes: "",
    depois: "",
    legenda: "Resultado real após protocolo personalizado de terapia capilar",
  },
};

export const conceito = {
  eyebrow: "Nossa abordagem",
  titulo: "Um novo olhar para a terapia capilar",
  paragrafos: [
    "Mais do que tratar os fios, acreditamos que cada paciente merece compreender a origem do seu problema capilar.",
    "Por isso, nossos protocolos começam por uma avaliação individualizada, utilizando recursos tecnológicos e conhecimento em tricologia para identificar as causas da queda de cabelo, afinamento dos fios e alterações no couro cabeludo.",
    "Nosso objetivo é restaurar não apenas a saúde capilar, mas também a confiança e o bem-estar de quem nos procura.",
  ],
};

export const espaco = {
  eyebrow: "Espaço",
  titulo: "Um ambiente pensado para cuidar de você",
  texto:
    "Cada detalhe da clínica foi planejado para proporcionar conforto, privacidade e tranquilidade durante todo o tratamento. Aqui você encontra um ambiente acolhedor aliado à tecnologia necessária para um diagnóstico preciso e um acompanhamento próximo em cada etapa da sua evolução.",
  fotos: [
    "/images/espaco-1.jpg",
    "/images/espaco-2.jpg",
    "/images/espaco-3.jpg",
    "/images/espaco-4.jpg",
    "/images/espaco-5.jpg",
    "/images/espaco-6.jpg",
  ],
};

export const tratamentos = {
  eyebrow: "Tratamentos",
  titulo: "Cada cabelo tem uma história. Cada tratamento também.",
  texto:
    "Após uma avaliação completa, desenvolvemos protocolos personalizados para tratar diferentes alterações capilares e do couro cabeludo. Os principais atendimentos incluem:",
  // Tratamentos com destaque visual (mini antes/depois) na grade principal
  destaques: [
    { titulo: "Alopecia androgenética", antes: "", depois: "" },
    { titulo: "Alopecia areata", antes: "", depois: "" },
    { titulo: "Eflúvio telógeno", antes: "", depois: "" },
    { titulo: "Queda capilar feminina e masculina", antes: "", depois: "" },
    { titulo: "Acompanhamento pós-transplante capilar", antes: "", depois: "" },
  ],
  // Demais atendimentos, listados como pills simples
  outros: ["Dermatite seborreica", "Psoríase do couro cabeludo", "Recuperação da saúde dos fios"],
};

export const diferenciais = {
  eyebrow: "Diferenciais",
  titulo: "Por que escolher a Clínica Luciana do Vale?",
  lista: [
    "Avaliação individualizada",
    "Diagnóstico baseado em tricologia",
    "Equipamentos modernos",
    "Protocolos personalizados",
    "Atendimento humanizado",
    "Acompanhamento durante todo o tratamento",
  ],
};

export const jornada = {
  eyebrow: "Como funciona",
  titulo: "Sua jornada para recuperar a saúde capilar",
  etapas: [
    {
      numero: "01",
      titulo: "Avaliação especializada",
      texto: "Conversamos sobre sua rotina, histórico clínico e principais queixas para compreender sua necessidade.",
    },
    {
      numero: "02",
      titulo: "Diagnóstico",
      texto: "Realizamos uma análise detalhada do couro cabeludo utilizando recursos tecnológicos para identificar a origem do problema.",
    },
    {
      numero: "03",
      titulo: "Plano de tratamento",
      texto: "Desenvolvemos um protocolo personalizado de acordo com seu diagnóstico e objetivos.",
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      texto: "Monitoramos sua evolução durante todo o tratamento, realizando ajustes sempre que necessário.",
    },
  ],
};

export const sobre = {
  eyebrow: "Sobre a especialista",
  titulo: "Conhecimento aliado ao cuidado humano",
  nome: "Luciana do Vale",
  credencial: "Terapeuta Capilar · Especialista em Tricologia",
  paragrafos: [
    "Luciana do Vale é terapeuta capilar especializada em tricologia e dedica seu trabalho ao cuidado da saúde do couro cabeludo e dos fios.",
    "Seu atendimento é baseado em uma abordagem individualizada, respeitando as características de cada paciente para desenvolver protocolos personalizados que unem ciência, tecnologia e acolhimento.",
    "Mais do que tratar a queda de cabelo, seu propósito é ajudar pessoas a recuperarem a confiança e o bem-estar através da saúde capilar.",
  ],
};

export const depoimentos = [
  {
    nome: "Renata M.",
    contexto: "Terapia capilar",
    texto:
      "Cheguei sem esperança com a queda de cabelo. Hoje me olho no espelho e reconheço meus fios de novo. O acolhimento faz toda a diferença.",
  },
  {
    nome: "Carolina A.",
    contexto: "Consulta tricológica",
    texto:
      "Profissionais extremamente atenciosas. O diagnóstico foi completo e o protocolo, pensado de verdade para o meu caso.",
  },
  {
    nome: "Patrícia L.",
    contexto: "Acompanhamento pós-transplante",
    texto:
      "Um espaço diferente de tudo que já vivi — cuidado com saúde capilar de verdade, em um ambiente lindo e tranquilo.",
  },
];

export const ctaFinal = {
  titulo: "Seu tratamento começa com um diagnóstico.",
  texto: "Descubra a verdadeira causa da sua queda capilar e conheça o tratamento mais adequado para o seu caso.",
  cta: "Agendar minha avaliação",
};
