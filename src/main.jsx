import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const assets = {
  panorama: "/assets/panoramica-fuenlabrada.jpg",
  cityIcon: "/assets/fuenlabrada-icon.jpg",
  townHall: "/assets/ayuntamiento-fuenlabrada.avif",
  carlosIII: "/assets/PP3-Universidad-Carlos-III-de-Madrid.png",
  esri: "/assets/logo-esri.jpg",
  housePlug: "/assets/icono-casa-enchufe.png",
  houseSearch: "/assets/icono-casa-lupa.png",
  homes: "/assets/icono-tres-casas.png",
  point: "/assets/incono-punto.png",
  people: "/assets/gente-hablando.png",
  pixel: "/assets/pixelart_hor_500x274.png",
  eitelLogo: "/assets/eitel-logo.png",
  eitelLockup: "/assets/eitel-fuenlabrada-lockup.png",
  eitelPortada: "/assets/eitel-portada.png",
  energia: "/assets/eitel-energia.jpg",
  torres: "/assets/eitel-torres.jpg",
  eficiencia: "/assets/eitel-eficiencia-energetica.png",
  pobreza: "/assets/eitel-pobreza-energetica.png",
  analitica: "/assets/eitel-analitica-avanzada.png",
  sostenibilidad: "/assets/eitel-sostenibilidad.png",
  ue: "/assets/eitel-ue.jpg",
  ministerio: "/assets/eitel-ministerio.png",
  recuperacion: "/assets/eitel-recuperacion-transformacion.png",
  fuenlabrada2030: "/assets/logo-fuenlabrada-2030.png"
};

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "proyecto", label: "El Proyecto" },
  { id: "casos", label: "Casos de uso" },
  { id: "monitorizacion", label: "Monitorizacion" },
  { id: "noticias", label: "Noticias" },
  { id: "eventos", label: "Eventos" },
  { id: "blog", label: "Blog" },
  { id: "recursos", label: "Recursos" },
  { id: "contacto", label: "Contacto" }
];

const translations = {
  es_ES: {
    tagline: "Proyecto municipal EITEL",
    hero: "Descubre nuestro proyecto EITEL Fuenlabrada, que promueve hogares sin pobreza energetica en sus barrios.",
    strip: "La pobreza energetica afecta a entre un 20 o un 25 % de la ciudadania en Espana.",
    cta: "Solicitar informacion",
    secondary: "Ver recursos",
    projectTitle: "Una unidad inteligente para detectar, prevenir y reducir la vulnerabilidad energetica.",
    contactTitle: "Contacto y solicitudes"
  },
  en_GB: {
    tagline: "EITEL municipal project",
    hero: "Discover EITEL Fuenlabrada, a project promoting neighbourhoods with homes free from energy poverty.",
    strip: "Energy poverty affects between 20 and 25% of citizens in Spain.",
    cta: "Request information",
    secondary: "View resources",
    projectTitle: "An intelligent unit to detect, prevent and reduce energy vulnerability.",
    contactTitle: "Contact and enquiries"
  }
};

const focusCards = [
  {
    title: "Tu casa / tu edificio",
    subtitle: "Que es la pobreza energetica",
    text: "Un hogar esta en vulnerabilidad energetica cuando no puede cubrir sus necesidades basicas de energia, o cuando solo puede hacerlo a costa de renunciar a otros gastos esenciales.",
    image: assets.houseSearch
  },
  {
    title: "Tu energia",
    subtitle: "Que estamos haciendo",
    text: "EITEL revisa consumos, contratos, confort termico y estado de la vivienda para proponer soluciones a medida y priorizar intervenciones.",
    image: assets.housePlug
  },
  {
    title: "Tu barrio",
    subtitle: "Donde intervenimos",
    text: "El piloto comienza en barrios con parque residencial envejecido y hogares expuestos a mayor presion economica, calor y frio.",
    image: assets.homes
  },
  {
    title: "Tu confort",
    subtitle: "Cuales son los objetivos",
    text: "Reducir gasto, mejorar salud urbana, aumentar confort interior y crear una metodologia replicable para otros municipios.",
    image: assets.point
  }
];

const metrics = [
  { value: "8", label: "barrios monitorizados" },
  { value: "1.200", label: "hogares objetivo" },
  { value: "35%", label: "ahorro potencial medio" }
];

const eitelObjectives = [
  {
    title: "Eficiencia energetica",
    image: assets.eficiencia,
    text: "Optimizar el consumo en hogares y edificios mediante datos de uso, deteccion de consumos excesivos y recomendaciones de ahorro ajustadas a cada caso."
  },
  {
    title: "Pobreza energetica",
    image: assets.pobreza,
    text: "Identificar vulnerabilidades, priorizar ayudas y mejorar el acceso a energia asequible y segura para toda la ciudadania."
  },
  {
    title: "Analitica avanzada",
    image: assets.analitica,
    text: "Aplicar analisis de datos e inteligencia artificial para comprender patrones de consumo, anticipar riesgos y apoyar decisiones municipales."
  },
  {
    title: "Sostenibilidad",
    image: assets.sostenibilidad,
    text: "Reducir impacto ambiental, integrar energia renovable y avanzar hacia barrios mas eficientes, resilientes y saludables."
  }
];

const useCases = [
  {
    tag: "Generacion local",
    title: "Produccion energetica",
    text: "Control de generadores energeticos disponibles en el municipio, integrando produccion renovable, autoconsumo y potencial de cubierta."
  },
  {
    tag: "Analisis de consumo",
    title: "Consumo energetico",
    text: "Lectura agregada de la energia que requieren viviendas, equipamientos y barrios para detectar patrones, picos y oportunidades de ahorro."
  },
  {
    tag: "Eficiencia energetica",
    title: "Certificados energeticos",
    text: "Inventario de calificaciones y caracteristicas edificatorias para localizar edificios con mayor necesidad de mejora."
  },
  {
    tag: "Segmentacion urbana",
    title: "Perfil socioeconomico",
    text: "Cruce de indicadores sociales, climaticos y residenciales para priorizar intervenciones sin exponer informacion personal."
  }
];

const sensorIndicators = [
  "Temperatura interior: permite detectar frio o calor inadecuado en la vivienda.",
  "Humedad relativa: ayuda a prevenir condensaciones, moho y problemas de habitabilidad.",
  "Calidad ambiental: ofrece pistas sobre ventilacion y confort cotidiano.",
  "Presencia no invasiva: no usa camaras ni microfonos; ayuda a contextualizar habitos de uso."
];

const privacyItems = [
  "Minimizacion: solo se recogen datos necesarios para los fines autorizados.",
  "Anonimizacion y agregacion: los analisis se realizan evitando la identificacion directa de personas.",
  "Control de acceso: perfiles diferenciados para investigadores, administracion y operadores tecnicos.",
  "Trazabilidad: registro de operaciones, usos permitidos y criterios de intercambio.",
  "Gobernanza europea: alineacion con principios de federacion, seguridad y soberania del dato inspirados en GAIA-X."
];

const news = [
  {
    type: "Noticias",
    title: "EITEL Fuenlabrada inicia el mapa municipal de vulnerabilidad energetica",
    date: "05/05/2026",
    excerpt: "El Ayuntamiento activa una primera lectura territorial para cruzar vivienda, renta, clima y consumo energetico."
  },
  {
    type: "Noticias",
    title: "La Oficina EITEL atendera consultas sobre facturas, bono social y confort termico",
    date: "22/04/2026",
    excerpt: "El nuevo servicio acompana a familias y comunidades de propietarios para convertir datos en acciones utiles."
  },
  {
    type: "Noticias",
    title: "Carlos III y Esri se incorporan al piloto para reforzar investigacion y tecnologia GIS",
    date: "09/04/2026",
    excerpt: "La colaboracion permitira evaluar impacto, priorizar actuaciones y visualizar escenarios de vulnerabilidad."
  },
  {
    type: "Noticias",
    title: "Fuenlabrada prepara talleres vecinales sobre energia y rehabilitacion ligera",
    date: "26/03/2026",
    excerpt: "Las primeras sesiones explicaran medidas sencillas de ahorro, lectura de facturas y derechos energeticos."
  }
];

const events = [
  {
    date: "14 MAY",
    title: "Taller: entiende tu factura energetica",
    place: "Centro Civico La Serna",
    text: "Sesion practica para revisar potencia contratada, tarifa, bono social y consumos fantasmas."
  },
  {
    date: "28 MAY",
    title: "Mesa tecnica de barrios saludables",
    place: "Ayuntamiento de Fuenlabrada",
    text: "Encuentro con equipos sociales, vivienda, urbanismo y datos para priorizar zonas de intervencion."
  },
  {
    date: "11 JUN",
    title: "Ruta EITEL: confort de verano",
    place: "Loranca y Nuevo Versalles",
    text: "Paseo de diagnostico urbano sobre sombra, orientacion, islas de calor y viviendas vulnerables."
  }
];

const blogPosts = [
  {
    category: "Pobreza energetica",
    title: "Pobreza energetica oculta: cuando el problema no aparece en la factura",
    author: "Equipo EITEL",
    date: "03/05/2026",
    text: "Muchas familias reducen consumos por debajo de lo saludable para evitar impagos. Detectarlo exige datos, escucha y trabajo de proximidad."
  },
  {
    category: "Datos urbanos",
    title: "Como un mapa puede ayudar a decidir donde intervenir primero",
    author: "Laboratorio GIS",
    date: "20/04/2026",
    text: "La lectura por capas permite comparar antiguedad de edificios, renta, temperatura, ayudas y consumos sin identificar directamente a personas."
  },
  {
    category: "Confort",
    title: "Cinco medidas de bajo coste para mejorar una vivienda en verano",
    author: "Oficina EITEL",
    date: "12/04/2026",
    text: "Ventilacion nocturna, sombreamiento, burletes, uso eficiente de equipos y revision de habitos pueden reducir riesgo termico."
  }
];

const resources = [
  "Guia para entender la factura electrica y detectar conceptos revisables.",
  "Checklist de confort termico para invierno y verano.",
  "Modelo de autorizacion para diagnostico energetico de vivienda.",
  "Mapa de recursos municipales: ayudas, oficina de consumo y servicios sociales.",
  "Ficha para comunidades de propietarios con medidas de rehabilitacion ligera.",
  "Preguntas frecuentes sobre bono social, cortes de suministro y derechos."
];

const resourcePages = [
  { route: "casos", title: "Casos de uso EITEL", text: "Produccion, consumo, certificados energeticos y perfil socioeconomico." },
  { route: "monitorizacion", title: "Monitorizacion y sensores", text: "Que mide el sensor confort, para que sirve y como se usa." },
  { route: "seguridad", title: "Seguridad y privacidad", text: "Etica, acceso, anonimizacion y gobernanza del espacio de datos." },
  { route: "proyecto", title: "Espacio de datos", text: "Vision, objetivos, metodologia y socios del proyecto en Fuenlabrada." }
];

function getRoute() {
  return window.location.hash.replace("#/", "") || "inicio";
}

function Header({ route, setRoute, lang, setLang }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setRoute(id);
    setOpen(false);
    window.location.hash = `/${id}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <button className="brand reset-button" type="button" onClick={() => go("inicio")} aria-label="EITEL Fuenlabrada inicio">
        <img src={assets.cityIcon} alt="" />
        <span>
          <strong>EITEL Fuenlabrada</strong>
          <small>Hogares sin pobreza energetica</small>
        </span>
      </button>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="main-nav" className={open ? "is-open" : ""}>
        {navItems.map((item) => (
          <button className={route === item.id ? "active" : ""} type="button" key={item.id} onClick={() => go(item.id)}>
            {item.label}
          </button>
        ))}
        <div className="lang-switch" aria-label="Idioma">
          {["es_ES", "en_GB"].map((code) => (
            <button className={lang === code ? "active" : ""} type="button" key={code} onClick={() => setLang(code)}>
              {code}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero({ copy, compact = false }) {
  return (
    <section className={compact ? "hero page-hero" : "hero"}>
      <img src={assets.panorama} alt="Vista panoramica de Fuenlabrada" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="tag">{copy.tagline}</p>
        <h1>{copy.hero}</h1>
        <div className="impact-strip">
          <span />
          <p>{copy.strip}</p>
        </div>
        <div className="hero-actions">
          <a className="button" href="#/contacto">{copy.cta}</a>
          <a className="button secondary" href="#/recursos">{copy.secondary}</a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Home({ copy }) {
  return (
    <>
      <Hero copy={copy} />
      <DataSpaceIntro />
      <ProjectSummary copy={copy} />
      <Metrics />
      <FocusGrid />
      <ObjectiveGrid />
      <MapStory />
      <LatestPreview />
      <Partners />
      <Office />
      <FundingStrip />
    </>
  );
}

function DataSpaceIntro() {
  return (
    <section className="section data-space">
      <div className="visual-card">
        <img src={assets.energia} alt="Energia y ciudad conectadas por datos" />
      </div>
      <div>
        <p className="eyebrow">Espacio de datos EITEL</p>
        <h2>Energia Inteligente para Todos, desde los gobiernos locales.</h2>
        <p>
          EITEL impulsa un espacio de datos energeticos para que municipios como Fuenlabrada puedan acceder, compartir y reutilizar informacion fiable sobre energia, vivienda y vulnerabilidad. El objetivo es pasar de decisiones fragmentadas a una gestion local basada en evidencias.
        </p>
        <p>
          El proyecto sigue principios europeos de federacion, seguridad y gobernanza del dato: cada entidad conserva control sobre su informacion, pero puede colaborar bajo reglas claras, trazables y orientadas al interes publico.
        </p>
      </div>
    </section>
  );
}

function ProjectSummary({ copy }) {
  return (
    <section className="section intro">
      <div>
        <p className="eyebrow">El Proyecto</p>
        <h2>{copy.projectTitle}</h2>
      </div>
      <div className="intro-copy">
        <p>
          Inspirado por la metodologia de Hogares Saludables, EITEL Fuenlabrada plantea una unidad de inteligencia energetica capaz de identificar hogares en riesgo, atender casos prioritarios y disenar soluciones personalizadas.
        </p>
        <p>
          El enfoque combina tres escalas: vivienda, edificio y barrio. La prioridad no es solo pagar menos, sino vivir mejor: temperatura adecuada, salud, seguridad de suministro y autonomia ciudadana.
        </p>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics" aria-label="Indicadores del proyecto">
      {metrics.map((metric) => (
        <article key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </article>
      ))}
    </section>
  );
}

function FocusGrid() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Toda la informacion a un clic" title="Cuatro puertas de entrada para entender y actuar." />
      <div className="focus-grid">
        {focusCards.map((card) => (
          <article className="focus-card" key={card.title}>
            <img src={card.image} alt="" />
            <span>{card.subtitle}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ObjectiveGrid() {
  return (
    <section className="section objectives">
      <SectionHeader eyebrow="Objetivos EITEL" title="Un proyecto de energia, datos y bienestar urbano." text="La version anterior de EITEL ya planteaba cuatro lineas de impacto. Las integramos en esta nueva experiencia con una lectura mas clara y orientada a barrios." />
      <div className="objective-grid">
        {eitelObjectives.map((objective) => (
          <article key={objective.title}>
            <img src={objective.image} alt="" />
            <h3>{objective.title}</h3>
            <p>{objective.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MapStory() {
  return (
    <section className="map-story">
      <div className="map-copy">
        <p className="eyebrow">Inteligencia territorial</p>
        <h2>Fuenlabrada se lee por capas: vivienda, energia, renta, salud urbana y clima.</h2>
        <p>
          La plataforma GIS de EITEL sirve para priorizar actuaciones y evaluar impacto. Cada zona puede compararse con criterios comunes sin exponer informacion personal: antiguedad del edificio, renta, ayudas, temperatura urbana, rehabilitacion pendiente y demanda energetica.
        </p>
        <a className="button" href="#/proyecto">Conocer metodologia</a>
      </div>
      <div className="map-panel" aria-hidden="true">
        <span className="block b1" />
        <span className="block b2" />
        <span className="block b3" />
        <span className="block b4" />
        <span className="block b5" />
        <span className="line l1" />
        <span className="line l2" />
        <span className="line l3" />
      </div>
    </section>
  );
}

function LatestPreview() {
  return (
    <section className="section split-band">
      <div>
        <p className="eyebrow">Lecturas recomendadas</p>
        <h2>Actualidad, aprendizaje y convocatorias.</h2>
      </div>
      <div className="mini-list">
        {[news[0], events[0], blogPosts[0]].map((item) => (
          <article key={item.title}>
            <span>{item.type || item.category || item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt || item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section partners">
      <SectionHeader eyebrow="Socios" title="Investigacion, datos y territorio." />
      <div className="partner-row">
        <article>
          <img src={assets.carlosIII} alt="Universidad Carlos III de Madrid" />
          <div>
            <h3>Universidad Carlos III de Madrid</h3>
            <p>Modelos de evaluacion, medicion de impacto y analisis socioeconomico para orientar decisiones con evidencia.</p>
          </div>
        </article>
        <article>
          <img src={assets.esri} alt="Esri" />
          <div>
            <h3>Esri</h3>
            <p>Tecnologia GIS para visualizar vulnerabilidad energetica, priorizar actuaciones y compartir resultados con equipos municipales.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function FundingStrip() {
  return (
    <section className="funding-strip" aria-label="Financiacion del proyecto">
      <div>
        <img src={assets.fuenlabrada2030} alt="Fuenlabrada 2030" />
        <img src={assets.ue} alt="Next Generation EU" />
        <img src={assets.recuperacion} alt="Plan de Recuperacion, Transformacion y Resiliencia" />
        <img src={assets.ministerio} alt="Gobierno de Espana" />
      </div>
      <p>Energia Inteligente para Todos: un enfoque desde los gobiernos locales. Proyecto orientado a transformar la gestion energetica municipal mediante datos, seguridad y colaboracion publico-tecnica.</p>
    </section>
  );
}

function Office() {
  return (
    <section className="office">
      <img src={assets.townHall} alt="Ayuntamiento de Fuenlabrada" />
      <div>
        <p className="eyebrow">Oficina EITEL</p>
        <h2>Atencion cercana para pasar del diagnostico a la accion.</h2>
        <ul>
          <li>Revision de facturas y potencia contratada.</li>
          <li>Tramitacion de ayudas energeticas y bono social.</li>
          <li>Consejos de confort termico para verano e invierno.</li>
          <li>Derivacion tecnica para comunidades de propietarios.</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectPage({ copy }) {
  return (
    <>
      <Hero compact copy={{ ...copy, tagline: "El Proyecto", hero: "EITEL Fuenlabrada: hogares saludables para el bienestar de la ciudadania." }} />
      <section className="section article-page">
        <SectionHeader
          eyebrow="Unidad inteligente de vulnerabilidad energetica"
          title="Un servicio publico preventivo, transversal y medible."
          text="EITEL adapta a Fuenlabrada la logica de los proyectos europeos de innovacion urbana: detectar pobreza energetica oculta, intervenir con soluciones personalizadas y aprender de los datos para replicar el modelo."
        />
        <div className="article-grid">
          <article>
            <h3>Objetivo</h3>
            <p>Transformar la gestion energetica local mediante un ecosistema de datos robusto, capaz de optimizar eficiencia, promover renovables y mejorar la respuesta ante la pobreza energetica.</p>
          </article>
          <article>
            <h3>Escalas de trabajo</h3>
            <p>Casa, edificio y barrio. La vivienda explica el confort; el edificio explica la eficiencia; el barrio explica exposicion, servicios, movilidad, sombra y redes de apoyo.</p>
          </article>
          <article>
            <h3>Datos del piloto</h3>
            <ul>
              <li>Duracion estimada: 36 meses.</li>
              <li>Coordinacion: Ayuntamiento de Fuenlabrada.</li>
              <li>Socios: Universidad Carlos III de Madrid y Esri.</li>
              <li>Ambito inicial: barrios con mayor vulnerabilidad energetica y parque residencial anterior a 1980.</li>
            </ul>
          </article>
          <article>
            <h3>Metodologia</h3>
            <p>Analisis GIS, entrevistas, mediciones interiores, lectura de consumos, indicadores sociales agregados, sensores de confort y evaluacion de impacto antes/despues.</p>
          </article>
        </div>
      </section>
      <section className="section image-narrative">
        <img src={assets.torres} alt="Torres y paisaje urbano de Fuenlabrada" />
        <div>
          <p className="eyebrow">Fuenlabrada como laboratorio urbano</p>
          <h2>El proyecto conecta energia, vivienda y decision publica.</h2>
          <p>La experiencia anterior de EITEL define el espacio de datos como una herramienta para gobiernos locales. En esta web lo acercamos a la ciudadania: que se mide, por que se mide, como se protege y que decisiones permite tomar.</p>
        </div>
      </section>
      <ObjectiveGrid />
      <FocusGrid />
      <Partners />
      <FundingStrip />
    </>
  );
}

function UseCasesPage({ copy }) {
  return (
    <>
      <Hero compact copy={{ ...copy, tagline: "Casos de uso", hero: "La energia de tu localidad, en un solo lugar.", strip: "Pilotos creados con datos energeticos para facilitar decisiones urbanas." }} />
      <section className="section use-cases">
        <SectionHeader eyebrow="Pilotos EITEL" title="Cuatro casos para convertir datos en accion municipal." text="La pagina anterior de EITEL proponia pilotos de produccion, consumo, certificados y perfil socioeconomico. Los desarrollamos aqui con enfoque Fuenlabrada." />
        <div className="usecase-grid">
          {useCases.map((item) => (
            <article key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <MapStory />
    </>
  );
}

function MonitoringPage({ copy }) {
  return (
    <>
      <Hero compact copy={{ ...copy, tagline: "Monitorizacion", hero: "Sensores de confort para entender como se vive una vivienda.", strip: "Medicion no invasiva, temporal y orientada a mejorar salud, confort y gasto energetico." }} />
      <section className="section sensor-page">
        <div>
          <p className="eyebrow">Sensor confort</p>
          <h2>Una herramienta pequena para detectar riesgos que no siempre se ven.</h2>
          <p>El sensor de confort monitoriza condiciones de habitabilidad en viviendas vulnerables. No utiliza camaras ni microfonos; su objetivo es medir variables ambientales para generar recomendaciones utiles y priorizar asistencia.</p>
          <p>La informacion permite identificar situaciones criticas, ajustar consejos de ahorro y detectar pobreza energetica escondida: hogares que no encienden calefaccion o refrigeracion por miedo al gasto.</p>
        </div>
        <div className="sensor-card">
          {sensorIndicators.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>
      <section className="section article-page">
        <SectionHeader eyebrow="Uso responsable" title="Cesion temporal, seguridad y acompanamiento tecnico." />
        <div className="article-grid">
          <article>
            <h3>Beneficios para el hogar</h3>
            <p>Alertas de confort, recomendaciones concretas, mejor ajuste de habitos y una conversacion tecnica basada en condiciones reales de la vivienda.</p>
          </article>
          <article>
            <h3>Beneficios para el ayuntamiento</h3>
            <p>Priorizacion de ayudas, deteccion temprana de vulnerabilidad, seguimiento de intervenciones y mejora de politicas publicas basadas en evidencia.</p>
          </article>
        </div>
      </section>
    </>
  );
}

function PrivacyPage({ copy }) {
  return (
    <>
      <Hero compact copy={{ ...copy, tagline: "Seguridad y privacidad", hero: "Un espacio de datos solo funciona si es seguro, transparente y gobernado.", strip: "EITEL prioriza confidencialidad, minimizacion, control de acceso y trazabilidad." }} />
      <section className="section privacy-page">
        <SectionHeader eyebrow="Etica del dato" title="Privacidad desde el diseno." text="La informacion energetica y social puede ayudar a mejorar vidas, pero debe gestionarse con reglas estrictas. Por eso EITEL separa identificacion, analisis y toma de decisiones." />
        <div className="privacy-list">
          {privacyItems.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>
      <TreatmentPageInline />
    </>
  );
}

function TreatmentPageInline() {
  return (
    <section className="section treatment">
      <div>
        <p className="eyebrow">Tratamiento de datos personales</p>
        <h2>Anonimizacion, agregacion y controles para reducir riesgos.</h2>
      </div>
      <div className="treatment-grid">
        <article>
          <h3>Anonimizacion</h3>
          <p>Se eliminan o transforman identificadores directos y se aplican tecnicas para reducir el riesgo de reidentificacion cuando los datos se usan para investigacion o analisis municipal.</p>
        </article>
        <article>
          <h3>Agregacion</h3>
          <p>Los indicadores se muestran por zonas, edificios o grupos suficientemente amplios para orientar decisiones sin exponer situaciones individuales.</p>
        </article>
        <article>
          <h3>Acceso limitado</h3>
          <p>Cada perfil accede solo a la informacion necesaria: visualizacion agregada, analisis tecnico o gestion de casos, segun permisos definidos.</p>
        </article>
      </div>
    </section>
  );
}

function ListingPage({ eyebrow, title, text, items, kind }) {
  return (
    <>
      <Hero compact copy={{ ...translations.es_ES, tagline: eyebrow, hero: title, strip: text }} />
      <section className="section listing">
        <div className="listing-grid">
          {items.map((item) => (
            <article className="listing-card" key={item.title}>
              <span>{item.type || item.category || item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt || item.text}</p>
              <small>{item.date || item.author}</small>
              {kind === "eventos" ? <strong>{item.place}</strong> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function EventsPage() {
  return (
    <>
      <Hero compact copy={{ ...translations.es_ES, tagline: "Eventos", hero: "Convocatorias, talleres y rutas para aprender energia desde el barrio.", strip: "Actividades gratuitas y abiertas para vecinos, comunidades y profesionales." }} />
      <section className="section event-list">
        {events.map((event) => (
          <article key={event.title}>
            <div className="event-date">{event.date}</div>
            <div>
              <h3>{event.title}</h3>
              <p>{event.text}</p>
              <strong>{event.place}</strong>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function ResourcesPage() {
  return (
    <>
      <Hero compact copy={{ ...translations.es_ES, tagline: "Recursos", hero: "Herramientas practicas para ahorrar energia y ganar confort.", strip: "Guias, fichas y modelos pensados para hogares, comunidades y equipos municipales." }} />
      <section className="section resources">
        <div className="resource-panel">
          <img src={assets.people} alt="Personas en una sesion participativa" />
          <div>
            <h2>Biblioteca EITEL</h2>
            <p>Materiales preparados para consulta ciudadana. Los documentos definitivos podran descargarse desde esta seccion cuando la oficina publique cada version.</p>
          </div>
        </div>
        <div className="resource-links">
          {resourcePages.map((page) => (
            <a href={`#/${page.route}`} key={page.route}>
              <span>Pagina</span>
              <h3>{page.title}</h3>
              <p>{page.text}</p>
            </a>
          ))}
        </div>
        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource}>
              <span>PDF</span>
              <h3>{resource}</h3>
              <button type="button">Proximamente</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ copy }) {
  return (
    <>
      <Hero compact copy={{ ...copy, tagline: "Contacto", hero: copy.contactTitle, strip: "Cuentanos tu caso si necesitas revisar tu factura, mejorar el confort de tu vivienda o colaborar con el proyecto." }} />
      <section className="section contact-layout">
        <div>
          <p className="eyebrow">Oficina EITEL Fuenlabrada</p>
          <h2>Atencion presencial, telefonica y por correo.</h2>
          <p>Plaza de la Constitucion, 1. 28943 Fuenlabrada, Madrid.</p>
          <p><strong>Telefono:</strong> 010 / 91 649 70 00</p>
          <p><strong>Email:</strong> eitel@fuenlabrada.es</p>
        </div>
        <form className="contact-form">
          <label>Nombre<input type="text" placeholder="Tu nombre" /></label>
          <label>Email<input type="email" placeholder="tu@email.es" /></label>
          <label>Motivo<select defaultValue="factura"><option value="factura">Factura energetica</option><option value="bono">Bono social</option><option value="vivienda">Diagnostico de vivienda</option><option value="colaborar">Colaborar</option></select></label>
          <label>Mensaje<textarea rows="5" placeholder="Resume tu consulta" /></label>
          <button className="button" type="button">Enviar consulta</button>
        </form>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>EITEL Fuenlabrada</strong>
        <span>Hogares sin pobreza energetica</span>
      </div>
      <div>
        <a href="mailto:eitel@fuenlabrada.es">eitel@fuenlabrada.es</a>
        <span>010 / 91 649 70 00</span>
      </div>
    </footer>
  );
}

function App() {
  const [route, setRoute] = useState(getRoute);
  const [lang, setLang] = useState("es_ES");
  const copy = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const page = {
    inicio: <Home copy={copy} />,
    proyecto: <ProjectPage copy={copy} />,
    casos: <UseCasesPage copy={copy} />,
    monitorizacion: <MonitoringPage copy={copy} />,
    seguridad: <PrivacyPage copy={copy} />,
    noticias: <ListingPage eyebrow="Noticias" title="Actualidad de EITEL Fuenlabrada." text="Avances del proyecto, colaboraciones y resultados del piloto municipal." items={news} />,
    eventos: <EventsPage />,
    blog: <ListingPage eyebrow="Blog" title="Firmas y aprendizaje contra la pobreza energetica." text="Reflexiones sobre datos urbanos, confort, rehabilitacion, derechos y participacion ciudadana." items={blogPosts} />,
    recursos: <ResourcesPage />,
    contacto: <ContactPage copy={copy} />
  }[route] || <Home copy={copy} />;

  return (
    <>
      <Header route={route} setRoute={setRoute} lang={lang} setLang={setLang} />
      <main>{page}</main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
