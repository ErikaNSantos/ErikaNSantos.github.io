export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    common: {
      introduction: 'Introdução',
      journey: 'Trajetória',
      skills: 'Habilidades',
      present: 'Presente',
      continuous: 'Contínuo',
    },
    hero: {
      status: 'Aberta a colaborações remotas',
      title: 'Engenharia de Processos & Inteligência de Dados',
      description: 'Engenheira Química e Analista de Dados com experiência em pesquisa em modelagem computacional. Transformo dados industriais complexos em redução de custos, automação e decisões estratégicas. Habilidades em Python, SQL, Power BI e Lean Six Sigma.',
      viewProjects: 'Ver Resultados',
      aboutMe: 'Minha Trajetória',
      greeting: 'Olá, eu sou',
    },
    pillars: {
      title: 'Meus Pilares',
      subtitle: 'Valores inegociáveis que guiam meu trabalho, aprendizado e vida.',
      clarity: {
        title: 'Clareza',
        desc: 'Busca por dados e entendimento profundo. Soluções defendidas com lucidez.',
      },
      wisdom: {
        title: 'Sabedoria',
        desc: 'Curiosidade como motor. Conhecimento só tem valor quando vira ação.',
      },
      creativity: {
        title: 'Inventividade',
        desc: 'Paixão por construir coisas novas e úteis. Aprender é o meio, criar é o fim.',
      },
      freedom: {
        title: 'Liberdade',
        desc: 'Autonomia e responsabilidade. Ser dona do próprio tempo e caminho.',
      },
    },
    about: {
      title: 'Sobre Mim',
      intro: "Sou Engenheira Química e Analista de Dados atuando na intersecção entre operações industriais e modelagem computacional. Com mais de 3 anos em manufatura de larga escala e background em pesquisa em modelagem termodinâmica, transformo dados complexos em insights acionáveis.",
      journey: 'Minha Jornada',
      journeyDesc: 'Atualmente, trabalho como Controladora de Processo na Continental Tires, aplicando análise de dados e metodologia Lean Six Sigma para otimizar sistemas industriais e reduzir custos operacionais.',
      transition: 'Meu trabalho une três domínios: engenharia de processos industriais, análise de dados aplicada e computação científica. Tenho interesse especial em funções onde o conhecimento de domínio em manufatura ou química cria uma vantagem analítica real.',
      doing: 'O que estou fazendo',
      items: {
        data: {
          title: 'Analista de Dados (Controladora de Processo)',
          subtitle: 'Continental Tires',
          desc: 'Transformando dados industriais em eficiência operacional.'
        },
        thesis: {
          title: 'TCC UFBA',
          subtitle: 'Modelagem termodinâmica computacional',
          desc: 'UNIFAC, Python, estimativa de parâmetros.'
        },
        openSource: {
          title: 'Open Source',
          subtitle: 'Projetos públicos',
          desc: 'Construindo projetos em análise de dados e computação científica.'
        }
      },
      skills: {
        data: 'Dados & Analytics',
        industrial: 'Processos Industriais',
        scientific: 'Computação Científica',
        soft: 'Soft Skills',
        technicalTitle: 'Competências Técnicas'
      }
    },
    projects: {
      sectionTitle: 'Meu Trabalho',
      title: 'Projetos',
      subtitle: 'Projetos que demonstram a aplicação de engenharia de dados, automação e computação científica a problemas reais.',
      github: 'GitHub',
      demo: 'Demo',
      detail: {
        back: 'Voltar para projetos',
        context: 'Contexto',
        problem: 'Problema',
        approach: 'Abordagem',
        result: 'Resultado',
        stack: 'Stack',
        viewCode: 'Ver código no GitHub',
      },
      cblow: {
        title: 'cblow — Plataforma de Torneios',
        desc: 'Plataforma para torneios comunitários de League of Legends: inscrições, chaveamento, integração com a Riot API e dashboards de estatísticas de partidas e desempenho de jogadores.',
        context: 'A comunidade de torneios amadores de League of Legends (CBLow) organiza campeonatos recorrentes, mas as estatísticas das partidas ficam dispersas entre capturas de tela, planilhas e o histórico individual de cada jogador no cliente do jogo.',
        problem: 'Sem uma base centralizada, organizadores não conseguem acompanhar desempenho entre torneios, e jogadores não têm histórico consolidado. Comparações entre equipes dependem de levantamento manual a cada edição.',
        approach: 'Pipeline de ingestão via Riot API alimenta um modelo relacional em PostgreSQL (Supabase) com partidas, jogadores e estatísticas por posição. A API em FastAPI expõe agregações consumidas pelo front em React, no formato de perfis e rankings inspirados em plataformas como League of Graphs.',
        result: '[CONFIRMAR: fase atual do roadmap de seis etapas, número de partidas/jogadores já ingeridos e o que está no ar versus em desenvolvimento.]',
      },
      finance: {
        title: 'Automação Financeira (OFX → PostgreSQL)',
        desc: 'Pipeline que lê extratos bancários OFX, normaliza transações em PostgreSQL e classifica estabelecimentos com cache de resolução em camadas — base para análise de gastos e relatórios automatizados.',
        context: 'Controle financeiro pessoal feito à mão exige reclassificar as mesmas transações todo mês. Extratos bancários no formato OFX carregam descrições de estabelecimento truncadas e inconsistentes, que não servem para análise direta.',
        problem: 'A etapa cara não é ler o extrato, é resolver o nome do estabelecimento: a mesma loja aparece com grafias diferentes entre meses, e classificar na mão reintroduz o trabalho que a automação deveria eliminar.',
        approach: 'Parser de OFX em Python normaliza as transações em PostgreSQL (ambiente em Docker). A classificação de estabelecimentos usa resolução em três camadas: cache local de resoluções anteriores, dicionário de estabelecimentos conhecidos e, por último, busca com confirmação manual — cada confirmação alimenta o cache e reduz intervenção futura.',
        result: 'O custo de classificação cai a cada ciclo, porque a camada manual só é acionada para estabelecimentos inéditos. [CONFIRMAR: tempo de fechamento mensal antes e depois, e percentual de transações resolvidas automaticamente hoje.]',
      },
      rpg: {
        title: 'A Queda de Uma Ordem — RPG',
        desc: 'Site e sistema de apoio para RPG de mesa autoral, com conteúdo dinâmico, autenticação e banco de dados gerenciado em Supabase, construído em React 19 e Vite.',
        context: 'A Queda de Uma Ordem é um cenário autoral de RPG de mesa sobre mecânicas de GURPS 4ª edição. Campanhas longas geram volume de material (fichas, linhagens, árvores de habilidades) que não cabe em documentos soltos.',
        problem: 'Fichas em PDF e regras em arquivos dispersos tornam consultas lentas durante a sessão e dificultam manter a consistência do sistema conforme o cenário evolui.',
        approach: 'Aplicação em React 19 e Vite com Supabase como backend: schema relacional para fichas, linhagens mutantes e nós de habilidade, com autenticação para conteúdo restrito ao mestre. A identidade visual (dourado sobre pergaminho) foi desenhada para o universo do cenário.',
        result: 'O sistema substitui a consulta a documentos durante as sessões e centraliza a evolução das regras num único lugar versionado. [CONFIRMAR: número de fichas/jogadores ativos e funcionalidades já em uso em mesa.]',
      },
      energyBot: {
        title: 'Energy-Bot',
        desc: 'Bot de Telegram para monitoramento de consumo de energia, com armazenamento em SQLite e análise de dados de consumo para identificação de padrões.',
        context: 'Acompanhar consumo de energia residencial exige registro disciplinado de leituras, e a fatura mensal chega tarde demais para corrigir comportamento.',
        problem: 'Sem registro contínuo, não há como distinguir variação sazonal de mudança de hábito, nem antecipar o valor da fatura antes do fechamento do ciclo.',
        approach: 'Bot de Telegram em Python recebe as leituras como mensagem, persiste em SQLite e calcula consumo por período, médias móveis e projeção de fatura. O Telegram elimina a fricção de registro: a interface já está no bolso.',
        result: '[CONFIRMAR: período de uso contínuo e algum padrão ou economia identificada a partir dos dados.]',
      },
      tcc: {
        title: 'Modelagem Termodinâmica (TCC)',
        desc: 'Modelagem computacional UNIFAC com estimativa de parâmetros via Evolução Diferencial (SciPy) para sistemas de biodiesel com líquidos iônicos próticos. Pesquisa vinculada ao programa PRH/ANP.',
        context: 'Líquidos iônicos próticos são candidatos a cossolventes na produção de biodiesel, mas o projeto de processos depende de prever o equilíbrio termodinâmico dessas misturas, e dados experimentais são escassos.',
        problem: 'O modelo UNIFAC exige parâmetros de interação de grupo que não existem tabelados para esses sistemas. Estimá-los a partir de poucos dados experimentais é um problema de otimização não linear com risco real de sobreajuste.',
        approach: 'Implementação em Python (NumPy/SciPy) com estimativa de parâmetros por Evolução Diferencial refinada por Nelder-Mead, validação cruzada para controlar sobreajuste e análise de sensibilidade dos parâmetros. Pesquisa conduzida sob o programa federal PRH/ANP.',
        result: '[CONFIRMAR: desvio médio do modelo ajustado frente aos dados experimentais e conclusão central do trabalho.]',
      },
    },
    contact: {
      title: 'Vamos Conversar?',
      sectionTitle: 'Entre em contato',
      description: 'Estou disponível para oportunidades como Analista de Dados e Analista de Processos, com foco em equipes industriais, científicas ou remotas. Aberta a funções internacionais.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Camaçari, Bahia - Brasil (Disponível para Remoto)',
      form: {
        name: 'Seu Nome',
        namePlaceholder: 'Qual o seu nome?',
        email: 'Seu Email',
        emailPlaceholder: 'Qual o seu melhor e-mail?',
        message: 'Sua Mensagem',
        messagePlaceholder: 'O que você quer dizer?',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Não foi possível enviar. Tente novamente ou use o e-mail abaixo.',
        mailtoNotice: 'Seu aplicativo de e-mail será aberto com a mensagem preenchida.'
      }
    },
    blog: {
      subtitle: 'Artigos sobre dados, Python, engenharia de processos e transição de carreira.',
      empty: 'Primeiros artigos em breve.',
      emptyDesc: 'Enquanto isso, os projetos contam a história melhor que qualquer post.',
      emptyCta: 'Ver Projetos',
    },
    footer: {
      copyright: 'Construído com Clareza e Inventividade.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    common: {
      introduction: 'Introduction',
      journey: 'Journey',
      skills: 'Skills',
      present: 'Present',
      continuous: 'Continuous',
    },
    hero: {
      status: 'Open to remote collaborations',
      title: 'Process Engineering & Data Intelligence',
      description: 'Chemical Engineer and Data Analyst with a research background in computational modeling. I transform complex industrial data into cost reduction, automation, and strategic decisions. Skilled in Python, SQL, Power BI, and Lean Six Sigma.',
      viewProjects: 'See Results',
      aboutMe: 'My Journey',
      greeting: "Hi, I'm",
    },
    pillars: {
      title: 'My Pillars',
      subtitle: 'Non-negotiable values that guide my work, learning, and life.',
      clarity: {
        title: 'Clarity',
        desc: 'Pursuit of data and deep understanding. Solutions defended with lucidity.',
      },
      wisdom: {
        title: 'Wisdom',
        desc: 'Curiosity as a driving force. Knowledge only has value when it becomes action.',
      },
      creativity: {
        title: 'Creativity',
        desc: 'Passion for building new and useful things. Learning is the means, creating is the end.',
      },
      freedom: {
        title: 'Freedom',
        desc: 'Autonomy and responsibility. Being the owner of my own time and path.',
      },
    },
    about: {
      title: 'About Me',
      intro: "I'm a Chemical Engineer and Data Analyst working at the intersection of industrial operations and computational modeling. With 3+ years in large-scale manufacturing and a research background in thermodynamic modeling, I turn complex data into actionable insight.",
      journey: 'My Journey',
      journeyDesc: 'Currently, I work as a Process Controller at Continental Tires, applying data analysis and Lean Six Sigma methodology to optimize industrial systems and reduce operational costs.',
      transition: "My work blends three domains: industrial process engineering, applied data analytics, and scientific computing. I'm particularly interested in roles where domain knowledge in manufacturing or chemistry creates real analytical edge.",
      doing: "What I'm doing",
      items: {
        data: {
          title: 'Data Analyst (Process Controller)',
          subtitle: 'Continental Tires',
          desc: 'Transforming industrial data into operational efficiency.'
        },
        thesis: {
          title: 'Final Thesis UFBA',
          subtitle: 'Computational thermodynamic modeling',
          desc: 'UNIFAC, Python, parameter estimation.'
        },
        openSource: {
          title: 'Open Source',
          subtitle: 'Public projects',
          desc: 'Building public projects in data analysis and scientific computing.'
        }
      },
      skills: {
        data: 'Data & Analytics',
        industrial: 'Industrial Process',
        scientific: 'Scientific Computing',
        soft: 'Soft Skills',
        technicalTitle: 'Technical Competencies'
      }
    },
    projects: {
      sectionTitle: 'My Work',
      title: 'Projects',
      subtitle: 'Projects that demonstrate applying data engineering, automation, and scientific computing to real problems.',
      github: 'GitHub',
      demo: 'Demo',
      detail: {
        back: 'Back to projects',
        context: 'Context',
        problem: 'Problem',
        approach: 'Approach',
        result: 'Result',
        stack: 'Stack',
        viewCode: 'View code on GitHub',
      },
      cblow: {
        title: 'cblow — Tournament Platform',
        desc: 'Platform for community League of Legends tournaments: registrations, bracket management, Riot API integration, and dashboards for match statistics and player performance.',
        context: 'The amateur League of Legends tournament community (CBLow) runs recurring championships, but match statistics end up scattered across screenshots, spreadsheets, and each player\'s in-client history.',
        problem: 'Without a central database, organizers cannot track performance across tournaments and players have no consolidated history. Team comparisons depend on manual collection every edition.',
        approach: 'An ingestion pipeline over the Riot API feeds a relational model in PostgreSQL (Supabase) with matches, players, and per-role statistics. A FastAPI layer exposes aggregations consumed by the React front end as profiles and rankings, in the style of platforms like League of Graphs.',
        result: '[CONFIRMAR: current phase of the six-step roadmap, matches/players already ingested, and what is live versus in development.]',
      },
      finance: {
        title: 'Finance Automation (OFX → PostgreSQL)',
        desc: 'Pipeline that reads OFX bank statements, normalizes transactions into PostgreSQL, and classifies merchants with a tiered resolution cache — the foundation for spending analytics and automated reporting.',
        context: 'Manual personal-finance tracking means reclassifying the same transactions every month. OFX bank statements carry truncated, inconsistent merchant descriptions that are useless for direct analysis.',
        problem: 'The expensive step is not parsing the statement, it is resolving the merchant: the same store appears under different spellings across months, and classifying by hand reintroduces the work automation was meant to remove.',
        approach: 'A Python OFX parser normalizes transactions into PostgreSQL (Dockerized environment). Merchant classification uses three-tier resolution: a local cache of past resolutions, a dictionary of known merchants, and, last, a lookup with manual confirmation — each confirmation feeds the cache and reduces future intervention.',
        result: 'Classification cost drops with every cycle, since the manual tier only fires for unseen merchants. [CONFIRMAR: monthly closing time before and after, and the share of transactions resolved automatically today.]',
      },
      rpg: {
        title: 'A Queda de Uma Ordem — RPG',
        desc: 'Website and companion system for an original tabletop RPG, with dynamic content, authentication, and a managed Supabase database, built with React 19 and Vite.',
        context: 'A Queda de Uma Ordem is an original tabletop RPG setting built on GURPS 4th Edition mechanics. Long campaigns generate a volume of material (character sheets, lineages, skill trees) that loose documents cannot hold.',
        problem: 'PDF sheets and rules spread across files make in-session lookups slow and make it hard to keep the system consistent as the setting evolves.',
        approach: 'A React 19 + Vite application with Supabase as the backend: a relational schema for character sheets, mutant lineages, and skill nodes, with authentication for GM-only content. The visual identity (gold on parchment) was designed for the setting\'s universe.',
        result: 'The system replaces document lookups during sessions and centralizes rule evolution in a single versioned place. [CONFIRMAR: number of active sheets/players and the features already used at the table.]',
      },
      energyBot: {
        title: 'Energy-Bot',
        desc: 'Telegram bot for energy consumption monitoring, with SQLite storage and consumption data analysis for pattern identification.',
        context: 'Tracking household energy use demands disciplined meter readings, and the monthly bill arrives too late to change behavior.',
        problem: 'Without continuous records there is no way to tell seasonal variation from habit change, nor to anticipate the bill before the cycle closes.',
        approach: 'A Python Telegram bot receives readings as messages, persists them in SQLite, and computes per-period consumption, moving averages, and bill projection. Telegram removes the logging friction: the interface is already in your pocket.',
        result: '[CONFIRMAR: period of continuous use and any pattern or saving identified from the data.]',
      },
      tcc: {
        title: 'Thermodynamic Modeling (Thesis)',
        desc: 'UNIFAC computational modeling with parameter estimation via Differential Evolution (SciPy) for biodiesel systems with protic ionic liquids. Research under the PRH/ANP federal program.',
        context: 'Protic ionic liquids are candidate cosolvents in biodiesel production, but process design depends on predicting the thermodynamic equilibrium of these mixtures, and experimental data is scarce.',
        problem: 'The UNIFAC model requires group-interaction parameters that are not tabulated for these systems. Estimating them from few experimental points is a nonlinear optimization problem with a real risk of overfitting.',
        approach: 'Python implementation (NumPy/SciPy) with parameter estimation by Differential Evolution refined by Nelder-Mead, cross-validation to control overfitting, and parameter sensitivity analysis. Research conducted under the PRH/ANP federal program.',
        result: '[CONFIRMAR: mean deviation of the fitted model against experimental data and the central conclusion of the work.]',
      },
    },
    contact: {
      title: 'Get in Touch',
      sectionTitle: 'Contact Me',
      description: "I'm available for Data Analyst and Process Analyst opportunities, with focus on industrial, scientific, or remote teams. Open to international roles.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Camaçari, Bahia - Brazil (Available for Remote)',
      form: {
        name: 'Your Name',
        namePlaceholder: 'What is your name?',
        email: 'Your Email',
        emailPlaceholder: 'What is your best email?',
        message: 'Your Message',
        messagePlaceholder: 'What do you want to say?',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Could not send. Try again or use the email below.',
        mailtoNotice: 'Your email app will open with the message pre-filled.'
      }
    },
    blog: {
      subtitle: 'Articles about data, Python, process engineering, and career transition.',
      empty: 'First articles coming soon.',
      emptyDesc: 'Meanwhile, the projects tell the story better than any post.',
      emptyCta: 'View Projects',
    },
    footer: {
      copyright: 'Built with Clarity and Creativity.',
    },
  },
};

export const getTranslation = (lang: Language, key: string): any => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};
