export interface Video {
  id: string
  title: string
  duration: string
  thumbnail: string
  completed: boolean
}

export interface Resource {
  id: string
  title: string
  type: 'pdf' | 'template' | 'checklist'
  size: string
  url: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  videos: Video[]
  resources: Resource[]
  completed: boolean
}

export interface CourseModule {
  id: string
  number: number
  title: string
  description: string
  lessons: Lesson[]
  progress: number
  totalDuration: string
  isLocked: boolean
}

export interface UserProgress {
  totalProgress: number
  completedLessons: number
  totalLessons: number
  hoursWatched: number
  totalHours: number
  streak: number
  certificateUnlocked: boolean
}

export const userProgress: UserProgress = {
  totalProgress: 42,
  completedLessons: 8,
  totalLessons: 19,
  hoursWatched: 3.5,
  totalHours: 8,
  streak: 5,
  certificateUnlocked: false,
}

export const courseModulesData: CourseModule[] = [
  {
    id: 'mod-1',
    number: 1,
    title: 'Bem-vindo ao Mundo da IA',
    description: 'Descobre o que o ChatGPT pode fazer por ti e começa a tua jornada.',
    totalDuration: '45 min',
    progress: 100,
    isLocked: false,
    lessons: [
      {
        id: 'les-1-1',
        title: 'Introdução ao ChatGPT',
        description: 'Conhece a ferramenta que vai mudar a tua vida profissional.',
        completed: true,
        videos: [
          { id: 'v1', title: 'O que é o ChatGPT?', duration: '8:24', thumbnail: '', completed: true },
          { id: 'v2', title: 'Criar a tua conta', duration: '4:15', thumbnail: '', completed: true },
        ],
        resources: [
          { id: 'r1', title: 'Guia de Início Rápido', type: 'pdf', size: '2.4 MB', url: '#' },
        ],
      },
      {
        id: 'les-1-2',
        title: 'A Tua Primeira Conversa',
        description: 'Aprende a comunicar eficazmente com a IA.',
        completed: true,
        videos: [
          { id: 'v3', title: 'Como fazer perguntas', duration: '12:30', thumbnail: '', completed: true },
          { id: 'v4', title: 'Exemplos práticos', duration: '15:45', thumbnail: '', completed: true },
        ],
        resources: [
          { id: 'r2', title: '50 Prompts para Começar', type: 'pdf', size: '1.8 MB', url: '#' },
          { id: 'r3', title: 'Template de Prompts', type: 'template', size: '156 KB', url: '#' },
        ],
      },
    ],
  },
  {
    id: 'mod-2',
    number: 2,
    title: 'Texto que Vende',
    description: 'Aprende a criar conteúdo pago em minutos com IA.',
    totalDuration: '1h 20min',
    progress: 75,
    isLocked: false,
    lessons: [
      {
        id: 'les-2-1',
        title: 'Copywriting com IA',
        description: 'Domina a arte de escrever textos que convertem.',
        completed: true,
        videos: [
          { id: 'v5', title: 'Fundamentos do Copywriting', duration: '18:00', thumbnail: '', completed: true },
          { id: 'v6', title: 'Headlines que Captam Atenção', duration: '14:20', thumbnail: '', completed: true },
        ],
        resources: [
          { id: 'r4', title: 'Swipe File de Headlines', type: 'pdf', size: '3.2 MB', url: '#' },
        ],
      },
      {
        id: 'les-2-2',
        title: 'Redes Sociais',
        description: 'Cria posts virais para qualquer plataforma.',
        completed: true,
        videos: [
          { id: 'v7', title: 'Posts para Instagram', duration: '16:45', thumbnail: '', completed: true },
          { id: 'v8', title: 'Conteúdo para LinkedIn', duration: '12:30', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r5', title: 'Calendário de Conteúdo', type: 'template', size: '890 KB', url: '#' },
          { id: 'r6', title: 'Checklist de Posts', type: 'checklist', size: '245 KB', url: '#' },
        ],
      },
      {
        id: 'les-2-3',
        title: 'Email Marketing',
        description: 'Escreve emails que geram vendas.',
        completed: false,
        videos: [
          { id: 'v9', title: 'Sequências de Email', duration: '20:15', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r7', title: 'Templates de Email', type: 'template', size: '1.1 MB', url: '#' },
        ],
      },
    ],
  },
  {
    id: 'mod-3',
    number: 3,
    title: 'Cria o Teu Produto Digital',
    description: 'Transforma o teu conhecimento num e-book ou mini curso.',
    totalDuration: '2h 10min',
    progress: 25,
    isLocked: false,
    lessons: [
      {
        id: 'les-3-1',
        title: 'Escolher o Tema Perfeito',
        description: 'Identifica o nicho ideal para o teu produto.',
        completed: true,
        videos: [
          { id: 'v10', title: 'Pesquisa de Mercado', duration: '22:00', thumbnail: '', completed: true },
          { id: 'v11', title: 'Validação da Ideia', duration: '18:30', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r8', title: 'Worksheet de Nicho', type: 'pdf', size: '1.5 MB', url: '#' },
        ],
      },
      {
        id: 'les-3-2',
        title: 'Criar o Conteúdo',
        description: 'Usa a IA para escrever o teu e-book.',
        completed: false,
        videos: [
          { id: 'v12', title: 'Estruturar o E-book', duration: '25:00', thumbnail: '', completed: false },
          { id: 'v13', title: 'Escrever com ChatGPT', duration: '30:00', thumbnail: '', completed: false },
          { id: 'v14', title: 'Design e Formatação', duration: '15:00', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r9', title: 'Template de E-book', type: 'template', size: '4.2 MB', url: '#' },
          { id: 'r10', title: 'Guia de Design', type: 'pdf', size: '2.8 MB', url: '#' },
        ],
      },
    ],
  },
  {
    id: 'mod-4',
    number: 4,
    title: 'Redes Sociais no Piloto Automático',
    description: 'Gere conteúdo para clientes e poupa horas por semana.',
    totalDuration: '1h 45min',
    progress: 0,
    isLocked: false,
    lessons: [
      {
        id: 'les-4-1',
        title: 'Gestão de Redes Sociais',
        description: 'Aprende a gerir múltiplas contas eficientemente.',
        completed: false,
        videos: [
          { id: 'v15', title: 'Ferramentas Essenciais', duration: '20:00', thumbnail: '', completed: false },
          { id: 'v16', title: 'Automação com IA', duration: '25:00', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r11', title: 'Lista de Ferramentas', type: 'pdf', size: '980 KB', url: '#' },
        ],
      },
      {
        id: 'les-4-2',
        title: 'Conseguir Clientes',
        description: 'Estratégias para encontrar os teus primeiros clientes.',
        completed: false,
        videos: [
          { id: 'v17', title: 'Proposta de Valor', duration: '18:00', thumbnail: '', completed: false },
          { id: 'v18', title: 'Pitch Perfeito', duration: '22:00', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r12', title: 'Template de Proposta', type: 'template', size: '1.3 MB', url: '#' },
          { id: 'r13', title: 'Script de Vendas', type: 'pdf', size: '720 KB', url: '#' },
        ],
      },
    ],
  },
  {
    id: 'mod-5',
    number: 5,
    title: 'Do Zero ao Primeiro Pagamento',
    description: 'O plano concreto para receberes o teu primeiro dinheiro.',
    totalDuration: '1h 30min',
    progress: 0,
    isLocked: true,
    lessons: [
      {
        id: 'les-5-1',
        title: 'Plano de Ação',
        description: 'Monta a tua estratégia pessoal de sucesso.',
        completed: false,
        videos: [
          { id: 'v19', title: 'Definir Objetivos', duration: '15:00', thumbnail: '', completed: false },
          { id: 'v20', title: 'Cronograma de Execução', duration: '20:00', thumbnail: '', completed: false },
        ],
        resources: [
          { id: 'r14', title: 'Plano de 30 Dias', type: 'pdf', size: '2.1 MB', url: '#' },
          { id: 'r15', title: 'Checklist Final', type: 'checklist', size: '450 KB', url: '#' },
        ],
      },
    ],
  },
]
