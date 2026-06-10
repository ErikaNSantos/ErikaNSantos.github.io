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
      status: 'Disponível para oportunidades remotas',
      title: 'Engenharia de Processos & Inteligência de Dados',
      description: 'Engenheira Química com atuação em processos industriais, análise de dados e modelagem computacional. Utilizo Python, SQL e ferramentas analíticas para compreender sistemas complexos, automatizar fluxos de trabalho e apoiar decisões técnicas orientadas por evidências.',
      viewProjects: 'Ver Resultados',
      aboutMe: 'Minha Trajetória',
      greeting: 'Olá, eu sou',
    },
    pillars: {
      title: 'Meus Pilares',
      subtitle: 'Princípios que orientam minha forma de aprender, analisar problemas e construir soluções.',
      clarity: {
        title: 'Clareza',
        desc: 'Problemas complexos tornam-se solucionáveis quando premissas, dados e objetivos são explicitados.',
      },
      wisdom: {
        title: 'Aprendizado Contínuo',
        desc: 'Conhecimento só produz valor quando amplia a capacidade de compreender sistemas e agir sobre eles.',
      },
      creativity: {
        title: 'Construção',
        desc: 'Criar ferramentas, processos e modelos é a forma mais concreta de transformar conhecimento em resultado.',
      },
      freedom: {
        title: 'Autonomia',
        desc: 'Responsabilidade e independência caminham juntas. Boas decisões exigem capacidade de análise e execução.',
      },
    },
    about: {
      title: 'Sobre Mim',
      intro: "Sou Engenheira Química atuando na interface entre engenharia de processos, análise de dados e computação científica. Minha experiência combina manufatura industrial de larga escala, pesquisa em modelagem termodinâmica e desenvolvimento de soluções orientadas por dados.",
      journey: 'Minha Jornada',
      journeyDesc: 'Atualmente trabalho como Controladora de Processo na Continental Tires, utilizando análise de dados, melhoria contínua e metodologias Lean Six Sigma para compreender variabilidades de processo, reduzir perdas e aumentar a eficiência operacional.',
      transition: 'Minha atuação conecta três domínios complementares: processos industriais, análise de dados aplicada e modelagem computacional. Tenho interesse especial por funções em que conhecimento técnico de manufatura ou química possa ser utilizado para gerar vantagem analítica e apoiar decisões complexas.',
      doing: 'Atuação Atual',
      items: {
        data: {
          title: 'Analista de Dados (Controladora de Processo)',
          subtitle: 'Continental Tires',
          desc: 'Análise de processos industriais e suporte à melhoria contínua baseada em dados.'
        },
        thesis: {
          title: 'TCC UFBA',
          subtitle: 'Modelagem termodinâmica computacional',
          desc: 'UNIFAC, Python e estimativa de parâmetros para sistemas complexos.'
        },
        openSource: {
          title: 'Open Source',
          subtitle: 'Projetos públicos',
          desc: 'Desenvolvimento de ferramentas em análise de dados e computação científica.'
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
      subtitle: 'Projetos que aplicam engenharia de dados, automação e modelagem computacional para resolver problemas concretos.',
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
      description: 'Busco oportunidades em análise de dados, inteligência operacional e engenharia de processos. Tenho interesse especial em equipes industriais, científicas ou distribuídas, onde conhecimento de domínio e análise quantitativa possam ser combinados para resolver problemas complexos.',
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
      subtitle: 'Reflexões sobre dados, Python, engenharia de processos, computação científica e desenvolvimento profissional.',
      empty: 'Primeiros artigos em breve.',
      emptyDesc: 'Enquanto isso, os projetos contam a história melhor que qualquer post.',
      emptyCta: 'Ver Projetos',
    },
    footer: {
      copyright: 'Erika Nogueira Santos',
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
      status: 'Available for remote opportunities',
      title: 'Process Engineering & Data Intelligence',
      description: 'Chemical Engineer working at the intersection of industrial operations, data analytics, and computational modeling. I use Python, SQL, and analytical tools to understand complex systems, automate workflows, and support evidence-based technical decisions.',
      viewProjects: 'See Results',
      aboutMe: 'My Journey',
      greeting: "Hi, I'm",
    },
    pillars: {
      title: 'My Principles',
      subtitle: 'Principles that shape how I learn, analyze problems, and build solutions.',
      clarity: {
        title: 'Clarity',
        desc: 'Complex problems become manageable when assumptions, data, and objectives are made explicit.',
      },
      wisdom: {
        title: 'Continuous Learning',
        desc: 'Knowledge creates value only when it improves our ability to understand systems and act upon them.',
      },
      creativity: {
        title: 'Building',
        desc: 'Creating tools, processes, and models is the most practical way to turn knowledge into results.',
      },
      freedom: {
        title: 'Autonomy',
        desc: 'Responsibility and independence go hand in hand. Good decisions require both analysis and execution.',
      },
    },
    about: {
      title: 'About Me',
      intro: "I'm a Chemical Engineer working at the intersection of process engineering, data analytics, and scientific computing. My background combines large-scale manufacturing, thermodynamic modeling research, and the development of data-driven solutions.",
      journey: 'My Journey',
      journeyDesc: 'Currently, I work as a Process Controller at Continental Tires, applying data analysis, continuous improvement practices, and Lean Six Sigma methodologies to understand process variability, reduce losses, and improve operational performance.',
      transition: "My work connects three complementary domains: industrial process engineering, applied analytics, and computational modeling. I'm particularly interested in roles where manufacturing or chemical engineering expertise can be leveraged to create analytical advantage and support complex decision-making.",
      doing: "Current Focus",
      items: {
        data: {
          title: 'Data Analyst (Process Controller)',
          subtitle: 'Continental Tires',
          desc: 'Industrial process analysis and data-driven continuous improvement.'
        },
        thesis: {
          title: 'Final Thesis UFBA',
          subtitle: 'Computational thermodynamic modeling',
          desc: 'UNIFAC, Python, and parameter estimation for complex systems.'
        },
        openSource: {
          title: 'Open Source',
          subtitle: 'Public projects',
          desc: 'Developing tools in data analytics and scientific computing.'
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
      subtitle: 'Projects applying data engineering, automation, and computational modeling to solve real-world problems.',
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
      description: "I am interested in opportunities involving data analytics, operational intelligence, and process engineering. My focus is on environments where domain expertise and quantitative analysis can be combined to solve complex problems.",
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
      subtitle: 'Thoughts on data analytics, Python, process engineering, scientific computing, and professional growth.',
      empty: 'First articles coming soon.',
      emptyDesc: 'Meanwhile, the projects tell the story better than any post.',
      emptyCta: 'View Projects',
    },
    footer: {
      copyright: 'Erika Nogueira Santos',
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
