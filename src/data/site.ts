// Todo el contenido del portfolio vive aquí.
// Para cambiar textos, casos o enlaces, edita este archivo: los componentes solo pintan.
// Los textos entre [corchetes] son huecos pendientes de rellenar con datos reales.

export const site = {
  name: 'Víctor García',
  fullName: 'Víctor García Garrido',
  role: 'Full Stack Developer & AI Engineer',
  tagline: 'Desarrollo · Automatización · IA',
  location: 'Sevilla, España',
  email: 'victorgarciia03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/victor-garc%C3%ADa-garrido-3684792ab',
  github: 'https://github.com/victorgarciiag',
  cv: '/cv.pdf', // Deja tu CV en public/cv.pdf
  description:
    'Desarrollador full stack en Sevilla. Aplicaciones web, automatización de procesos e IA aplicada a problemas reales de negocio.',
};

export const hero = {
  eyebrow: 'Full Stack Developer & AI Engineer',
  title: 'Aplicaciones web, automatización e inteligencia artificial',
  titleAccent: 'al servicio del negocio.',
  intro:
    'Soy Víctor, desarrollador full stack en Sevilla. Construyo aplicaciones web, automatizo procesos y aplico IA donde de verdad aporta. Siempre empezando por el problema, no por la tecnología.',
  now: 'Full Stack en Tragsatec y especializado en IA aplicada',
  photo: '/images/perfil.jpg', // guardada en public/images
};

export type Service = {
  id: string;
  label: string;
  kicker: string;
  headline: string;
  body: string;
  ideas: string[];
  cta: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    id: 'desarrollo',
    label: 'Desarrollo de software',
    kicker: 'Aplicaciones web a medida',
    headline: 'Aplicaciones robustas, del análisis al despliegue.',
    body: 'Diseño y desarrollo aplicaciones web completas con Java, Spring Boot y Angular, con la misma metodología que aplico a diario en proyectos empresariales. También colaboro con equipos que necesitan reforzar un proyecto concreto.',
    ideas: [
      'Portal de clientes',
      'Del Excel a una aplicación',
      'Panel para dirección',
      'Reservas y citas online',
      'Gestión de incidencias',
      'App para trabajo de campo',
      'Intranet con roles y permisos',
      'Migración de sistemas antiguos',
    ],
    cta: 'Ver un proyecto',
    ctaHref: '#explotacion-agricola',
  },
  {
    id: 'automatizacion',
    label: 'Automatización de procesos',
    kicker: 'Menos trabajo manual, menos errores',
    headline: 'Procesos que se ejecutan solos, conectados a las herramientas que ya usas.',
    body: 'Analizo el flujo de trabajo, identifico las tareas repetitivas que más tiempo consumen y las automatizo de principio a fin, con trazabilidad y control de errores.',
    ideas: [
      'Facturas al ERP sin teclear',
      'Correo que se ordena solo',
      'Conciliación bancaria',
      'Informes automáticos',
      'Alta de clientes sin papeleo',
      'Recordatorios de cobro',
      'Sincronizar CRM y ERP',
      'Archivo documental automático',
    ],
    cta: 'Ver el caso',
    ctaHref: '#correduria',
  },
  {
    id: 'ia',
    label: 'Datos e IA',
    kicker: 'Inteligencia artificial integrada en el negocio',
    headline: 'Convertir datos y documentos en herramientas que se usan cada día.',
    body: 'Integro modelos de lenguaje y machine learning dentro de aplicaciones y procesos existentes, con foco en la fiabilidad de las respuestas, la privacidad de los datos y el coste de funcionamiento.',
    ideas: [
      'Asistente sobre documentación interna',
      'Agentes con supervisión humana',
      'Previsión de demanda',
      'Detección de anomalías',
      'Lectura de documentos escaneados',
      'Clasificación de tickets',
      'Resúmenes de reuniones',
      'Búsqueda inteligente',
    ],
    cta: 'Ver proyecto de IA',
    ctaHref: '#observatorio-sequia',
  },
];

export type FlowStep = {
  title: string;
  detail: string;
  icon: 'mail' | 'ai' | 'shield' | 'user' | 'check';
  highlight?: boolean;
};

export type CaseStudy = {
  id: string;
  meta: string;
  title: string;
  summary: string;
  keyPoints: string[]; // 3 ideas clave, cortas
  status?: string; // en qué estás ahora (proyectos en curso)
  stack: string[];
  repo?: string; // URL del repositorio público
  demo?: string; // URL de una demo navegable
  privateCode?: boolean; // código no público (proyectos reales para terceros)
  visual:
    | { type: 'flow'; steps: FlowStep[] }
    | { type: 'phone' }
    | {
        type: 'chart';
        title: string;
        caption: string;
        unit?: string; // si se indica, se muestra el valor junto a cada barra
        bars: { label: string; value: number; highlight?: boolean }[];
      };
};

export const cases: CaseStudy[] = [
  {
    id: 'correduria',
    meta: 'Automatización · Proyecto personal · En curso',
    title: 'Automatización con IA para una correduría de seguros',
    summary:
      'Una correduría de seguros simulada, con su propio back office, sobre la que construyo automatizaciones de procesos reales del sector.',
    keyPoints: [
      'Cuatro automatizaciones funcionando de principio a fin: recibos devueltos, comparativa de presupuestos, alta de pólizas desde PDF y clasificación del buzón.',
      'La IA entiende, el backend valida y una persona aprueba: el modelo nunca decide solo.',
      'Probado contra emails trampa y suplantaciones, con protección de datos por diseño.',
    ],
    status: 'Consultas al back office en lenguaje natural (servidor MCP)',
    stack: ['Java 21', 'Spring Boot 3', 'Angular 18', 'PostgreSQL 16', 'n8n', 'Claude API', 'Docker Compose'],
    repo: 'https://github.com/victorgarciiag/Automatizaciones-Correduria-de-Seguros',
    visual: {
      type: 'flow',
      steps: [
        { title: 'Llega un email o un PDF', detail: 'Presupuestos, pólizas, consultas de clientes', icon: 'mail' },
        { title: 'La IA lo entiende', detail: 'Clasifica y extrae los datos a un esquema fijo', icon: 'ai', highlight: true },
        { title: 'El backend lo valida', detail: 'Contra los datos reales de la correduría', icon: 'shield' },
        { title: 'Una persona lo aprueba', detail: 'Nada sale sin revisión humana', icon: 'check' },
      ],
    },
  },
  {
    id: 'explotacion-agricola',
    meta: 'Aplicación web · Sector agrícola · Proyecto real',
    title: 'Digitalización y trazabilidad de una explotación agrícola',
    summary:
      'Sistema de gestión para una explotación de olivar y almendro: registra quién trabaja, en qué parcela, con qué maquinaria y qué productos se aplican, y convierte años de partes en papel en datos consultables.',
    keyPoints: [
      'Modelo de datos que relaciona trabajadores, tareas, parcelas, maquinaria y tratamientos fitosanitarios, con las horas calculadas automáticamente.',
      'Panel de administración con filtros dinámicos, control de acceso por roles y exportación a Excel por resumen y por tarea.',
      'Migración completa de un sistema PHP heredado a Spring Boot, Angular y Oracle: histórico conservado, credenciales compatibles y vulnerabilidades corregidas.',
    ],
    status: 'Pruebas finales del backend y preparación de la puesta en producción',
    stack: ['Java 21', 'Spring Boot 3.5', 'Spring Security (JWT)', 'Angular 21', 'Oracle', 'Flyway'],
    privateCode: true,
    visual: { type: 'phone' },
  },
  {
    id: 'observatorio-sequia',
    meta: 'Machine Learning · Datos públicos reales · Proyecto personal',
    title: 'Observatorio de sequía: anticipar el agua del Guadalquivir',
    summary:
      'Modelo que predice cuánto cambiará el volumen de agua de la cuenca del Guadalquivir (36 embalses, unos 5.900 hm³) en las próximas 4 semanas, a partir de más de 30 años de datos públicos de embalses y lluvia.',
    keyPoints: [
      'Datos reales y sucios de principio a fin: una base Access histórica del MITECO y la API de AEMET con límites de uso, limpiadas y alineadas semana a semana.',
      'Evaluación rigurosa: validación temporal, comparación con referencias simples y ninguna variable que use datos del futuro.',
      'Random Forest un 8 % mejor que la referencia estacional y un 31 % mejor en años de sequía, con un error de unos 2 puntos de llenado.',
    ],
    stack: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'API REST (AEMET)', 'Jupyter'],
    repo: 'https://github.com/victorgarciiag/Observatorio-sequ-a-Guadalquivir',
    visual: {
      type: 'chart',
      title: 'Error medio a 4 semanas',
      caption: 'Test 2019–2026 · menos es mejor',
      unit: 'hm³',
      bars: [
        { label: 'Persistencia', value: 174 },
        { label: 'Media estacional', value: 123 },
        { label: 'Regresión lineal', value: 124 },
        { label: 'XGBoost ajustado', value: 114 },
        { label: 'Random Forest', value: 113, highlight: true },
      ],
    },
  },
];

export type Project = {
  id: string;
  title: string;
  meta: string;
  challenge: string;
  solution: string;
  stack: string[];
  solutionLabel?: string; // por defecto "Lo que hice"
};

export const moreProjects: Project[] = [
  {
    id: 'odoo',
    title: 'ERP a medida con Odoo',
    meta: 'Guadaltech · ERP y automatización',
    challenge:
      'Los módulos estándar de ventas, inventario y contabilidad no encajaban con los procesos reales de los clientes.',
    solution:
      'Módulos personalizados de Odoo 17, automatizaciones en Python, integración web con QWeb y consultas optimizadas en PostgreSQL.',
    stack: ['Odoo 17', 'Python', 'PostgreSQL', 'QWeb'],
  },
  {
    id: 'finanzas',
    title: 'Gestor de finanzas personales',
    meta: 'Producto propio · En desarrollo',
    challenge: 'Los extractos del banco cuentan qué pasó, pero no ayudan a entender en qué se va el dinero.',
    solution:
      'Una aplicación que importa los movimientos bancarios, los clasifica por categorías y muestra la evolución de ingresos y gastos.',
    stack: ['Spring Boot', 'Angular', 'SQL Server', 'Docker'],
    solutionLabel: 'Lo que estoy construyendo',
  },
  {
    id: 'datos-abiertos',
    title: 'Pipeline de datos abiertos con Spark',
    meta: 'Próximo proyecto · Big Data',
    challenge:
      'Los datos públicos existen, pero están dispersos, en formatos distintos y son difíciles de explotar.',
    solution:
      'Un pipeline que los recoge, limpia y agrega con Spark, y los muestra en un panel de indicadores actualizado automáticamente.',
    stack: ['Python', 'Spark', 'PostgreSQL', 'Docker'],
    solutionLabel: 'La idea',
  },
];

export const steps = [
  { title: 'Entender', body: 'Antes de escribir código, entiendo el problema: quién lo vive, cuánto cuesta hoy y qué sería un buen resultado.' },
  { title: 'Diseñar', body: 'Elijo la solución más simple que lo resuelva bien, pensando desde el principio en que se pueda mantener y crecer.' },
  { title: 'Construir', body: 'Desarrollo por iteraciones cortas, con código limpio, probado y documentado.' },
  { title: 'Medir', body: 'Compruebo que el resultado resuelve el problema y ajusto con datos, no con suposiciones.' },
];

export const about = {
  title: 'De la ingeniería al código, y del código a la IA.',
  paragraphs: [
    'Empecé estudiando ingeniería, me pasé al desarrollo web y hoy trabajo como full stack en proyectos empresariales. Me especialicé en Inteligencia Artificial y Big Data porque me interesa el punto en el que el software y la IA se cruzan para resolver cosas concretas.',
    'Antes trabajé en un hotel en Malta con equipos de todo el mundo. Ahí aprendí algo que ningún framework enseña: escuchar al cliente y resolver bajo presión.',
  ],
};

export const stack = [
  { title: 'Desarrollo', items: 'Java, Spring Boot, Angular, React' },
  { title: 'Datos', items: 'Oracle, PostgreSQL, MySQL, Spark' },
  { title: 'IA', items: 'Machine Learning, Redes Neuronales, NLP, LLMs, Computer Vision' },
  { title: 'Infraestructura', items: 'Docker, Nginx, Git, Azure DevOps' },
];

export const contact = {
  title: '¿Tienes una idea, un proyecto o una propuesta?',
  titleAccent: 'Hablemos.',
  body: 'Ya sea una oportunidad, una colaboración o algo que quieras poner en marcha, escríbeme y lo vemos.',
};
