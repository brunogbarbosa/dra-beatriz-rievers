import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.me/message/2MYRHEDNAUDDD1';
const INSTAGRAM_URL = 'https://www.instagram.com/drabeatrizrievers/';

const procedures = [
  {
    number: '01',
    title: 'Facetas em resina',
    text: 'Forma, proporção e cor planejadas para um sorriso harmônico, leve e coerente com você.',
  },
  {
    number: '02',
    title: 'Clareamento dental',
    text: 'Uma estratégia individual para iluminar o sorriso com acompanhamento e segurança.',
  },
  {
    number: '03',
    title: 'Reabilitação estética',
    text: 'Planejamento cuidadoso para devolver equilíbrio, função e confiança ao sorrir.',
  },
  {
    number: '04',
    title: 'Estética orofacial',
    text: 'Recursos para harmonizar o sorriso e a face com sutileza e respeito aos seus traços.',
  },
];

const results = [
  { src: '/images/resultado-facetas-1.png', title: 'Facetas em resina', subtitle: 'Forma e luminosidade' },
  { src: '/images/resultado-labios-1.png', title: 'Estética labial', subtitle: 'Contorno e equilíbrio' },
  { src: '/images/resultado-facetas-2.png', title: 'Sorriso', subtitle: 'Naturalidade em cada detalhe' },
  { src: '/images/resultado-labios-2.png', title: 'Lábios', subtitle: 'Harmonia e proporção' },
  { src: '/images/resultado-facetas-3.png', title: 'Reabilitação estética', subtitle: 'Um plano para cada sorriso' },
  { src: '/images/resultado-facetas-4.png', title: 'Facetas', subtitle: 'Leveza sem excessos' },
];

const faqs = [
  [
    'Como funciona a primeira avaliação?',
    'É uma consulta individual para entender o que incomoda você, avaliar o sorriso com atenção e apresentar possibilidades de tratamento. O plano só é definido depois dessa conversa.',
  ],
  [
    'As facetas podem ficar naturais?',
    'Sim. Cor, textura, forma e proporção são planejadas para conversar com seus traços. A proposta é valorizar seu sorriso sem criar um resultado padronizado.',
  ],
  [
    'Todo tratamento é feito de uma vez?',
    'Não necessariamente. De acordo com a avaliação, o planejamento pode ser organizado em etapas para respeitar suas necessidades e o tempo de cada procedimento.',
  ],
  [
    'Onde a Dra. Beatriz atende?',
    'Os atendimentos acontecem nas regiões do Buritis e Castelo, em Belo Horizonte. A equipe confirma a unidade e envia todas as orientações no agendamento.',
  ],
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark${light ? ' brand-mark-light' : ''}`} aria-hidden="true">
      <span>B</span><i /><span>R</span>
    </span>
  );
}

function Arrow() {
  return <span className="icon-arrow" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-grain" aria-hidden="true" />
        <header className="site-header shell">
          <a className="brand" href="#inicio" aria-label="Dra. Beatriz Rievers — início">
            <BrandMark />
            <span className="brand-copy">
              <strong>Dra. Beatriz Rievers</strong>
              <small>Odontologia estética</small>
            </span>
          </a>

          <nav aria-label="Navegação principal">
            <a href="#planejamento">Planejamento</a>
            <a href="#resultados">Resultados</a>
            <a href="#sobre">A doutora</a>
          </nav>

          <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Agendar avaliação <Arrow />
          </a>
        </header>

        <div className="hero-layout shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> ODONTOLOGIA ESTÉTICA • BELO HORIZONTE</div>
            <h1>
              Seu sorriso,<br />
              <em>com mais harmonia.</em>
            </h1>
            <p>
              Facetas e estética com naturalidade para valorizar você — com escuta, planejamento e atenção aos detalhes.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Agendar minha avaliação <Arrow />
              </a>
              <a className="text-link" href="#planejamento">Conheça o cuidado <span className="icon-down" aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-frame">
              <Image src="/images/dra-beatriz-hero.png" alt="Dra. Beatriz Rievers" fill priority sizes="(max-width: 800px) 88vw, 42vw" />
            </div>
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-signature" aria-hidden="true">
              <span>Sorrisos com</span><strong>intenção</strong>
            </div>
          </div>
        </div>

        <div className="hero-footer shell">
          <span>BURITIS</span><span className="hero-footer-line" /><span>CASTELO • BH</span>
          <span className="hero-footer-note">Naturalidade nasce de um bom planejamento.</span>
        </div>
      </section>

      <section className="manifesto" aria-label="Filosofia de trabalho">
        <div className="manifesto-track" aria-hidden="true">
          <span>ESCUTA</span><i className="icon-spark" /><span>PLANEJAMENTO</span><i className="icon-spark" /><span>NATURALIDADE</span><i className="icon-spark" /><span>CONFIANÇA</span><i className="icon-spark" />
        </div>
        <div className="manifesto-inner shell reveal">
          <span className="section-index">01 / ESSÊNCIA</span>
          <p>
            Um sorriso bonito não segue uma fórmula. Ele preserva o que faz você ser <em>você.</em>
          </p>
          <div className="manifesto-caption">
            <span />
            ESTÉTICA FEITA COM INTENÇÃO, DELICADEZA E VERDADE.
          </div>
        </div>
      </section>

      <section className="method section-pad" id="planejamento">
        <div className="shell method-grid">
          <div className="method-heading reveal">
            <span className="section-index">02 / PLANEJAMENTO</span>
            <h2>Estética que<br /><em>valoriza você.</em></h2>
            <div className="method-seal" aria-hidden="true">
              <span>BR</span><small>NATURALIDADE</small>
            </div>
          </div>

          <div className="method-content reveal">
            <p className="lead">
              Cada sorriso pede um plano <strong>verdadeiramente próprio.</strong>
            </p>
            <p>
              Antes de qualquer procedimento, a Dra. Beatriz observa forma, proporção, expressão e os seus objetivos. O resultado nasce do encontro entre técnica e sensibilidade — sem pressa e sem excessos.
            </p>
            <ol className="method-steps">
              <li><span>01</span><div><strong>Escuta individual</strong><p>Uma conversa aberta sobre o que você deseja mudar e preservar.</p></div></li>
              <li><span>02</span><div><strong>Análise do sorriso</strong><p>Detalhes de forma, cor, função e harmonia orientam as escolhas.</p></div></li>
              <li><span>03</span><div><strong>Plano personalizado</strong><p>Indicações construídas para o seu momento, com clareza em cada etapa.</p></div></li>
            </ol>
            <a className="outline-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Quero conversar com a equipe <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="protocol-section" id="procedimentos">
        <div className="protocol-visual">
          <Image src="/images/procedimento-beatriz.png" alt="Dra. Beatriz durante um atendimento" fill sizes="(max-width: 800px) 100vw, 45vw" />
          <div className="protocol-visual-label"><span>CUIDADO</span><span>PRECISÃO</span></div>
        </div>

        <div className="protocol-content">
          <span className="section-index section-index-light">03 / TRATAMENTOS</span>
          <h2>Detalhes que fazem a diferença.<br /><em>Sem excessos.</em></h2>
          <p>As possibilidades e combinações são indicadas somente depois de uma avaliação individual.</p>
          <div className="protocol-list">
            {procedures.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <i className="icon-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results section-pad" id="resultados">
        <div className="shell">
          <div className="results-heading reveal">
            <div>
              <span className="section-index">04 / RESULTADOS REAIS</span>
              <h2>Mudanças sutis.<br /><em>Impacto que se sente.</em></h2>
            </div>
            <p>Casos reais de pacientes atendidos pela Dra. Beatriz. Cada resultado parte de uma necessidade e de um planejamento únicos.</p>
          </div>

          <div className="result-gallery">
            {results.map((result, index) => (
              <figure className="result-card reveal" key={result.src}>
                <Image src={result.src} alt={`Resultado clínico de ${result.title.toLowerCase()}`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{result.title}</strong><small>{result.subtitle}</small></div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="results-note">
            <span className="icon-spark" aria-hidden="true" />
            <p>Imagens compartilhadas para apresentação do trabalho. Os resultados são individuais e podem variar. Todo procedimento depende de avaliação profissional.</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Ver mais no Instagram <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-photo">
          <Image src="/images/dra-beatriz-sobre.png" alt="Dra. Beatriz Rievers" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="about-photo-tag"><span>DRA.</span><strong>BEATRIZ<br />RIEVERS</strong></div>
        </div>

        <div className="about-copy">
          <span className="section-index section-index-light">05 / SOBRE</span>
          <p className="about-kicker">Odontologia estética com naturalidade.</p>
          <h2>Técnica no olhar.<br /><em>Leveza no resultado.</em></h2>
          <p>
            Para a Dra. Beatriz, estética começa na escuta. É preciso entender o sorriso, a rotina e as expectativas de cada paciente antes de decidir o que realmente faz sentido.
          </p>
          <p>
            Seu trabalho é guiado pelo planejamento e pela busca de um resultado harmônico — daqueles que chamam atenção pela beleza, não pelo procedimento.
          </p>
          <div className="credentials">
            <span><strong>FACETAS</strong> ESTÉTICA DENTAL</span>
            <span><strong>NATURALIDADE</strong> COMO DIREÇÃO</span>
            <span><strong>BELO HORIZONTE</strong> BURITIS • CASTELO</span>
          </div>
          <a className="light-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Acompanhe no Instagram <Arrow /></a>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="shell faq-grid">
          <div className="faq-title reveal">
            <span className="section-index">06 / DÚVIDAS</span>
            <h2>Antes de decidir,<br /><em>vamos conversar.</em></h2>
            <p>Clareza e cuidado fazem parte de todo o processo.</p>
          </div>
          <div className="faq-list reveal">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<i aria-hidden="true">+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-rings" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell final-cta-inner reveal">
          <BrandMark light />
          <span className="section-index section-index-light">SEU PRÓXIMO PASSO</span>
          <h2>Seu sorriso merece<br /><em>um olhar só para ele.</em></h2>
          <p>Agende uma avaliação e converse com a Dra. Beatriz sobre as possibilidades para você.</p>
          <a className="gold-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com a equipe no WhatsApp <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <a className="brand footer-brand" href="#inicio">
            <BrandMark light />
            <span className="brand-copy"><strong>Dra. Beatriz Rievers</strong><small>Odontologia estética</small></span>
          </a>
          <div className="footer-location"><small>ATENDIMENTO</small><strong>Buritis e Castelo<br />Belo Horizonte, MG</strong></div>
          <div className="footer-links"><small>CONECTE-SE</small><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 DRA. BEATRIZ RIEVERS</span><span>OS RESULTADOS PODEM VARIAR DE PESSOA PARA PESSOA.</span><a href="#inicio">VOLTAR AO TOPO <span className="icon-up" aria-hidden="true" /></a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp">
        <span>Fale com a equipe</span><i className="icon-arrow" aria-hidden="true" />
      </a>
    </main>
  );
}
