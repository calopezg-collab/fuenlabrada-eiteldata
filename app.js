const assets = {
  panorama: "assets/panoramica-fuenlabrada.jpg",
  townHallOld: "assets/ayuntamiento-fuenlabrada-antiguo.jpg",
  culturalCenter: "assets/centro-cultural-fuenlabrada.jpg",
  park: "assets/parque-fuenlabrada.jpg",
  cityIcon: "assets/fuenlabrada-icon.jpg",
  townHall: "assets/ayuntamiento-fuenlabrada.avif",
  carlosIII: "assets/PP3-Universidad-Carlos-III-de-Madrid.png",
  esri: "assets/logo-esri.jpg",
  housePlug: "assets/icono-casa-enchufe.png",
  houseSearch: "assets/icono-casa-lupa.png",
  homes: "assets/icono-tres-casas.png",
  point: "assets/incono-punto.png",
  people: "assets/gente-hablando.png",
  energia: "assets/eitel-energia.jpg",
  torres: "assets/eitel-torres.jpg",
  eficiencia: "assets/eitel-eficiencia-energetica.png",
  pobreza: "assets/eitel-pobreza-energetica.png",
  analitica: "assets/eitel-analitica-avanzada.png",
  sostenibilidad: "assets/eitel-sostenibilidad.png",
  ue: "assets/eitel-ue.jpg",
  ministerio: "assets/eitel-ministerio.png",
  recuperacion: "assets/eitel-recuperacion-transformacion.png",
  fuenlabrada2030: "assets/logo-fuenlabrada-2030.png",
  sensorConfort: "assets/sensor-confort.png",
  sensorConfortSalon: "assets/sensor-confort-salon.jpg",
  autorizacionSensores: "assets/modelo-autorizacion-sensores.pdf",
  autorizacionDatadis: "assets/modelo-autorizacion-datadis.pdf",
  aytoLogo: "assets/logo-ayuntamiento-fuenlabrada.png",
  imvfLogo: "assets/logo-imvf.png",
  cartelAyudas: "assets/cartel-ayudas-fuenlabrada.jpg"
};

const contactEmail = "eitel@fuenlabrada.es";
const contactPhone = "91 649 14 30";
const contactAddress = "Calle Norte, 11. 28944 Fuenlabrada, Madrid.";

const externalLinks = {
  ayuntamiento: "https://www.ayto-fuenlabrada.es",
  imvfSede: "https://sede.imvfuenlabrada.es/",
  ayudaLuzGas: "https://sede.imvfuenlabrada.es/tablondeanuncios/anuncio.aspx?id=76857",
  ayudaSolarVentanas: "https://sede.imvfuenlabrada.es/tablondeanuncios/anuncio.aspx?id=76990",
  bonoSocial: "https://www.miteco.gob.es/es/energia/pobreza-energetica/pe-001.html",
  asesoramientoEnergetico: "https://www.ayto-fuenlabrada.es/web/portal/w/el-ayuntamiento-habilita-un-nuevo-servicio-de-informaci%C3%B3n-y-asesoramiento-energ%C3%A9tico",
  rtveReportaje: "https://www.rtve.es/play/videos/informativo-de-madrid/informativo-madrid-1-23-07-26/17167047/",
  rtveEmbed: "https://www.rtve.es/drmn/embed/video/17167047"
};

const navItems = [
  ["inicio", "Inicio"],
  ["proyecto", "El Proyecto"],
  ["monitorizacion", "Monitorización"],
  ["noticias", "Noticias"],
  ["recursos", "Recursos"],
  ["faq", "FAQ"],
  ["buscar", "Buscar"],
  ["contacto", "Contacto"]
];

const pageLabels = {
  ...Object.fromEntries(navItems),
  seguridad: "Seguridad y privacidad"
};

const legalLinks = [
  ["Aviso Legal", "https://www.ayto-fuenlabrada.es/web/portal/aviso-legal"],
  ["Protección de datos", "https://www.ayto-fuenlabrada.es/web/portal/proteccion-datos"],
  ["Política de Cookies", "https://www.ayto-fuenlabrada.es/web/portal/politica-cookies"],
  ["Accesibilidad", "https://www.ayto-fuenlabrada.es/web/portal/accesibilidad"],
  ["Mapa Web", "sitemap.xml"]
];

const translations = {
  es_ES: {
    tagline: "Proyecto municipal Bienestar en el Hogar",
    hero: "Bienestar en el Hogar: el proyecto de Fuenlabrada para medir y reducir la pobreza energética en los hogares del municipio.",
    strip: "La pobreza energética afecta a entre un 20 y un 25 % de la ciudadanía en España.",
    cta: "Solicitar información",
    secondary: "Ver recursos",
    projectTitle: "Una unidad inteligente para detectar, prevenir y reducir la vulnerabilidad energética.",
    contactTitle: "Contacto y solicitudes"
  },
  en_GB: {
    tagline: "Bienestar en el Hogar municipal project",
    hero: "Wellbeing at Home: Fuenlabrada's project to measure and reduce energy poverty in local households.",
    strip: "Energy poverty affects between 20 and 25% of citizens in Spain.",
    cta: "Request information",
    secondary: "View resources",
    projectTitle: "An intelligent unit to detect, prevent and reduce energy vulnerability.",
    contactTitle: "Contact and enquiries"
  }
};

const focusCards = [
  ["Tu casa / tu edificio", "Qué es la pobreza energética", "Un hogar está en vulnerabilidad energética cuando no puede cubrir sus necesidades básicas de energía, o cuando solo puede hacerlo a costa de renunciar a otros gastos esenciales.", assets.houseSearch],
  ["Tu energía", "Qué estamos haciendo", "EITEL revisa consumos, contratos, confort térmico y estado de la vivienda para proponer soluciones a medida y priorizar intervenciones.", assets.housePlug],
  ["Tu barrio", "Dónde intervenimos", "El piloto comienza en barrios con parque residencial envejecido y hogares expuestos a mayor presión económica, calor y frío.", assets.homes],
  ["Tu confort", "Cuáles son los objetivos", "Reducir gasto, mejorar salud urbana, aumentar confort interior y crear una metodología replicable para otros municipios.", assets.point]
];

const objectives = [
  ["Eficiencia energética", assets.eficiencia, "Optimizar el consumo en hogares y edificios mediante datos de uso, detección de consumos excesivos y recomendaciones de ahorro ajustadas a cada caso."],
  ["Pobreza energética", assets.pobreza, "Identificar vulnerabilidades, priorizar ayudas y mejorar el acceso a energía asequible y segura para toda la ciudadanía."],
  ["Analítica avanzada", assets.analitica, "Aplicar análisis de datos e inteligencia artificial para comprender patrones de consumo, anticipar riesgos y apoyar decisiones municipales."],
  ["Sostenibilidad", assets.sostenibilidad, "Reducir impacto ambiental, integrar energía renovable y avanzar hacia barrios más eficientes, resilientes y saludables."]
];

const useCases = [
  ["Generación local", "Producción energética", "Control de generadores energéticos disponibles en el municipio, integrando producción renovable, autoconsumo y potencial de cubierta."],
  ["Análisis de consumo", "Consumo energético", "Lectura agregada de la energía que requieren viviendas, equipamientos y barrios para detectar patrones, picos y oportunidades de ahorro."],
  ["Eficiencia energética", "Certificados energéticos", "Inventario de calificaciones y características edificatorias para localizar edificios con mayor necesidad de mejora."],
  ["Segmentación urbana", "Perfil socioeconómico", "Cruce de indicadores sociales, climáticos y residenciales para priorizar intervenciones sin exponer información personal."]
];

const sensorIndicators = [
  ["Temperatura", "Permite detectar si la vivienda está dentro de umbrales de bienestar y confort o si existe un gasto excesivo o muy escaso en calefacción o refrigeración."],
  ["Humedad relativa", "Fundamental para prevenir moho y condensaciones que pueden agravar enfermedades respiratorias, asma o alergias."],
  ["CO2", "Indica la calidad del aire y la necesidad de ventilación. Un nivel alto afecta al descanso, la concentración y el bienestar diario."],
  ["Presencia", "Ayuda a entender cuándo está habitada la casa para ajustar los consejos de ahorro energético a los hábitos reales de la familia."]
];

const privacyItems = [
  "Minimización: solo se recogen datos necesarios para los fines autorizados.",
  "Anonimización y agregación: los análisis se realizan evitando la identificación directa de personas.",
  "Control de acceso: perfiles diferenciados para investigadores, administración y operadores técnicos.",
  "Trazabilidad: registro de operaciones, usos permitidos y criterios de intercambio.",
  "Gobernanza europea: alineación con principios de federación, seguridad y soberanía del dato inspirados en GAIA-X."
];

const news = [
  ["IMVF", "Ayudas Vivienda Joven para el pago de luz y gas", "Convocatoria 2026", "Información oficial de la convocatoria gestionada por el Instituto Municipal de la Vivienda de Fuenlabrada.", externalLinks.ayudaLuzGas],
  ["IMVF", "Ayudas para energía solar y cambio de ventanas", "Convocatoria 2026", "Subvenciones municipales para instalar energía solar y sustituir ventanas por soluciones más eficientes.", externalLinks.ayudaSolarVentanas],
  ["Ayuntamiento", "Servicio de información y asesoramiento energético", "Ayuntamiento de Fuenlabrada", "Servicio municipal gratuito para resolver dudas sobre facturas, tarifas y ayudas energéticas.", externalLinks.asesoramientoEnergetico],
  ["MITECO", "Bono social eléctrico", "Información oficial", "Requisitos, descuentos y solicitud del bono social eléctrico publicados por el Ministerio para la Transición Ecológica.", externalLinks.bonoSocial],
  ["RTVE", "Informativo Madrid 1 - 23/07/26", "23/07/2026", "RTVE emitió un reportaje sobre el proyecto EITEL. La pieza aparece a partir del minuto 8:58 del informativo.", externalLinks.rtveReportaje]
];

const resources = [
  ["PDF", "Autorización para sensores", "Modelo para aceptar la instalación temporal del sensor de confort y el tratamiento de datos ambientales.", assets.autorizacionSensores],
  ["PDF", "Autorización Datadis", "Modelo para permitir la consulta técnica de datos de consumo eléctrico con fines de diagnóstico.", assets.autorizacionDatadis],
  ["IMVF", "Sede electrónica del IMVF", "Acceso a trámites y convocatorias oficiales del Instituto Municipal de la Vivienda de Fuenlabrada.", externalLinks.imvfSede],
  ["MITECO", "Bono social eléctrico", "Información oficial sobre requisitos, descuentos y solicitud del bono social.", externalLinks.bonoSocial]
];

const faqs = [
  ["¿Qué es Bienestar en el Hogar?", "Es el proyecto municipal de Fuenlabrada, dentro de la iniciativa europea EITEL, para medir, comprender y reducir la pobreza energética mediante datos de vivienda, consumo, confort interior y contexto urbano."],
  ["¿Para qué sirve el sensor de confort?", "Permite conocer temperatura, humedad, CO2 y presencia sin cámaras ni micrófonos, para orientar recomendaciones técnicas y detectar riesgos de habitabilidad."],
  ["¿Quién puede solicitar información?", "Hogares, comunidades de propietarios, entidades vecinales y profesionales que necesiten información sobre ahorro energético, confort, bono social o participación en el piloto."],
  ["¿Qué datos se tratan?", "Solo los datos necesarios para el diagnóstico y el acompañamiento técnico. El proyecto prioriza minimización, agregación, control de acceso y trazabilidad."],
  ["¿Dónde puedo descargar autorizaciones?", "Los modelos de autorización para sensores y Datadis están disponibles en la página de Monitorización."],
  ["¿Cómo contacto con la oficina EITEL?", `Puedes llamar al ${contactPhone} o escribir a ${contactEmail}. El formulario de contacto prepara un correo con la consulta introducida.`]
];

let route = getRoute();
let lang = "es_ES";
let searchQuery = "";

function getRoute() {
  return location.hash.replace("#/", "") || "inicio";
}

function go(nextRoute) {
  location.hash = `/${nextRoute}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function breadcrumb() {
  if (route === "inicio") return "";
  const current = pageLabels[route] || "Inicio";
  return `
    <nav class="breadcrumb" aria-label="Miga de pan">
      <a href="#/inicio">Inicio</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">${current}</span>
    </nav>`;
}

function header() {
  return `
    <header class="site-header">
      <button class="brand reset-button" type="button" data-route="inicio" aria-label="Bienestar en el Hogar inicio">
        <span class="institution-logos" aria-label="Ayuntamiento de Fuenlabrada e IMVF">
          <img class="town-hall-logo" src="${assets.aytoLogo}" alt="Ayuntamiento de Fuenlabrada">
          <img class="imvf-logo" src="${assets.imvfLogo}" alt="Instituto Municipal de Vivienda de Fuenlabrada">
        </span>
        <span class="brand-copy"><strong>Bienestar en el Hogar</strong><small>Fuenlabrada, hogares sin pobreza energética</small></span>
      </button>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
      <nav id="main-nav">
        ${navItems.map(([id, label]) => `<button class="${route === id ? "active" : ""}" type="button" data-route="${id}">${label}</button>`).join("")}
        <div class="lang-switch" aria-label="Idioma">
          <button class="${lang === "es_ES" ? "active" : ""}" type="button" data-lang="es_ES">es_ES</button>
          <button class="${lang === "en_GB" ? "active" : ""}" type="button" data-lang="en_GB">en_GB</button>
        </div>
      </nav>
    </header>`;
}

function hero(copy, compact = false) {
  const image = copy.heroImage || assets.panorama;
  const imageAlt = copy.heroAlt || "Vista panorámica de Fuenlabrada";
  return `
    <section class="hero ${compact ? "page-hero" : ""}">
      <img src="${image}" alt="${imageAlt}">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        ${compact ? breadcrumb() : ""}
        <p class="tag">${copy.tagline}</p>
        <h1>${copy.hero}</h1>
        <div class="impact-strip"><span></span><p>${copy.strip}</p></div>
        <div class="hero-actions">
          <a class="button" href="#/contacto">${copy.cta}</a>
          <a class="button secondary" href="#/recursos">${copy.secondary}</a>
        </div>
      </div>
    </section>`;
}

function sectionHeader(eyebrow, title, text = "") {
  return `<div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}</div>`;
}

function dataSpaceIntro() {
  return `
    <section class="section data-space">
      <div class="visual-card"><img src="${assets.energia}" alt="Energía y ciudad conectadas por datos"></div>
      <div>
        <p class="eyebrow">Espacio de datos EITEL</p>
        <h2>Energía Inteligente para Todos, desde los gobiernos locales.</h2>
        <p>EITEL impulsa un espacio de datos energéticos para que municipios como Fuenlabrada puedan acceder, compartir y reutilizar información fiable sobre energía, vivienda y vulnerabilidad.</p>
        <p>El proyecto sigue principios europeos de federación, seguridad y gobernanza del dato: cada entidad conserva control sobre su información, pero puede colaborar bajo reglas claras, trazables y orientadas al interés público.</p>
      </div>
    </section>`;
}

function projectSummary(copy) {
  return `
    <section class="section intro">
      <div><p class="eyebrow">El Proyecto</p><h2>${copy.projectTitle}</h2></div>
      <div class="intro-copy">
        <p>Esta web municipal explica cómo participa Fuenlabrada en EITEL y qué puede aportar la ciudadanía para conocer mejor la pobreza energética real de los barrios.</p>
        <p>La prioridad es medir el confort de las viviendas, detectar situaciones invisibles y orientar mejor las ayudas. Los sensores de confort permiten hacerlo de forma temporal, no invasiva y acompañada por equipos técnicos.</p>
      </div>
    </section>`;
}

const ayudas = [
  ["IMVF · Convocatoria abierta", "Ayudas Vivienda Joven para el pago de la Luz y el Gas", "Dirigidas a jóvenes de entre 18 y 35 años. Plazo abierto hasta el 11 de octubre de 2026.", externalLinks.ayudaLuzGas],
  ["IMVF · Convocatoria abierta", "Ayudas Municipales para energía Solar y Cambio de Ventanas", "Subvenciones para instalar energía solar y sustituir tus ventanas por otras más eficientes.", externalLinks.ayudaSolarVentanas],
  ["Ministerio · MITECO", "Bono social eléctrico", "Información oficial sobre el bono social: requisitos, descuentos y cómo solicitarlo.", externalLinks.bonoSocial],
  ["Ayuntamiento de Fuenlabrada", "Servicio de información y asesoramiento energético", "Servicio municipal gratuito para resolver dudas sobre facturas, tarifas y ayudas.", externalLinks.asesoramientoEnergetico]
];

function ayudasSection() {
  return `
    <section class="section ayudas">
      <a class="ayudas-poster" href="${externalLinks.imvfSede}" target="_blank" rel="noreferrer" aria-label="Cartel de ayudas: en el Instituto de Vivienda te ayudamos">
        <img src="${assets.cartelAyudas}" alt="Cartel de la campaña municipal de ayudas para mejorar tu casa">
      </a>
      <div class="ayudas-content">
        <p class="eyebrow">Ayudas y trámites</p>
        <h2>Ayudas para mejorar tu casa y ahorrar energía.</h2>
        <p class="ayudas-intro">El Instituto Municipal de la Vivienda de Fuenlabrada (IMVF) gestiona las ayudas municipales para reducir el gasto energético, mejorar la accesibilidad y ganar confort en tu vivienda. Consulta las convocatorias y tramítalas en línea desde la sede electrónica.</p>
        <div class="ayudas-links">
          ${ayudas.map(([tag, title, text, href]) => `<a href="${href}" target="_blank" rel="noreferrer"><span>${tag}</span><h3>${title}</h3><p>${text}</p></a>`).join("")}
        </div>
        <div class="ayudas-cta">
          <a class="button" href="${externalLinks.imvfSede}" target="_blank" rel="noreferrer">Sede electrónica del IMVF</a>
          <a href="${externalLinks.imvfSede}" target="_blank" rel="noreferrer" aria-label="Instituto Municipal de Vivienda de Fuenlabrada"><img src="${assets.imvfLogo}" alt="Instituto Municipal de Vivienda de Fuenlabrada"></a>
        </div>
      </div>
    </section>`;
}

function focusGrid() {
  return `
    <section class="section">
      ${sectionHeader("Toda la información a un clic", "Cuatro puertas de entrada para entender y actuar.")}
      <div class="focus-grid">
        ${focusCards.map(([title, subtitle, text, image]) => `<article class="focus-card"><img src="${image}" alt=""><span>${subtitle}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>`;
}

function objectiveGrid() {
  return `
    <section class="section objectives">
      ${sectionHeader("Objetivos EITEL", "Un proyecto de energía, datos y bienestar urbano.", "La versión anterior de EITEL ya planteaba cuatro líneas de impacto. Las integramos en esta nueva experiencia con una lectura más clara y orientada a barrios.")}
      <div class="objective-grid">
        ${objectives.map(([title, image, text]) => `<article><img src="${image}" alt=""><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>`;
}

function mapStory() {
  return `
    <section class="map-story">
      <div class="map-copy">
        <p class="eyebrow">Inteligencia territorial</p>
        <h2>Fuenlabrada se lee por capas: vivienda, energía, renta, salud urbana y clima.</h2>
        <p>La plataforma GIS de EITEL sirve para priorizar actuaciones y evaluar impacto. Cada zona puede compararse con criterios comunes sin exponer información personal.</p>
        <a class="button" href="#/proyecto">Conocer metodología</a>
      </div>
      <div class="map-panel" aria-hidden="true">
        <span class="block b1"></span><span class="block b2"></span><span class="block b3"></span><span class="block b4"></span><span class="block b5"></span>
        <span class="line l1"></span><span class="line l2"></span><span class="line l3"></span>
      </div>
    </section>`;
}

function latestPreview() {
  return `
    <section class="section split-band">
      <div><p class="eyebrow">Actualidad verificada</p><h2>Reportaje, ayudas y recursos oficiales.</h2></div>
      <div class="mini-list">
        ${news.slice(0, 3).map(([tag, title, meta, text, href]) => `<a href="${href}" target="_blank" rel="noreferrer"><span>${tag}</span><h3>${title}</h3><p>${text}</p><strong>${meta}</strong></a>`).join("")}
      </div>
    </section>`;
}

function partners() {
  return `
    <section class="section partners">
      ${sectionHeader("Socios", "Investigación, datos y territorio.")}
      <div class="partner-row">
        <article><img src="${assets.carlosIII}" alt="Universidad Carlos III de Madrid"><div><h3>Universidad Carlos III de Madrid</h3><p>Modelos de evaluación, medición de impacto y análisis socioeconómico para orientar decisiones con evidencia.</p></div></article>
        <article><img src="${assets.esri}" alt="Esri"><div><h3>Esri</h3><p>Tecnología GIS para visualizar vulnerabilidad energética, priorizar actuaciones y compartir resultados con equipos municipales.</p></div></article>
      </div>
    </section>`;
}

function office() {
  return `
    <section class="office">
      <img src="${assets.townHall}" alt="Ayuntamiento de Fuenlabrada">
      <div>
        <p class="eyebrow">Oficina Bienestar en el Hogar</p>
        <h2>Atención cercana para pasar del diagnóstico a la acción.</h2>
        <p class="office-contact">${contactAddress}<br><strong>Teléfono:</strong> ${contactPhone}</p>
        <ul><li>Revisión de facturas y potencia contratada.</li><li>Tramitación de ayudas energéticas y bono social.</li><li>Consejos de confort térmico para verano e invierno.</li><li>Derivación técnica para comunidades de propietarios.</li></ul>
      </div>
    </section>`;
}

function fundingStrip() {
  return `
    <section class="funding-strip" aria-label="Instituciones y financiación del proyecto">
      <div><a href="${externalLinks.ayuntamiento}" target="_blank" rel="noreferrer" aria-label="Web del Ayuntamiento de Fuenlabrada"><img src="${assets.aytoLogo}" alt="Ayuntamiento de Fuenlabrada"></a><a href="${externalLinks.imvfSede}" target="_blank" rel="noreferrer" aria-label="Sede electrónica del Instituto Municipal de Vivienda de Fuenlabrada"><img src="${assets.imvfLogo}" alt="Instituto Municipal de Vivienda de Fuenlabrada"></a><img src="${assets.fuenlabrada2030}" alt="Fuenlabrada 2030"><img src="${assets.ue}" alt="Next Generation EU"><img src="${assets.recuperacion}" alt="Plan de Recuperación, Transformación y Resiliencia"><img src="${assets.ministerio}" alt="Gobierno de España"></div>
      <p>Energía Inteligente para Todos: un enfoque desde los gobiernos locales. Proyecto orientado a transformar la gestión energética municipal mediante datos, seguridad y colaboración público-técnica.</p>
    </section>`;
}

function home(copy) {
  return hero(copy) + projectSummary(copy) + ayudasSection() + focusGrid() + latestPreview() + office() + fundingStrip();
}

function projectPage(copy) {
  const pageCopy = { ...copy, tagline: "El Proyecto", hero: "Bienestar en el Hogar: hogares saludables para el bienestar de la ciudadanía.", heroImage: assets.townHallOld, heroAlt: "Antiguo Ayuntamiento de Fuenlabrada" };
  return hero(pageCopy, true) + `
    <section class="section article-page">
      ${sectionHeader("Unidad inteligente de vulnerabilidad energética", "Un servicio público preventivo, transversal y medible.", "EITEL adapta a Fuenlabrada la lógica de los proyectos europeos de innovación urbana: detectar pobreza energética oculta, intervenir con soluciones personalizadas y aprender de los datos para replicar el modelo.")}
      <div class="article-grid">
        <article><h3>Objetivo</h3><p>Transformar la gestión energética local mediante un ecosistema de datos robusto, capaz de optimizar eficiencia, promover renovables y mejorar la respuesta ante la pobreza energética.</p></article>
        <article><h3>Escalas de trabajo</h3><p>Casa, edificio y barrio. La vivienda explica el confort; el edificio explica la eficiencia; el barrio explica exposición, servicios, movilidad, sombra y redes de apoyo.</p></article>
        <article><h3>Datos del piloto</h3><ul><li>Duración estimada: 36 meses.</li><li>Coordinación: Ayuntamiento de Fuenlabrada.</li><li>Socios: Universidad Carlos III de Madrid y Esri.</li><li>Ámbito inicial: barrios con mayor vulnerabilidad energética.</li></ul></article>
        <article><h3>Metodología</h3><p>Análisis GIS, entrevistas, mediciones interiores, lectura de consumos, indicadores sociales agregados, sensores de confort y evaluación de impacto antes/después.</p></article>
      </div>
    </section>
    <section class="section image-narrative"><img src="${assets.torres}" alt="Torres y paisaje urbano de Fuenlabrada"><div><p class="eyebrow">Fuenlabrada como laboratorio urbano</p><h2>El proyecto conecta energía, vivienda y decisión pública.</h2><p>La experiencia anterior de EITEL define el espacio de datos como una herramienta para gobiernos locales. En esta web lo acercamos a la ciudadanía: qué se mide, por qué se mide, cómo se protege y qué decisiones permite tomar.</p></div></section>
  ` + dataSpaceIntro() + objectiveGrid() + useCasesBlock() + focusGrid() + mapStory() + partners() + fundingStrip();
}

function useCasesBlock() {
  return `
    <section class="section use-cases">
      ${sectionHeader("Pilotos EITEL", "Cuatro casos para convertir datos en acción municipal.", "La página anterior de EITEL proponía pilotos de producción, consumo, certificados y perfil socioeconómico. Los desarrollamos aquí con enfoque Fuenlabrada.")}
      <div class="video-panel">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/EiGqbgbr2oQ?start=2" title="Vídeo explicativo de pilotos EITEL" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
          <p class="eyebrow">Vídeo explicativo</p>
          <h3>Descubre el proyecto EITEL y su impacto en los municipios.</h3>
          <p>El vídeo resume la lógica de los pilotos y cómo el espacio de datos facilita decisiones energéticas locales basadas en evidencia.</p>
        </div>
      </div>
      <div class="usecase-grid">${useCases.map(([tag, title, text]) => `<article><span>${tag}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
    </section>`;
}

function monitoringPage(copy) {
  return hero({ ...copy, tagline: "Monitorización", hero: "Sensores de confort para entender cómo se vive una vivienda.", strip: "Medición no invasiva, temporal y orientada a mejorar salud, confort y gasto energético.", heroImage: assets.culturalCenter, heroAlt: "Centro cultural de Fuenlabrada" }, true) + `
    <section class="section sensor-page sensor-intro">
      <div>
        <p class="eyebrow">Sensores de confort y aplicaciones</p>
        <h2>Herramienta de apoyo para el bienestar y la eficiencia energética de los hogares.</h2>
        <p>El sensor de confort es un dispositivo diseñado para monitorizar de forma no invasiva las condiciones de habitabilidad en viviendas.</p>
        <p>Es compacto, discreto y de titularidad municipal. Su objetivo es ayudar a cada hogar a conocer mejor su temperatura, humedad, calidad del aire y uso real de la vivienda para recibir recomendaciones técnicas más útiles.</p>
      </div>
      <div class="sensor-gallery">
        <figure><img src="${assets.sensorConfort}" alt="Sensor Confort Medidas"><figcaption>Sensor Confort Medidas</figcaption></figure>
        <figure><img src="${assets.sensorConfortSalon}" alt="Sensor Confort Salón"><figcaption>Sensor Confort Salón</figcaption></figure>
      </div>
    </section>
    <section class="section sensor-detail">
      ${sectionHeader("Qué es el sensor confort", "Un dispositivo pequeño para detectar riesgos que no siempre se ven.", "Mide cada 15 minutos los parámetros que ayudan a saber si una vivienda es saludable y eficiente. El equipo mide 88x88x25 mm, está fabricado en material blanco y se instala de forma discreta en la vivienda.")}
      <div class="sensor-card sensor-feature-grid">
        <article><h3>Autónomo</h3><p>Funciona con baterías, con una duración aproximada de dos años. No consume electricidad del hogar ni requiere cables.</p></article>
        <article><h3>Conectividad LoRaWAN</h3><p>Envía datos de forma inalámbrica a larga distancia sin necesidad de tener Wi-Fi en la vivienda.</p></article>
        <article><h3>Privacidad</h3><p>No utiliza cámaras ni micrófonos. Solo detecta presencia mediante un sensor infrarrojo de movimiento con alcance aproximado de 5 metros.</p></article>
        <article><h3>Datos protegidos</h3><p>La información es confidencial y solo se usará para informar y asesorar técnicamente a los hogares participantes.</p></article>
      </div>
    </section>
    <section class="section sensor-detail">
      ${sectionHeader("Qué mide y para qué sirve", "Cuatro indicadores críticos para la salud y la economía familiar.")}
      <div class="sensor-card sensor-measure-grid">
        ${sensorIndicators.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
    <section class="section sensor-detail">
      ${sectionHeader("Beneficios directos para el hogar", "Diagnóstico ambiental, alertas tempranas y mejores decisiones cotidianas.")}
      <div class="article-grid">
        <article><h3>Diagnóstico de salud ambiental</h3><p>Permite avisar a la familia si los niveles de humedad o CO2 son de riesgo antes de que aparezcan humedades visibles o problemas de salud.</p></article>
        <article><h3>Riesgo biológico</h3><p>Una humedad por encima del 70 % durante periodos largos favorece la aparición de moho, hongos y ácaros.</p></article>
        <article><h3>Aire viciado</h3><p>Un CO2 por encima de 1000 ppm indica que la vivienda no se ventila lo suficiente, a menudo para no perder calor.</p></article>
        <article><h3>Frío severo y calor extremo</h3><p>Temperaturas por debajo de 16 ºC o por encima de 27 ºC con presencia detectada pueden indicar riesgo para la salud.</p></article>
      </div>
      <p class="sensor-note">El cruce de estos datos permite definir indicadores de salud y confort en el hogar. Con plataformas de visualización y análisis, podrían enviarse notificaciones por WhatsApp o correo electrónico para que las personas residentes se mantengan informadas y tomen medidas para mejorar su bienestar.</p>
    </section>
    <section class="section sensor-detail">
      ${sectionHeader("Interacción con el Ayuntamiento", "Datos útiles para acompañar mejor a cada hogar y priorizar recursos públicos.")}
      <div class="article-grid">
        <article><h3>Asesoramiento personalizado</h3><p>Los técnicos energéticos pueden recomendar cómo optimizar la factura de electricidad o gas basándose en condiciones reales de la vivienda.</p></article>
        <article><h3>Justificación para ayudas</h3><p>Los datos sirven como prueba técnica de que la vivienda necesita mejoras, como aislamiento, cambio de ventanas o rehabilitación energética.</p></article>
        <article><h3>Optimización del bono social</h3><p>Permite identificar pobreza energética escondida en familias que no encienden la calefacción por miedo al gasto.</p></article>
        <article><h3>Seguimiento municipal</h3><p>Facilita valorar si las intervenciones mejoran el confort y ayudan a diseñar políticas públicas más precisas.</p></article>
      </div>
    </section>
    <section class="section sensor-detail">
      ${sectionHeader("Titularidad, reposición y seguridad", "Cesión temporal del equipo durante el proyecto EITEL.")}
      <div class="article-grid">
        <article><h3>Titularidad municipal</h3><p>El sensor suministrado es un equipo de titularidad municipal cedido temporalmente para el desarrollo del proyecto EITEL.</p></article>
        <article><h3>Reposición</h3><p>Si se detecta cualquier anomalía, mal funcionamiento o daño accidental, la persona interesada deberá informar al Ayuntamiento para su revisión o reposición.</p></article>
        <article><h3>Uso y conservación</h3><p>El sensor debe permanecer en la ubicación instalada, en un ambiente seco, alejado de fuentes de calor extremo y fuera del alcance de niños.</p></article>
        <article><h3>No manipular</h3><p>No debe abrirse, pintarse ni cubrirse, ya que esto invalidaría las lecturas de calidad del aire y confort térmico.</p></article>
      </div>
      <div class="responsibility-panel"><h3>Exoneración de responsabilidad</h3><p>El Ayuntamiento y las entidades colaboradoras, como la Universidad Carlos III de Madrid, quedan exonerados de cualquier responsabilidad derivada del uso inadecuado del dispositivo, de daños causados por el incumplimiento de las normas de conservación o de cualquier incidente fortuito ajeno al funcionamiento técnico intrínseco del sensor. La persona interesada asume la custodia del equipo y se compromete a un trato diligente durante la vigencia del proyecto.</p></div>
    </section>
    <section class="section document-downloads">
      ${sectionHeader("Modelos de autorización", "Documentación para participar en la monitorización.", "Estos modelos permiten formalizar la cesión temporal del sensor de confort y autorizar la consulta de datos energéticos necesarios para el diagnóstico técnico del hogar.")}
      <div class="download-grid">
        <article><span>PDF</span><h3>Autorización para sensores</h3><p>Documento para aceptar la instalación temporal del sensor de confort, su uso responsable y el tratamiento de los datos ambientales medidos en la vivienda.</p><a class="download-button" href="${assets.autorizacionSensores}" download>Descargar modelo</a></article>
        <article><span>PDF</span><h3>Autorización Datadis</h3><p>Modelo para permitir la consulta técnica de datos de consumo eléctrico a través de Datadis, con el fin de elaborar recomendaciones de ahorro y confort.</p><a class="download-button" href="${assets.autorizacionDatadis}" download>Descargar modelo</a></article>
      </div>
    </section>
    <section class="section article-page">${sectionHeader("Uso responsable", "Cesión temporal, seguridad y acompañamiento técnico.")}<div class="article-grid"><article><h3>Beneficios para el hogar</h3><p>Alertas de confort, recomendaciones concretas, mejor ajuste de hábitos y una conversación técnica basada en condiciones reales.</p></article><article><h3>Beneficios para el ayuntamiento</h3><p>Priorización de ayudas, detección temprana de vulnerabilidad, seguimiento de intervenciones y mejora de políticas públicas.</p></article></div></section>`;
}

function privacyPage(copy) {
  return hero({ ...copy, tagline: "Seguridad y privacidad", hero: "Un espacio de datos solo funciona si es seguro, transparente y gobernado.", strip: "EITEL prioriza confidencialidad, minimización, control de acceso y trazabilidad.", heroImage: assets.park, heroAlt: "Parque urbano de Fuenlabrada" }, true) + `
    <section class="section privacy-page">${sectionHeader("Ética del dato", "Privacidad desde el diseño.", "La información energética y social puede ayudar a mejorar vidas, pero debe gestionarse con reglas estrictas.")}<div class="privacy-list">${privacyItems.map((item) => `<article>${item}</article>`).join("")}</div></section>
    <section class="section treatment"><div><p class="eyebrow">Tratamiento de datos personales</p><h2>Anonimización, agregación y controles para reducir riesgos.</h2></div><div class="treatment-grid"><article><h3>Anonimización</h3><p>Se eliminan o transforman identificadores directos y se aplican técnicas para reducir el riesgo de reidentificación.</p></article><article><h3>Agregación</h3><p>Los indicadores se muestran por zonas, edificios o grupos suficientemente amplios para orientar decisiones sin exponer situaciones individuales.</p></article><article><h3>Acceso limitado</h3><p>Cada perfil accede solo a la información necesaria: visualización agregada, análisis técnico o gestión de casos, según permisos definidos.</p></article></div></section>`;
}

function newsPage(copy) {
  return hero({ ...copy, tagline: "Noticias", hero: "Actualidad de Bienestar en el Hogar.", strip: "Reportaje de RTVE y enlaces oficiales del Ayuntamiento, el IMVF y administraciones públicas.", heroImage: assets.park, heroAlt: "Parque urbano de Fuenlabrada" }, true) + `
    <section class="section listing">
      ${sectionHeader("Noticias", "Noticias", "Enlaces oficiales relacionados con el proyecto, las ayudas y el asesoramiento energético.")}
      <div class="listing-grid">
        ${news.map(([tag, title, meta, itemText, href]) => `<a class="listing-card" href="${href}" target="_blank" rel="noreferrer"><span>${tag}</span><h3>${title}</h3><p>${itemText}</p><small>${meta}</small></a>`).join("")}
      </div>
    </section>
    <section class="section video-panel rtve-panel">
      <div class="video-frame">
        <iframe src="${externalLinks.rtveEmbed}" title="RTVE - Informativo Madrid 1, 23 de julio de 2026" loading="lazy" allowfullscreen></iframe>
      </div>
      <div>
        <p class="eyebrow">RTVE · 23/07/2026</p>
        <h3>Informativo Madrid 1 - 23/07/26</h3>
        <p>El reportaje sobre el proyecto EITEL aparece a partir del minuto 8:58 del informativo.</p>
        <a class="button" href="${externalLinks.rtveReportaje}" target="_blank" rel="noreferrer">Ver en RTVE Play</a>
      </div>
    </section>`;
}

function resourcesPage(copy) {
  const links = [
    ["proyecto", "Casos de uso EITEL", "Producción, consumo, certificados energéticos y perfil socioeconómico."],
    ["monitorizacion", "Monitorización y sensores", "Qué mide el sensor confort, para qué sirve y cómo se usa."],
    ["seguridad", "Seguridad y privacidad", "Ética, acceso, anonimización y gobernanza del espacio de datos."],
    ["faq", "Preguntas frecuentes", "Respuestas rápidas sobre participación, sensores, privacidad y contacto."]
  ];
  return hero({ ...copy, tagline: "Recursos", hero: "Herramientas prácticas para ahorrar energía y ganar confort.", strip: "Guías, fichas y modelos pensados para hogares, comunidades y equipos municipales.", heroImage: assets.park, heroAlt: "Parque urbano de Fuenlabrada" }, true) + `
    <section class="section resources">
      <div class="resource-panel"><img src="${assets.people}" alt="Personas en una sesión participativa"><div><h2>Biblioteca Bienestar en el Hogar</h2><p>Documentos del proyecto y enlaces oficiales para trámites, ayudas y consulta ciudadana.</p></div></div>
      <div class="resource-links">${links.map(([id, title, text]) => `<a href="#/${id}"><span>Página</span><h3>${title}</h3><p>${text}</p></a>`).join("")}</div>
      <div class="resource-grid">${resources.map(([tag, title, text, href]) => `<a href="${href}" target="_blank" rel="noreferrer"><span>${tag}</span><h3>${title}</h3><p>${text}</p></a>`).join("")}</div>
    </section>`;
}

function faqPage(copy) {
  return hero({ ...copy, tagline: "Preguntas frecuentes", hero: "Respuestas rápidas sobre EITEL Fuenlabrada.", strip: "Información básica para hogares, comunidades y entidades interesadas.", heroImage: assets.park, heroAlt: "Parque urbano de Fuenlabrada" }, true) + `
    <section class="section faq-page">
      ${sectionHeader("FAQ", "Consultas habituales del proyecto.", "Contenido inicial pendiente de ampliar con las preguntas definitivas que facilite el Ayuntamiento.")}
      <div class="faq-list">
        ${faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}
      </div>
    </section>`;
}

function searchItems() {
  return [
    ["inicio", "Inicio", "Resumen del proyecto municipal Bienestar en el Hogar, pobreza energética, hogares saludables, ayudas del IMVF para luz, gas, energía solar y ventanas, bono social y oficina de atención."],
    ["proyecto", "El Proyecto", "Objetivos, metodología, pilotos, espacio de datos, socios, eficiencia energética y vulnerabilidad."],
    ["monitorizacion", "Monitorización", "Sensores de confort, temperatura, humedad, CO2, presencia, autorizaciones y Datadis."],
    ["seguridad", "Seguridad y privacidad", privacyItems.join(" ")],
    ["noticias", "Noticias", news.flat().join(" ")],
    ["recursos", "Recursos", resources.flat().join(" ")],
    ["faq", "Preguntas frecuentes", faqs.flat().join(" ")],
    ["contacto", "Contacto", `Formulario, teléfono, correo electrónico, oficina EITEL, ${contactEmail}.`]
  ];
}

function searchPage(copy) {
  const query = searchQuery.trim().toLowerCase();
  const results = query
    ? searchItems().filter(([, title, text]) => `${title} ${text}`.toLowerCase().includes(query))
    : searchItems();
  return hero({ ...copy, tagline: "Buscador", hero: "Encuentra información del proyecto EITEL.", strip: "Busca por sensores, privacidad, ayudas, recursos o contacto.", heroImage: assets.panorama, heroAlt: "Vista panorámica de Fuenlabrada" }, true) + `
    <section class="section search-page">
      <label class="search-box" for="site-search">Buscar en el sitio
        <input id="site-search" type="search" value="${escapeHtml(searchQuery)}" placeholder="Ej. sensores, privacidad, bono social" autocomplete="off">
      </label>
      <div class="search-results" aria-live="polite">
        ${results.length ? results.map(([id, title, text]) => `<a href="#/${id}"><span>${title}</span><p>${text}</p></a>`).join("") : `<p>No se han encontrado resultados para "${escapeHtml(searchQuery)}".</p>`}
      </div>
    </section>`;
}

function contactPage(copy) {
  return hero({ ...copy, tagline: "Contacto", hero: copy.contactTitle, strip: "Cuéntanos tu caso si necesitas revisar tu factura, mejorar el confort de tu vivienda o colaborar con el proyecto.", heroImage: assets.townHallOld, heroAlt: "Antiguo Ayuntamiento de Fuenlabrada" }, true) + `
    <section class="section contact-layout">
      <div><p class="eyebrow">Oficina Bienestar en el Hogar</p><h2>Atención presencial, telefónica y por correo.</h2><p>${contactAddress}</p><p><strong>Teléfono:</strong> ${contactPhone}</p><p><strong>Email:</strong> ${contactEmail}</p></div>
      <form class="contact-form" id="contact-form">
        <label>Nombre y apellidos<input name="name" type="text" placeholder="Tu nombre" autocomplete="name" required></label>
        <label>Correo electrónico<input name="email" type="email" placeholder="tu@email.es" autocomplete="email" required></label>
        <label>Motivo<select name="subject" required><option value="">Selecciona un motivo</option><option>Factura energética</option><option>Bono social</option><option>Diagnóstico de vivienda</option><option>Colaborar</option><option>Otra consulta</option></select></label>
        <label>Mensaje<textarea name="message" rows="5" placeholder="Resume tu consulta" required></textarea></label>
        <p class="form-note">Todos los campos son obligatorios. Al enviar se abrirá tu cliente de correo con la consulta preparada.</p>
        <button class="button" type="submit">Enviar consulta</button>
      </form>
    </section>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div><strong>Bienestar en el Hogar</strong><span>Fuenlabrada, hogares sin pobreza energética</span></div>
      <div><a href="mailto:${contactEmail}">${contactEmail}</a><span>${contactPhone}</span></div>
      <nav class="footer-institutional" aria-label="Enlaces institucionales">
        <span>Enlaces de interés</span>
        <a href="${externalLinks.ayuntamiento}" target="_blank" rel="noreferrer">Ayuntamiento de Fuenlabrada</a>
        <a href="${externalLinks.imvfSede}" target="_blank" rel="noreferrer">Instituto Municipal de la Vivienda (IMVF)</a>
        <a href="${externalLinks.bonoSocial}" target="_blank" rel="noreferrer">Bono social (MITECO)</a>
      </nav>
      <nav class="footer-links" aria-label="Información legal y accesibilidad">
        ${legalLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
    </footer>`;
}

function page() {
  const copy = translations[lang];
  const pages = {
    inicio: () => home(copy),
    proyecto: () => projectPage(copy),
    monitorizacion: () => monitoringPage(copy),
    seguridad: () => privacyPage(copy),
    noticias: () => newsPage(copy),
    recursos: () => resourcesPage(copy),
    faq: () => faqPage(copy),
    buscar: () => searchPage(copy),
    contacto: () => contactPage(copy)
  };
  return (pages[route] || pages.inicio)();
}

function render() {
  document.documentElement.lang = lang === "en_GB" ? "en" : "es";
  document.getElementById("app").innerHTML = header() + `<main>${page()}</main>` + footer();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", () => go(button.dataset.route)));
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
    lang = button.dataset.lang;
    render();
  }));
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  const searchInput = document.querySelector("#site-search");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value;
      const results = document.querySelector(".search-results");
      const query = searchQuery.trim().toLowerCase();
      const matches = query
        ? searchItems().filter(([, title, text]) => `${title} ${text}`.toLowerCase().includes(query))
        : searchItems();
      results.innerHTML = matches.length
        ? matches.map(([id, title, text]) => `<a href="#/${id}"><span>${title}</span><p>${text}</p></a>`).join("")
        : `<p>No se han encontrado resultados para "${escapeHtml(searchQuery)}".</p>`;
    });
  }
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.classList.add("was-submitted");
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const subject = `Consulta Bienestar en el Hogar - ${data.get("subject")}`;
      const body = [
        `Nombre: ${data.get("name")}`,
        `Correo electrónico: ${data.get("email")}`,
        `Motivo: ${data.get("subject")}`,
        "",
        "Mensaje:",
        data.get("message")
      ].join("\n");
      location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
}

window.addEventListener("hashchange", () => {
  route = getRoute();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
