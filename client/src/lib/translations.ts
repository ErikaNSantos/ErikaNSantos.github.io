export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      toLight: 'Mudar para o modo claro',
      toDark: 'Mudar para o modo escuro',
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
        fuel: {
          title: 'Raio-X dos Combustíveis',
          desc: 'Base única com 25,5 milhões de preços da ANP desde 2004, montada com DuckDB, e um painel que corrige pela inflação e mostra combustível e botijão de gás por estado, capital e município.',
          tagline: 'Toda a pesquisa de preços da ANP desde 2004 numa base única em Parquet, montada com DuckDB e aberta para consulta, e um painel que se atualiza sozinho com gasolina, etanol, diesel e o botijão de gás em cada estado, capital e município, corrigidos pela inflação.',
          role: 'Autora',
          origin: 'Projeto pessoal · dados abertos da ANP e do IBGE',
          metrics: {
            0: { value: '25,5 mi', label: 'coletas de preço, de maio de 2004 a setembro de 2026, numa base de 197 MB em Parquet' },
            1: { value: '702', label: 'municípios pesquisados em algum momento, nas 27 UFs' },
            2: { value: 'Toda segunda', label: 'o GitHub Actions atualiza só o ano que mudou na base e republica a página' },
          },
          context: 'A ANP publica o levantamento de preços nos postos desde 2004, em 45 arquivos semestrais e, a partir de 2023, também em arquivos mensais: vários GB de CSV, com uma linha por posto, produto e dia de coleta. O dado é aberto, mas não é algo que alguém consulte direto para saber quanto custa abastecer na própria cidade, ou se o preço subiu de verdade depois da inflação.',
          problem: 'A fonte é irregular: o padrão do nome dos arquivos muda sem aviso, um saiu com erro de digitação, o 1º semestre de 2022 não tem o ano no nome, o 2º semestre de 2021 veio em outra codificação, abril de 2026 não saiu no mensal e o servidor do gov.br derruba downloads grandes no meio. Além disso, comparar preços de anos diferentes sem corrigir pela inflação engana, e um posto visitado várias vezes no mês não pode pesar mais que os outros.',
          steps: {
            0: { title: 'Achar os arquivos lendo a página', desc: 'Em vez de montar a URL, o pipeline lê a página da ANP e classifica cada link pelo caminho e pelo texto do link. Assim ele aguenta todos os padrões de nome que já apareceram, inclusive o com erro de digitação e o sem ano, e aponta os meses que faltam.' },
            1: { title: 'Um posto, um voto', desc: 'O preço de cada posto no mês é a mediana das coletas dele; as estatísticas de município, UF e Brasil saem desses preços. Sem isso, a diferença entre o posto mais barato e o mais caro de Salvador saía o dobro do real.' },
            2: { title: 'Corrigir pela inflação', desc: 'IPCA do IBGE (SIDRA, tabela 1737) para levar todos os meses a reais de hoje. Meses mais novos que o último IPCA ficam nominais até o índice sair.' },
            3: { title: 'Uma base só, com DuckDB', desc: 'O arquivo semestral (consolidado) entra sempre que cobre o mês, e o mensal só onde ele ainda não chegou; nos meses em que os dois existem, os números batem exatamente. O resultado é um Parquet por ano, publicado numa Release do GitHub e consultável direto do DuckDB, sem baixar nada. A agregação também foi para SQL e é testada contra a versão original em pandas.' },
            4: { title: 'Automatizar com testes', desc: 'Toda segunda um workflow refaz só o ano da base que mudou (a execução retoma de onde parou se o gov.br cair) e, três horas depois, outro roda os 15 testes, reagrega esse ano e republica a página. Os números de Brasil e UF foram conferidos contra a versão anterior, ponto a ponto.' },
          },
          figures: {
            cover: 'Preço mediano da gasolina por estado em setembro de 2026 (modo escuro da página).',
            etanol: 'Etanol ou gasolina: em setembro de 2026 o etanol compensava em 10 dos 27 estados (preço abaixo de 70% do da gasolina).',
            evolucao: 'Gasolina desde 2004, em reais de hoje, com a faixa onde ficam 80% dos postos. Os buracos são junho de 2014 e setembro de 2020, meses sem coleta da ANP.',
            capitais: 'Mesma cidade, preços diferentes: a faixa de 80% dos postos em cada capital, sem os extremos.',
          },
          result: 'Descontada a inflação, a gasolina custa hoje praticamente o mesmo que em 2004: R$ 6,59 em maio de 2004 e R$ 6,54 em setembro de 2026, em reais de hoje. No meio do caminho, chegou a R$ 8,68 em maio de 2022 e caiu para R$ 5,98 em setembro do mesmo ano, depois do teto do ICMS. O etanol ficou 25% mais caro em termos reais no período (R$ 3,40 para R$ 4,25), e o diesel comum, 45%. O botijão de gás subiu 15% acima da inflação (R$ 99,97 para R$ 115 em reais de hoje), mas pesa menos no bolso de quem ganha o mínimo: 11,5% do salário mínimo em 2004, 7,1% hoje. Mais recentemente, o painel mostrou o salto do diesel S10 em março de 2026: de R$ 6,09 para R$ 7,19 na mediana nacional, 18% num mês, em todos os estados.',
          limitations: 'A ANP pesquisa uma amostra (hoje cerca de 400 municípios e 6 mil postos por mês), não todos, e o tamanho dela mudou ao longo dos anos: em 2004 eram mais de 16 mil postos. O diesel S10 só entra em 2012, e o preço de compra pelo posto só vem até cerca de 2020, então o painel não calcula margem. A regra dos 70% para o etanol é uma aproximação.',
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
            4: { title: 'Dashboard', desc: 'Página estática no GitHub Pages com as três visões (geral, validação das regras e classificação). O Python calcula regras e modelos uma vez e grava um JSON; o navegador só desenha os 10.000 pontos.' },
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
        desc: 'Testei se líquidos iônicos próticos ajudam óleo e álcool a se misturar na produção de biodiesel. Dois modelos independentes disseram que não: nas condições modeladas, eles afastam as fases.',
        tagline: 'Testei se líquidos iônicos próticos ajudam óleo e álcool a se misturar na produção de biodiesel. Dois modelos termodinâmicos independentes chegaram à mesma resposta: nas condições modeladas, eles afastam as fases, e a lacuna de imiscibilidade se alarga de 2,7 a 15 vezes.',
        role: 'Autora',
        origin: 'TCC · Engenharia Química, UFBA · pesquisa PRH/ANP',
        metrics: {
          0: { value: '18 de 18', label: 'diagramas com curva binodal em que o líquido iônico alargou a lacuna, sem exceção' },
          1: { value: '2,7× a 15×', label: 'de alargamento da lacuna entre a menor e a maior fração de líquido iônico' },
          2: { value: '0,0872', label: 'de RMSD do motor UNIFAC-LL contra dado experimental da literatura (Sørensen e Arlt)' },
        },
        context: 'Na produção de biodiesel por transesterificação, o óleo e o álcool se misturam mal, o que limita a reação. Líquidos iônicos próticos aparecem na literatura como possíveis cossolventes, com ganho de rendimento medido em laboratório, mas não existe dado experimental de equilíbrio líquido-líquido para esses sistemas.',
        problem: 'Sem dado experimental, a única forma de testar a hipótese de cossolvência é prever o equilíbrio de fases e ver o que acontece com a lacuna de imiscibilidade quando o líquido iônico entra. Um modelo só não basta: é preciso dois, com entradas independentes, para que a conclusão não dependa da parametrização de um deles.',
        steps: {
          0: { title: 'Motor UNIFAC-LL em Python', desc: 'Implementei o modelo de grupos e o motor termodinâmico: teste de estabilidade pelo plano tangente, flash de Rachford-Rice, varredura do simplex e busca do ponto crítico.' },
          1: { title: 'Validação antes de usar', desc: 'Contra a equação de Margules, que tem lacuna analítica conhecida (RMSD de 2,5×10⁻⁷), e contra dados experimentais de Sørensen e Arlt para n-hexano/etanol/água (RMSD de 0,0872).' },
          2: { title: 'COSMO-SAC como segunda evidência', desc: 'Perfis sigma dos dois líquidos iônicos calculados por DFT no GAMESS, como par iônico neutro. Uma rota alternativa em NWChem foi descartada por gerar cavidades cerca de 4× maiores que o esperado para a trioleína.' },
          3: { title: '12 sistemas × 2 modelos', desc: 'Três triglicerídeos (trioleína, trilinoleína, trilinolenina), dois álcoois (etanol, metanol) e dois líquidos iônicos ([2-HEA][Hx] e [DETA][Hx]), a 298,15 K.' },
          4: { title: 'Medir a hipótese', desc: 'Para cada sistema, a largura da lacuna (Δx do óleo) em função da fração de líquido iônico. Se ele fosse cossolvente, a lacuna teria que encolher.' },
        },
        figures: {
          cover: 'Trioleína + etanol + [2-HEA][Hx]: UNIFAC-LL (esquerda) e COSMO-SAC (direita). Os dois modelos preveem separação de fases, com intensidades diferentes.',
          gap: 'Largura da lacuna em função da fração de líquido iônico (trioleína + etanol + [2-HEA][Hx], COSMO-SAC): sai de 0,22 e chega a 0,92. Se o líquido iônico fosse cossolvente, a curva desceria.',
        },
        result: 'A hipótese de cossolvência não se confirmou. Nos 18 sistemas com curva binodal, a lacuna cresce conforme o líquido iônico é adicionado (inclinações de +0,87 a +2,95), e os dois modelos apontam no mesmo sentido mesmo partindo de entradas independentes. O mecanismo proposto: o líquido iônico se ancora na fase alcoólica (com [2-HEA][Hx], ela retém de 7 a 18 vezes mais líquido iônico que a oleosa) e compete com o óleo pela hidroxila do álcool. O [DETA][Hx], com mais sítios protonados, alarga a lacuna com mais força que o [2-HEA][Hx] (inclinação média de +2,32 contra +1,67 no COSMO-SAC).',
        limitations: 'Isso não contradiz o ganho de rendimento da literatura, porque as condições são outras: lá, 2 a 3% em massa de líquido iônico a cerca de 60 °C, medindo rendimento de reação; aqui, frações molares de 0,047 a 0,621 a 25 °C, medindo equilíbrio de fases. O UNIFAC-LL também tem limite de extrapolação para moléculas grandes como a trioleína e não gerou curva binodal para os sistemas com [DETA][Hx]. A confirmação definitiva depende de dados experimentais que ainda não existem.',
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
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
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
        fuel: {
          title: 'Fuel Price X-Ray (Brazil)',
          desc: 'A single DuckDB-built database of 25.5 million ANP fuel prices since 2004, plus a dashboard that adjusts for inflation and shows fuel and cooking gas prices by state, capital and city.',
          tagline: 'Every price survey from Brazil\'s fuel regulator (ANP) since 2004 in a single Parquet database, built with DuckDB and open for anyone to query, plus a self-updating dashboard of inflation-adjusted gasoline, ethanol, diesel and cooking gas prices for every state, capital and surveyed city.',
          role: 'Author',
          origin: 'Personal project · ANP and IBGE open data',
          metrics: {
            0: { value: '25.5M', label: 'price records from May 2004 to September 2026, in a 197 MB Parquet database' },
            1: { value: '702', label: 'cities surveyed at some point, across all 27 states' },
            2: { value: 'Every Monday', label: 'GitHub Actions rebuilds only the year that changed and republishes the page' },
          },
          context: 'ANP has published its gas station price survey since 2004, in 45 semiannual files and, since 2023, also in monthly ones: several GB of CSV, one row per station, product and collection day. The data is open, but nobody reads it directly to find out what it costs to fill up in their own city, or whether prices really went up once inflation is taken out.',
          problem: 'The source is irregular: the file naming pattern changes without notice, one file has a typo in its name, the first half of 2022 has no year in its name, the second half of 2021 came in a different encoding, April 2026 is missing from the monthly files, and the government server drops large downloads midway. On top of that, comparing prices across years without adjusting for inflation misleads, and a station surveyed several times in a month must not weigh more than the others.',
          steps: {
            0: { title: 'Find the files by reading the page', desc: 'Instead of building the URL, the pipeline reads ANP\'s page and classifies each link by its path and link text. That way it handles every naming pattern seen so far, including the misspelled one and the one without a year, and reports missing months.' },
            1: { title: 'One station, one vote', desc: 'Each station\'s monthly price is the median of its collections; city, state and national statistics come from those prices. Without this, the gap between the cheapest and the priciest station in Salvador came out twice as large as it really is.' },
            2: { title: 'Adjust for inflation', desc: 'IBGE\'s IPCA (SIDRA, table 1737) brings every month to today\'s reais. Months newer than the latest IPCA stay nominal until the index is released.' },
            3: { title: 'One database, with DuckDB', desc: 'The semiannual (consolidated) file is used whenever it covers a month, and the monthly one only where it has not arrived yet; for months covered by both, the numbers match exactly. The result is one Parquet file per year, published as a GitHub Release and queryable straight from DuckDB without downloading anything. Aggregation also moved to SQL and is tested against the original pandas version.' },
            4: { title: 'Automate with tests', desc: 'Every Monday one workflow rebuilds only the year of the database that changed (resuming where it stopped if the government server drops), and three hours later another runs the 15 tests, re-aggregates that year and republishes the page. National and state figures were checked point by point against the previous version.' },
          },
          figures: {
            cover: 'Median gasoline price by state in September 2026 (the page\'s dark mode).',
            etanol: 'Ethanol or gasoline: in September 2026 ethanol was the better deal in 10 of 27 states (priced below 70% of gasoline).',
            evolucao: 'Gasoline since 2004, in today\'s reais, with the band holding 80% of stations. The gaps are June 2014 and September 2020, months with no ANP survey.',
            capitais: 'Same city, different prices: the band holding 80% of stations in each capital, without the extremes.',
          },
          result: 'After inflation, gasoline costs about the same today as in 2004: R$ 6.59 in May 2004 and R$ 6.54 in September 2026, in today\'s reais. Along the way it peaked at R$ 8.68 in May 2022 and dropped to R$ 5.98 by September that year, after the cap on the ICMS state tax. Ethanol got 25% more expensive in real terms over the period (R$ 3.40 to R$ 4.25), and regular diesel 45%. A 13 kg cooking gas cylinder rose 15% above inflation (R$ 99.97 to R$ 115 in today\'s reais), yet weighs less on minimum-wage earners: 11.5% of the minimum wage in 2004, 7.1% today. More recently, the dashboard surfaced the March 2026 jump in S10 diesel: from R$ 6.09 to R$ 7.19 at the national median, 18% in one month, across every state.',
          limitations: 'ANP surveys a sample (today about 400 cities and 6,000 stations a month), not every station, and the sample size has changed over the years: in 2004 it covered more than 16,000 stations. S10 diesel only enters in 2012, and the station\'s purchase price is only filled until around 2020, so the dashboard does not compute margins. The 70% rule for ethanol is an approximation.',
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
            4: { title: 'Dashboard', desc: 'Static page on GitHub Pages with the three views (overview, rule validation and classification). Python computes rules and models once and writes a JSON; the browser only draws the 10,000 points.' },
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
        desc: 'I tested whether protic ionic liquids help oil and alcohol mix in biodiesel production. Two independent models said no: under the modeled conditions, they push the phases apart.',
        tagline: 'I tested whether protic ionic liquids help oil and alcohol mix in biodiesel production. Two independent thermodynamic models reached the same answer: under the modeled conditions, they push the phases apart, widening the immiscibility gap 2.7 to 15 times.',
        role: 'Author',
        origin: 'Thesis · Chemical Engineering, UFBA · PRH/ANP research',
        metrics: {
          0: { value: '18 of 18', label: 'diagrams with a binodal curve where the ionic liquid widened the gap, no exceptions' },
          1: { value: '2.7× to 15×', label: 'gap widening between the lowest and highest ionic liquid fraction' },
          2: { value: '0.0872', label: 'RMSD of the UNIFAC-LL engine against experimental literature data (Sørensen and Arlt)' },
        },
        context: 'In biodiesel production by transesterification, oil and alcohol barely mix, which limits the reaction. Protic ionic liquids appear in the literature as possible cosolvents, with yield gains measured in the lab, but no liquid-liquid equilibrium experimental data exists for these systems.',
        problem: 'Without experimental data, the only way to test the cosolvency hypothesis is to predict the phase equilibrium and see what happens to the immiscibility gap as the ionic liquid is added. One model is not enough: it takes two, with independent inputs, so the conclusion does not hinge on either parametrization.',
        steps: {
          0: { title: 'UNIFAC-LL engine in Python', desc: 'I implemented the group-contribution model and the thermodynamic engine: tangent-plane stability test, Rachford-Rice flash, simplex sweep and critical point search.' },
          1: { title: 'Validate before use', desc: 'Against the Margules equation, which has a known analytical gap (RMSD of 2.5×10⁻⁷), and against Sørensen and Arlt experimental data for n-hexane/ethanol/water (RMSD of 0.0872).' },
          2: { title: 'COSMO-SAC as second evidence', desc: 'Sigma profiles of both ionic liquids computed by DFT in GAMESS, as neutral ion pairs. An alternative NWChem route was dropped after producing cavities about 4× larger than expected for triolein.' },
          3: { title: '12 systems × 2 models', desc: 'Three triglycerides (triolein, trilinolein, trilinolenin), two alcohols (ethanol, methanol) and two ionic liquids ([2-HEA][Hx] and [DETA][Hx]), at 298.15 K.' },
          4: { title: 'Measure the hypothesis', desc: 'For each system, the gap width (oil Δx) as a function of ionic liquid fraction. If it were a cosolvent, the gap would have to shrink.' },
        },
        figures: {
          cover: 'Triolein + ethanol + [2-HEA][Hx]: UNIFAC-LL (left) and COSMO-SAC (right). Both models predict phase separation, with different intensities.',
          gap: 'Gap width versus ionic liquid fraction (triolein + ethanol + [2-HEA][Hx], COSMO-SAC): it goes from 0.22 to 0.92. If the ionic liquid were a cosolvent, the curve would go down.',
        },
        result: 'The cosolvency hypothesis did not hold. In all 18 systems with a binodal curve, the gap grows as ionic liquid is added (slopes from +0.87 to +2.95), and both models point the same way despite independent inputs. The proposed mechanism: the ionic liquid anchors in the alcohol phase (with [2-HEA][Hx], it holds 7 to 18 times more ionic liquid than the oil phase) and competes with the oil for the alcohol hydroxyl. [DETA][Hx], with more protonated sites, widens the gap more strongly than [2-HEA][Hx] (mean slope of +2.32 versus +1.67 in COSMO-SAC).',
        limitations: 'This does not contradict the yield gains in the literature, because the conditions differ: there, 2 to 3% by mass of ionic liquid at about 60 °C, measuring reaction yield; here, mole fractions from 0.047 to 0.621 at 25 °C, measuring phase equilibrium. UNIFAC-LL also has an extrapolation limit for large molecules like triolein and produced no binodal curve for the [DETA][Hx] systems. Definitive confirmation depends on experimental data that does not exist yet.',
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
