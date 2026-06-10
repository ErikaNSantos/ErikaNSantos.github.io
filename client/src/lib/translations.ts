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
      cblow: {
        title: 'cblow — Plataforma de Torneios',
        desc: 'Plataforma para torneios comunitários de League of Legends: inscrições, chaveamento, integração com a Riot API e dashboards de estatísticas de partidas e desempenho de jogadores.',
      },
      finance: {
        title: 'Automação Financeira (OFX → PostgreSQL)',
        desc: 'Pipeline que lê extratos bancários OFX, normaliza transações em PostgreSQL e classifica estabelecimentos com cache de resolução em camadas — base para análise de gastos e relatórios automatizados.',
      },
      rpg: {
        title: 'A Queda de Uma Ordem — RPG',
        desc: 'Site e sistema de apoio para RPG de mesa autoral, com conteúdo dinâmico, autenticação e banco de dados gerenciado em Supabase, construído em React 19 e Vite.',
      },
      energyBot: {
        title: 'Energy-Bot',
        desc: 'Bot de Telegram para monitoramento de consumo de energia, com armazenamento em SQLite e análise de dados de consumo para identificação de padrões.',
      },
      tcc: {
        title: 'Modelagem Termodinâmica (TCC)',
        desc: 'Modelagem computacional UNIFAC com estimativa de parâmetros via Evolução Diferencial (SciPy) para sistemas de biodiesel com líquidos iônicos próticos. Pesquisa vinculada ao programa PRH/ANP.',
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
      cblow: {
        title: 'cblow — Tournament Platform',
        desc: 'Platform for community League of Legends tournaments: registrations, bracket management, Riot API integration, and dashboards for match statistics and player performance.',
      },
      finance: {
        title: 'Finance Automation (OFX → PostgreSQL)',
        desc: 'Pipeline that reads OFX bank statements, normalizes transactions into PostgreSQL, and classifies merchants with a tiered resolution cache — the foundation for spending analytics and automated reporting.',
      },
      rpg: {
        title: 'A Queda de Uma Ordem — RPG',
        desc: 'Website and companion system for an original tabletop RPG, with dynamic content, authentication, and a managed Supabase database, built with React 19 and Vite.',
      },
      energyBot: {
        title: 'Energy-Bot',
        desc: 'Telegram bot for energy consumption monitoring, with SQLite storage and consumption data analysis for pattern identification.',
      },
      tcc: {
        title: 'Thermodynamic Modeling (Thesis)',
        desc: 'UNIFAC computational modeling with parameter estimation via Differential Evolution (SciPy) for biodiesel systems with protic ionic liquids. Research under the PRH/ANP federal program.',
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
