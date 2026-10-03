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
      journeyDesc: 'Por 3,5 anos trabalhei como Controladora de Processo na Continental Pneus do Brasil, aplicando análise de dados e metodologia Lean Six Sigma para otimizar sistemas industriais e reduzir custos operacionais. Hoje, enquanto busco a próxima posição em dados, concilio um período curto de experiência no time de Performance e Coleta do iFood.',
      transition: 'Meu trabalho une três domínios: engenharia de processos industriais, análise de dados aplicada e computação científica. Tenho interesse especial em funções onde o conhecimento de domínio em manufatura ou química cria uma vantagem analítica real.',
      doing: 'O que estou fazendo',
      items: {
        dataIntern: {
          title: 'Estágio em Engenharia de Processos',
          subtitle: 'Continental Pneus do Brasil',
          desc: 'Dashboards de rastreabilidade construídos do zero e análise que identificou um fornecedor com defeito crônico, reduzindo o custo de refugo relacionado em cerca de 30%.'
        },
        dataClt: {
          title: 'Analista de Dados (Controladora de Processo)',
          subtitle: 'Continental Pneus do Brasil',
          desc: 'Relatório manual de refugo migrado para dashboards Power BI, com automação da resolução de código SAP que economizou cerca de 5 horas por semana.'
        },
        thesis: {
          title: 'TCC UFBA',
          subtitle: 'Modelagem termodinâmica computacional',
          desc: 'UNIFAC, Python, estimativa de parâmetros.'
        },
        ifood: {
          title: 'Analista de Dados Pleno',
          subtitle: 'iFood — Performance e Coleta (Logística)',
          desc: 'Monitoramento de indicadores de performance e coleta na operação de logística.'
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
        desc: 'Investiguei se líquidos iônicos próticos atuam como cossolventes em sistemas de biodiesel, usando dois modelos termodinâmicos preditivos (UNIFAC-LL e COSMO-SAC) pra embasar a hipótese em 12 sistemas ternários. Pesquisa vinculada ao programa PRH/ANP.',
        context: 'Biodiesel por transesterificação sofre com baixa miscibilidade entre o triglicerídeo e o álcool. Líquidos iônicos próticos são estudados como possíveis cossolventes, mas não existe dado experimental de equilíbrio líquido-líquido pra esses sistemas.',
        problem: 'Sem dado experimental, a única forma de testar se o líquido iônico funciona como cossolvente é prever o equilíbrio de fases e observar o comportamento da lacuna de imiscibilidade, usando dois modelos termodinâmicos independentes como evidência cruzada pra sustentar a hipótese.',
        approach: 'Implementei o motor de cálculo do UNIFAC-LL em Python (teste de estabilidade, flash de Rachford-Rice, ponto crítico), validado contra a equação de Margules e contra um sistema de referência da literatura (RMSD de 0,0872). O COSMO-SAC rodou no JCOSMO, com perfis calculados via DFT no GAMESS. Os dois modelos, aplicados aos doze sistemas, serviram de evidência cruzada pra testar a hipótese de cossolvência.',
        result: 'A hipótese de cossolvência não se confirmou nas condições modeladas (298,15 K, entre 4,7% e 62,1% em fração molar de líquido iônico): dos 24 diagramas possíveis (12 sistemas × 2 modelos), 18 geraram curva binodal, e em todos eles o líquido iônico afastou as fases em vez de aproximar, com a lacuna de imiscibilidade de 2,7× a 15× maior conforme mais líquido iônico era adicionado. Isso não contradiz os ganhos de rendimento já reportados na literatura pra essa reação, porque as condições diferem em três pontos: a concentração usada nesses estudos é bem menor (2-3% em massa, abaixo de toda a faixa modelada aqui), a temperatura reacional é maior (~60°C, contra os 25°C modelados), e a grandeza medida também é outra (rendimento de reação, não equilíbrio de fases, que podem variar de forma independente). Os dois modelos concordam nos seis sistemas com um dos líquidos iônicos (binodal nos dois) e divergem nos seis com o outro (só o COSMO-SAC prevê separação de fases).',
      },
    },
    contact: {
      title: 'Vamos Conversar?',
      sectionTitle: 'Entre em contato',
      description: 'Estou disponível para oportunidades como Analista de Dados e Analista de Processos, com foco em equipes industriais, científicas ou remotas. Aberta a funções internacionais.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Salvador, Bahia - Brasil (Disponível para Remoto)',
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
      journeyDesc: 'For 3.5 years I worked as a Process Controller at Continental Tires do Brasil, applying data analysis and Lean Six Sigma methodology to optimize industrial systems and reduce operational costs. Today, while I look for the next data role, I balance a short-term stint on the Performance and Collection team at iFood.',
      transition: "My work blends three domains: industrial process engineering, applied data analytics, and scientific computing. I'm particularly interested in roles where domain knowledge in manufacturing or chemistry creates real analytical edge.",
      doing: "What I'm doing",
      items: {
        dataIntern: {
          title: 'Process Engineering Intern',
          subtitle: 'Continental Tires do Brasil',
          desc: 'Traceability dashboards built from scratch and an analysis that identified a supplier with chronic defects, cutting related scrap costs by about 30%.'
        },
        dataClt: {
          title: 'Data Analyst (Process Controller)',
          subtitle: 'Continental Tires do Brasil',
          desc: 'Manual scrap reporting migrated to Power BI dashboards, with automated SAP code resolution that saved about 5 hours per week.'
        },
        thesis: {
          title: 'Final Thesis UFBA',
          subtitle: 'Computational thermodynamic modeling',
          desc: 'UNIFAC, Python, parameter estimation.'
        },
        ifood: {
          title: 'Mid-level Data Analyst',
          subtitle: 'iFood — Performance & Collection (Logistics)',
          desc: 'Monitoring performance and collection indicators for the logistics operation.'
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
        desc: 'I investigated whether protic ionic liquids act as cosolvents in biodiesel systems, using two predictive thermodynamic models (UNIFAC-LL and COSMO-SAC) to support the hypothesis across 12 ternary systems. Research under the PRH/ANP federal program.',
        context: 'Biodiesel production by transesterification struggles with low miscibility between the triglyceride and the alcohol. Protic ionic liquids are studied as possible cosolvents, but no liquid-liquid equilibrium experimental data exists for these systems.',
        problem: 'Without experimental data, the only way to test whether the ionic liquid acts as a cosolvent is to predict the phase equilibrium and observe how the immiscibility gap behaves, using two independent thermodynamic models as cross-evidence to support the hypothesis.',
        approach: 'I implemented the UNIFAC-LL calculation engine in Python (stability test, Rachford-Rice flash, critical point search), validated against the Margules equation and against a reference system from the literature (RMSD of 0.0872). COSMO-SAC ran in JCOSMO, with profiles computed via DFT in GAMESS. Both models, applied to the twelve systems, served as cross-evidence to test the cosolvency hypothesis.',
        result: 'The cosolvency hypothesis did not hold under the modeled conditions (298.15 K, between 4.7% and 62.1% ionic liquid mole fraction): of 24 possible diagrams (12 systems × 2 models), 18 produced a binodal curve, and in all of them the ionic liquid pushed the phases apart instead of bringing them closer, with the immiscibility gap 2.7x to 15x wider as more ionic liquid was added. This does not contradict the yield gains already reported in the literature for this reaction, because the conditions differ on three points: the concentration used in those studies is much lower (2-3% by mass, below the entire range modeled here), the reaction temperature is higher (~60°C, versus the 25°C modeled here), and the measured quantity is different too (reaction yield, not phase equilibrium, which can vary independently). The two models agree on the six systems with one of the ionic liquids (binodal in both) and diverge on the six with the other (only COSMO-SAC predicts phase separation).',
      },
    },
    contact: {
      title: 'Get in Touch',
      sectionTitle: 'Contact Me',
      description: "I'm available for Data Analyst and Process Analyst opportunities, with focus on industrial, scientific, or remote teams. Open to international roles.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Salvador, Bahia - Brazil (Available for Remote)',
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
