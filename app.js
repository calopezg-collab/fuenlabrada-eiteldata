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
  ["casos", "Casos de uso"],
  ["monitorizacion", "Monitorizacion"],
  ["noticias", "Noticias"],
  ["eventos", "Eventos"],
  ["blog", "Blog"],
  ["recursos", "Recursos"],
  ["contacto", "Contacto"]
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
  ["Tu casa / tu edificio", "Que es la pobreza energetica", "Un hogar esta en vulnerabilidad energetica cuando no puede cubrir sus necesidades basicas de energia, o cuando solo puede hacerlo a costa de renunciar a otros gastos esenciales.", assets.houseSearch],
  ["Tu energia", "Que estamos haciendo", "EITEL revisa consumos, contratos, confort termico y estado de la vivienda para proponer soluciones a medida y priorizar intervenciones.", assets.housePlug],
  ["Tu barrio", "Donde intervenimos", "El piloto comienza en barrios con parque residencial envejecido y hogares expuestos a mayor presion economica, calor y frio.", assets.homes],
  ["Tu confort", "Cuales son los objetivos", "Reducir gasto, mejorar salud urbana, aumentar confort interior y crear una metodologia replicable para otros municipios.", assets.point]
];

const metrics = [["8", "barrios monitorizados"], ["1.200", "hogares objetivo"], ["35%", "ahorro potencial medio"]];

const objectives = [
  ["Eficiencia energetica", assets.eficiencia, "Optimizar el consumo en hogares y edificios mediante datos de uso, deteccion de consumos excesivos y recomendaciones de ahorro ajustadas a cada caso."],
  ["Pobreza energetica", assets.pobreza, "Identificar vulnerabilidades, priorizar ayudas y mejorar el acceso a energia asequible y segura para toda la ciudadania."],
  ["Analitica avanzada", assets.analitica, "Aplicar analisis de datos e inteligencia artificial para comprender patrones de consumo, anticipar riesgos y apoyar decisiones municipales."],
  ["Sostenibilidad", assets.sostenibilidad, "Reducir impacto ambiental, integrar energia renovable y avanzar hacia barrios mas eficientes, resilientes y saludables."]
];

const useCases = [
  ["Generacion local", "Produccion energetica", "Control de generadores energeticos disponibles en el municipio, integrando produccion renovable, autoconsumo y potencial de cubierta."],
  ["Analisis de consumo", "Consumo energetico", "Lectura agregada de la energia que requieren viviendas, equipamientos y barrios para detectar patrones, picos y oportunidades de ahorro."],
  ["Eficiencia energetica", "Certificados energeticos", "Inventario de calificaciones y caracteristicas edificatorias para localizar edificios con mayor necesidad de mejora."],
  ["Segmentacion urbana", "Perfil socioeconomico", "Cruce de indicadores sociales, climaticos y residenciales para priorizar intervenciones sin exponer informacion personal."]
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
  ["Noticias", "EITEL Fuenlabrada inicia el mapa municipal de vulnerabilidad energetica", "05/05/2026", "El Ayuntamiento activa una primera lectura territorial para cruzar vivienda, renta, clima y consumo energetico."],
  ["Noticias", "La Oficina EITEL atendera consultas sobre facturas, bono social y confort termico", "22/04/2026", "El nuevo servicio acompana a familias y comunidades de propietarios para convertir datos en acciones utiles."],
  ["Noticias", "Carlos III y Esri se incorporan al piloto para reforzar investigacion y tecnologia GIS", "09/04/2026", "La colaboracion permitira evaluar impacto, priorizar actuaciones y visualizar escenarios de vulnerabilidad."],
  ["Noticias", "Fuenlabrada prepara talleres vecinales sobre energia y rehabilitacion ligera", "26/03/2026", "Las primeras sesiones explicaran medidas sencillas de ahorro, lectura de facturas y derechos energeticos."]
];

const events = [
  ["14 MAY", "Taller: entiende tu factura energetica", "Centro Civico La Serna", "Sesion practica para revisar potencia contratada, tarifa, bono social y consumos fantasmas."],
  ["28 MAY", "Mesa tecnica de barrios saludables", "Ayuntamiento de Fuenlabrada", "Encuentro con equipos sociales, vivienda, urbanismo y datos para priorizar zonas de intervencion."],
  ["11 JUN", "Ruta EITEL: confort de verano", "Loranca y Nuevo Versalles", "Paseo de diagnostico urbano sobre sombra, orientacion, islas de calor y viviendas vulnerables."]
];

const blogPosts = [
  ["Pobreza energetica", "Pobreza energetica oculta: cuando el problema no aparece en la factura", "Equipo EITEL", "03/05/2026", "Muchas familias reducen consumos por debajo de lo saludable para evitar impagos. Detectarlo exige datos, escucha y trabajo de proximidad."],
  ["Datos urbanos", "Como un mapa puede ayudar a decidir donde intervenir primero", "Laboratorio GIS", "20/04/2026", "La lectura por capas permite comparar antiguedad de edificios, renta, temperatura, ayudas y consumos sin identificar directamente a personas."],
  ["Confort", "Cinco medidas de bajo coste para mejorar una vivienda en verano", "Oficina EITEL", "12/04/2026", "Ventilacion nocturna, sombreamiento, burletes, uso eficiente de equipos y revision de habitos pueden reducir riesgo termico."]
];

const resources = [
  "Guia para entender la factura electrica y detectar conceptos revisables.",
  "Checklist de confort termico para invierno y verano.",
  "Modelo de autorizacion para diagnostico energetico de vivienda.",
  "Mapa de recursos municipales: ayudas, oficina de consumo y servicios sociales.",
  "Ficha para comunidades de propietarios con medidas de rehabilitacion ligera.",
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
        <span><strong>EITEL Fuenlabrada</strong><small>Hogares sin pobreza energetica</small></span>
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
      <img src="${assets.panorama}" alt="Vista panoramica de Fuenlabrada">
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
      <div class="visual-card"><img src="${assets.energia}" alt="Energia y ciudad conectadas por datos"></div>
      <div>
        <p class="eyebrow">Espacio de datos EITEL</p>
        <h2>Energia Inteligente para Todos, desde los gobiernos locales.</h2>
        <p>EITEL impulsa un espacio de datos energeticos para que municipios como Fuenlabrada puedan acceder, compartir y reutilizar informacion fiable sobre energia, vivienda y vulnerabilidad.</p>
        <p>El proyecto sigue principios europeos de federacion, seguridad y gobernanza del dato: cada entidad conserva control sobre su informacion, pero puede colaborar bajo reglas claras, trazables y orientadas al interes publico.</p>
      </div>
    </section>`;
}

function projectSummary(copy) {
  return `
    <section class="section intro">
      <div><p class="eyebrow">El Proyecto</p><h2>${copy.projectTitle}</h2></div>
      <div class="intro-copy">
        <p>Inspirado por la metodologia de Hogares Saludables, EITEL Fuenlabrada plantea una unidad de inteligencia energetica capaz de identificar hogares en riesgo, atender casos prioritarios y disenar soluciones personalizadas.</p>
        <p>El enfoque combina tres escalas: vivienda, edificio y barrio. La prioridad no es solo pagar menos, sino vivir mejor: temperatura adecuada, salud, seguridad de suministro y autonomia ciudadana.</p>
      </div>
    </section>`;
}

function metricsBlock() {
  return `<section class="metrics" aria-label="Indicadores del proyecto">${metrics.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}</section>`;
}

function focusGrid() {
  return `
    <section class="section">
      ${sectionHeader("Toda la informacion a un clic", "Cuatro puertas de entrada para entender y actuar.")}
      <div class="focus-grid">
        ${focusCards.map(([title, subtitle, text, image]) => `<article class="focus-card"><img src="${image}" alt=""><span>${subtitle}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>`;
}

function objectiveGrid() {
  return `
    <section class="section objectives">
      ${sectionHeader("Objetivos EITEL", "Un proyecto de energia, datos y bienestar urbano.", "La version anterior de EITEL ya planteaba cuatro lineas de impacto. Las integramos en esta nueva experiencia con una lectura mas clara y orientada a barrios.")}
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
        <h2>Fuenlabrada se lee por capas: vivienda, energia, renta, salud urbana y clima.</h2>
        <p>La plataforma GIS de EITEL sirve para priorizar actuaciones y evaluar impacto. Cada zona puede compararse con criterios comunes sin exponer informacion personal.</p>
        <a class="button" href="#/proyecto">Conocer metodologia</a>
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
      ${sectionHeader("Socios", "Investigacion, datos y territorio.")}
      <div class="partner-row">
        <article><img src="${assets.carlosIII}" alt="Universidad Carlos III de Madrid"><div><h3>Universidad Carlos III de Madrid</h3><p>Modelos de evaluacion, medicion de impacto y analisis socioeconomico para orientar decisiones con evidencia.</p></div></article>
        <article><img src="${assets.esri}" alt="Esri"><div><h3>Esri</h3><p>Tecnologia GIS para visualizar vulnerabilidad energetica, priorizar actuaciones y compartir resultados con equipos municipales.</p></div></article>
      </div>
    </section>`;
}

function office() {
  return `
    <section class="office">
      <img src="${assets.townHall}" alt="Ayuntamiento de Fuenlabrada">
      <div>
        <p class="eyebrow">Oficina EITEL</p>
        <h2>Atencion cercana para pasar del diagnostico a la accion.</h2>
        <ul><li>Revision de facturas y potencia contratada.</li><li>Tramitacion de ayudas energeticas y bono social.</li><li>Consejos de confort termico para verano e invierno.</li><li>Derivacion tecnica para comunidades de propietarios.</li></ul>
      </div>
    </section>`;
}

function fundingStrip() {
  return `
    <section class="funding-strip" aria-label="Financiacion del proyecto">
      <div><img src="${assets.fuenlabrada2030}" alt="Fuenlabrada 2030"><img src="${assets.ue}" alt="Next Generation EU"><img src="${assets.recuperacion}" alt="Plan de Recuperacion, Transformacion y Resiliencia"><img src="${assets.ministerio}" alt="Gobierno de Espana"></div>
      <p>Energia Inteligente para Todos: un enfoque desde los gobiernos locales. Proyecto orientado a transformar la gestion energetica municipal mediante datos, seguridad y colaboracion publico-tecnica.</p>
    </section>`;
}

function home(copy) {
  return hero(copy) + dataSpaceIntro() + projectSummary(copy) + metricsBlock() + focusGrid() + objectiveGrid() + mapStory() + latestPreview() + partners() + office() + fundingStrip();
}

function projectPage(copy) {
  const pageCopy = { ...copy, tagline: "El Proyecto", hero: "EITEL Fuenlabrada: hogares saludables para el bienestar de la ciudadania." };
  return hero(pageCopy, true) + `
    <section class="section article-page">
      ${sectionHeader("Unidad inteligente de vulnerabilidad energetica", "Un servicio publico preventivo, transversal y medible.", "EITEL adapta a Fuenlabrada la logica de los proyectos europeos de innovacion urbana: detectar pobreza energetica oculta, intervenir con soluciones personalizadas y aprender de los datos para replicar el modelo.")}
      <div class="article-grid">
        <article><h3>Objetivo</h3><p>Transformar la gestion energetica local mediante un ecosistema de datos robusto, capaz de optimizar eficiencia, promover renovables y mejorar la respuesta ante la pobreza energetica.</p></article>
        <article><h3>Escalas de trabajo</h3><p>Casa, edificio y barrio. La vivienda explica el confort; el edificio explica la eficiencia; el barrio explica exposicion, servicios, movilidad, sombra y redes de apoyo.</p></article>
        <article><h3>Datos del piloto</h3><ul><li>Duracion estimada: 36 meses.</li><li>Coordinacion: Ayuntamiento de Fuenlabrada.</li><li>Socios: Universidad Carlos III de Madrid y Esri.</li><li>Ambito inicial: barrios con mayor vulnerabilidad energetica.</li></ul></article>
        <article><h3>Metodologia</h3><p>Analisis GIS, entrevistas, mediciones interiores, lectura de consumos, indicadores sociales agregados, sensores de confort y evaluacion de impacto antes/despues.</p></article>
      </div>
    </section>
    <section class="section image-narrative"><img src="${assets.torres}" alt="Torres y paisaje urbano de Fuenlabrada"><div><p class="eyebrow">Fuenlabrada como laboratorio urbano</p><h2>El proyecto conecta energia, vivienda y decision publica.</h2><p>La experiencia anterior de EITEL define el espacio de datos como una herramienta para gobiernos locales. En esta web lo acercamos a la ciudadania: que se mide, por que se mide, como se protege y que decisiones permite tomar.</p></div></section>
  ` + objectiveGrid() + focusGrid() + partners() + fundingStrip();
}

function useCasesPage(copy) {
  return hero({ ...copy, tagline: "Casos de uso", hero: "La energia de tu localidad, en un solo lugar.", strip: "Pilotos creados con datos energeticos para facilitar decisiones urbanas." }, true) + `
    <section class="section use-cases">
      ${sectionHeader("Pilotos EITEL", "Cuatro casos para convertir datos en accion municipal.", "La pagina anterior de EITEL proponia pilotos de produccion, consumo, certificados y perfil socioeconomico. Los desarrollamos aqui con enfoque Fuenlabrada.")}
      <div class="usecase-grid">${useCases.map(([tag, title, text]) => `<article><span>${tag}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
    </section>
  ` + mapStory();
}

function monitoringPage(copy) {
  return hero({ ...copy, tagline: "Monitorizacion", hero: "Sensores de confort para entender como se vive una vivienda.", strip: "Medicion no invasiva, temporal y orientada a mejorar salud, confort y gasto energetico." }, true) + `
    <section class="section sensor-page">
      <div><p class="eyebrow">Sensor confort</p><h2>Una herramienta pequena para detectar riesgos que no siempre se ven.</h2><p>El sensor de confort monitoriza condiciones de habitabilidad en viviendas vulnerables. No utiliza camaras ni microfonos; su objetivo es medir variables ambientales para generar recomendaciones utiles y priorizar asistencia.</p><p>La informacion permite identificar situaciones criticas, ajustar consejos de ahorro y detectar pobreza energetica escondida.</p></div>
      <div class="sensor-card">${sensorIndicators.map((item) => `<article>${item}</article>`).join("")}</div>
    </section>
    <section class="section article-page">${sectionHeader("Uso responsable", "Cesion temporal, seguridad y acompanamiento tecnico.")}<div class="article-grid"><article><h3>Beneficios para el hogar</h3><p>Alertas de confort, recomendaciones concretas, mejor ajuste de habitos y una conversacion tecnica basada en condiciones reales.</p></article><article><h3>Beneficios para el ayuntamiento</h3><p>Priorizacion de ayudas, deteccion temprana de vulnerabilidad, seguimiento de intervenciones y mejora de politicas publicas.</p></article></div></section>`;
}

function privacyPage(copy) {
  return hero({ ...copy, tagline: "Seguridad y privacidad", hero: "Un espacio de datos solo funciona si es seguro, transparente y gobernado.", strip: "EITEL prioriza confidencialidad, minimizacion, control de acceso y trazabilidad." }, true) + `
    <section class="section privacy-page">${sectionHeader("Etica del dato", "Privacidad desde el diseno.", "La informacion energetica y social puede ayudar a mejorar vidas, pero debe gestionarse con reglas estrictas.")}<div class="privacy-list">${privacyItems.map((item) => `<article>${item}</article>`).join("")}</div></section>
    <section class="section treatment"><div><p class="eyebrow">Tratamiento de datos personales</p><h2>Anonimizacion, agregacion y controles para reducir riesgos.</h2></div><div class="treatment-grid"><article><h3>Anonimizacion</h3><p>Se eliminan o transforman identificadores directos y se aplican tecnicas para reducir el riesgo de reidentificacion.</p></article><article><h3>Agregacion</h3><p>Los indicadores se muestran por zonas, edificios o grupos suficientemente amplios para orientar decisiones sin exponer situaciones individuales.</p></article><article><h3>Acceso limitado</h3><p>Cada perfil accede solo a la informacion necesaria: visualizacion agregada, analisis tecnico o gestion de casos, segun permisos definidos.</p></article></div></section>`;
}

function listingPage(eyebrow, title, text, items, blog = false) {
  return hero({ ...translations.es_ES, tagline: eyebrow, hero: title, strip: text }, true) + `
    <section class="section listing"><div class="listing-grid">
      ${items.map((item) => `<article class="listing-card"><span>${item[0]}</span><h3>${item[1]}</h3><p>${blog ? item[4] : item[3]}</p><small>${blog ? `${item[2]} · ${item[3]}` : item[2]}</small></article>`).join("")}
    </div></section>`;
}

function eventsPage(copy) {
  return hero({ ...copy, tagline: "Eventos", hero: "Convocatorias, talleres y rutas para aprender energia desde el barrio.", strip: "Actividades gratuitas y abiertas para vecinos, comunidades y profesionales." }, true) + `
    <section class="section event-list">${events.map(([date, title, place, text]) => `<article><div class="event-date">${date}</div><div><h3>${title}</h3><p>${text}</p><strong>${place}</strong></div></article>`).join("")}</section>`;
}

function resourcesPage(copy) {
  const links = [
    ["casos", "Casos de uso EITEL", "Produccion, consumo, certificados energeticos y perfil socioeconomico."],
    ["monitorizacion", "Monitorizacion y sensores", "Que mide el sensor confort, para que sirve y como se usa."],
    ["seguridad", "Seguridad y privacidad", "Etica, acceso, anonimizacion y gobernanza del espacio de datos."],
    ["proyecto", "Espacio de datos", "Vision, objetivos, metodologia y socios del proyecto en Fuenlabrada."]
  ];
  return hero({ ...copy, tagline: "Recursos", hero: "Herramientas practicas para ahorrar energia y ganar confort.", strip: "Guias, fichas y modelos pensados para hogares, comunidades y equipos municipales." }, true) + `
    <section class="section resources">
      <div class="resource-panel"><img src="${assets.people}" alt="Personas en una sesion participativa"><div><h2>Biblioteca EITEL</h2><p>Materiales preparados para consulta ciudadana. Los documentos definitivos podran descargarse desde esta seccion cuando la oficina publique cada version.</p></div></div>
      <div class="resource-links">${links.map(([id, title, text]) => `<a href="#/${id}"><span>Pagina</span><h3>${title}</h3><p>${text}</p></a>`).join("")}</div>
      <div class="resource-grid">${resources.map((resource) => `<article><span>PDF</span><h3>${resource}</h3><button type="button">Proximamente</button></article>`).join("")}</div>
    </section>`;
}

function contactPage(copy) {
  return hero({ ...copy, tagline: "Contacto", hero: copy.contactTitle, strip: "Cuentanos tu caso si necesitas revisar tu factura, mejorar el confort de tu vivienda o colaborar con el proyecto." }, true) + `
    <section class="section contact-layout">
      <div><p class="eyebrow">Oficina EITEL Fuenlabrada</p><h2>Atencion presencial, telefonica y por correo.</h2><p>Plaza de la Constitucion, 1. 28943 Fuenlabrada, Madrid.</p><p><strong>Telefono:</strong> 010 / 91 649 70 00</p><p><strong>Email:</strong> eitel@fuenlabrada.es</p></div>
      <form class="contact-form"><label>Nombre<input type="text" placeholder="Tu nombre"></label><label>Email<input type="email" placeholder="tu@email.es"></label><label>Motivo<select><option>Factura energetica</option><option>Bono social</option><option>Diagnostico de vivienda</option><option>Colaborar</option></select></label><label>Mensaje<textarea rows="5" placeholder="Resume tu consulta"></textarea></label><button class="button" type="button">Enviar consulta</button></form>
    </section>`;
}

function footer() {
  return `<footer class="site-footer"><div><strong>EITEL Fuenlabrada</strong><span>Hogares sin pobreza energetica</span></div><div><a href="mailto:eitel@fuenlabrada.es">eitel@fuenlabrada.es</a><span>010 / 91 649 70 00</span></div></footer>`;
}

function page() {
  const copy = translations[lang];
  const pages = {
    inicio: () => home(copy),
    proyecto: () => projectPage(copy),
    casos: () => useCasesPage(copy),
    monitorizacion: () => monitoringPage(copy),
    seguridad: () => privacyPage(copy),
    noticias: () => listingPage("Noticias", "Actualidad de EITEL Fuenlabrada.", "Avances del proyecto, colaboraciones y resultados del piloto municipal.", news),
    eventos: () => eventsPage(copy),
    blog: () => listingPage("Blog", "Firmas y aprendizaje contra la pobreza energetica.", "Reflexiones sobre datos urbanos, confort, rehabilitacion, derechos y participacion ciudadana.", blogPosts, true),
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
