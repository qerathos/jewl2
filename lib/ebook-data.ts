export interface EbookMethod {
  id: number;
  title: string;
  description: string;
  tools: string[];
  example: string;
  difficulty: "Facil" | "Medio" | "Avancado";
  potentialEarnings: string;
}

export interface EbookCategory {
  name: string;
  icon: string;
  methods: EbookMethod[];
}

export interface MistakeToAvoid {
  title: string;
  description: string;
  solution: string;
}

export interface DayPlan {
  day: number;
  title: string;
  tasks: string[];
  goal: string;
}

export const ebookIntro = {
  title: "30 Formas Reais de Ganhar Dinheiro com IA",
  subtitle: "O Guia Definitivo para Iniciantes em 2024",
  hook: "A Inteligencia Artificial nao e o futuro. E o presente. E quem domina estas ferramentas hoje, vai liderar amanha.",
  paragraphs: [
    "Nos ultimos 12 meses, milhares de pessoas comuns comecaram a gerar renda extra usando IA. Nao sao programadores. Nao sao genios da tecnologia. Sao pessoas normais que descobriram como usar ferramentas como ChatGPT, Midjourney e outras para criar valor real.",
    "Este ebook nao e teoria. Sao 30 metodos testados e comprovados que podes comecar a aplicar hoje mesmo. Cada um inclui as ferramentas exatas, exemplos reais e o potencial de ganhos.",
    "Nao precisas de investimento inicial. Nao precisas de experiencia previa. So precisas de vontade de aprender e agir.",
    "Escolhe 1 metodo. Domina-o. Depois escala. E assim que se constroi renda com IA."
  ],
  stats: [
    { value: "30", label: "Metodos Comprovados" },
    { value: "50+", label: "Ferramentas IA" },
    { value: "7", label: "Dias para Comecar" }
  ]
};

export const ebookCategories: EbookCategory[] = [
  {
    name: "Criacao de Conteudo",
    icon: "pen-tool",
    methods: [
      {
        id: 1,
        title: "Ghostwriting com IA",
        description: "Escreve artigos, posts e newsletters para empresas e influenciadores usando ChatGPT como assistente. Tu editas, refinas e entregas conteudo de qualidade.",
        tools: ["ChatGPT", "Claude", "Grammarly"],
        example: "Maria cobra 50€ por artigo de blog. Com IA, escreve 3 por dia. Fatura 3.000€/mes trabalhando 4 horas diarias.",
        difficulty: "Facil",
        potentialEarnings: "500€ - 5.000€/mes"
      },
      {
        id: 2,
        title: "Scripts para YouTube",
        description: "Cria roteiros optimizados para YouTubers. A IA ajuda com estrutura, ganchos e retencao. Tu adaptas ao estilo do cliente.",
        tools: ["ChatGPT", "Descript", "VidIQ"],
        example: "Joao escreve 2 scripts por semana para um canal de finanças. Recebe 200€ por script.",
        difficulty: "Medio",
        potentialEarnings: "800€ - 4.000€/mes"
      },
      {
        id: 3,
        title: "Legendas e Transcricoes",
        description: "Converte videos em texto, cria legendas e resume conteudo longo. Servico essencial para criadores.",
        tools: ["Whisper AI", "Otter.ai", "Descript"],
        example: "Ana transcribe 10 videos por semana para podcasters. Cobra 15€ por video de 1 hora.",
        difficulty: "Facil",
        potentialEarnings: "300€ - 1.500€/mes"
      },
      {
        id: 4,
        title: "Newsletters Automatizadas",
        description: "Cria e gere newsletters para marcas usando IA para pesquisa, escrita e personalizacao.",
        tools: ["ChatGPT", "Beehiiv", "ConvertKit"],
        example: "Pedro gere 3 newsletters semanais para clientes diferentes. Cobra 300€/mes por cada.",
        difficulty: "Medio",
        potentialEarnings: "900€ - 3.000€/mes"
      }
    ]
  },
  {
    name: "Redes Sociais",
    icon: "share-2",
    methods: [
      {
        id: 5,
        title: "Gestor de Redes Sociais com IA",
        description: "Gere contas de Instagram, TikTok e LinkedIn para negocios locais. A IA cria o conteudo, tu geres a estrategia.",
        tools: ["ChatGPT", "Canva AI", "Later"],
        example: "Sofia gere 5 contas de restaurantes. Cobra 250€/mes por conta. Total: 1.250€/mes.",
        difficulty: "Facil",
        potentialEarnings: "750€ - 3.500€/mes"
      },
      {
        id: 6,
        title: "Criador de Reels e TikToks",
        description: "Produz videos curtos usando templates e scripts gerados por IA. Ideal para marcas que querem presenca digital.",
        tools: ["ChatGPT", "CapCut", "Canva"],
        example: "Tiago cria 20 reels por mes para uma loja de roupa. Recebe 400€ fixos.",
        difficulty: "Medio",
        potentialEarnings: "600€ - 2.500€/mes"
      },
      {
        id: 7,
        title: "Carrosseis de Instagram",
        description: "Desenha carrosseis educativos e engaging usando IA para texto e Canva para design.",
        tools: ["ChatGPT", "Canva", "Adobe Express"],
        example: "Carla vende pacotes de 10 carrosseis por 150€. Entrega 3 pacotes por semana.",
        difficulty: "Facil",
        potentialEarnings: "500€ - 2.000€/mes"
      },
      {
        id: 8,
        title: "Hashtag Research Service",
        description: "Pesquisa e organiza hashtags optimizadas para nichos especificos usando IA.",
        tools: ["ChatGPT", "Flick", "Later"],
        example: "Servico simples: 25€ por pesquisa completa de hashtags para um nicho.",
        difficulty: "Facil",
        potentialEarnings: "200€ - 800€/mes"
      }
    ]
  },
  {
    name: "Design e Visual",
    icon: "image",
    methods: [
      {
        id: 9,
        title: "Logos e Branding com IA",
        description: "Cria logos, paletas de cores e identidades visuais usando ferramentas de IA generativa.",
        tools: ["Midjourney", "DALL-E", "Canva AI", "Looka"],
        example: "Marco cobra 150€ por pacote de branding basico. Faz 8 por mes.",
        difficulty: "Medio",
        potentialEarnings: "600€ - 2.500€/mes"
      },
      {
        id: 10,
        title: "Thumbnails para YouTube",
        description: "Cria thumbnails que aumentam CTR usando IA para geracao de imagens e composicao.",
        tools: ["Midjourney", "Canva", "Photoshop AI"],
        example: "Rita cobra 15€ por thumbnail. Tem 10 clientes fixos que pedem 4 por mes cada.",
        difficulty: "Facil",
        potentialEarnings: "400€ - 1.500€/mes"
      },
      {
        id: 11,
        title: "Mockups de Produtos",
        description: "Cria visualizacoes de produtos para e-commerce e marcas usando IA.",
        tools: ["Midjourney", "Canva", "Placeit"],
        example: "Hugo cria mockups para lojas Shopify. Cobra 50€ por 5 mockups.",
        difficulty: "Medio",
        potentialEarnings: "500€ - 2.000€/mes"
      },
      {
        id: 12,
        title: "Print on Demand com IA",
        description: "Cria designs unicos para t-shirts, canecas e posters usando IA generativa.",
        tools: ["Midjourney", "DALL-E", "Printful", "Redbubble"],
        example: "Ines criou 100 designs. Vende em media 50 produtos/mes com lucro de 5€ cada.",
        difficulty: "Medio",
        potentialEarnings: "200€ - 2.000€/mes"
      }
    ]
  },
  {
    name: "Copywriting e Vendas",
    icon: "file-text",
    methods: [
      {
        id: 13,
        title: "Paginas de Venda",
        description: "Escreve landing pages persuasivas usando frameworks de copy e IA como assistente.",
        tools: ["ChatGPT", "Copy.ai", "Jasper"],
        example: "Bruno cobra 300€ por pagina de venda. Entrega 4 por mes.",
        difficulty: "Medio",
        potentialEarnings: "800€ - 3.000€/mes"
      },
      {
        id: 14,
        title: "Emails de Venda",
        description: "Cria sequencias de email marketing que convertem usando IA para personalizar mensagens.",
        tools: ["ChatGPT", "Mailchimp", "ConvertKit"],
        example: "Paula cria sequencias de 7 emails por 200€. Faz 5 por mes.",
        difficulty: "Medio",
        potentialEarnings: "600€ - 2.500€/mes"
      },
      {
        id: 15,
        title: "Descricoes de Produto",
        description: "Escreve descricoes optimizadas para SEO e conversao em lojas online.",
        tools: ["ChatGPT", "Jasper", "Surfer SEO"],
        example: "Rui cobra 5€ por descricao. Faz 200 por mes para varios e-commerces.",
        difficulty: "Facil",
        potentialEarnings: "500€ - 2.000€/mes"
      },
      {
        id: 16,
        title: "Anuncios Facebook/Google",
        description: "Cria variações de anuncios para testes A/B usando IA para gerar multiplas versoes.",
        tools: ["ChatGPT", "AdCreative.ai", "Copy.ai"],
        example: "Clara cobra 100€ por 10 variações de anuncio. Trabalha com 8 clientes.",
        difficulty: "Medio",
        potentialEarnings: "600€ - 2.500€/mes"
      }
    ]
  },
  {
    name: "Produtos Digitais",
    icon: "package",
    methods: [
      {
        id: 17,
        title: "Ebooks com IA",
        description: "Escreve e vende ebooks sobre temas que dominas, usando IA para acelerar a escrita.",
        tools: ["ChatGPT", "Canva", "Gumroad"],
        example: "Nuno criou um ebook sobre produtividade. Vende 50 copias/mes a 19€ cada.",
        difficulty: "Medio",
        potentialEarnings: "300€ - 3.000€/mes"
      },
      {
        id: 18,
        title: "Templates Notion/Excel",
        description: "Cria templates uteis usando IA para estruturar e documentar. Vende em marketplaces.",
        tools: ["ChatGPT", "Notion AI", "Gumroad"],
        example: "Diana vende templates de planeamento. Media de 80 vendas/mes a 9€.",
        difficulty: "Facil",
        potentialEarnings: "400€ - 2.000€/mes"
      },
      {
        id: 19,
        title: "Cursos Online",
        description: "Cria mini-cursos usando IA para estruturar conteudo e gerar materiais de apoio.",
        tools: ["ChatGPT", "Teachable", "Thinkific"],
        example: "Fernando lancou um curso de ChatGPT para iniciantes. Vende 30/mes a 47€.",
        difficulty: "Avancado",
        potentialEarnings: "500€ - 5.000€/mes"
      },
      {
        id: 20,
        title: "Prompts Premium",
        description: "Vende colecões de prompts optimizados para nichos especificos.",
        tools: ["ChatGPT", "PromptBase", "Gumroad"],
        example: "Teresa vende packs de prompts para copywriters. 200 vendas a 7€ = 1.400€.",
        difficulty: "Facil",
        potentialEarnings: "200€ - 1.500€/mes"
      }
    ]
  },
  {
    name: "Servicos Empresariais",
    icon: "briefcase",
    methods: [
      {
        id: 21,
        title: "Consultoria de IA",
        description: "Ensina empresas a usar ChatGPT e outras ferramentas para melhorar processos.",
        tools: ["ChatGPT", "Notion AI", "Zapier"],
        example: "Miguel cobra 500€ por sessao de consultoria de 2 horas. Faz 4 por mes.",
        difficulty: "Avancado",
        potentialEarnings: "1.000€ - 5.000€/mes"
      },
      {
        id: 22,
        title: "Automacoes com IA",
        description: "Cria workflows automatizados para empresas usando ferramentas no-code e IA.",
        tools: ["Zapier", "Make", "ChatGPT API"],
        example: "Sara implementou 3 automacões para uma empresa. Cobrou 800€ pelo projeto.",
        difficulty: "Avancado",
        potentialEarnings: "800€ - 4.000€/mes"
      },
      {
        id: 23,
        title: "Chatbots para Negocios",
        description: "Implementa chatbots de atendimento usando ferramentas no-code.",
        tools: ["Chatbase", "Botpress", "Voiceflow"],
        example: "Luis criou um chatbot para uma clinica. Cobra 300€ setup + 50€/mes manutencao.",
        difficulty: "Medio",
        potentialEarnings: "600€ - 2.500€/mes"
      },
      {
        id: 24,
        title: "Pesquisa de Mercado com IA",
        description: "Faz analises de concorrencia e tendencias usando IA para processar dados.",
        tools: ["ChatGPT", "Perplexity", "Google Trends"],
        example: "Catarina cobra 150€ por relatorio de pesquisa. Entrega 6 por mes.",
        difficulty: "Medio",
        potentialEarnings: "500€ - 2.000€/mes"
      }
    ]
  },
  {
    name: "Audio e Video",
    icon: "video",
    methods: [
      {
        id: 25,
        title: "Voiceovers com IA",
        description: "Cria narracões profissionais usando ferramentas de voz IA para videos e apresentacoes.",
        tools: ["ElevenLabs", "Murf", "Descript"],
        example: "Andre cria voiceovers para videos explicativos. Cobra 30€ por minuto de audio.",
        difficulty: "Facil",
        potentialEarnings: "400€ - 1.500€/mes"
      },
      {
        id: 26,
        title: "Podcasts Editados",
        description: "Edita podcasts usando IA para remover pausas, melhorar audio e criar cortes.",
        tools: ["Descript", "Adobe Podcast", "Riverside"],
        example: "Vera edita 8 episodios por mes. Cobra 75€ por episodio de 1 hora.",
        difficulty: "Medio",
        potentialEarnings: "500€ - 2.000€/mes"
      },
      {
        id: 27,
        title: "Videos Faceless",
        description: "Cria videos sem mostrar a cara usando IA para geracao de conteudo e narração.",
        tools: ["ChatGPT", "Pictory", "InVideo"],
        example: "Carlos tem um canal faceless de curiosidades. Monetiza 800€/mes com ads.",
        difficulty: "Medio",
        potentialEarnings: "300€ - 3.000€/mes"
      },
      {
        id: 28,
        title: "Traducao de Videos",
        description: "Traduz e dobra videos para outros idiomas usando IA.",
        tools: ["HeyGen", "Rask AI", "Papercup"],
        example: "Marta traduz videos de ingles para portugues. Cobra 100€ por video de 10 min.",
        difficulty: "Medio",
        potentialEarnings: "500€ - 2.500€/mes"
      }
    ]
  },
  {
    name: "Educacao e Tutoria",
    icon: "graduation-cap",
    methods: [
      {
        id: 29,
        title: "Tutor de IA",
        description: "Ensina pessoas a usar ChatGPT e outras ferramentas em sessões individuais ou grupo.",
        tools: ["Zoom", "ChatGPT", "Notion"],
        example: "Helena da aulas de ChatGPT. Cobra 40€/hora. Faz 20 horas por mes.",
        difficulty: "Facil",
        potentialEarnings: "600€ - 2.500€/mes"
      },
      {
        id: 30,
        title: "Materiais Educativos",
        description: "Cria quizzes, resumos e materiais de estudo para estudantes e professores.",
        tools: ["ChatGPT", "Canva", "Quizlet"],
        example: "Ricardo vende pacotes de resumos para universitarios. 100 vendas/mes a 12€.",
        difficulty: "Facil",
        potentialEarnings: "400€ - 1.500€/mes"
      }
    ]
  }
];

export const mistakesToAvoid: MistakeToAvoid[] = [
  {
    title: "Copiar output da IA sem editar",
    description: "O texto gerado por IA e generico. Se entregas sem personalizar, o cliente nota e nao volta.",
    solution: "Usa a IA como ponto de partida. Sempre edita, adapta ao tom do cliente e adiciona o teu toque pessoal."
  },
  {
    title: "Prometer demais, entregar de menos",
    description: "A IA acelera o trabalho, mas nao faz milagres. Prazos irrealistas levam a trabalho de ma qualidade.",
    solution: "Sê honesto sobre prazos. Melhor entregar bem do que entregar rapido e mal."
  },
  {
    title: "Depender de uma so ferramenta",
    description: "Ferramentas mudam, precos sobem, APIs falham. Quem depende de uma so fica vulneravel.",
    solution: "Domina 2-3 ferramentas alternativas. Tem sempre um plano B."
  },
  {
    title: "Ignorar o nicho",
    description: "Tentar servir toda a gente significa nao servir ninguem bem. Generalists ganham menos.",
    solution: "Escolhe um nicho. Torna-te o especialista em IA para esse mercado especifico."
  },
  {
    title: "Nao investir em aprender",
    description: "As ferramentas evoluem constantemente. Quem nao acompanha fica para tras.",
    solution: "Dedica 30 minutos por dia a explorar novas funcionalidades e ferramentas."
  },
  {
    title: "Esconder que usas IA",
    description: "Mentir aos clientes sobre o uso de IA cria desconfiança e pode destruir a tua reputacao.",
    solution: "Sê transparente. A maioria dos clientes valoriza eficiencia, nao se importam como chegas la."
  },
  {
    title: "Complicar demasiado no inicio",
    description: "Querer usar todas as ferramentas e oferecer todos os servicos ao mesmo tempo paralisa.",
    solution: "Comeca com 1 servico e 1-2 ferramentas. Domina primeiro, depois expande."
  },
  {
    title: "Nao ter portfolio",
    description: "Sem exemplos do teu trabalho, clientes nao confiam. E dificil vender ar.",
    solution: "Cria 3-5 exemplos de qualidade, mesmo que sejam projetos ficticios para mostrar."
  }
];

export const sevenDayPlan: DayPlan[] = [
  {
    day: 1,
    title: "Escolhe o Teu Caminho",
    tasks: [
      "Le todos os 30 metodos com atencao",
      "Marca os 5 que mais te interessam",
      "Escolhe 1 para comecar (considera as tuas skills atuais)",
      "Cria conta nas ferramentas necessarias (versoes gratuitas)"
    ],
    goal: "Ter clareza sobre o metodo que vais dominar primeiro"
  },
  {
    day: 2,
    title: "Domina a Ferramenta",
    tasks: [
      "Passa 2 horas a explorar a ferramenta principal",
      "Faz 10 testes diferentes com prompts variados",
      "Guarda os melhores resultados e prompts",
      "Ve 2-3 tutoriais no YouTube sobre a ferramenta"
    ],
    goal: "Sentir confianca a usar a ferramenta escolhida"
  },
  {
    day: 3,
    title: "Cria o Teu Portfolio",
    tasks: [
      "Cria 3 exemplos de trabalho de qualidade",
      "Usa clientes ficticios se necessario",
      "Documenta o teu processo",
      "Organiza tudo numa pasta ou Notion"
    ],
    goal: "Ter trabalhos para mostrar a potenciais clientes"
  },
  {
    day: 4,
    title: "Define a Tua Oferta",
    tasks: [
      "Escreve exactamente o que ofereces",
      "Define o teu preco inicial (comeca modesto)",
      "Cria 3 pacotes: basico, medio, premium",
      "Prepara uma proposta modelo"
    ],
    goal: "Ter uma oferta clara e pronta para apresentar"
  },
  {
    day: 5,
    title: "Encontra os Teus Clientes",
    tasks: [
      "Lista 20 potenciais clientes no teu nicho",
      "Encontra os seus contactos (email, LinkedIn, Instagram)",
      "Pesquisa sobre cada um (problemas que podes resolver)",
      "Prepara mensagens personalizadas"
    ],
    goal: "Ter uma lista qualificada de prospects"
  },
  {
    day: 6,
    title: "Faz Contacto",
    tasks: [
      "Envia mensagem para os 10 primeiros prospects",
      "Oferece um teste gratuito ou desconto de lancamento",
      "Segue no dia seguinte quem nao respondeu",
      "Adapta a mensagem com base nas respostas"
    ],
    goal: "Iniciar conversas com potenciais clientes"
  },
  {
    day: 7,
    title: "Fecha e Entrega",
    tasks: [
      "Faz follow-up com todos os interessados",
      "Fecha pelo menos 1 cliente (mesmo que pequeno)",
      "Entrega trabalho de qualidade excepcional",
      "Pede testemunho e referências"
    ],
    goal: "Ter o teu primeiro cliente pago"
  }
];

export const bonusTips = [
  "Comeca hoje, nao amanha. A acao imperfeita bate a inacao perfeita.",
  "O primeiro cliente e o mais dificil. Depois fica mais facil.",
  "Reinveste os primeiros ganhos em ferramentas e formacao.",
  "Documenta a tua jornada. Pode virar conteudo que atrai clientes.",
  "Junta-te a comunidades do teu nicho. Networking abre portas.",
  "Trata cada cliente como se fosse o unico. A reputacao e tudo."
];
