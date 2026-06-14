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
        viewDemo: 'Ver dashboard ao vivo',
      },
        maintenance: {
          title: 'Manutenção Preditiva — AI4I 2020',
          desc: 'Projeto de análise exploratória, validação de regras físicas de falha, engenharia de atributos e classificação multi-label aplicado ao dataset AI4I 2020. Inclui dashboard interativo para investigação de falhas e avaliação de modelos preditivos.',
          context: 'O dataset AI4I 2020 simula um ambiente industrial com sensores operacionais e diferentes modos de falha de equipamentos. Embora amplamente utilizado para estudos de manutenção preditiva, sua documentação mistura mecanismos determinísticos e probabilísticos, exigindo validação das regras descritas antes da construção de modelos de machine learning.',
          problem: 'Modelos treinados apenas com variáveis brutas tendem a capturar correlações superficiais sem necessariamente compreender os mecanismos físicos que originam cada falha. Além disso, o dataset contém comportamentos aparentemente incoerentes — como falhas sem modo identificado e modos de falha sem parada da máquina — que precisam ser explicados antes de qualquer análise confiável.',
          approach: 'Foi realizada uma auditoria completa do dataset, incluindo verificação de integridade, análise de distribuição das variáveis e validação das regras documentadas para os modos HDF, PWF, OSF, TWF e RNF. A partir dessas regras, foram construídas features derivadas de domínio, como diferença de temperatura, potência mecânica e produto entre desgaste e torque. Em seguida, foram treinados modelos Random Forest multi-label para prever simultaneamente os cinco modos de falha, comparando o desempenho entre conjuntos com e sem feature engineering. Os resultados foram disponibilizados em um dashboard desenvolvido em Streamlit com visualizações interativas, validação das regras físicas e análise de importância das variáveis.',
          result: 'As regras determinísticas HDF, PWF e OSF foram reconstruídas com concordância de 100% em relação aos registros originais do dataset. As features derivadas dos mecanismos físicos elevaram o F1-score dos modelos de 0,78 para 0,93 em HDF, de 0,65 para 0,98 em PWF e de 0,78 para 0,95 em OSF. O estudo também demonstrou que TWF e RNF apresentam natureza probabilística ou aleatória, tornando sua previsão inviável a partir das variáveis disponíveis. O dashboard final consolidou a análise exploratória, a validação das regras de negócio e a avaliação comparativa dos modelos em uma interface única para exploração dos resultados.'
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
        context: 'Acompanhar o consumo elétrico residencial é difícil justamente onde importa: a maioria dos aparelhos funciona de forma intermitente, e o ar-condicionado inverter varia muito a potência conforme as condições de operação. Planilhas reduzem isso a médias mensais fixas, e a conta chega tarde demais para mudar o comportamento.',
        problem: 'Um único número mensal esconde para onde a energia vai, confunde variação sazonal com mudança de hábito e não oferece como antecipar a conta antes do fechamento do ciclo. São necessários registros contínuos por aparelho, mas o registro manual carrega atrito suficiente para raramente sobreviver à rotina.',
        approach: 'Cada acionamento de aparelho é modelado como uma sessão discreta com início, duração, perfil de consumo e custo, registrada por mensagem em um bot de Telegram. Os cálculos de energia ficam isolados em uma camada core independente da interface, de modo que o mesmo modelo alimenta o bot, os relatórios e o dashboard. Em segundo plano, um processo de vigia monitora as sessões ativas e alerta quando um aparelho permanece ligado além de um limite definido, tratando casos como banhos ou ar-condicionado esquecidos. As cargas sempre ligadas, como geladeira e dispositivos em standby, entram por um modelo de carga basal próprio, em vez de um ajuste percentual estimado. O comando /invoice entrega detalhamento por aparelho, carga basal, projeção de fechamento e comparação com o ciclo anterior, enquanto um dashboard interativo em Streamlit acrescenta análise temporal e um mapa de calor de consumo por hora e dia da semana. Bot e dashboard rodam como serviços systemd independentes em um VPS na Oracle Cloud, com o SQLite em modo WAL permitindo acesso concorrente entre a interface e o monitor em segundo plano.',
        result: 'O sistema roda continuamente em produção, com bot e dashboard implantados como serviços de reinício automático que leem uma base SQLite compartilhada. Modelar a carga basal de forma explícita, em vez de um percentual fixo, revelou o consumo sempre ligado como uma parcela maior da conta do que qualquer aparelho monitorado isoladamente, custo que estimativas por média mensal costumam ignorar. A separação entre o core de cálculo e a interface permitiu acrescentar um dashboard web sobre a lógica existente sem alterar o motor, o que confirma a modularidade prevista no desenho do projeto.',
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
        viewDemo: 'View live dashboard',
      },
        maintenance: {
          title: 'Predictive Maintenance — AI4I 2020',
          desc: 'Predictive maintenance project combining data quality validation, domain-driven feature engineering, multi-label failure classification, and an interactive analytics dashboard built on the AI4I 2020 industrial dataset.',
          context: 'The AI4I 2020 dataset simulates an industrial manufacturing environment with operational sensor data and multiple machine failure modes. While widely used for predictive maintenance research, the dataset combines deterministic and probabilistic failure mechanisms, requiring validation of the documented rules before reliable machine learning analysis can be performed.',
          problem: 'Models trained solely on raw process variables often learn statistical correlations without capturing the physical mechanisms behind failures. Additionally, the dataset contains intentionally ambiguous cases, such as machine failures without a classified failure mode and random failures that do not always result in machine shutdown, making direct interpretation and modeling challenging.',
          approach: 'The project began with a full data audit, including integrity checks, distribution analysis, and validation of the documented failure rules for Heat Dissipation Failure (HDF), Power Failure (PWF), Overstrain Failure (OSF), Tool Wear Failure (TWF), and Random Failure (RNF). Domain-informed features such as temperature differential, mechanical power, and wear–torque interaction were engineered from the documented physical rules. Multi-label Random Forest models were then trained to predict all failure modes simultaneously, comparing performance between baseline and engineered feature sets. The results were consolidated into an interactive Streamlit dashboard featuring exploratory analysis, rule validation, feature importance analysis, and model performance evaluation.',
          result: 'The reconstructed HDF, PWF, and OSF rules achieved 100% agreement with the original dataset labels, confirming their deterministic nature. Feature engineering substantially improved model performance, increasing F1-score from 0.78 to 0.93 for HDF, from 0.65 to 0.98 for PWF, and from 0.78 to 0.95 for OSF. The analysis also demonstrated that TWF and RNF contain probabilistic or random behavior that cannot be reliably predicted using the available process variables. The final dashboard provides a unified environment for exploring machine behavior, validating failure mechanisms, and assessing predictive model performance.'
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
        context: 'Tracking household electricity use is hard precisely where it matters: most appliances run intermittently, and inverter-based air conditioners draw highly variable power depending on operating conditions. Spreadsheets collapse this into fixed monthly averages, and the bill arrives too late to change behavior.',
        problem: 'A single monthly figure hides where the energy actually goes, conflates seasonal variation with habit change, and offers no way to anticipate the bill before the cycle closes. Continuous, appliance-level records are needed, but manual logging carries enough friction that it rarely survives contact with daily life.',
        approach: 'Each appliance activation is modeled as a discrete session with a start, duration, consumption profile, and cost, recorded message-by-message through a Telegram bot. Energy calculations are isolated in a core layer independent of the interface, so the same model feeds the bot, the reports, and the dashboard. A background watchdog monitors active sessions and alerts the user when an appliance stays on past a defined threshold, addressing forgotten showers or air conditioners. Always-on loads such as refrigerators and standby devices are handled by a dedicated baseline model rather than a guessed percentage adjustment. The /invoice command delivers an appliance-level breakdown, baseline, end-of-month projection, and comparison against the previous cycle, while an interactive Streamlit dashboard adds temporal analysis and an hour-by-weekday consumption heatmap. Both the bot and the dashboard run as independent systemd services on an Oracle Cloud VPS, with SQLite in WAL mode allowing concurrent access between the interface and the background monitor.',
        result: 'The system runs continuously in production, with bot and dashboard deployed as auto-restarting services reading a shared SQLite store. Modeling baseline load explicitly, rather than as a flat percentage, exposed always-on consumption as a larger share of the bill than any single tracked appliance, the cost driver that monthly-average estimates routinely miss. The separation between calculation core and interface allowed a web dashboard to be added on top of the existing logic without changing the engine, which confirms the modularity the design was built for.',
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
