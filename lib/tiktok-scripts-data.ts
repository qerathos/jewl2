export interface TikTokScript {
  id: number;
  title: string;
  hook: string;
  development: string;
  cta: string;
  duration: string;
  category: string;
}

export const tiktokCategories = [
  { id: "todos", label: "Todos", icon: "Grid3X3" },
  { id: "renda-extra", label: "Renda Extra", icon: "Wallet" },
  { id: "freelance", label: "Freelance", icon: "Briefcase" },
  { id: "conteudo", label: "Conteudo", icon: "FileText" },
  { id: "negocios", label: "Negocios", icon: "TrendingUp" },
  { id: "produtos", label: "Produtos Digitais", icon: "Package" },
];

export const tiktokScripts: TikTokScript[] = [
  // RENDA EXTRA (1-10)
  {
    id: 1,
    title: "O Trabalho Secreto de 500 euros",
    hook: "Este trabalho paga 500 euros por semana e ninguem fala dele.",
    development: "Empresas precisam de pessoas para escrever descricoes de produtos. Com ChatGPT, fazes 50 por hora. Cada uma paga 2 a 5 euros. Plataformas como Fiverr e Workana estao cheias de pedidos.",
    cta: "Guarda isto e comeca hoje.",
    duration: "18s",
    category: "renda-extra"
  },
  {
    id: 2,
    title: "A Manha de 200 euros",
    hook: "Acordei, abri o portatil, e em 2 horas tinha 200 euros na conta.",
    development: "Criei legendas para 10 videos de YouTube usando IA. Cada legenda demora 10 minutos e paga 20 euros. Os criadores precisam disto todos os dias.",
    cta: "Comenta LEGENDAS que explico como.",
    duration: "20s",
    category: "renda-extra"
  },
  {
    id: 3,
    title: "ChatGPT + Canva = Dinheiro",
    hook: "Esta combinacao esta a fazer pessoas ganharem 3000 euros por mes.",
    development: "Pedes ao ChatGPT para criar posts de Instagram. Copias para o Canva. Vendes pacotes de 30 posts por 150 euros. Negocios locais compram isto todos os meses.",
    cta: "Segue para mais estrategias.",
    duration: "22s",
    category: "renda-extra"
  },
  {
    id: 4,
    title: "O Lado Negro do Freelance",
    hook: "Ninguem te conta isto sobre ganhar dinheiro online.",
    development: "90% das pessoas desistem na primeira semana. Mas quem usa IA para acelerar o trabalho consegue entregar 5x mais rapido. Mais entregas, mais reviews, mais clientes.",
    cta: "Guarda para nao esquecer.",
    duration: "19s",
    category: "renda-extra"
  },
  {
    id: 5,
    title: "50 euros em 30 Minutos",
    hook: "Fiz 50 euros em 30 minutos so com o meu telemovel.",
    development: "Uma empresa precisava de 10 bios para Instagram. Abri o ChatGPT, pedi para criar bios criativas para restaurantes. Entreguei em meia hora. Pago na hora.",
    cta: "Queres o prompt? Comenta BIO.",
    duration: "18s",
    category: "renda-extra"
  },
  {
    id: 6,
    title: "A Profissao que Nao Existe",
    hook: "Esta profissao nao existia ha 2 anos e agora paga 5000 euros por mes.",
    development: "Prompt Engineer. Empresas pagam para escrever comandos de IA. Nao precisas de codigo. So precisas saber comunicar com ChatGPT melhor que os outros.",
    cta: "Segue para aprender prompts.",
    duration: "20s",
    category: "renda-extra"
  },
  {
    id: 7,
    title: "O Truque dos Emails",
    hook: "Empresas pagam 50 euros por email. E tu podes escrever 10 por dia.",
    development: "Email marketing e uma industria de bilioes. Com ChatGPT escreves emails de venda em 5 minutos. Oferece este servico a lojas online. Elas precisam disto todas as semanas.",
    cta: "Comenta EMAIL para o template.",
    duration: "21s",
    category: "renda-extra"
  },
  {
    id: 8,
    title: "Dinheiro Enquanto Dormes",
    hook: "Ontem ganhei 80 euros enquanto dormia. Isto e como.",
    development: "Criei um ebook com ChatGPT sobre receitas saudaveis. Coloquei no Gumroad por 9 euros. A IA fez 90% do trabalho. Agora vende todos os dias no automatico.",
    cta: "Guarda e faz o teu.",
    duration: "19s",
    category: "renda-extra"
  },
  {
    id: 9,
    title: "O Segredo dos Tradutores",
    hook: "Tradutores estao a ganhar o triplo usando este truque.",
    development: "Usam ChatGPT para fazer a primeira versao. Depois so corrigem e adaptam. O que demorava 4 horas agora demora 1. Mais projetos, mais dinheiro.",
    cta: "Segue para mais hacks.",
    duration: "18s",
    category: "renda-extra"
  },
  {
    id: 10,
    title: "100 euros por Review",
    hook: "Marcas pagam 100 euros para escreveres reviews de produtos.",
    development: "Recebem o produto, pedes ao ChatGPT para criar uma review detalhada, adaptas com a tua experiencia, publicas. Plataformas como Influee conectam-te com marcas.",
    cta: "Comenta REVIEW para saber mais.",
    duration: "20s",
    category: "renda-extra"
  },

  // FREELANCE (11-20)
  {
    id: 11,
    title: "Fiverr + ChatGPT = 2000 euros",
    hook: "Fiz 2000 euros no Fiverr no primeiro mes. Sem experiencia.",
    development: "Criei um servico de escrita de CVs. ChatGPT escreve, eu reviso e formato. Cada CV demora 20 minutos e cobro 30 euros. 3 por dia, 5 dias por semana.",
    cta: "Guarda esta estrategia.",
    duration: "22s",
    category: "freelance"
  },
  {
    id: 12,
    title: "O Servico que Todos Querem",
    hook: "Este servico tem 10.000 pedidos por mes e quase ninguem oferece.",
    development: "Transcricao de podcasts. Empresas precisam do texto para SEO. Usas Whisper AI para transcrever e ChatGPT para formatar. 30 minutos de trabalho, 50 euros de pagamento.",
    cta: "Comeca hoje no Upwork.",
    duration: "21s",
    category: "freelance"
  },
  {
    id: 13,
    title: "Clientes no Automatico",
    hook: "Nunca mais vais precisar de procurar clientes.",
    development: "Cria um portfolio com 5 exemplos feitos com IA. Posta no LinkedIn todos os dias. ChatGPT escreve os posts. Em 30 dias, os clientes vem ter contigo.",
    cta: "Segue para a estrategia completa.",
    duration: "19s",
    category: "freelance"
  },
  {
    id: 14,
    title: "A Proposta Perfeita",
    hook: "Esta proposta tem 80% de taxa de aceitacao.",
    development: "Pede ao ChatGPT para analisar o projeto. Depois cria uma proposta personalizada que mostra que entendes o problema. Clientes escolhem quem mostra que se importa.",
    cta: "Comenta PROPOSTA para o template.",
    duration: "20s",
    category: "freelance"
  },
  {
    id: 15,
    title: "De 0 a 1000 euros em 7 Dias",
    hook: "Passei de zero a 1000 euros em 7 dias como freelancer.",
    development: "Dia 1-2: criei perfil e portfolio com IA. Dia 3-5: enviei 50 propostas. Dia 6-7: fechei 4 clientes. O segredo e volume no inicio.",
    cta: "Guarda este plano.",
    duration: "18s",
    category: "freelance"
  },
  {
    id: 16,
    title: "O Erro de 90% dos Freelancers",
    hook: "90% dos freelancers fazem isto e por isso nao ganham dinheiro.",
    development: "Cobram por hora em vez de por projeto. Com IA es 5x mais rapido. Se cobras por projeto, ganhas o mesmo em menos tempo. Mais projetos, mais lucro.",
    cta: "Muda a tua estrategia hoje.",
    duration: "20s",
    category: "freelance"
  },
  {
    id: 17,
    title: "Servicos de 500 euros",
    hook: "Para de vender servicos de 20 euros. Faz isto.",
    development: "Empacota varios servicos juntos. Em vez de so legendas, oferece legendas + thumbnails + descricao + tags. O cliente paga mais por conveniencia. IA faz tudo rapido.",
    cta: "Comenta PACOTE para exemplos.",
    duration: "21s",
    category: "freelance"
  },
  {
    id: 18,
    title: "O Nicho de Ouro",
    hook: "Este nicho paga 3x mais que os outros.",
    development: "Servicos para advogados, medicos e consultores. Eles tem dinheiro e nao tem tempo. Precisam de conteudo, emails, propostas. E pagam premium por qualidade.",
    cta: "Foca no nicho certo.",
    duration: "19s",
    category: "freelance"
  },
  {
    id: 19,
    title: "Freelance Sem Portfolio",
    hook: "Nao tens portfolio? Nao precisas.",
    development: "Cria 3 projetos ficticios com IA. Um website para restaurante imaginario. Posts para loja inventada. Mostra o que PODES fazer, nao o que ja fizeste.",
    cta: "Guarda e cria o teu hoje.",
    duration: "18s",
    category: "freelance"
  },
  {
    id: 20,
    title: "Clientes que Pagam Mais",
    hook: "Estes clientes pagam 10x mais pelo mesmo trabalho.",
    development: "Startups com investimento. Procura empresas que acabaram de receber funding. Precisam de tudo: conteudo, design, copy. E tem orcamento para pagar bem.",
    cta: "Segue para encontrar estas empresas.",
    duration: "20s",
    category: "freelance"
  },

  // CONTEUDO (21-30)
  {
    id: 21,
    title: "1 Video por Dia com IA",
    hook: "Posto 1 video por dia e nao gravo nenhum.",
    development: "ChatGPT escreve o script. ElevenLabs faz a voz. Canva anima o video. 30 minutos de trabalho por video. O algoritmo adora consistencia.",
    cta: "Comenta IA para as ferramentas.",
    duration: "19s",
    category: "conteudo"
  },
  {
    id: 22,
    title: "O Blog de 10.000 euros",
    hook: "Este blog ganha 10.000 euros por mes e foi escrito por IA.",
    development: "100 artigos otimizados para SEO. ChatGPT escreve, humano edita. Google Adsense e afiliados geram receita. Demora 6 meses a crescer, mas depois e passivo.",
    cta: "Guarda se queres renda passiva.",
    duration: "21s",
    category: "conteudo"
  },
  {
    id: 23,
    title: "Threads que Viralizam",
    hook: "Esta estrutura de thread viraliza 9 em cada 10 vezes.",
    development: "Hook controverso. Lista de 7 pontos. Cada ponto com 1 frase forte. Final com CTA. Pede ao ChatGPT para seguir esta formula exata.",
    cta: "Comenta THREAD para o prompt.",
    duration: "18s",
    category: "conteudo"
  },
  {
    id: 24,
    title: "Carroseis que Vendem",
    hook: "Este tipo de carrossel converte 5x mais que os outros.",
    development: "Slide 1: problema chocante. Slides 2-7: solucao passo a passo. Slide 8: CTA. ChatGPT escreve, Canva desenha. Vende cursos, servicos, qualquer coisa.",
    cta: "Guarda esta estrutura.",
    duration: "20s",
    category: "conteudo"
  },
  {
    id: 25,
    title: "Newsletter de 50.000 Subscritores",
    hook: "Construi uma newsletter de 50k subscritores em 8 meses.",
    development: "1 email por semana. ChatGPT escreve 80%. Promovo em cada conteudo. Agora ganho 5000 euros por mes so com patrocinios.",
    cta: "Comeca a tua newsletter hoje.",
    duration: "19s",
    category: "conteudo"
  },
  {
    id: 26,
    title: "O Truque do Reels Viral",
    hook: "Este truque fez o meu Reel ter 2 milhoes de views.",
    development: "Primeiros 0.5 segundos: movimento brusco ou texto chocante. ChatGPT ajuda a criar 10 hooks. Testas todos. O algoritmo escolhe o vencedor.",
    cta: "Testa amanha de manha.",
    duration: "18s",
    category: "conteudo"
  },
  {
    id: 27,
    title: "YouTube Sem Aparecer",
    hook: "Este canal ganha 8000 euros por mes e o dono nunca apareceu.",
    development: "Videos de top 10, curiosidades, explicacoes. Script com ChatGPT. Voz com IA. Edicao basica no CapCut. 2 videos por semana. Monetiza em 3-6 meses.",
    cta: "Comenta CANAL para o tutorial.",
    duration: "22s",
    category: "conteudo"
  },
  {
    id: 28,
    title: "Conteudo para 30 Dias",
    hook: "Criei conteudo para 30 dias em 2 horas.",
    development: "Pedi ao ChatGPT para criar um calendario editorial. 30 ideias com titulos, hooks e pontos principais. Depois so executo uma de cada vez.",
    cta: "Guarda para o teu proximo mes.",
    duration: "18s",
    category: "conteudo"
  },
  {
    id: 29,
    title: "Repurposing Inteligente",
    hook: "1 conteudo vira 10 com este metodo.",
    development: "1 video longo vira: 5 clips curtos, 1 artigo, 2 carroseis, 1 thread, 1 newsletter. ChatGPT adapta o formato. Trabalhas uma vez, publicas em todo o lado.",
    cta: "Trabalha menos, aparece mais.",
    duration: "20s",
    category: "conteudo"
  },
  {
    id: 30,
    title: "Scripts que Prendem",
    hook: "A formula de script que mantem pessoas ate ao fim.",
    development: "Hook forte. Promessa clara. Entrega em lista. Twist inesperado. CTA natural. Pede ao ChatGPT para seguir esta ordem exata.",
    cta: "Comenta SCRIPT para exemplos.",
    duration: "18s",
    category: "conteudo"
  },

  // NEGOCIOS (31-40)
  {
    id: 31,
    title: "Agencia de IA com 0 euros",
    hook: "Abri uma agencia de marketing com IA e zero investimento.",
    development: "Ofereco gestao de redes sociais. ChatGPT cria conteudo. Canva faz design. Cobro 500 euros por cliente. 5 clientes, 2500 euros por mes. So preciso de wifi.",
    cta: "Queres o modelo de negocio?",
    duration: "21s",
    category: "negocios"
  },
  {
    id: 32,
    title: "O Negocio de 10.000 euros/mes",
    hook: "Este negocio gera 10.000 euros por mes com 1 pessoa.",
    development: "Consultoria de IA para empresas. Ensinas a usar ChatGPT para poupar tempo. Cobras 500 euros por sessao. 5 clientes por semana. Fazes via Zoom.",
    cta: "Comenta CONSULTORIA.",
    duration: "19s",
    category: "negocios"
  },
  {
    id: 33,
    title: "Automatiza e Vende",
    hook: "Criei uma automacao em 1 hora e vendi por 2000 euros.",
    development: "Empresa perdia 20 horas por semana em emails repetitivos. Criei um sistema com Make e ChatGPT API. Agora fazem em 0 horas. Pagaram felizes.",
    cta: "Aprende automacao, muda de vida.",
    duration: "20s",
    category: "negocios"
  },
  {
    id: 34,
    title: "SaaS com IA",
    hook: "Lancei um SaaS em 1 fim de semana usando so IA.",
    development: "Cursor AI escreveu o codigo. ChatGPT fez o copy. Midjourney fez o logo. Cobro 19 euros por mes. 100 clientes, 1900 euros de receita recorrente.",
    cta: "Comenta SAAS para o tutorial.",
    duration: "21s",
    category: "negocios"
  },
  {
    id: 35,
    title: "Negocios Locais Precisam de Ti",
    hook: "99% dos negocios locais nao sabem usar IA. Es tu que vais ensinar.",
    development: "Restaurantes, cabeleireiros, ginasios. Precisam de posts, respostas a clientes, menus. Tu fazes em 1 hora o que eles demoram 1 semana.",
    cta: "Visita 10 negocios esta semana.",
    duration: "19s",
    category: "negocios"
  },
  {
    id: 36,
    title: "White Label com IA",
    hook: "Vendo servicos de outras pessoas como se fossem meus.",
    development: "Encontro freelancers baratos. Uso IA para gerir e comunicar. Revendo com margem de 50%. Eu faco a venda, eles fazem o trabalho.",
    cta: "Negocios sao sobre sistemas.",
    duration: "18s",
    category: "negocios"
  },
  {
    id: 37,
    title: "O Funil de 0 euros",
    hook: "Este funil de vendas custou 0 euros e gera 5000 por mes.",
    development: "Landing page com Carrd gratis. Emails com MailerLite gratis. Copy com ChatGPT. Produto digital. Trafego organico do TikTok. Lucro puro.",
    cta: "Guarda este sistema.",
    duration: "20s",
    category: "negocios"
  },
  {
    id: 38,
    title: "Licenciamento de IA",
    hook: "Criei um sistema de IA e agora licencio para empresas.",
    development: "Um conjunto de prompts especializados para imobiliarias. Cobro 200 euros por mes pelo acesso. 20 agencias usam. 4000 euros de receita passiva.",
    cta: "Cria um sistema, vende o acesso.",
    duration: "19s",
    category: "negocios"
  },
  {
    id: 39,
    title: "Afiliados com IA",
    hook: "Ganho 3000 euros por mes a promover ferramentas de IA.",
    development: "Crio conteudo sobre ChatGPT, Midjourney, ferramentas pagas. Links de afiliado em todo o lado. Quando compram, ganho comissao. Conteudo com IA, obvio.",
    cta: "Promove o que usas.",
    duration: "18s",
    category: "negocios"
  },
  {
    id: 40,
    title: "Marketplace de Prompts",
    hook: "Vendo prompts por 5 euros cada e faco 2000 por mes.",
    development: "Criei 100 prompts especializados. Coloquei no PromptBase e Gumroad. Compradores encontram via SEO. Venda automatica, entrega automatica.",
    cta: "Comenta PROMPTS para comecar.",
    duration: "20s",
    category: "negocios"
  },

  // PRODUTOS DIGITAIS (41-50)
  {
    id: 41,
    title: "Ebook em 1 Dia",
    hook: "Escrevi um ebook em 1 dia e ja vendeu 500 copias.",
    development: "ChatGPT criou o conteudo. Canva fez o design. Gumroad vende automatico. 9 euros por copia. 4500 euros de um dia de trabalho.",
    cta: "Comeca o teu ebook hoje.",
    duration: "18s",
    category: "produtos"
  },
  {
    id: 42,
    title: "Templates que Vendem",
    hook: "Estes templates geram 1000 euros por mes no automatico.",
    development: "Templates de Notion, Canva, Excel. ChatGPT ajuda a criar a estrutura. Vendo no Gumroad e Etsy. Uma vez criados, vendem para sempre.",
    cta: "Comenta TEMPLATE para ideias.",
    duration: "19s",
    category: "produtos"
  },
  {
    id: 43,
    title: "Curso de 2000 euros",
    hook: "Lancei um curso de 199 euros e vendi para 50 pessoas na primeira semana.",
    development: "ChatGPT escreveu os scripts. Gravei com o telemovel. Editei no CapCut. Hospedei no Hotmart. Paguei 0 euros para criar.",
    cta: "Tu tambem tens algo para ensinar.",
    duration: "20s",
    category: "produtos"
  },
  {
    id: 44,
    title: "Printables Passivos",
    hook: "Estes PDFs simples geram 800 euros por mes.",
    development: "Planners, checklists, trackers. Canva + ideias do ChatGPT. Vendo no Etsy. Demoro 1 hora a criar cada um. Vendem todos os meses.",
    cta: "Guarda para comecar.",
    duration: "18s",
    category: "produtos"
  },
  {
    id: 45,
    title: "Membership de IA",
    hook: "50 pessoas pagam-me 29 euros por mes pelo mesmo conteudo.",
    development: "Grupo privado com prompts novos toda semana. ChatGPT cria os prompts. Eu formato e entrego. 1450 euros por mes de receita recorrente.",
    cta: "Cria uma comunidade paga.",
    duration: "19s",
    category: "produtos"
  },
  {
    id: 46,
    title: "Audiobook com IA",
    hook: "Transformei um ebook em audiobook e dobrei as vendas.",
    development: "ElevenLabs converteu o texto em audio. Qualidade profissional. Agora vendo o ebook por 9 euros e o bundle com audio por 19 euros. Mais valor, mais lucro.",
    cta: "Adiciona audio aos teus produtos.",
    duration: "20s",
    category: "produtos"
  },
  {
    id: 47,
    title: "Mini-Curso de 1 Hora",
    hook: "Este mini-curso de 1 hora gera 500 euros por semana.",
    development: "5 videos de 10 minutos. Um problema especifico, uma solucao clara. Preco baixo, 19 euros. Volume alto. Leads para produtos maiores.",
    cta: "Comeca pequeno, escala depois.",
    duration: "18s",
    category: "produtos"
  },
  {
    id: 48,
    title: "Toolkit Digital",
    hook: "Este toolkit digital vende todos os dias ha 6 meses.",
    development: "Bundle de templates, prompts, checklists e tutoriais. Tudo sobre um tema. Preco de 49 euros. Valor percebido alto. IA criou 80% do conteudo.",
    cta: "Empacota o teu conhecimento.",
    duration: "19s",
    category: "produtos"
  },
  {
    id: 49,
    title: "Desafio de 7 Dias",
    hook: "Criei um desafio gratuito que me traz 20 clientes por mes.",
    development: "7 emails automaticos escritos com ChatGPT. Valor gratis no inicio. Oferta paga no final. Funciona no automatico. Funil perfeito.",
    cta: "Lanca o teu desafio.",
    duration: "18s",
    category: "produtos"
  },
  {
    id: 50,
    title: "O Produto de 1000 euros",
    hook: "Vendi um produto digital por 1000 euros. Sim, e possivel.",
    development: "Mentoria gravada + templates + suporte. Posicionamento premium. Menos clientes, mais lucro. 5 vendas por mes sao 5000 euros.",
    cta: "Nao tenhas medo de cobrar mais.",
    duration: "19s",
    category: "produtos"
  }
];
