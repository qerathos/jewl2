export interface Prompt {
  id: number
  title: string
  prompt: string
  example: string
}

export interface PromptCategory {
  id: string
  name: string
  icon: string
  description: string
  prompts: Prompt[]
}

export const promptCategories: PromptCategory[] = [
  {
    id: "criacao-conteudo",
    name: "Criação de Conteúdo",
    icon: "✏️",
    description: "Prompts para criar conteúdo que atrai e converte",
    prompts: [
      {
        id: 1,
        title: "Gerador de Ideias de Conteúdo",
        prompt: "Dá-me 10 ideias de conteúdo sobre [TEMA] que resolvam problemas reais do meu público-alvo que são [PÚBLICO].",
        example: "Dá-me 10 ideias de conteúdo sobre finanças pessoais que resolvam problemas reais do meu público-alvo que são jovens adultos entre 25-35 anos."
      },
      {
        id: 2,
        title: "Criador de Headlines Magnéticas",
        prompt: "Cria 5 títulos irresistíveis para um artigo sobre [TEMA]. Os títulos devem criar curiosidade e prometer um benefício claro.",
        example: "Cria 5 títulos irresistíveis para um artigo sobre como poupar dinheiro. Os títulos devem criar curiosidade e prometer um benefício claro."
      },
      {
        id: 3,
        title: "Estrutura de Artigo Completo",
        prompt: "Cria a estrutura completa de um artigo de blog sobre [TEMA] com introdução, 5 secções principais e conclusão com call-to-action.",
        example: "Cria a estrutura completa de um artigo de blog sobre trabalho remoto com introdução, 5 secções principais e conclusão com call-to-action."
      },
      {
        id: 4,
        title: "Transformador de Tema Complexo",
        prompt: "Explica [TEMA COMPLEXO] de forma simples como se estivesses a falar com alguém de 12 anos. Usa analogias do dia-a-dia.",
        example: "Explica criptomoedas de forma simples como se estivesses a falar com alguém de 12 anos. Usa analogias do dia-a-dia."
      },
      {
        id: 5,
        title: "Criador de Listas Práticas",
        prompt: "Cria uma lista de [NÚMERO] dicas práticas e acionáveis sobre [TEMA]. Cada dica deve poder ser aplicada hoje mesmo.",
        example: "Cria uma lista de 15 dicas práticas e acionáveis sobre produtividade matinal. Cada dica deve poder ser aplicada hoje mesmo."
      },
      {
        id: 6,
        title: "Gerador de Perguntas FAQ",
        prompt: "Lista as 10 perguntas mais frequentes que iniciantes têm sobre [TEMA] e responde a cada uma de forma clara e concisa.",
        example: "Lista as 10 perguntas mais frequentes que iniciantes têm sobre dropshipping e responde a cada uma de forma clara e concisa."
      },
      {
        id: 7,
        title: "Criador de Tutoriais Passo-a-Passo",
        prompt: "Cria um tutorial passo-a-passo para [OBJETIVO]. Inclui o que é necessário antes de começar e possíveis erros a evitar.",
        example: "Cria um tutorial passo-a-passo para criar uma conta no Canva e fazer o primeiro design. Inclui o que é necessário antes de começar e possíveis erros a evitar."
      },
      {
        id: 8,
        title: "Reescritor de Conteúdo",
        prompt: "Reescreve este texto mantendo a mesma mensagem mas com um tom mais [TOM DESEJADO]: [TEXTO]",
        example: "Reescreve este texto mantendo a mesma mensagem mas com um tom mais casual e amigável: 'A nossa empresa oferece serviços de consultoria financeira de alta qualidade.'"
      },
      {
        id: 9,
        title: "Criador de Introduções Cativantes",
        prompt: "Escreve 3 versões diferentes de uma introdução para um conteúdo sobre [TEMA]. Uma deve começar com uma pergunta, outra com uma estatística surpreendente e outra com uma história.",
        example: "Escreve 3 versões diferentes de uma introdução para um conteúdo sobre hábitos saudáveis. Uma deve começar com uma pergunta, outra com uma estatística surpreendente e outra com uma história."
      },
      {
        id: 10,
        title: "Gerador de Conclusões com CTA",
        prompt: "Escreve uma conclusão poderosa para um artigo sobre [TEMA] que resuma os pontos principais e inclua um call-to-action para [AÇÃO DESEJADA].",
        example: "Escreve uma conclusão poderosa para um artigo sobre investimentos para iniciantes que resuma os pontos principais e inclua um call-to-action para se inscreverem na newsletter."
      },
      {
        id: 11,
        title: "Criador de Carrosséis Educativos",
        prompt: "Cria o conteúdo para um carrossel de [NÚMERO] slides sobre [TEMA]. Cada slide deve ter um título curto e 2-3 linhas de conteúdo.",
        example: "Cria o conteúdo para um carrossel de 8 slides sobre como começar a investir. Cada slide deve ter um título curto e 2-3 linhas de conteúdo."
      },
      {
        id: 12,
        title: "Adaptador de Conteúdo Longo",
        prompt: "Transforma este artigo longo em: 1) Um resumo de 100 palavras 2) 5 posts curtos para redes sociais 3) Uma lista de bullet points. Artigo: [ARTIGO]",
        example: "Transforma este artigo longo em: 1) Um resumo de 100 palavras 2) 5 posts curtos para redes sociais 3) Uma lista de bullet points. Artigo: [cola o teu artigo aqui]"
      }
    ]
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "🎵",
    description: "Prompts para criar vídeos virais no TikTok",
    prompts: [
      {
        id: 13,
        title: "Gerador de Ideias Virais TikTok",
        prompt: "Dá-me 10 ideias de vídeos TikTok sobre [NICHO] que têm potencial viral. Inclui o gancho inicial de cada vídeo.",
        example: "Dá-me 10 ideias de vídeos TikTok sobre finanças pessoais que têm potencial viral. Inclui o gancho inicial de cada vídeo."
      },
      {
        id: 14,
        title: "Criador de Ganchos TikTok",
        prompt: "Cria 10 ganchos poderosos para os primeiros 3 segundos de um vídeo TikTok sobre [TEMA]. Devem criar curiosidade imediata.",
        example: "Cria 10 ganchos poderosos para os primeiros 3 segundos de um vídeo TikTok sobre dicas de poupança. Devem criar curiosidade imediata."
      },
      {
        id: 15,
        title: "Roteiro TikTok 60 Segundos",
        prompt: "Escreve um roteiro completo para um TikTok de 60 segundos sobre [TEMA]. Inclui: gancho (3s), problema (10s), solução (35s), CTA (12s).",
        example: "Escreve um roteiro completo para um TikTok de 60 segundos sobre como ganhar os primeiros 100€ online. Inclui: gancho (3s), problema (10s), solução (35s), CTA (12s)."
      },
      {
        id: 16,
        title: "Ideias de Séries TikTok",
        prompt: "Cria uma ideia de série para TikTok sobre [NICHO] com 7 episódios. Cada episódio deve deixar o público a querer ver o próximo.",
        example: "Cria uma ideia de série para TikTok sobre empreendedorismo com 7 episódios. Cada episódio deve deixar o público a querer ver o próximo."
      },
      {
        id: 17,
        title: "Adaptador de Tendências",
        prompt: "Como posso adaptar a tendência [TENDÊNCIA/ÁUDIO VIRAL] para o meu nicho de [NICHO]? Dá-me 3 ideias criativas.",
        example: "Como posso adaptar a tendência 'POV: você descobriu que...' para o meu nicho de marketing digital? Dá-me 3 ideias criativas."
      },
      {
        id: 18,
        title: "Criador de Storytimes",
        prompt: "Ajuda-me a estruturar um storytime sobre [EXPERIÊNCIA]. Organiza em: situação inicial, conflito, clímax, resolução e lição aprendida.",
        example: "Ajuda-me a estruturar um storytime sobre como perdi dinheiro num investimento mau. Organiza em: situação inicial, conflito, clímax, resolução e lição aprendida."
      },
      {
        id: 19,
        title: "Gerador de Duetos/Stitches",
        prompt: "Dá-me 5 ideias de como fazer um dueto ou stitch reagindo a [TIPO DE CONTEÚDO] no meu nicho de [NICHO].",
        example: "Dá-me 5 ideias de como fazer um dueto ou stitch reagindo a maus conselhos financeiros no meu nicho de finanças pessoais."
      },
      {
        id: 20,
        title: "TikTok Educativo Rápido",
        prompt: "Cria um roteiro para um TikTok de 30 segundos que ensine [CONCEITO] de forma rápida e memorável.",
        example: "Cria um roteiro para um TikTok de 30 segundos que ensine o que é juro composto de forma rápida e memorável."
      },
      {
        id: 21,
        title: "Criador de Challenges",
        prompt: "Inventa um challenge original relacionado com [NICHO] que seja fácil de replicar e tenha potencial viral.",
        example: "Inventa um challenge original relacionado com produtividade que seja fácil de replicar e tenha potencial viral."
      },
      {
        id: 22,
        title: "Roteiro de Antes/Depois",
        prompt: "Cria um roteiro para um vídeo de transformação antes/depois sobre [TEMA]. Mostra o problema inicial e o resultado final.",
        example: "Cria um roteiro para um vídeo de transformação antes/depois sobre organização do escritório em casa. Mostra o problema inicial e o resultado final."
      },
      {
        id: 23,
        title: "TikTok de Lista Rápida",
        prompt: "Cria um roteiro para um TikTok de lista rápida: '[NÚMERO] [COISAS] que [BENEFÍCIO]'. Formato dinâmico com transições.",
        example: "Cria um roteiro para um TikTok de lista rápida: '5 apps que te pagam para fazer nada'. Formato dinâmico com transições."
      },
      {
        id: 24,
        title: "Gerador de CTAs TikTok",
        prompt: "Cria 10 formas criativas de pedir aos seguidores para [AÇÃO] no final de vídeos sobre [NICHO].",
        example: "Cria 10 formas criativas de pedir aos seguidores para seguirem a conta no final de vídeos sobre dicas de carreira."
      }
    ]
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "📸",
    description: "Prompts para crescer e monetizar no Instagram",
    prompts: [
      {
        id: 25,
        title: "Calendário de Conteúdo Semanal",
        prompt: "Cria um calendário de conteúdo para Instagram para uma semana sobre [NICHO]. Inclui: tipo de post (reel, carrossel, story), tema e melhor hora para publicar.",
        example: "Cria um calendário de conteúdo para Instagram para uma semana sobre fitness feminino. Inclui: tipo de post (reel, carrossel, story), tema e melhor hora para publicar."
      },
      {
        id: 26,
        title: "Legenda Longa Envolvente",
        prompt: "Escreve uma legenda longa e envolvente para um post sobre [TEMA]. Começa com um gancho, conta uma mini-história e termina com uma pergunta.",
        example: "Escreve uma legenda longa e envolvente para um post sobre a importância de investir cedo. Começa com um gancho, conta uma mini-história e termina com uma pergunta."
      },
      {
        id: 27,
        title: "Gerador de Hashtags",
        prompt: "Dá-me 30 hashtags relevantes para um post sobre [TEMA] no nicho de [NICHO]. Divide em: populares (10), médias (10) e de nicho (10).",
        example: "Dá-me 30 hashtags relevantes para um post sobre receitas saudáveis no nicho de alimentação. Divide em: populares (10), médias (10) e de nicho (10)."
      },
      {
        id: 28,
        title: "Bio Instagram Otimizada",
        prompt: "Cria 3 versões de bio para Instagram para [TIPO DE CONTA/PROFISSÃO]. Inclui: quem sou, o que ofereço e CTA. Máximo 150 caracteres cada.",
        example: "Cria 3 versões de bio para Instagram para um coach de produtividade. Inclui: quem sou, o que ofereço e CTA. Máximo 150 caracteres cada."
      },
      {
        id: 29,
        title: "Roteiro de Reel Viral",
        prompt: "Escreve um roteiro para um Reel de 30 segundos sobre [TEMA]. Estrutura: gancho visual (2s), problema (5s), solução (18s), CTA (5s).",
        example: "Escreve um roteiro para um Reel de 30 segundos sobre 3 erros de quem começa a investir. Estrutura: gancho visual (2s), problema (5s), solução (18s), CTA (5s)."
      },
      {
        id: 30,
        title: "Ideias de Stories Interativos",
        prompt: "Dá-me 10 ideias de stories interativos para aumentar engagement no nicho de [NICHO]. Inclui uso de stickers (enquete, quiz, perguntas).",
        example: "Dá-me 10 ideias de stories interativos para aumentar engagement no nicho de desenvolvimento pessoal. Inclui uso de stickers (enquete, quiz, perguntas)."
      },
      {
        id: 31,
        title: "Carrossel Educativo Completo",
        prompt: "Cria o conteúdo completo para um carrossel de 10 slides sobre [TEMA]. Slide 1: capa atrativa. Slides 2-9: conteúdo. Slide 10: CTA.",
        example: "Cria o conteúdo completo para um carrossel de 10 slides sobre como criar um orçamento pessoal. Slide 1: capa atrativa. Slides 2-9: conteúdo. Slide 10: CTA."
      },
      {
        id: 32,
        title: "Estratégia de Destaques",
        prompt: "Sugere 6 categorias de destaques para um perfil de [NICHO] e o que incluir em cada um.",
        example: "Sugere 6 categorias de destaques para um perfil de nutricionista e o que incluir em cada um."
      },
      {
        id: 33,
        title: "Posts de Valor vs Venda",
        prompt: "Para o meu produto/serviço [PRODUTO], cria: 3 posts de valor puro, 2 posts de valor + menção suave, 1 post de venda direta.",
        example: "Para o meu produto/serviço curso de Excel online, cria: 3 posts de valor puro, 2 posts de valor + menção suave, 1 post de venda direta."
      },
      {
        id: 34,
        title: "Resposta a Comentários",
        prompt: "Dá-me 10 formas de responder a comentários como '[TIPO DE COMENTÁRIO]' de forma que aumente o engagement.",
        example: "Dá-me 10 formas de responder a comentários como 'amei esse conteúdo!' de forma que aumente o engagement."
      },
      {
        id: 35,
        title: "Colaboração com Outras Contas",
        prompt: "Como posso abordar [TIPO DE CONTA] para uma colaboração no Instagram? Escreve 3 mensagens de DM profissionais.",
        example: "Como posso abordar contas de finanças com mais seguidores para uma colaboração no Instagram? Escreve 3 mensagens de DM profissionais."
      },
      {
        id: 36,
        title: "Legenda Curta Impactante",
        prompt: "Escreve 5 legendas curtas e impactantes (máximo 2 linhas) para posts sobre [TEMA]. Devem ser memoráveis e partilháveis.",
        example: "Escreve 5 legendas curtas e impactantes (máximo 2 linhas) para posts sobre mentalidade de sucesso. Devem ser memoráveis e partilháveis."
      }
    ]
  },
  {
    id: "copywriting",
    name: "Copywriting",
    icon: "✍️",
    description: "Prompts para escrever textos que vendem",
    prompts: [
      {
        id: 37,
        title: "Headline que Vende",
        prompt: "Cria 10 headlines para vender [PRODUTO/SERVIÇO]. Usa fórmulas comprovadas: benefício + prazo, problema + solução, números + resultado.",
        example: "Cria 10 headlines para vender um curso de inglês online. Usa fórmulas comprovadas: benefício + prazo, problema + solução, números + resultado."
      },
      {
        id: 38,
        title: "Página de Vendas Estruturada",
        prompt: "Cria a estrutura de uma página de vendas para [PRODUTO]. Inclui: headline, subheadline, problema, solução, benefícios, prova social, oferta, garantia, CTA.",
        example: "Cria a estrutura de uma página de vendas para um ebook sobre produtividade. Inclui: headline, subheadline, problema, solução, benefícios, prova social, oferta, garantia, CTA."
      },
      {
        id: 39,
        title: "Email de Vendas",
        prompt: "Escreve um email de vendas para [PRODUTO] usando a fórmula AIDA (Atenção, Interesse, Desejo, Ação). Mantém um tom [TOM].",
        example: "Escreve um email de vendas para um serviço de mentoria usando a fórmula AIDA (Atenção, Interesse, Desejo, Ação). Mantém um tom profissional mas amigável."
      },
      {
        id: 40,
        title: "Descrição de Produto Irresistível",
        prompt: "Escreve uma descrição de produto para [PRODUTO] focada em benefícios (não características). Inclui sensações e resultados.",
        example: "Escreve uma descrição de produto para um planner digital focada em benefícios (não características). Inclui sensações e resultados."
      },
      {
        id: 41,
        title: "Criador de Bullet Points",
        prompt: "Transforma estas características de [PRODUTO] em bullet points focados em benefícios: [LISTA DE CARACTERÍSTICAS]",
        example: "Transforma estas características de um curso online em bullet points focados em benefícios: 10 módulos, certificado, grupo privado, aulas gravadas."
      },
      {
        id: 42,
        title: "Sequência de Emails de Lançamento",
        prompt: "Cria uma sequência de 5 emails para lançar [PRODUTO]. Email 1: história. Email 2: problema. Email 3: solução. Email 4: prova. Email 5: oferta.",
        example: "Cria uma sequência de 5 emails para lançar um curso de marketing digital. Email 1: história. Email 2: problema. Email 3: solução. Email 4: prova. Email 5: oferta."
      },
      {
        id: 43,
        title: "Copy para Anúncios",
        prompt: "Escreve 3 versões de copy para anúncio de [PRODUTO] no [PLATAFORMA]. Versão curta (50 palavras), média (100) e longa (200).",
        example: "Escreve 3 versões de copy para anúncio de um serviço de design gráfico no Facebook. Versão curta (50 palavras), média (100) e longa (200)."
      },
      {
        id: 44,
        title: "Gerador de Urgência",
        prompt: "Cria 10 formas de adicionar urgência e escassez à venda de [PRODUTO] sem parecer forçado ou falso.",
        example: "Cria 10 formas de adicionar urgência e escassez à venda de um workshop online sem parecer forçado ou falso."
      },
      {
        id: 45,
        title: "Tratamento de Objeções",
        prompt: "Lista as 5 principais objeções que pessoas têm ao comprar [PRODUTO] e escreve respostas persuasivas para cada uma.",
        example: "Lista as 5 principais objeções que pessoas têm ao comprar cursos online e escreve respostas persuasivas para cada uma."
      },
      {
        id: 46,
        title: "Testemunho Estruturado",
        prompt: "Cria um template de perguntas para pedir testemunhos aos clientes de [PRODUTO/SERVIÇO] que resultem em depoimentos convincentes.",
        example: "Cria um template de perguntas para pedir testemunhos aos clientes de um serviço de coaching que resultem em depoimentos convincentes."
      },
      {
        id: 47,
        title: "Call-to-Action Poderoso",
        prompt: "Cria 15 CTAs diferentes para [AÇÃO DESEJADA]. Varia entre urgentes, benefício-focados e curiosidade.",
        example: "Cria 15 CTAs diferentes para inscrever-se numa newsletter. Varia entre urgentes, benefício-focados e curiosidade."
      },
      {
        id: 48,
        title: "Proposta de Valor Clara",
        prompt: "Ajuda-me a definir a proposta de valor de [PRODUTO/SERVIÇO]. Responde: O que é? Para quem? Que problema resolve? Porque é diferente?",
        example: "Ajuda-me a definir a proposta de valor de um serviço de assistente virtual. Responde: O que é? Para quem? Que problema resolve? Porque é diferente?"
      }
    ]
  },
  {
    id: "ebooks",
    name: "Ebooks",
    icon: "📚",
    description: "Prompts para criar e vender ebooks",
    prompts: [
      {
        id: 49,
        title: "Ideias de Ebook Rentáveis",
        prompt: "Dá-me 10 ideias de ebooks sobre [NICHO] que resolvam problemas específicos e tenham potencial de venda. Inclui título sugerido.",
        example: "Dá-me 10 ideias de ebooks sobre desenvolvimento pessoal que resolvam problemas específicos e tenham potencial de venda. Inclui título sugerido."
      },
      {
        id: 50,
        title: "Estrutura Completa de Ebook",
        prompt: "Cria a estrutura completa para um ebook sobre [TEMA]. Inclui: título, subtítulo, introdução, 7 capítulos com subtópicos, e conclusão.",
        example: "Cria a estrutura completa para um ebook sobre como começar um negócio online. Inclui: título, subtítulo, introdução, 7 capítulos com subtópicos, e conclusão."
      },
      {
        id: 51,
        title: "Título de Ebook Vendedor",
        prompt: "Cria 10 títulos vendedores para um ebook sobre [TEMA]. Os títulos devem prometer um resultado específico ou resolver um problema claro.",
        example: "Cria 10 títulos vendedores para um ebook sobre gestão de tempo. Os títulos devem prometer um resultado específico ou resolver um problema claro."
      },
      {
        id: 52,
        title: "Introdução Cativante",
        prompt: "Escreve a introdução de um ebook sobre [TEMA]. Deve captar atenção, apresentar o problema, prometer a solução e explicar o que o leitor vai aprender.",
        example: "Escreve a introdução de um ebook sobre alimentação saudável para pessoas ocupadas. Deve captar atenção, apresentar o problema, prometer a solução e explicar o que o leitor vai aprender."
      },
      {
        id: 53,
        title: "Capítulo Detalhado",
        prompt: "Escreve o capítulo [NÚMERO] do meu ebook sobre [TEMA GERAL]. O capítulo é sobre [TEMA DO CAPÍTULO]. Inclui exemplos práticos.",
        example: "Escreve o capítulo 3 do meu ebook sobre finanças pessoais. O capítulo é sobre como criar um fundo de emergência. Inclui exemplos práticos."
      },
      {
        id: 54,
        title: "Exercícios e Worksheets",
        prompt: "Cria 5 exercícios práticos ou worksheets para incluir num ebook sobre [TEMA]. Devem ajudar o leitor a aplicar o conhecimento.",
        example: "Cria 5 exercícios práticos ou worksheets para incluir num ebook sobre definição de objetivos. Devem ajudar o leitor a aplicar o conhecimento."
      },
      {
        id: 55,
        title: "Descrição para Venda",
        prompt: "Escreve a descrição de venda para um ebook sobre [TEMA] com [NÚMERO] páginas. Foca nos benefícios e resultados que o leitor terá.",
        example: "Escreve a descrição de venda para um ebook sobre receitas low carb com 50 páginas. Foca nos benefícios e resultados que o leitor terá."
      },
      {
        id: 56,
        title: "Checklist de Lançamento",
        prompt: "Cria uma checklist completa para lançar um ebook sobre [TEMA]. Inclui: preparação, pré-lançamento, lançamento e pós-lançamento.",
        example: "Cria uma checklist completa para lançar um ebook sobre fotografia para Instagram. Inclui: preparação, pré-lançamento, lançamento e pós-lançamento."
      },
      {
        id: 57,
        title: "Bónus para Ebook",
        prompt: "Sugere 5 bónus que posso oferecer com o meu ebook sobre [TEMA] para aumentar o valor percebido.",
        example: "Sugere 5 bónus que posso oferecer com o meu ebook sobre produtividade para freelancers para aumentar o valor percebido."
      },
      {
        id: 58,
        title: "Email de Pré-Lançamento",
        prompt: "Escreve um email para anunciar o pré-lançamento do meu ebook sobre [TEMA]. Cria antecipação e oferece um desconto de early bird.",
        example: "Escreve um email para anunciar o pré-lançamento do meu ebook sobre marketing no Pinterest. Cria antecipação e oferece um desconto de early bird."
      },
      {
        id: 59,
        title: "FAQ do Ebook",
        prompt: "Cria uma secção de perguntas frequentes (FAQ) para a página de venda do meu ebook sobre [TEMA]. Inclui 8 perguntas e respostas.",
        example: "Cria uma secção de perguntas frequentes (FAQ) para a página de venda do meu ebook sobre criação de cursos online. Inclui 8 perguntas e respostas."
      },
      {
        id: 60,
        title: "Atualização de Ebook",
        prompt: "O meu ebook sobre [TEMA] foi escrito há [TEMPO]. Sugere atualizações e novos conteúdos para uma segunda edição.",
        example: "O meu ebook sobre redes sociais foi escrito há 2 anos. Sugere atualizações e novos conteúdos para uma segunda edição."
      }
    ]
  },
  {
    id: "freelancing",
    name: "Freelancing",
    icon: "💼",
    description: "Prompts para conseguir clientes e gerir projetos",
    prompts: [
      {
        id: 61,
        title: "Proposta de Serviço Vencedora",
        prompt: "Escreve uma proposta profissional para um cliente que precisa de [SERVIÇO]. Inclui: entendimento do problema, solução proposta, processo, prazo e investimento.",
        example: "Escreve uma proposta profissional para um cliente que precisa de um website para a sua loja. Inclui: entendimento do problema, solução proposta, processo, prazo e investimento."
      },
      {
        id: 62,
        title: "Perfil de Freelancer",
        prompt: "Escreve uma bio profissional para o meu perfil de freelancer em [PLATAFORMA]. Sou [PROFISSÃO] especializado em [ESPECIALIDADE].",
        example: "Escreve uma bio profissional para o meu perfil de freelancer no Upwork. Sou designer gráfico especializado em identidade visual para startups."
      },
      {
        id: 63,
        title: "Resposta a Projeto",
        prompt: "Escreve uma resposta personalizada para este projeto: [DESCRIÇÃO DO PROJETO]. Mostra que entendi o problema e destaca porque sou a pessoa certa.",
        example: "Escreve uma resposta personalizada para este projeto: 'Preciso de alguém para gerir as minhas redes sociais'. Mostra que entendi o problema e destaca porque sou a pessoa certa."
      },
      {
        id: 64,
        title: "Email de Prospecção",
        prompt: "Escreve um email frio para oferecer os meus serviços de [SERVIÇO] a [TIPO DE EMPRESA]. Deve ser curto, personalizado e com CTA claro.",
        example: "Escreve um email frio para oferecer os meus serviços de copywriting a agências de marketing. Deve ser curto, personalizado e com CTA claro."
      },
      {
        id: 65,
        title: "Follow-up Educado",
        prompt: "Escreve um email de follow-up para um cliente que não respondeu à minha proposta de [SERVIÇO] há [TEMPO]. Mantém profissionalismo.",
        example: "Escreve um email de follow-up para um cliente que não respondeu à minha proposta de gestão de redes sociais há 5 dias. Mantém profissionalismo."
      },
      {
        id: 66,
        title: "Definição de Preços",
        prompt: "Ajuda-me a definir preços para os meus serviços de [SERVIÇO]. Considera: mercado, experiência [NÍVEL], e tempo médio por projeto.",
        example: "Ajuda-me a definir preços para os meus serviços de tradução. Considera: mercado português, experiência intermédia, e tempo médio por projeto."
      },
      {
        id: 67,
        title: "Contrato Simples",
        prompt: "Cria os pontos principais que devo incluir num contrato de prestação de serviços de [SERVIÇO]. Protege ambas as partes.",
        example: "Cria os pontos principais que devo incluir num contrato de prestação de serviços de desenvolvimento web. Protege ambas as partes."
      },
      {
        id: 68,
        title: "Gestão de Cliente Difícil",
        prompt: "O meu cliente está [SITUAÇÃO]. Como devo responder de forma profissional? Escreve uma resposta modelo.",
        example: "O meu cliente está a pedir revisões infinitas além do acordado. Como devo responder de forma profissional? Escreve uma resposta modelo."
      },
      {
        id: 69,
        title: "Pedido de Testemunho",
        prompt: "Escreve um email a pedir um testemunho a um cliente satisfeito. Facilita a resposta com perguntas guia.",
        example: "Escreve um email a pedir um testemunho a um cliente satisfeito com o meu trabalho de design. Facilita a resposta com perguntas guia."
      },
      {
        id: 70,
        title: "Aumento de Preços",
        prompt: "Escreve um email a informar clientes atuais sobre um aumento de preços de [PERCENTAGEM]. Mantém a relação e justifica o valor.",
        example: "Escreve um email a informar clientes atuais sobre um aumento de preços de 20%. Mantém a relação e justifica o valor."
      },
      {
        id: 71,
        title: "Portfólio Descritivo",
        prompt: "Ajuda-me a descrever este projeto do meu portfólio: [DESCRIÇÃO]. Inclui: desafio, solução, processo e resultados.",
        example: "Ajuda-me a descrever este projeto do meu portfólio: redesign do website de um restaurante. Inclui: desafio, solução, processo e resultados."
      },
      {
        id: 72,
        title: "Pacotes de Serviços",
        prompt: "Cria 3 pacotes de serviços (básico, intermédio, premium) para [SERVIÇO]. Cada pacote deve ter nome, descrição e entregáveis claros.",
        example: "Cria 3 pacotes de serviços (básico, intermédio, premium) para gestão de Instagram. Cada pacote deve ter nome, descrição e entregáveis claros."
      }
    ]
  },
  {
    id: "negocios-locais",
    name: "Negócios Locais",
    icon: "🏪",
    description: "Prompts para ajudar negócios locais com marketing",
    prompts: [
      {
        id: 73,
        title: "Google My Business Otimizado",
        prompt: "Escreve uma descrição otimizada para o Google My Business de [TIPO DE NEGÓCIO] em [LOCALIZAÇÃO]. Inclui palavras-chave locais.",
        example: "Escreve uma descrição otimizada para o Google My Business de uma clínica dentária em Lisboa. Inclui palavras-chave locais."
      },
      {
        id: 74,
        title: "Posts para Redes Sociais Locais",
        prompt: "Cria 5 ideias de posts para as redes sociais de [TIPO DE NEGÓCIO] que conectem com a comunidade local de [LOCALIZAÇÃO].",
        example: "Cria 5 ideias de posts para as redes sociais de uma padaria que conectem com a comunidade local de Almada."
      },
      {
        id: 75,
        title: "Resposta a Avaliações",
        prompt: "Escreve respostas profissionais para: 1) Uma avaliação 5 estrelas 2) Uma avaliação 3 estrelas 3) Uma avaliação negativa. Negócio: [NEGÓCIO]",
        example: "Escreve respostas profissionais para: 1) Uma avaliação 5 estrelas 2) Uma avaliação 3 estrelas 3) Uma avaliação negativa. Negócio: restaurante italiano"
      },
      {
        id: 76,
        title: "Promoção Sazonal",
        prompt: "Cria uma promoção para [TIPO DE NEGÓCIO] para a época de [ÉPOCA/EVENTO]. Inclui: nome da promoção, desconto, condições e texto promocional.",
        example: "Cria uma promoção para um salão de beleza para a época de Natal. Inclui: nome da promoção, desconto, condições e texto promocional."
      },
      {
        id: 77,
        title: "Email Marketing Local",
        prompt: "Escreve um email para a base de clientes de [NEGÓCIO] a anunciar [NOVIDADE]. Tom amigável e local.",
        example: "Escreve um email para a base de clientes de uma loja de roupa a anunciar a nova coleção de verão. Tom amigável e local."
      },
      {
        id: 78,
        title: "Parceria Local",
        prompt: "Escreve uma mensagem para propor uma parceria entre [MEU NEGÓCIO] e [NEGÓCIO PARCEIRO]. Explica benefícios mútuos.",
        example: "Escreve uma mensagem para propor uma parceria entre a minha academia de fitness e uma loja de suplementos. Explica benefícios mútuos."
      },
      {
        id: 79,
        title: "Flyer Digital",
        prompt: "Escreve o texto para um flyer digital de [NEGÓCIO] a promover [SERVIÇO/PRODUTO]. Inclui: headline, 3 benefícios, oferta e contacto.",
        example: "Escreve o texto para um flyer digital de um centro de explicações a promover aulas de matemática. Inclui: headline, 3 benefícios, oferta e contacto."
      },
      {
        id: 80,
        title: "Programa de Fidelização",
        prompt: "Cria um programa de fidelização simples para [TIPO DE NEGÓCIO]. Inclui: como funciona, recompensas e comunicação.",
        example: "Cria um programa de fidelização simples para um café. Inclui: como funciona, recompensas e comunicação."
      },
      {
        id: 81,
        title: "Evento Local",
        prompt: "Planeia um evento para [NEGÓCIO] atrair novos clientes. Inclui: conceito, data sugerida, atividades e promoção.",
        example: "Planeia um evento para uma livraria atrair novos clientes. Inclui: conceito, data sugerida, atividades e promoção."
      },
      {
        id: 82,
        title: "FAQ para Website Local",
        prompt: "Cria 10 perguntas frequentes para o website de [TIPO DE NEGÓCIO]. As perguntas devem ser o que clientes locais realmente perguntam.",
        example: "Cria 10 perguntas frequentes para o website de uma oficina mecânica. As perguntas devem ser o que clientes locais realmente perguntam."
      },
      {
        id: 83,
        title: "Comunicação de Crise",
        prompt: "Escreve uma comunicação para clientes de [NEGÓCIO] sobre [SITUAÇÃO]. Mantém transparência e oferece soluções.",
        example: "Escreve uma comunicação para clientes de um ginásio sobre aumento de preços. Mantém transparência e oferece soluções."
      },
      {
        id: 84,
        title: "Descrição de Serviços",
        prompt: "Escreve descrições atrativas para os serviços de [NEGÓCIO]: [LISTA DE SERVIÇOS]. Foca em benefícios para o cliente local.",
        example: "Escreve descrições atrativas para os serviços de um cabeleireiro: corte, coloração, tratamentos. Foca em benefícios para o cliente local."
      }
    ]
  },
  {
    id: "produtividade",
    name: "Produtividade",
    icon: "⚡",
    description: "Prompts para trabalhar melhor e mais rápido",
    prompts: [
      {
        id: 85,
        title: "Plano Diário Otimizado",
        prompt: "Ajuda-me a planear o meu dia. Tenho estas tarefas: [LISTA]. Organiza por prioridade e sugere blocos de tempo.",
        example: "Ajuda-me a planear o meu dia. Tenho estas tarefas: responder emails, criar 3 posts, reunião às 14h, editar vídeo. Organiza por prioridade e sugere blocos de tempo."
      },
      {
        id: 86,
        title: "Decisão Rápida",
        prompt: "Estou indeciso entre [OPÇÃO A] e [OPÇÃO B]. Lista prós e contras de cada uma e dá a tua recomendação baseada em [CRITÉRIO].",
        example: "Estou indeciso entre trabalhar como freelancer ou procurar emprego fixo. Lista prós e contras de cada uma e dá a tua recomendação baseada em flexibilidade e segurança financeira."
      },
      {
        id: 87,
        title: "Resumo de Reunião",
        prompt: "Resume esta reunião/conversa em pontos principais, decisões tomadas e próximos passos: [NOTAS DA REUNIÃO]",
        example: "Resume esta reunião/conversa em pontos principais, decisões tomadas e próximos passos: [cola as tuas notas aqui]"
      },
      {
        id: 88,
        title: "Template de Email Rápido",
        prompt: "Cria 5 templates de email para situações comuns: [LISTA DE SITUAÇÕES]. Devem ser profissionais e editáveis.",
        example: "Cria 5 templates de email para situações comuns: pedir informações, agradecer, marcar reunião, fazer follow-up, recusar educadamente. Devem ser profissionais e editáveis."
      },
      {
        id: 89,
        title: "Automatização de Tarefas",
        prompt: "Quais tarefas repetitivas posso automatizar no meu trabalho de [PROFISSÃO]? Sugere ferramentas gratuitas para cada uma.",
        example: "Quais tarefas repetitivas posso automatizar no meu trabalho de gestor de redes sociais? Sugere ferramentas gratuitas para cada uma."
      },
      {
        id: 90,
        title: "Foco e Concentração",
        prompt: "Estou com dificuldade em focar-me em [TAREFA]. Dá-me 5 técnicas práticas para aumentar a minha concentração agora mesmo.",
        example: "Estou com dificuldade em focar-me em escrever um artigo. Dá-me 5 técnicas práticas para aumentar a minha concentração agora mesmo."
      },
      {
        id: 91,
        title: "Revisão Semanal",
        prompt: "Cria um template de revisão semanal para [TIPO DE TRABALHO]. Inclui: conquistas, aprendizagens, desafios e objetivos para próxima semana.",
        example: "Cria um template de revisão semanal para um criador de conteúdo. Inclui: conquistas, aprendizagens, desafios e objetivos para próxima semana."
      },
      {
        id: 92,
        title: "Delegação Eficaz",
        prompt: "Preciso de delegar [TAREFA]. Escreve instruções claras e completas para quem vai executar.",
        example: "Preciso de delegar a publicação de posts no Instagram. Escreve instruções claras e completas para quem vai executar."
      },
      {
        id: 93,
        title: "Gestão de Prazos",
        prompt: "Tenho um projeto com prazo em [TEMPO] que inclui [COMPONENTES]. Cria um cronograma reverso com milestones.",
        example: "Tenho um projeto com prazo em 2 semanas que inclui: pesquisa, escrita, design e revisão. Cria um cronograma reverso com milestones."
      },
      {
        id: 94,
        title: "Batch de Conteúdo",
        prompt: "Ajuda-me a criar conteúdo em batch para [PLATAFORMA]. Quero criar conteúdo de [TEMPO] num só dia. Organiza o processo.",
        example: "Ajuda-me a criar conteúdo em batch para Instagram. Quero criar conteúdo de 2 semanas num só dia. Organiza o processo."
      },
      {
        id: 95,
        title: "Rotina Matinal Produtiva",
        prompt: "Cria uma rotina matinal de [DURAÇÃO] otimizada para um [PROFISSÃO] que quer começar o dia produtivo.",
        example: "Cria uma rotina matinal de 1 hora otimizada para um freelancer que quer começar o dia produtivo."
      },
      {
        id: 96,
        title: "Dizer Não Educadamente",
        prompt: "Escreve 5 formas de recusar educadamente um pedido de [TIPO] sem prejudicar a relação profissional.",
        example: "Escreve 5 formas de recusar educadamente um pedido de trabalho gratuito sem prejudicar a relação profissional."
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "📈",
    description: "Prompts para estratégias de marketing digital",
    prompts: [
      {
        id: 97,
        title: "Persona do Cliente Ideal",
        prompt: "Cria uma persona detalhada do cliente ideal para [PRODUTO/SERVIÇO]. Inclui: dados demográficos, dores, desejos, objeções e onde passa tempo online.",
        example: "Cria uma persona detalhada do cliente ideal para um curso de culinária online. Inclui: dados demográficos, dores, desejos, objeções e onde passa tempo online."
      },
      {
        id: 98,
        title: "Análise de Concorrência",
        prompt: "Ajuda-me a analisar a concorrência para [MEU NEGÓCIO]. Que pontos devo avaliar nos concorrentes e como me posso diferenciar?",
        example: "Ajuda-me a analisar a concorrência para a minha loja online de acessórios. Que pontos devo avaliar nos concorrentes e como me posso diferenciar?"
      },
      {
        id: 99,
        title: "Funil de Vendas Simples",
        prompt: "Cria um funil de vendas simples para [PRODUTO]. Inclui: topo (atração), meio (nutrição) e fundo (conversão) com ações específicas.",
        example: "Cria um funil de vendas simples para um serviço de consultoria. Inclui: topo (atração), meio (nutrição) e fundo (conversão) com ações específicas."
      },
      {
        id: 100,
        title: "Estratégia de Lançamento",
        prompt: "Cria uma estratégia de lançamento para [PRODUTO] com orçamento [BAIXO/MÉDIO/ALTO]. Inclui: pré-lançamento, lançamento e pós-lançamento.",
        example: "Cria uma estratégia de lançamento para um ebook com orçamento baixo. Inclui: pré-lançamento, lançamento e pós-lançamento."
      },
      {
        id: 101,
        title: "Lead Magnet Irresistível",
        prompt: "Sugere 5 ideias de lead magnets para [NICHO] que realmente resolvam um problema e atraiam leads qualificados.",
        example: "Sugere 5 ideias de lead magnets para o nicho de produtividade que realmente resolvam um problema e atraiam leads qualificados."
      },
      {
        id: 102,
        title: "Sequência de Boas-Vindas",
        prompt: "Cria uma sequência de 5 emails de boas-vindas para novos subscritores interessados em [TEMA]. Objetivo: criar relação e apresentar oferta.",
        example: "Cria uma sequência de 5 emails de boas-vindas para novos subscritores interessados em finanças pessoais. Objetivo: criar relação e apresentar oferta."
      },
      {
        id: 103,
        title: "Estratégia de Preços",
        prompt: "Ajuda-me a definir a estratégia de preços para [PRODUTO]. Considera: posicionamento [PREMIUM/MÉDIO/ACESSÍVEL], valor percebido e concorrência.",
        example: "Ajuda-me a definir a estratégia de preços para um curso online de fotografia. Considera: posicionamento premium, valor percebido e concorrência."
      },
      {
        id: 104,
        title: "Campanha de Retargeting",
        prompt: "Cria ideias para uma campanha de retargeting para [PRODUTO]. Que mensagens usar para quem visitou mas não comprou?",
        example: "Cria ideias para uma campanha de retargeting para uma loja de roupa online. Que mensagens usar para quem visitou mas não comprou?"
      },
      {
        id: 105,
        title: "Parcerias Estratégicas",
        prompt: "Que tipo de parcerias estratégicas fazem sentido para [MEU NEGÓCIO]? Sugere 5 tipos de parceiros e como abordá-los.",
        example: "Que tipo de parcerias estratégicas fazem sentido para um podcast sobre empreendedorismo? Sugere 5 tipos de parceiros e como abordá-los."
      },
      {
        id: 106,
        title: "KPIs de Marketing",
        prompt: "Quais são os KPIs mais importantes para medir o sucesso de [TIPO DE CAMPANHA/ESTRATÉGIA]? Explica cada um e como melhorar.",
        example: "Quais são os KPIs mais importantes para medir o sucesso de marketing de conteúdo no Instagram? Explica cada um e como melhorar."
      },
      {
        id: 107,
        title: "Teste A/B Estruturado",
        prompt: "Quero fazer um teste A/B para [ELEMENTO]. Sugere o que testar, como estruturar e como interpretar resultados.",
        example: "Quero fazer um teste A/B para a página de vendas do meu curso. Sugere o que testar, como estruturar e como interpretar resultados."
      },
      {
        id: 108,
        title: "Calendário de Marketing Anual",
        prompt: "Cria um calendário de marketing para [NEGÓCIO] com as principais datas e oportunidades de cada mês do ano.",
        example: "Cria um calendário de marketing para uma loja de cosméticos com as principais datas e oportunidades de cada mês do ano."
      }
    ]
  }
]
