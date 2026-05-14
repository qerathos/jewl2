export interface Step {
  text: string;
}

export interface Module {
  id: number;
  emoji: string;
  title: string;
  tagline: string;
  explanation: string;
  steps: Step[];
  exercise: string;
  checklist: string[];
}

export const courseModules: Module[] = [
  {
    id: 1,
    emoji: "🚀",
    title: "Bem-vindo ao Mundo da IA",
    tagline: "Descobre o que o ChatGPT pode fazer por ti — agora mesmo.",
    explanation:
      "O ChatGPT é como ter um assistente pessoal disponível 24 horas por dia. Ele escreve, pesquisa, planeia e responde a quase tudo. Neste módulo vais perceber como funciona na prática e porque é que milhões de pessoas já o usam para ganhar dinheiro online — mesmo sem experiência.",
    steps: [
      { text: "Cria uma conta gratuita em chat.openai.com" },
      { text: "Faz a tua primeira pergunta: escreve 'Olá! Como podes ajudar-me a ganhar dinheiro?'" },
      { text: "Lê a resposta com atenção e pede exemplos concretos" },
      { text: "Experimenta pedir ao ChatGPT que se apresente como o teu assistente de negócios" },
    ],
    exercise:
      "Escreve no ChatGPT: 'Quais são 5 formas de ganhar dinheiro com IA para um iniciante?' Guarda as respostas que mais te chamaram a atenção.",
    checklist: [
      "Conta criada no ChatGPT",
      "Já fiz a primeira conversa",
      "Guardei pelo menos 2 ideias de negócio que me interessam",
      "Percebi como funciona uma conversa com a IA",
    ],
  },
  {
    id: 2,
    emoji: "✍️",
    title: "Texto que Vende: O Poder da Escrita com IA",
    tagline: "Aprende a criar conteúdo pago em minutos.",
    explanation:
      "Muitas empresas e criadores precisam de textos todos os dias — posts para redes sociais, descrições de produtos, emails, artigos. E pagam bem por isso. Com o ChatGPT, consegues produzir textos de qualidade em minutos, mesmo que nunca tenhas escrito profissionalmente na vida.",
    steps: [
      { text: "Pede ao ChatGPT que escreva 5 legendas para Instagram sobre saúde e bem-estar" },
      { text: "Experimenta pedir um email de marketing para uma loja de roupas" },
      { text: "Cria uma descrição de produto para um item que encontres online" },
      { text: "Regista-te no Workana ou Fiverr como freelancer de copywriting" },
    ],
    exercise:
      "Escolhe um nicho que gostes (fitness, viagens, pets, etc.) e cria 10 legendas para Instagram com o ChatGPT. Guarda tudo num documento — será o teu portfólio inicial.",
    checklist: [
      "Criei pelo menos 10 textos com o ChatGPT",
      "Escolhi o meu nicho de copywriting",
      "Tenho um documento com exemplos do meu trabalho",
      "Pesquisei preços de freelancers de escrita online",
    ],
  },
  {
    id: 3,
    emoji: "🎓",
    title: "Cria o Teu Produto Digital em 1 Dia",
    tagline: "Transforma o teu conhecimento num e-book ou mini curso — sem complicações.",
    explanation:
      "Produtos digitais são a forma mais inteligente de ganhar dinheiro online: crias uma vez e vendes infinitas vezes. Com o ChatGPT, consegues criar um e-book ou mini curso sobre qualquer assunto que já saibas — culinária, finanças pessoais, idiomas, organização. A IA faz o trabalho pesado pela ti.",
    steps: [
      { text: "Escolhe um tema que saibas explicar a um amigo (pode ser simples!)" },
      { text: "Pede ao ChatGPT: 'Cria um índice para um e-book sobre [o teu tema] para iniciantes'" },
      { text: "Para cada capítulo, pede ao ChatGPT que escreva o conteúdo" },
      { text: "Formata tudo num PDF simples usando o Canva ou Google Docs" },
      { text: "Publica na Gumroad ou Hotmart (ambos gratuitos)" },
    ],
    exercise:
      "Cria o índice do teu primeiro e-book hoje. Pede ao ChatGPT que desenvolva pelo menos 2 capítulos completos. O teu produto pode estar pronto esta semana.",
    checklist: [
      "Escolhi o tema do meu produto digital",
      "Tenho o índice completo criado com o ChatGPT",
      "Escrevi pelo menos 2 capítulos",
      "Criei conta gratuita na Hotmart ou Gumroad",
    ],
  },
  {
    id: 4,
    emoji: "📱",
    title: "Redes Sociais no Piloto Automático",
    tagline: "Gere conteúdo para clientes e poupa horas por semana.",
    explanation:
      "Gestores de redes sociais são muito procurados e bem pagos. Com o ChatGPT, consegues criar um mês inteiro de conteúdo em poucas horas — e cobrar como se tivesses trabalhado dias. Seja para gerir as tuas próprias redes ou para prestar serviços a pequenas empresas, esta é uma oportunidade real.",
    steps: [
      { text: "Pede ao ChatGPT um calendário de conteúdo para 1 semana para um negócio local" },
      { text: "Gera 5 posts completos (texto + hashtags) para esse negócio" },
      { text: "Cria templates de resposta a comentários e mensagens" },
      { text: "Aborda 3 pequenos negócios perto de ti e oferece 1 semana grátis" },
    ],
    exercise:
      "Escolhe um tipo de negócio (restaurante, salão de beleza, ginásio) e pede ao ChatGPT que crie um plano de conteúdo completo para 2 semanas. Usa isso como proposta para o teu primeiro cliente.",
    checklist: [
      "Criei um plano de conteúdo completo de 2 semanas",
      "Tenho templates prontos para reutilizar",
      "Identifiquei pelo menos 3 potenciais clientes",
      "Defini o meu preço mensal de gestão de redes sociais",
    ],
  },
  {
    id: 5,
    emoji: "💰",
    title: "Do Zero ao Primeiro Pagamento",
    tagline: "O plano concreto para receberes o teu primeiro dinheiro esta semana.",
    explanation:
      "Chegou a hora de agir! Tens as ferramentas, tens as ideias — agora precisas de um plano claro. Neste módulo vais montar a tua estratégia pessoal, definir quanto queres ganhar, e dar os passos concretos para conseguires o teu primeiro cliente ou venda esta semana. A IA está do teu lado.",
    steps: [
      { text: "Escolhe O teu serviço principal (escrita, redes sociais, produto digital)" },
      { text: "Define o teu preço de entrada — começa simples e asequível" },
      { text: "Cria um perfil no Fiverr, Workana ou LinkedIn com o ChatGPT a ajudar" },
      { text: "Envia 5 propostas ou mensagens a potenciais clientes hoje mesmo" },
      { text: "Partilha o que fazes nas tuas próprias redes sociais" },
    ],
    exercise:
      "Usa o ChatGPT para escrever a tua proposta de serviço profissional. Inclui: o que ofereces, como fazes, o preço e um convite para trabalhar juntos. Envia para pelo menos 3 pessoas hoje.",
    checklist: [
      "Defini o meu serviço principal",
      "Tenho o meu preço definido",
      "Perfil criado na plataforma escolhida",
      "Enviei pelo menos 3 propostas ou mensagens",
      "Partilhei o que faço nas redes sociais",
    ],
  },
];
