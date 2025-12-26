importar { Botão } de "@/componentes/ui/botão";
importar Layout de "@/componentes/Layout";
importar { Seta Direita, Nuvem, Banco de dados, Código, Terminal } de "reação ao lúcido";
importar { Link } de "wouter";
importar { movimento } de "movimento-de-quadro";
importar { usarIdioma } de "@/contextos/LanguageContext";

exportar padrão função Início() {
  const { t } = usarIdioma();

  const pilares = [
    {
      título: t('pilares.clareza.título'),
      ícone: "🧠",
      desc: t('pilares.clareza.desc'),
    },
    {
      título: t('pilares.sabedoria.título'),
      ícone: "🎓",
      desc: t('pilares.sabedoria.desc'),
    },
    {
      título: t('pilares.criatividade.título'),
      ícone: "💡",
      desc: t('pilares.criatividade.desc'),
    },
    {
      título: t('pilares.liberdade.título'),
      ícone: "🕊️",
      desc: t('pilares.liberdade.desc'),
    }
  ];

  retornar (
    <Layout>
      {/* Seção Herói */}
      <sessão nome sim classe="relativo min-h-[90vh] flex itens-centro justificar-centro estouro-oculto">
        <dividir nome sim classe="contêiner relativo z-10 grid lg:grid-cols-2 gap-12 itens-centro">
          
          {/* Lado Esquerdo: Texto */}
          <movimento.div 
            inicial={{ opacidade: 0, y: 20 }}
            animar={{ opacidade: 1, y: 0 }}
            transição={{ duração: 0,6 }}
            nome sim classe="espaço-y-6"
          >
            <dividir nome sim classe="inline-flex itens-centro lacuna-2 px-4 py-2 arredondado-vidro completo-efeito-texto forte-texto primário-fonte sm-borda média borda-primário/20">
              <extensão nome sim classe="flexão relativa h-2 w-2">
                <extensão nome sim classe="animate-ping absoluto inline-flex h-completo w-completo arredondado-completo bg-opacidade primária-75"></extensão>
                <extensão nome sim classe="relativo inline-flex arredondado-completo h-2 w-2 bg-esmeralda-500"></extensão>
              </extensão>
              {t('hero.status')}
            </dividir>
            
            <h1 nome sim classe="texto-5xl md:texto-7xl fonte-negrito rastreamento-apertado fonte-títio leading-apertado">
              {t('herói.título')}
            </h1>
            
            <p nome sim classe="texto-xl texto-silenciado-primeiro plano max-w-lg líder-relaxado">
              {t('herói.descrição')}
            </p>
            
            <dividir nome sim classe="flex flex-wrap gap-4 pt-4">
              <Botão tamanho="lg" nome sim classe="arredondado-2xl px-8 bg-primário hover:bg-primário/90 texto-branco sombra-lg sombra-primário/25 transição-tudo hover:sombra-primário/40" asChild>
                <Link href="/projetos">
                  {t('hero.viewProjects')} <Seta Direita nome sim classe="ml-2 h-4 w-4" />
                </Link>
              </Botão>
              <Botão tamanho="lg" variável="esboço" nome sim classe="arredondado-2xl px-8 borda-branco/20 hover:bg-branco/10 fundo-desfoque-sm transição-tudo" asChild>
                <Link href="/sobre">
                  {t('herói.sobreMim')}
                </Link>
              </Botão>
            </dividir>
          </movimento.div>

          {/* Lado Direito: Foto (Novo) */}
          <movimento.div 
            inicial={{ opacidade: 0, escala: 0,9 }}
            animar={{ opacidade: 1, escala: 1 }}
            transição={{ duração: 0,8, atraso: 0,2 }}
            nome sim classe="relativo oculto lg:block"
          >
            <dividir nome sim classe="relativo w-full max-w-md mx-auto aspecto-quadrado flex itens-centro justificar-centro">
              <dividir nome sim classe="inserção absoluta-0 bg-primário/20 arredondado-desfoque total-3xl pulso animado" />
              <dividir nome sim classe="relativo z-10 w-[350px] h-[350px] arredondado-completo p-2 efeito de vídeo-borda forte borda-branco/10 sombra-2xl">
                <imagem 
                  fonte="cliente/público/imagens/Foto1.png" 
 alt="Érika Nogueira Santos"alt="Erika Nogueira Santos"
 nome sim classe="w-completo h-completo arredondado-completo objeto-cobertura borda-4 borda-branco/5"nome sim classe="w-completo h-completo arredondado-completo objeto-cobertura borda-4 borda-branco/5"
 />/>
              </dividir>

              {/* Cartões Flutuantes */}
              <movimento.div 
                animar={{ y: [0, -10, 0] }}
                transição={{ duração: 4, repetir: Infinito }}
                nome sim classe="absoluto -direita-4 topo-10 efeito de vídeo p-3 arredondado-xl itens flexíveis-lacuna central-2 sombra-lg"
              >
                <Banco de dados nome sim classe="h-5 w-5 texto-azul-400" />
                <extensão nome sim classe="texto-sm fonte-negrito">Especialista em SQL</extensão>
              </movimento.div>

              <movimento.div 
                animar={{ y: [0, 10, 0] }}
                transição={{ duração: 5, repetir: Infinito, atraso: 1 }}
                className="absolute -left-4 bottom-20 glass-effect p-3 rounded-xl flex items-center gap-2 shadow-lg"
              >
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold">Lean Six Sigma</span>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pillars.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pillars.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl glass-effect hover:glass-effect-strong transition-all"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
