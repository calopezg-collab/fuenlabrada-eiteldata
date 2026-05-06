const assets = {
  panorama: "assets/panoramica-fuenlabrada.jpg",
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
  fuenlabrada2030: "assets/logo-fuenlabrada-2030.png"
};

const navItems = [
  ["inicio", "Inicio"],
  ["proyecto", "El Proyecto"],
  ["monitorizacion", "Monitorización"],
  ["noticias", "Noticias"],
  ["eventos", "Eventos"],
  ["blog", "Blog"],
  ["recursos", "Recursos"],
  ["contacto", "Contacto"]
];

const translations = {
  es_ES: {
    tagline: "Proyecto municipal EITEL",
    hero: "Fuenlabrada participa en EITEL para medir y reducir la pobreza energética en los hogares del municipio.",
    strip: "La pobreza energética afecta a entre un 20 o un 25 % de la ciudadanía en España.",
    cta: "Solicitar información",
    secondary: "Ver recursos",
    projectTitle: "Una unidad inteligente para detectar, prevenir y reducir la vulnerabilidad energética.",
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
  ["Tu casa / tu edificio", "Qué es la pobreza energética", "Un hogar está en vulnerabilidad energética cuando no puede cubrir sus necesidades básicas de energía, o cuando solo puede hacerlo a costa de renunciar a otros gastos esenciales.", assets.houseSearch],
  ["Tu energía", "Qué estamos haciendo", "EITEL revisa consumos, contratos, confort térmico y estado de la vivienda para proponer soluciones a medida y priorizar intervenciones.", assets.housePlug],
  ["Tu barrio", "Dónde intervenimos", "El piloto comienza en barrios con parque residencial envejecido y hogares expuestos a mayor presión económica, calor y frío.", assets.homes],
  ["Tu confort", "Cuáles son los objetivos", "Reducir gasto, mejorar salud urbana, aumentar confort interior y crear una metodología replicable para otros municipios.", assets.point]
];

const metrics = [["8", "barrios monitorizados"], ["1.200", "hogares objetivo"], ["35%", "ahorro potencial medio"]];

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
  "Temperatura interior: permite detectar frío o calor inadecuado en la vivienda.",
  "Humedad relativa: ayuda a prevenir condensaciones, moho y problemas de habitabilidad.",
  "Calidad ambiental: ofrece pistas sobre ventilación y confort cotidiano.",
  "Presencia no invasiva: no usa cámaras ni micrófonos; ayuda a contextualizar hábitos de uso."
];

const privacyItems = [
  "Minimización: solo se recogen datos necesarios para los fines autorizados.",
  "Anonimización y agregación: los análisis se realizan evitando la identificación directa de personas.",
  "Control de acceso: perfiles diferenciados para investigadores, administración y operadores técnicos.",
  "Trazabilidad: registro de operaciones, usos permitidos y criterios de intercambio.",
  "Gobernanza europea: alineación con principios de federación, seguridad y soberanía del dato inspirados en GAIA-X."
];

const news = [
  ["Noticias", "EITEL Fuenlabrada inicia el mapa municipal de vulnerabilidad energética", "05/05/2026", "El Ayuntamiento activa una primera lectura territorial para cruzar vivienda, renta, clima y consumo energético."],
  ["Noticias", "La Oficina EITEL atenderá consultas sobre facturas, bono social y confort térmico", "22/04/2026", "El nuevo servicio acompaña a familias y comunidades de propietarios para convertir datos en acciones útiles."],
  ["Noticias", "Carlos III y Esri se incorporan al piloto para reforzar investigación y tecnología GIS", "09/04/2026", "La colaboración permitirá evaluar impacto, priorizar actuaciones y visualizar escenarios de vulnerabilidad."],
  ["Noticias", "Fuenlabrada prepara talleres vecinales sobre energía y rehabilitación ligera", "26/03/2026", "Las primeras sesiones explicarán medidas sencillas de ahorro, lectura de facturas y derechos energéticos."]
];

const events = [
  ["14 MAY", "Taller: entiende tu factura energética", "Centro Cívico La Serna", "Sesión práctica para revisar potencia contratada, tarifa, bono social y consumos fantasmas."],
  ["28 MAY", "Mesa técnica de barrios saludables", "Ayuntamiento de Fuenlabrada", "Encuentro con equipos sociales, vivienda, urbanismo y datos para priorizar zonas de intervención."],
  ["11 JUN", "Ruta EITEL: confort de verano", "Loranca y Nuevo Versalles", "Paseo de diagnóstico urbano sobre sombra, orientación, islas de calor y viviendas vulnerables."]
];

const blogPosts = [
  ["Pobreza energética", "Pobreza energética oculta: cuando el problema no aparece en la factura", "Equipo EITEL", "03/05/2026", "Muchas familias reducen consumos por debajo de lo saludable para evitar impagos. Detectarlo exige datos, escucha y trabajo de proximidad."],
  ["Datos urbanos", "Cómo un mapa puede ayudar a decidir donde intervenir primero", "Laboratorio GIS", "20/04/2026", "La lectura por capas permite comparar antigüedad de edificios, renta, temperatura, ayudas y consumos sin identificar directamente a personas."],
  ["Confort", "Cinco medidas de bajo coste para mejorar una vivienda en verano", "Oficina EITEL", "12/04/2026", "Ventilación nocturna, sombreamiento, burletes, uso eficiente de equipos y revisión de hábitos pueden reducir riesgo térmico."]
];

const resources = [
  "Guía para entender la factura eléctrica y detectar conceptos revisables.",
  "Checklist de confort térmico para invierno y verano.",
  "Modelo de autorización para diagnóstico energético de vivienda.",
  "Mapa de recursos municipales: ayudas, oficina de consumo y servicios sociales.",
  "Ficha para comunidades de propietarios con medidas de rehabilitación ligera.",
  "Preguntas frecuentes sobre bono social, cortes de suministro y derechos."
];

let route = getRoute();
let lang = "es_ES";

function getRoute() {
  return location.hash.replace("#/", "") || "inicio";
}

function go(nextRoute) {
  location.hash = `/${nextRoute}`;
}

function header() {
  return `
    <header class="site-header">
      <button class="brand reset-button" type="button" data-route="inicio" aria-label="EITEL Fuenlabrada inicio">
        <img src="${assets.cityIcon}" alt="">
        <span><strong>EITEL Fuenlabrada</strong><small>Hogares sin pobreza energética</small></span>
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
  return `
    <section class="hero ${compact ? "page-hero" : ""}">
      <img src="${assets.panorama}" alt="Vista panorámica de Fuenlabrada">
      <div class="hero-overlay"></div>
      <div class="hero-content">
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

function metricsBlock() {
  return `<section class="metrics" aria-label="Indicadores del proyecto">${metrics.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}</section>`;
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
      <div><p class="eyebrow">Lecturas recomendadas</p><h2>Actualidad, aprendizaje y convocatorias.</h2></div>
      <div class="mini-list">
        <article><span>Noticias</span><h3>${news[0][1]}</h3><p>${news[0][3]}</p></article>
        <article><span>${events[0][0]}</span><h3>${events[0][1]}</h3><p>${events[0][3]}</p></article>
        <article><span>${blogPosts[0][0]}</span><h3>${blogPosts[0][1]}</h3><p>${blogPosts[0][4]}</p></article>
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
        <p class="eyebrow">Oficina EITEL</p>
        <h2>Atención cercana para pasar del diagnóstico a la acción.</h2>
        <ul><li>Revisión de facturas y potencia contratada.</li><li>Tramitación de ayudas energéticas y bono social.</li><li>Consejos de confort térmico para verano e invierno.</li><li>Derivación técnica para comunidades de propietarios.</li></ul>
      </div>
    </section>`;
}

function fundingStrip() {
  return `
    <section class="funding-strip" aria-label="Financiación del proyecto">
      <div><img src="${assets.fuenlabrada2030}" alt="Fuenlabrada 2030"><img src="${assets.ue}" alt="Next Generation EU"><img src="${assets.recuperacion}" alt="Plan de Recuperación, Transformación y Resiliencia"><img src="${assets.ministerio}" alt="Gobierno de España"></div>
      <p>Energía Inteligente para Todos: un enfoque desde los gobiernos locales. Proyecto orientado a transformar la gestión energética municipal mediante datos, seguridad y colaboración público-técnica.</p>
    </section>`;
}

function home(copy) {
  return hero(copy) + projectSummary(copy) + metricsBlock() + focusGrid() + latestPreview() + office() + fundingStrip();
}

function projectPage(copy) {
  const pageCopy = { ...copy, tagline: "El Proyecto", hero: "EITEL Fuenlabrada: hogares saludables para el bienestar de la ciudadanía." };
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
  return hero({ ...copy, tagline: "Monitorización", hero: "Sensores de confort para entender cómo se vive una vivienda.", strip: "Medición no invasiva, temporal y orientada a mejorar salud, confort y gasto energético." }, true) + `
    <section class="section sensor-page">
      <div><p class="eyebrow">Sensor confort</p><h2>Una herramienta pequeña para detectar riesgos que no siempre se ven.</h2><p>El sensor de confort monitoriza condiciones de habitabilidad en viviendas vulnerables. No utiliza cámaras ni micrófonos; su objetivo es medir variables ambientales para generar recomendaciones útiles y priorizar asistencia.</p><p>La información permite identificar situaciones críticas, ajustar consejos de ahorro y detectar pobreza energética escondida.</p></div>
      <div class="sensor-card">${sensorIndicators.map((item) => `<article>${item}</article>`).join("")}</div>
    </section>
    <section class="section article-page">${sectionHeader("Uso responsable", "Cesión temporal, seguridad y acompañamiento técnico.")}<div class="article-grid"><article><h3>Beneficios para el hogar</h3><p>Alertas de confort, recomendaciones concretas, mejor ajuste de hábitos y una conversación técnica basada en condiciones reales.</p></article><article><h3>Beneficios para el ayuntamiento</h3><p>Priorización de ayudas, detección temprana de vulnerabilidad, seguimiento de intervenciones y mejora de políticas públicas.</p></article></div></section>`;
}

function privacyPage(copy) {
  return hero({ ...copy, tagline: "Seguridad y privacidad", hero: "Un espacio de datos solo funciona si es seguro, transparente y gobernado.", strip: "EITEL prioriza confidencialidad, minimización, control de acceso y trazabilidad." }, true) + `
    <section class="section privacy-page">${sectionHeader("Ética del dato", "Privacidad desde el diseño.", "La información energética y social puede ayudar a mejorar vidas, pero debe gestionarse con reglas estrictas.")}<div class="privacy-list">${privacyItems.map((item) => `<article>${item}</article>`).join("")}</div></section>
    <section class="section treatment"><div><p class="eyebrow">Tratamiento de datos personales</p><h2>Anonimización, agregación y controles para reducir riesgos.</h2></div><div class="treatment-grid"><article><h3>Anonimización</h3><p>Se eliminan o transforman identificadores directos y se aplican técnicas para reducir el riesgo de reidentificación.</p></article><article><h3>Agregación</h3><p>Los indicadores se muestran por zonas, edificios o grupos suficientemente amplios para orientar decisiones sin exponer situaciones individuales.</p></article><article><h3>Acceso limitado</h3><p>Cada perfil accede solo a la información necesaria: visualización agregada, análisis técnico o gestión de casos, según permisos definidos.</p></article></div></section>`;
}

function listingPage(eyebrow, title, text, items, blog = false) {
  return hero({ ...translations.es_ES, tagline: eyebrow, hero: title, strip: text }, true) + `
    <section class="section listing"><div class="listing-grid">
      ${items.map((item) => `<article class="listing-card"><span>${item[0]}</span><h3>${item[1]}</h3><p>${blog ? item[4] : item[3]}</p><small>${blog ? `${item[2]} · ${item[3]}` : item[2]}</small></article>`).join("")}
    </div></section>`;
}

function eventsPage(copy) {
  return hero({ ...copy, tagline: "Eventos", hero: "Convocatorias, talleres y rutas para aprender energía desde el barrio.", strip: "Actividades gratuitas y abiertas para vecinos, comunidades y profesionales." }, true) + `
    <section class="section event-list">${events.map(([date, title, place, text]) => `<article><div class="event-date">${date}</div><div><h3>${title}</h3><p>${text}</p><strong>${place}</strong></div></article>`).join("")}</section>`;
}

function resourcesPage(copy) {
  const links = [
    ["proyecto", "Casos de uso EITEL", "Producción, consumo, certificados energéticos y perfil socioeconómico."],
    ["monitorizacion", "Monitorización y sensores", "Qué mide el sensor confort, para qué sirve y cómo se usa."],
    ["seguridad", "Seguridad y privacidad", "Ética, acceso, anonimización y gobernanza del espacio de datos."],
    ["proyecto", "Espacio de datos", "Visión, objetivos, metodología y socios del proyecto en Fuenlabrada."]
  ];
  return hero({ ...copy, tagline: "Recursos", hero: "Herramientas prácticas para ahorrar energía y ganar confort.", strip: "Guías, fichas y modelos pensados para hogares, comunidades y equipos municipales." }, true) + `
    <section class="section resources">
      <div class="resource-panel"><img src="${assets.people}" alt="Personas en una sesión participativa"><div><h2>Biblioteca EITEL</h2><p>Materiales preparados para consulta ciudadana. Los documentos definitivos podrán descargarse desde esta sección cuando la oficina publique cada versión.</p></div></div>
      <div class="resource-links">${links.map(([id, title, text]) => `<a href="#/${id}"><span>Página</span><h3>${title}</h3><p>${text}</p></a>`).join("")}</div>
      <div class="resource-grid">${resources.map((resource) => `<article><span>PDF</span><h3>${resource}</h3><button type="button">Próximamente</button></article>`).join("")}</div>
    </section>`;
}

function contactPage(copy) {
  return hero({ ...copy, tagline: "Contacto", hero: copy.contactTitle, strip: "Cuéntanos tu caso si necesitas revisar tu factura, mejorar el confort de tu vivienda o colaborar con el proyecto." }, true) + `
    <section class="section contact-layout">
      <div><p class="eyebrow">Oficina EITEL Fuenlabrada</p><h2>Atención presencial, telefónica y por correo.</h2><p>Plaza de la Constitución, 1. 28943 Fuenlabrada, Madrid.</p><p><strong>Teléfono:</strong> 010 / 91 649 70 00</p><p><strong>Email:</strong> eitel@fuenlabrada.es</p></div>
      <form class="contact-form"><label>Nombre<input type="text" placeholder="Tu nombre"></label><label>Email<input type="email" placeholder="tu@email.es"></label><label>Motivo<select><option>Factura energética</option><option>Bono social</option><option>Diagnóstico de vivienda</option><option>Colaborar</option></select></label><label>Mensaje<textarea rows="5" placeholder="Resume tu consulta"></textarea></label><button class="button" type="button">Enviar consulta</button></form>
    </section>`;
}

function footer() {
  return `<footer class="site-footer"><div><strong>EITEL Fuenlabrada</strong><span>Hogares sin pobreza energética</span></div><div><a href="mailto:eitel@fuenlabrada.es">eitel@fuenlabrada.es</a><span>010 / 91 649 70 00</span></div></footer>`;
}

function page() {
  const copy = translations[lang];
  const pages = {
    inicio: () => home(copy),
    proyecto: () => projectPage(copy),
    monitorizacion: () => monitoringPage(copy),
    seguridad: () => privacyPage(copy),
    noticias: () => listingPage("Noticias", "Actualidad de EITEL Fuenlabrada.", "Avances del proyecto, colaboraciones y resultados del piloto municipal.", news),
    eventos: () => eventsPage(copy),
    blog: () => listingPage("Blog", "Firmas y aprendizaje contra la pobreza energética.", "Reflexiones sobre datos urbanos, confort, rehabilitación, derechos y participación ciudadana.", blogPosts, true),
    recursos: () => resourcesPage(copy),
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
}

window.addEventListener("hashchange", () => {
  route = getRoute();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
