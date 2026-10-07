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
      execution: {
        title: 'Execução',
        desc: 'Fazer uma vez e fazer certo. Prefiro resolver um problema de vez a repetir o mesmo ajuste pra sempre.',
      },
      creativity: {
        title: 'Inventividade',
        desc: 'Paixão por construir coisas novas e úteis. Aprender é o meio, criar é o fim.',
      },
      integrity: {
        title: 'Integridade',
        desc: 'Prefiro ganhar menos a fazer algo que considero errado. Resultado que eu consigo defender, mesmo sob pressão.',
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
        role: 'Papel',
        origin: 'Origem',
        year: 'Ano',
        limitations: 'Limitações',
        next: 'Próximo projeto',
        viewCode: 'Ver código no GitHub',
        viewDemo: 'Ver dashboard ao vivo',
      },
        maintenance: {
          title: 'Manutenção Preditiva: AI4I 2020',
          desc: 'Antes de treinar qualquer modelo, testei se as regras físicas documentadas explicam mesmo as falhas. Usar essas regras como features levou o F1 de 0,65 para 0,98.',
          tagline: 'Antes de treinar qualquer modelo, testei se as regras físicas documentadas explicam mesmo as falhas. Explicam, e transformar essas regras em features levou o F1 de 0,65 para 0,98.',
          role: 'Autora',
          origin: 'Projeto pessoal · dataset público UCI',
          metrics: {
            0: { value: '100%', label: 'de concordância das regras HDF, PWF e OSF reconstruídas com os rótulos originais' },
            1: { value: '0,65 → 0,98', label: 'de F1 em falha de potência (PWF) com features derivadas da física' },
            2: { value: '5', label: 'modos de falha previstos ao mesmo tempo, em classificação multi-label' },
          },
          context: 'O AI4I 2020 simula uma linha de produção com sensores de temperatura, rotação, torque e desgaste: 10.000 registros, 339 falhas (3,4%) e cinco modos de falha. A documentação descreve a regra física por trás de cada modo, mas mistura mecanismos determinísticos e probabilísticos.',
          problem: 'Modelo treinado só com variáveis brutas aprende correlação, não mecanismo. E o dataset tem casos que parecem incoerentes, como parada sem modo de falha e falha aleatória sem parada. Sem entender isso antes, qualquer métrica de modelo fica sem base.',
          steps: {
            0: { title: 'Auditoria dos dados', desc: 'Nulos, unicidade de IDs, faixas documentadas e coerência entre os modos de falha e o flag de parada. As "incoerências" se mostraram intencionais e documentadas pelos autores do dataset.' },
            1: { title: 'Reconstrução das regras', desc: 'Reescrevi em Python as fórmulas da documentação: HDF (ΔT < 8,6 K e rotação < 1380 rpm), PWF (potência fora de 3.500 a 9.000 W) e OSF (desgaste × torque acima do limite de cada tipo de produto), e comparei com os rótulos reais.' },
            2: { title: 'Features a partir da física', desc: 'Cada regra virou uma variável: delta_temp, power_W e wear_torque. A hipótese: se o mecanismo explica a falha, o modelo ganha ao enxergá-lo diretamente.' },
            3: { title: 'Classificação multi-label', desc: 'Dois Random Forest (MultiOutputClassifier, classes balanceadas, split estratificado): um só com as variáveis brutas, outro com as features físicas. Os cinco modos previstos ao mesmo tempo.' },
            4: { title: 'Dashboard', desc: 'Streamlit com três abas (visão geral, validação das regras e classificação) para explorar cada resultado de forma interativa.' },
          },
          figures: {
            overview: 'Taxa de falha por tipo de produto, ocorrências por modo e torque × rotação: as falhas se concentram nos extremos de potência.',
            rules: 'Validação das regras: HDF, PWF e OSF batem 100% com os rótulos. TWF fica em 92,5%, com 747 falsos positivos na faixa de 200 a 240 min de desgaste.',
            cover: 'F1 por modo de falha (features brutas × engenheiradas) e importância das variáveis.',
          },
          result: 'As features físicas elevaram o F1 de 0,78 para 0,93 em HDF, de 0,65 para 0,98 em PWF e de 0,78 para 0,95 em OSF. Entender como o dado foi gerado rendeu mais do que aumentar a complexidade do modelo.',
          limitations: 'TWF e RNF ficaram com F1 = 0. O desgaste tem componente probabilístico e a falha aleatória não depende das variáveis de processo: nenhuma feature recupera informação que não está no dado. Além disso, o dataset é simulado, então os limiares exatos das regras não se transferem direto para uma planta real.',
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
      execution: {
        title: 'Execution',
        desc: "Do it once, do it right. I'd rather solve a problem for good than repeat the same fix forever.",
      },
      creativity: {
        title: 'Creativity',
        desc: 'Passion for building new and useful things. Learning is the means, creating is the end.',
      },
      integrity: {
        title: 'Integrity',
        desc: "I'd rather earn less than do something I consider wrong. Results I can stand behind, even under pressure.",
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
        role: 'Role',
        origin: 'Origin',
        year: 'Year',
        limitations: 'Limitations',
        next: 'Next project',
        viewCode: 'View code on GitHub',
        viewDemo: 'View live dashboard',
      },
        maintenance: {
          title: 'Predictive Maintenance: AI4I 2020',
          desc: 'Before training any model, I tested whether the documented physical rules actually explain the failures. Encoding those rules as features lifted F1 from 0.65 to 0.98.',
          tagline: 'Before training any model, I tested whether the documented physical rules actually explain the failures. They do, and turning those rules into features lifted F1 from 0.65 to 0.98.',
          role: 'Author',
          origin: 'Personal project · public UCI dataset',
          metrics: {
            0: { value: '100%', label: 'agreement between the reconstructed HDF, PWF and OSF rules and the original labels' },
            1: { value: '0.65 → 0.98', label: 'F1 on power failure (PWF) with physics-derived features' },
            2: { value: '5', label: 'failure modes predicted at once, as multi-label classification' },
          },
          context: 'AI4I 2020 simulates a production line with temperature, rotational speed, torque and tool wear sensors: 10,000 records, 339 failures (3.4%) and five failure modes. The documentation describes the physical rule behind each mode, but mixes deterministic and probabilistic mechanisms.',
          problem: 'A model trained on raw variables alone learns correlation, not mechanism. The dataset also has cases that look inconsistent, such as shutdowns with no failure mode and random failures with no shutdown. Without understanding them first, any model metric has no foundation.',
          steps: {
            0: { title: 'Data audit', desc: 'Missing values, ID uniqueness, documented ranges, and consistency between failure modes and the shutdown flag. The "inconsistencies" turned out to be intentional and documented by the dataset authors.' },
            1: { title: 'Rule reconstruction', desc: 'I rewrote the documented formulas in Python: HDF (ΔT < 8.6 K and speed < 1380 rpm), PWF (power outside 3,500 to 9,000 W) and OSF (wear × torque above each product type threshold), and compared them against the real labels.' },
            2: { title: 'Physics-based features', desc: 'Each rule became a variable: delta_temp, power_W and wear_torque. The hypothesis: if the mechanism explains the failure, the model gains from seeing it directly.' },
            3: { title: 'Multi-label classification', desc: 'Two Random Forests (MultiOutputClassifier, balanced classes, stratified split): one with raw variables only, one with the physics features. All five modes predicted at once.' },
            4: { title: 'Dashboard', desc: 'Streamlit with three tabs (overview, rule validation and classification) to explore every result interactively.' },
          },
          figures: {
            overview: 'Failure rate by product type, occurrences per mode, and torque × speed: failures cluster at the power extremes.',
            rules: 'Rule validation: HDF, PWF and OSF match the labels 100%. TWF reaches 92.5%, with 747 false positives in the 200 to 240 min wear band.',
            cover: 'F1 per failure mode (raw × engineered features) and feature importance.',
          },
          result: 'Physics features raised F1 from 0.78 to 0.93 for HDF, from 0.65 to 0.98 for PWF and from 0.78 to 0.95 for OSF. Understanding how the data was generated paid off more than adding model complexity.',
          limitations: 'TWF and RNF stayed at F1 = 0. Tool wear has a probabilistic component and random failures do not depend on process variables: no feature can recover information the data does not hold. The dataset is also simulated, so the exact rule thresholds do not transfer directly to a real plant.',
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
