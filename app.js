const STORAGE_KEY = "ocean-nutrition-mvp-v18";
const STORAGE_PREFIX = "ocean-nutrition-mvp-";
const THEME_KEY = "ocean-nutrition-theme";

const breakfastBuilderGroups = [
  { key: "infusiones", title: "Infusiones", quantityLabel: "Cantidad / frecuencia", items: ["Mate", "Mate cocido", "Te", "Cafe", "Malta"] },
  { key: "leche", title: "Leche", quantityLabel: "Cantidad", items: ["Leche entera", "Leche descremada", "Leche proteica", "Leche deslactosada"] },
  { key: "hidratos", title: "Hidratos o cereales", quantityLabel: "Cantidad", items: ["Pan blanco", "Pan de salvado/integral", "Galletas de arroz", "Rapiditas o fajitas", "Avena", "Granola"] },
  { key: "untables", title: "Untables", quantityLabel: "Cantidad", items: ["Queso untable", "Palta", "Hummus", "Pasta de mani sin azucar", "Mermelada sin azucar", "Mermelada", "Dulce de leche sin azucar", "Dulce de leche", "Pasta de aceitunas"] },
  { key: "proteinas", title: "Proteinas", quantityLabel: "Cantidad", items: ["Huevo", "Queso untable descremado", "Queso port salut", "Jamon cocido natural / lomito", "Ricota magra"] },
  { key: "yogurt", title: "Yogurt", quantityLabel: "Cantidad", items: ["Yogurt descremado", "Yogurt entero", "Yogurt natural / griego / sin azucar"] },
  { key: "extras", title: "Extras", quantityLabel: "Cantidad", items: ["Frutos secos", "Semillas", "Licuado fruta + leche", "Licuado fruta + agua"] },
  { key: "frutas", title: "Frutas", quantityLabel: "Cantidad", items: [], notesLabel: "Todas menos" }
];

const snackBuilderGroups = [
  { key: "fruta", title: "Fruta", quantityLabel: "Cantidad", items: [] },
  { key: "licuado", title: "Licuado", quantityLabel: "Cantidad", items: ["Fruta + leche", "Fruta + agua"] },
  { key: "yogurt", title: "Yogurt", quantityLabel: "Cantidad", items: ["Yogurt descremado", "Yogurt entero", "Yogurt natural / griego / sin azucar"] },
  { key: "infusionLeche", title: "Infusion con leche", quantityLabel: "Cantidad", items: ["Cafe con leche", "Mate cocido con leche", "Te con leche", "Malta con leche"] },
  { key: "proteicos", title: "Proteicos", quantityLabel: "Cantidad", items: ["Huevo", "Quesos"] },
  { key: "extras", title: "Extras", quantityLabel: "Cantidad", items: ["Frutos secos", "Aceitunas", "Tomates cherry", "Bastoncitos de zanahoria"] },
  { key: "bases", title: "Bases", quantityLabel: "Cantidad", items: ["Pan blanco", "Pan de salvado/integral", "Galletas de arroz", "Rapiditas o fajitas"] }
];

const plateBuilderGroups = [
  {
    key: "vegetales",
    title: "Vegetales",
    quantityLabel: "Cantidad / proporcion",
    sections: [
      { title: "Crudos", items: ["Lechuga criolla", "Lechuga mantecosa", "Lechuga capuchina", "Lechuga morada", "Espinaca", "Rucula", "Achicoria", "Escarola", "Radicheta", "Repollo", "Tomate", "Tomate cherry", "Pepino", "Morron", "Cebolla blanca", "Cebolla morada", "Cebolla de verdeo", "Zanahoria", "Remolacha", "Rabanito", "Hinojo", "Apio"] },
      { title: "Cocidos", items: ["Acelga", "Espinaca", "Repollo", "Kale", "Hojas de remolacha", "Remolacha", "Coliflor", "Zapallito", "Zucchini", "Berenjena", "Morron", "Cebolla", "Cebolla de verdeo", "Tomate", "Chauchas", "Repollitos de bruselas", "Esparragos", "Puerro", "Apio", "Hinojo", "Ajo", "Champiñones", "Alcaucil", "Palmitos"] }
    ],
    notesLabel: "Todas menos / aclaraciones"
  },
  {
    key: "hidratos",
    title: "Hidratos de carbono",
    quantityLabel: "Cantidad / frecuencia",
    sections: [
      { title: "Blancos", items: ["Arroz", "Fideos", "Papa", "Polenta"] },
      { title: "Integrales o con alto contenido de fibra", items: ["Arroz integral", "Arroz yamani", "Fideos integrales", "Batata", "Choclo", "Avena", "Quinoa", "Trigo burgol", "Cus cus"] },
      { title: "Vegetales feculentos", items: ["Zanahoria cocida", "Zapallo anco", "Zapallo cabutia", "Brocoli"] },
      { title: "Legumbres", items: ["Lentejas", "Lentejones", "Lentejas turcas", "Porotos blancos", "Porotos negros", "Porotos rojos", "Porotos aduki", "Habas", "Garbanzos", "Arvejas"] }
    ],
    notesLabel: "Todos menos",
    recommendLabel: "Recomiendo elegir con mas frecuencia"
  },
  {
    key: "proteinas",
    title: "Proteinas",
    quantityLabel: "Cantidad / porcion",
    sections: [
      { title: "De origen animal", items: ["Huevo", "Pollo", "Pescado fresco", "Atun al natural", "Carne de vaca", "Carne de cerdo", "Milanesas al horno o freidora de aire", "Ricota"] },
      { title: "De origen vegetal", items: ["Lentejas", "Lentejones", "Lentejas turcas", "Porotos blancos", "Porotos negros", "Porotos rojos", "Porotos aduki", "Habas", "Garbanzos", "Arvejas"] }
    ],
    notesLabel: "Aclaraciones"
  },
  {
    key: "extras",
    title: "Extras que no suman al % del plato",
    quantityLabel: "Cantidad / uso",
    items: ["Aceite crudo oliva o girasol", "Aceitunas", "Palta", "Vinagre", "Limon", "Frutos secos", "Queso port salut", "Fruta"],
    notesLabel: "Aclaraciones"
  }
];

const supplementOptions = ["Proteina en polvo (whey protein)", "Creatina", "Omega 3", "Magnesio", "Sodio", "Otros"];
const medicationOptions = ["Medicación para diabetes", "Medicación tiroidea", "Metformina", "Levotiroxina", "Otra medicación"];

const mealTemplates = [
  { id: "desayuno", title: "Desayuno", time: "07:00 - 09:00", art: "breakfast" },
  { id: "colacion", title: "Colacion", time: "10:00 - 12:00", art: "snack" },
  { id: "almuerzo", title: "Almuerzo", time: "12:00 - 15:00", art: "lunch", usesPlate: true },
  { id: "merienda", title: "Merienda", time: "15:00 - 17:00", art: "merienda" },
  { id: "cena", title: "Cena", time: "20:00 - 22:00", art: "dinner", usesPlate: true },
  { id: "actividad", title: "Actividad", time: "Semana", art: "activity" }
];

const defaultState = {
  role: "patient",
  section: "home",
  selectedPatientId: "",
  detail: null,
  patients: [],
  plansByPatient: {}
};

let state = loadState();
let sessionRole = null;
let pendingLoginRole = "patient";
let navigationHistory = [];
let colorTheme = loadTheme();

applyTheme();

function emptyPatient(seed = {}) {
  return {
    id: seed.id || uniqueId(seed.name || "Paciente"),
    name: seed.name || "Nuevo paciente",
    initials: seed.initials || initials(seed.name || "NP"),
    age: seed.age || "",
    goal: seed.goal || "",
    appointmentDate: seed.appointmentDate || "",
    appointmentTime: seed.appointmentTime || "",
    status: seed.status || "En seguimiento",
    inactive: Boolean(seed.inactive),
    weight: seed.weight || "",
    targetWeight: seed.targetWeight || "",
    height: seed.height || "",
    phone: seed.phone || "",
    waist: seed.waist || "",
    bodyFat: seed.bodyFat || "",
    muscle: seed.muscle || "",
    notes: seed.notes || "",
    measurements: seed.measurements || [],
    records: seed.records || [],
    messages: seed.messages || []
  };
}

function createBlankPlan() {
  return {
    objective: "",
    meals: mealTemplates.map(meal => ({
      ...meal,
      short: "",
      portions: [],
      options: [],
      note: "",
      image: "",
      disabled: false,
      recipes: "",
      builder: createMealBuilder(meal.id),
      plate: { vegetables: "", protein: "", carbs: "", vegetablesPercent: 50, proteinPercent: 25, carbsPercent: 25 }
    }))
  };
}

function createMealBuilder(mealId) {
  return Object.fromEntries(getBuilderGroups({ id: mealId }).map(group => [group.key, { quantity: "", selected: [], notes: "", recommend: "" }]));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? normalizeState(saved) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function clearOldOceanStorage() {
  Object.keys(localStorage)
    .filter(key => key.startsWith(STORAGE_PREFIX) && key !== STORAGE_KEY)
    .forEach(key => localStorage.removeItem(key));
}

function normalizeState(input) {
  const merged = { ...structuredClone(defaultState), ...input };
  merged.patients = (merged.patients || []).map(patient => emptyPatient(patient));
  merged.plansByPatient = merged.plansByPatient || {};
  merged.patients.forEach(patient => {
    if (!merged.plansByPatient[patient.id]) merged.plansByPatient[patient.id] = createBlankPlan();
    merged.plansByPatient[patient.id] = normalizePlan(merged.plansByPatient[patient.id]);
  });
  if (!merged.patients.some(patient => patient.id === merged.selectedPatientId)) {
    merged.selectedPatientId = merged.patients[0]?.id || "";
  }
  return merged;
}

function normalizePlan(plan) {
  const blank = createBlankPlan();
  return {
    objective: plan?.objective || "",
    meals: blank.meals.map(template => ({
      ...template,
      ...(plan?.meals || []).find(meal => meal.id === template.id),
      builder: normalizeBuilder((plan?.meals || []).find(meal => meal.id === template.id)?.builder, template.id),
      plate: {
        ...template.plate,
        ...((plan?.meals || []).find(meal => meal.id === template.id)?.plate || {})
      }
    })),
    supplements: plan?.supplements || "",
    medications: plan?.medications || ""
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || "dark";
  } catch {
    return "dark";
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = colorTheme;
}

function toggleTheme() {
  colorTheme = colorTheme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(THEME_KEY, colorTheme);
  } catch {}
  applyTheme();
  render();
}

function setState(patch) {
  state = { ...state, ...patch };
  saveState();
  render();
  window.scrollTo(0, 0);
}

function currentLocation() {
  return { section: state.section, detail: state.detail };
}

function rememberLocation() {
  const current = currentLocation();
  const previous = navigationHistory[navigationHistory.length - 1];
  if (!previous || previous.section !== current.section || previous.detail !== current.detail) {
    navigationHistory.push(current);
  }
}

function navigateTo(section) {
  if (state.section === section && !state.detail) return;
  rememberLocation();
  setState({ section, detail: null });
}

function openDetail(detail) {
  rememberLocation();
  setState({ detail });
}

function navigateBack() {
  const previous = navigationHistory.pop();
  setState(previous || { section: "home", detail: null });
}

function currentPatient() {
  return state.patients.find(patient => patient.id === state.selectedPatientId) || state.patients[0];
}

function currentPlan() {
  const patient = currentPatient();
  if (!patient) return createBlankPlan();
  if (!state.plansByPatient[patient.id]) state.plansByPatient[patient.id] = createBlankPlan();
  return state.plansByPatient[patient.id];
}

function updatePatient(patientId, updater) {
  state.patients = state.patients.map(patient => patient.id === patientId ? updater({ ...patient }) : patient);
  saveState();
  render();
}

function updateCurrentPlan(updater) {
  const patient = currentPatient();
  if (!patient) return;
  state.plansByPatient[patient.id] = updater(structuredClone(currentPlan()));
  saveState();
  render();
}

function navItems() {
  if (state.role === "pro") {
    return [
      ["home", "Inicio", "⌂"],
      ["patients", "Pacientes", "◎"],
      ["plan", "Plan", "▤"],
      ["records", "Registros", "＋"],
      ["measurements", "Mediciones", "↗"],
      ["messages", "Contacto", "✉"]
    ];
  }
  return [
    ["home", "Inicio", "⌂"],
    ["plan", "Plan", "▤"],
    ["records", "Registro", "＋"],
    ["measurements", "Mediciones", "↗"],
    ["messages", "Contacto", "✉"]
  ];
}

function render() {
  applyTheme();
  if (!sessionRole) {
    document.querySelector("#app").innerHTML = renderLogin();
    bindLoginEvents();
    return;
  }
  document.querySelector("#app").innerHTML = `
    <div class="layout">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${renderContent()}
      </main>
      ${renderMobileNav()}
    </div>
  `;
  bindEvents();
}

function renderLogin() {
  const isPatient = pendingLoginRole === "patient";
  return `
    <main class="login-shell">
      <section class="login-brand-panel">
        <div class="brand login-brand">
          <img src="./assets/ocean-blue.jpeg" alt="Ocean Centro de Salud" />
          <div>
            <div class="brand-title">Ocean</div>
            <div class="brand-subtitle">Centro de Salud</div>
          </div>
        </div>
        <div class="login-brand-copy">
          <p class="eyebrow">Nutricion y seguimiento</p>
          <h1>Tu espacio de salud, ordenado y accesible.</h1>
          <p>Planes alimentarios, turnos, mediciones y seguimiento en un entorno pensado para cada perfil.</p>
        </div>
      </section>
      <section class="login-form-panel">
        <div class="login-box">
          <div class="login-box-head">
            <p class="eyebrow">Acceso a Ocean</p>
            ${renderThemeToggle()}
          </div>
          <h2>Iniciar sesion</h2>
          <p class="lead">Selecciona tu tipo de acceso para ingresar a tu espacio.</p>
          <div class="login-role-grid" role="group" aria-label="Tipo de acceso">
            <button class="login-role-card ${isPatient ? "active" : ""}" type="button" data-login-role="patient">
              <span class="login-role-icon">◎</span>
              <strong>Paciente</strong>
              <small>Plan, turnos y registros personales</small>
            </button>
            <button class="login-role-card ${!isPatient ? "active" : ""}" type="button" data-login-role="pro">
              <span class="login-role-icon">▤</span>
              <strong>Nutricionista</strong>
              <small>Pacientes, agenda y seguimiento</small>
            </button>
          </div>
          <form class="login-form" data-login-form>
            <label class="field">
              <span>Correo electronico</span>
              <input type="email" autocomplete="email" placeholder="${isPatient ? "paciente@correo.com" : "nutricionista@ocean.com"}" />
            </label>
            <label class="field">
              <span>Contrasena</span>
              <input type="password" autocomplete="current-password" placeholder="Ingresa tu contrasena" />
            </label>
            <button class="btn primary login-submit" type="submit">Ingresar como ${isPatient ? "paciente" : "nutricionista"}</button>
          </form>
          <p class="login-demo-note">Acceso demostrativo. La validacion segura de usuarios se conecta en la etapa de nube.</p>
        </div>
      </section>
    </main>
  `;
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <img src="./assets/ocean-blue.jpeg" alt="Ocean Centro de Salud" />
        <div>
          <div class="brand-title">Ocean</div>
          <div class="brand-subtitle">Centro de Salud</div>
        </div>
      </div>
      <div class="sidebar-session">
        <span>Sesion activa</span>
        <strong>${state.role === "pro" ? "Nutricionista" : "Paciente"}</strong>
        <button type="button" data-logout>Cerrar sesion</button>
      </div>
      <nav class="nav-list">
        ${navItems().map(([id, label, icon]) => navButton(id, label, icon)).join("")}
      </nav>
      <div class="sidebar-footer">
        MVP local. Lo que se cargue queda guardado en este navegador hasta conectar nube y usuarios reales.
      </div>
    </aside>
  `;
}

function navButton(id, label, icon) {
  return `
    <button class="nav-button ${state.section === id && !state.detail ? "active" : ""}" data-nav="${id}">
      <span class="nav-icon">${icon}</span>
      <span>${label}</span>
    </button>
  `;
}

function renderTopbar() {
  const patient = currentPatient();
  const title = state.role === "pro" ? "Panel de nutricionista" : patient ? `Hola, ${firstName(patient.name)}` : "Mi espacio Ocean";
  const subtitle = state.role === "pro"
    ? "Agenda, pacientes y seguimiento nutricional."
    : "Tu plan, registros y evolucion en un solo lugar.";

  return `
    <header class="topbar">
      <div>
        <div class="mobile-brand brand">
          <img src="./assets/ocean-turquoise.jpeg" alt="Ocean Centro de Salud" />
          <div>
            <div class="brand-title">Ocean</div>
            <div class="brand-subtitle">Centro de Salud</div>
          </div>
        </div>
        <div class="mobile-context-row">
          ${state.section !== "home" || state.detail ? `<button class="mobile-back" type="button" data-go-back>‹ <span>Volver</span></button>` : ""}
          <p class="eyebrow">${state.role === "pro" ? "Consultorio" : "Perfil del paciente"}</p>
        </div>
        <h1>${h(title)}</h1>
        <p class="lead">${h(subtitle)}</p>
      </div>
      <div class="toolbar topbar-actions">
        ${state.role === "pro" ? renderPatientSelect(patient) : `<span class="small-pill">${h(patient?.goal || "Perfil pendiente")}</span>`}
        ${renderThemeToggle()}
        <button class="session-logout" type="button" data-logout>Cerrar sesion</button>
      </div>
    </header>
  `;
}

function renderThemeToggle() {
  const isLight = colorTheme === "light";
  return `
    <button class="theme-toggle" type="button" data-theme-toggle aria-label="Cambiar a modo ${isLight ? "oscuro" : "claro"}">
      <span>${isLight ? "◐" : "☼"}</span>
      <strong>${isLight ? "Oscuro" : "Claro"}</strong>
    </button>
  `;
}

function renderPatientSelect(patient) {
  return `
    <label class="active-patient-control">
      <span>Paciente</span>
      <select data-patient-select aria-label="Paciente activo">
        <option value="" ${patient ? "" : "selected"}>Seleccionar paciente</option>
        ${state.patients.map(item => `<option value="${h(item.id)}" ${item.id === patient?.id ? "selected" : ""}>${h(item.name)}${item.inactive ? " (inactivo)" : ""}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderMobileNav() {
  return `
    <nav class="mobile-nav">
      ${navItems().map(([id, label, icon]) => `
        <button class="${state.section === id && !state.detail ? "active" : ""}" data-nav="${id}">
          <span>${icon}</span>${h(label)}
        </button>
      `).join("")}
    </nav>
  `;
}

function renderContent() {
  if (state.detail && currentPatient()) return renderDetail();
  if (state.role === "pro") {
    if (state.section === "patients") return renderPatients();
    if (state.section === "plan") return renderPlan(true);
    if (state.section === "records") return renderRecords(true);
    if (state.section === "measurements") return renderMeasurements(true);
    if (state.section === "messages") return renderMessages(true);
    return renderProHome();
  }
  if (state.section === "plan") return renderPlan(false);
  if (state.section === "records") return renderRecords(false);
  if (state.section === "measurements") return renderMeasurements(false);
  if (state.section === "messages") return renderMessages(false);
  return renderPatientHome();
}

function renderPatientHome() {
  const patient = currentPatient();
  if (!patient) return renderPatientEmptyState();
  const plan = currentPlan();
  return `
    <section class="hero-band">
      <div class="panel today-panel">
        <p class="eyebrow">Inicio</p>
        <h2>${h(plan.objective || "Tu nutricionista todavia no cargo el objetivo del plan.")}</h2>
        <p class="lead">Este inicio resume tu estado general. El detalle de comidas esta dentro de Plan y tus cargas diarias dentro de Registro.</p>
        <div class="today-actions">
          <button class="btn" data-nav="plan">Ver plan</button>
          <button class="btn" data-nav="records">Cargar registro</button>
          <button class="btn" data-nav="measurements">Cargar peso</button>
        </div>
      </div>
      <div class="panel appointment-card">
        <h2>Proximo turno</h2>
        <p class="lead">${h(appointmentText(patient) || "Sin turno cargado")}</p>
        <div class="today-actions">
          <button class="btn" data-nav="messages">Contactar</button>
        </div>
      </div>
    </section>
    <section class="summary-strip">
      ${metric("Peso actual", display(patient.weight, "kg"), "Lo carga el paciente o la nutricionista")}
      ${metric("Plan", plan.objective ? "Cargado" : "Pendiente", "Editable por la nutricionista")}
      ${metric("Mediciones", patient.measurements.length, "Historial cargado")}
      ${metric("Material", "Disponible", "PDFs y recursos")}
    </section>
    <section class="grid two">
      <div class="panel">
        <h2>Horarios del plan</h2>
        <p class="lead" style="margin-bottom: 12px">No se actualiza por hora: es la guia horaria cargada por la nutricionista.</p>
        <div class="timeline">
          ${plan.meals.filter(meal => meal.id !== "actividad").map(meal => `
            <div class="timeline-item">
              <div class="timeline-time">${h(meal.time.split(" - ")[0])}</div>
              <div><strong>${h(meal.title)}</strong><p class="lead">${h(meal.short || "Pendiente de carga")}</p></div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <h2>Ultimos registros cargados por vos</h2>
        <div class="stack">
          ${patient.records.length ? patient.records.slice(-3).reverse().map(record => recordRow(record)).join("") : `<div class="empty">Todavia no cargaste registros.</div>`}
        </div>
      </div>
      <div class="panel">
        <h2>Material educativo</h2>
        <div class="empty">Este espacio queda reservado para PDFs, recetas, listas de compras o indicaciones que la nutricionista quiera compartir.</div>
      </div>
    </section>
  `;
}

function renderPatientEmptyState() {
  return `
    <section class="panel empty-dashboard">
      <p class="eyebrow">Perfil del paciente</p>
      <h2>Tu perfil todavia no esta vinculado.</h2>
      <p class="lead">Cuando la nutricionista cree tu ficha vas a encontrar aca tu proximo turno, tu plan y tus registros.</p>
    </section>
  `;
}

function renderNoSelectedPatient(title) {
  return `
    <section class="panel empty-dashboard">
      <p class="eyebrow">${h(title)}</p>
      <h2>Selecciona un paciente para comenzar.</h2>
      <p class="lead">Cuando elijas una ficha desde el selector superior vas a poder trabajar en esta seccion.</p>
      <div class="today-actions">
        <button class="btn primary" type="button" data-nav="patients">Ver pacientes</button>
      </div>
    </section>
  `;
}

function renderProHome() {
  const patient = currentPatient();
  const activePatients = state.patients.filter(item => !item.inactive);
  const inactivePatients = state.patients.length - activePatients.length;
  const appointments = state.patients.filter(item => !item.inactive && (item.appointmentDate || item.appointmentTime));
  return `
    <section class="dashboard-home">
      <div class="panel dashboard-card dashboard-agenda">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Agenda</p>
            <h2>Proximos turnos</h2>
            <p>Tu agenda inmediata de consultorio.</p>
          </div>
        </div>
        <div class="appointment-list">
          ${appointments.length ? appointments.map(item => `
            <button class="appointment-row ${item.id === patient?.id ? "active" : ""}" data-select-patient="${h(item.id)}">
              <span class="avatar">${h(item.initials)}</span>
              <span class="appointment-copy">
                <strong>${h(item.name)}</strong><br>
                <small>${h(appointmentText(item) || "Sin turno")}</small>
              </span>
              <span class="status-pill ok">Abrir</span>
            </button>
          `).join("") : `<div class="empty compact-empty">No hay turnos proximos.</div>`}
        </div>
      </div>
      <div class="panel dashboard-card dashboard-patients">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Pacientes</p>
            <h2>${activePatients.length} ${activePatients.length === 1 ? "paciente activo" : "pacientes activos"}</h2>
            <p>${patient ? `${h(patient.name)} esta seleccionado${patient.inactive ? " como inactivo" : ""}.` : "Crea o selecciona un paciente para comenzar."}</p>
          </div>
        </div>
        ${state.patients.length ? "" : `<div class="empty compact-empty">Todavia no hay pacientes cargados.</div>`}
        ${inactivePatients ? `<div class="status-summary">${inactivePatients} ${inactivePatients === 1 ? "paciente inactivo conservado" : "pacientes inactivos conservados"}.</div>` : ""}
        <div class="dashboard-actions">
          <button class="btn primary" type="button" data-open-modal="new-patient">Nuevo paciente</button>
          <button class="btn" type="button" data-nav="patients">Ver pacientes</button>
        </div>
      </div>
    </section>
    ${renderNewPatientModal()}
  `;
}

function renderPatients() {
  const patient = currentPatient();
  if (!patient) {
    return `
      <section class="patient-profile-page">
        <div class="panel empty-dashboard">
          <p class="eyebrow">Pacientes</p>
          <h2>Todavia no hay pacientes cargados.</h2>
          <p class="lead">Crea una ficha para comenzar a organizar agenda, plan y seguimiento.</p>
          <div class="today-actions">
            <button class="btn primary" type="button" data-open-modal="new-patient">Nuevo paciente</button>
          </div>
        </div>
        ${renderNewPatientModal()}
      </section>
    `;
  }
  return `
    <section class="patient-profile-page">
      <div class="panel patient-profile">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Ficha del paciente</p>
            <h2>${h(patient.name)} ${patient.inactive ? `<span class="status-pill warn">Inactivo</span>` : ""}</h2>
            <p>Datos personales, agenda y seguimiento clínico.</p>
          </div>
          <button class="btn" type="button" data-open-modal="personal-data">Editar datos</button>
        </div>
        <div class="patient-data-grid">
          ${patientDatum("Edad", patient.age ? `${patient.age} anos` : "Sin cargar")}
          ${patientDatum("Peso actual", display(patient.weight, "kg"))}
          ${patientDatum("Estatura", display(patient.height, "cm"))}
          ${patientDatum("Telefono", patient.phone || "Sin cargar")}
        </div>
      </div>

      <div class="patient-profile-grid">
        <div class="panel profile-section">
          <div class="section-heading">
            <div>
              <h3>Objetivo y agenda</h3>
              <p>Foco del tratamiento y próximo turno.</p>
            </div>
            <button class="btn ghost" type="button" data-open-modal="agenda-data">Editar</button>
          </div>
          <div class="profile-detail-list">
            ${profileDetail("Objetivo", patient.goal || "Sin cargar")}
            ${profileDetail("Proximo turno", appointmentText(patient) || "Sin turno cargado")}
          </div>
        </div>

        <div class="panel profile-section">
          <div class="section-heading">
            <div>
              <h3>Datos de seguimiento</h3>
              <p>Medidas y notas privadas de consulta.</p>
            </div>
            <button class="btn ghost" type="button" data-open-modal="followup-data">Editar</button>
          </div>
          <div class="profile-detail-list">
            ${profileDetail("Peso actual", display(patient.weight, "kg"))}
            ${profileDetail("Meta", display(patient.targetWeight, "kg"))}
            ${profileDetail("Cintura", display(patient.waist, "cm"))}
            ${profileDetail("Notas", patient.notes || "Sin notas cargadas")}
          </div>
        </div>
      </div>

      <div class="panel profile-actions">
        <div class="section-heading">
          <div>
            <h3>Accesos del paciente</h3>
            <p>Continúa desde la ficha hacia el área que quieras trabajar.</p>
          </div>
        </div>
        <div class="today-actions" style="margin-top: 0">
          <button class="btn primary" data-nav="plan">Editar plan</button>
          <button class="btn" data-nav="records">Ver registros</button>
          <button class="btn" data-nav="measurements">Mediciones</button>
        </div>
      </div>

      <div class="panel patient-status-panel">
        <div>
          <p class="eyebrow">Estado de la ficha</p>
          <h3>${patient.inactive ? "Paciente inactivo" : "Paciente activo"}</h3>
          <p class="lead">${patient.inactive ? "La ficha queda guardada con plan, registros y mediciones, pero no aparece en turnos activos." : "Si deja de atenderse, pasalo a inactivo para conservar todo su historial sin borrarlo."}</p>
        </div>
        <div class="patient-status-actions">
          <button class="btn" type="button" data-toggle-patient-status="${h(patient.id)}">${patient.inactive ? "Reactivar paciente" : "Marcar inactivo"}</button>
          <button class="btn danger" type="button" data-open-modal="delete-patient">Eliminar paciente</button>
        </div>
      </div>

      <div class="panel add-patient-band">
        <div>
          <h3>Agregar paciente</h3>
          <p class="lead">Crea una ficha nueva y asigna el primer turno.</p>
        </div>
        <button class="btn primary" type="button" data-open-modal="new-patient">Agregar paciente</button>
      </div>

      ${renderAppModal("personal-data", "Datos personales", `
        <form class="form-grid" data-patient-personal-form>
          <label class="field full">
            <span>Nombre y apellido</span>
            <input name="name" value="${h(patient.name)}" />
          </label>
          <label class="field">
            <span>Edad</span>
            <input name="age" type="number" value="${h(patient.age)}" />
          </label>
          <label class="field">
            <span>Estatura cm</span>
            <input name="height" type="number" step="0.1" value="${h(patient.height)}" />
          </label>
          <label class="field full">
            <span>Telefono</span>
            <input name="phone" type="tel" value="${h(patient.phone)}" placeholder="Numero de contacto" />
          </label>
          <div class="form-actions full">
            <button class="btn primary" type="submit">Guardar datos</button>
          </div>
        </form>
      `)}

      ${renderAppModal("agenda-data", "Objetivo y agenda", `
        <form class="form-grid" data-patient-agenda-form>
          <label class="field full">
            <span>Objetivo</span>
            <input name="goal" value="${h(patient.goal)}" placeholder="Objetivo principal del tratamiento" />
          </label>
          <label class="field">
            <span>Fecha del proximo turno</span>
            <input name="appointmentDate" type="date" value="${h(patient.appointmentDate)}" />
          </label>
          <label class="field">
            <span>Hora</span>
            <select name="appointmentTime">${hourOptions(patient.appointmentTime)}</select>
          </label>
          <div class="form-actions full">
            <button class="btn primary" type="submit">Guardar agenda</button>
          </div>
        </form>
      `)}

      ${renderAppModal("followup-data", "Datos de seguimiento", `
        <form class="form-grid" data-patient-followup-form>
          <label class="field">
            <span>Peso actual kg</span>
            <input name="weight" type="number" step="0.1" value="${h(patient.weight)}" />
          </label>
          <label class="field">
            <span>Meta kg</span>
            <input name="targetWeight" type="number" step="0.1" value="${h(patient.targetWeight)}" />
          </label>
          <label class="field">
            <span>Cintura cm</span>
            <input name="waist" type="number" step="0.1" value="${h(patient.waist)}" />
          </label>
          <label class="field full">
            <span>Notas de consulta</span>
            <textarea class="textarea-md" name="notes" placeholder="Antecedentes, preferencias, horarios, barreras o acuerdos">${h(patient.notes)}</textarea>
          </label>
          <div class="form-actions full">
            <button class="btn primary" type="submit">Guardar seguimiento</button>
          </div>
        </form>
      `)}

      ${renderAppModal("delete-patient", "Eliminar paciente", `
        <form class="delete-confirm" data-delete-patient-form>
          <p class="lead">Esta accion elimina la ficha de ${h(patient.name)} junto con su plan, mediciones y registros guardados en esta version local.</p>
          <div class="form-actions">
            <button class="btn ghost" type="button" data-close-modal>Cancelar</button>
            <button class="btn danger" type="submit">Eliminar definitivamente</button>
          </div>
        </form>
      `)}

      ${renderAppModal("new-patient", "Agregar paciente", `
        <form class="form-grid" data-new-patient-form>
          <label class="field full">
            <span>Nombre y apellido</span>
            <input name="name" required />
          </label>
          <label class="field">
            <span>Edad</span>
            <input name="age" type="number" />
          </label>
          <label class="field">
            <span>Telefono</span>
            <input name="phone" type="tel" />
          </label>
          <label class="field">
            <span>Fecha del proximo turno</span>
            <input name="appointmentDate" type="date" />
          </label>
          <label class="field">
            <span>Hora</span>
            <select name="appointmentTime">${hourOptions()}</select>
          </label>
          <div class="form-actions full">
            <button class="btn primary" type="submit">Agregar paciente</button>
          </div>
        </form>
      `)}
    </section>
  `;
}

function renderNewPatientModal() {
  return renderAppModal("new-patient", "Agregar paciente", `
    <form class="form-grid" data-new-patient-form>
      <label class="field full">
        <span>Nombre y apellido</span>
        <input name="name" required />
      </label>
      <label class="field">
        <span>Edad</span>
        <input name="age" type="number" />
      </label>
      <label class="field">
        <span>Telefono</span>
        <input name="phone" type="tel" />
      </label>
      <label class="field">
        <span>Fecha del proximo turno</span>
        <input name="appointmentDate" type="date" />
      </label>
      <label class="field">
        <span>Hora</span>
        <select name="appointmentTime">${hourOptions()}</select>
      </label>
      <div class="form-actions full">
        <button class="btn primary" type="submit">Agregar paciente</button>
      </div>
    </form>
  `);
}

function patientDatum(label, value) {
  return `<div class="patient-datum"><span>${h(label)}</span><strong>${h(value)}</strong></div>`;
}

function profileDetail(label, value) {
  return `<div class="profile-detail"><span>${h(label)}</span><strong>${h(value)}</strong></div>`;
}

function renderAppModal(id, title, body) {
  return `
    <div class="chooser-modal app-modal" data-app-modal="${h(id)}" aria-hidden="true">
      <div class="chooser-backdrop" data-close-modal></div>
      <div class="chooser-dialog" role="dialog" aria-modal="true" aria-label="${h(title)}">
        <div class="chooser-dialog-head">
          <div>
            <p class="eyebrow">Ficha del paciente</p>
            <h3>${h(title)}</h3>
          </div>
          <button class="icon-btn" type="button" data-close-modal title="Cerrar">×</button>
        </div>
        ${body}
      </div>
    </div>
  `;
}

function renderPlan(isPro) {
  const patient = currentPatient();
  if (!patient) return isPro ? renderNoSelectedPatient("Plan alimentario") : renderPatientEmptyState();
  const plan = currentPlan();
  if (isPro) {
    return `
      <section class="pro-plan-page">
        <div class="plan-board panel">
          <div class="plan-board-header">
            <div>
              <p class="eyebrow">Plan alimentario</p>
              <h2>${h(patient.name)}</h2>
              <p class="lead">Armado por comidas, horarios y equivalencias visibles para el paciente.</p>
            </div>
            <div class="plan-board-actions">
              <button class="btn ghost" data-nav="patients">Ficha paciente</button>
              <button class="btn ghost" data-nav="measurements">Mediciones</button>
            </div>
          </div>
          <div class="meal-grid pro-meal-grid">
            ${plan.meals.map(meal => renderMealCard(meal, true)).join("")}
          </div>
        </div>

        <section class="panel plan-treatment-panel">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Tratamiento</p>
              <h3>Medicacion y suplementos</h3>
              <p>Indicaciones complementarias que forman parte del plan.</p>
            </div>
          </div>
          <form class="editor-stack" data-plan-form>
            <div class="form-grid editorial-grid">
              <label class="field">
                <span>Suplementos</span>
                <textarea class="textarea-sm" name="supplements" placeholder="Suplemento, dosis, momento del dia y observaciones">${h(plan.supplements || "")}</textarea>
              </label>
              <label class="field">
                <span>Medicacion relevante</span>
                <textarea class="textarea-sm" name="medications" placeholder="Medicacion, horario de toma y cuidados nutricionales">${h(plan.medications || "")}</textarea>
              </label>
            </div>
            <div class="pill-picker">
              ${[...supplementOptions, ...medicationOptions].map(item => `<span>${h(item)}</span>`).join("")}
            </div>
            <details class="plan-section compact-note-section">
              <summary>
                <span>Objetivo visible para el paciente</span>
                <small>Opcional</small>
              </summary>
              <div class="plan-section-body">
                <label class="field full">
                  <textarea class="textarea-sm" name="objective" placeholder="Foco de esta etapa y criterio de avance">${h(plan.objective)}</textarea>
                </label>
              </div>
            </details>
            <div class="form-actions">
              <button class="btn primary" type="submit">Guardar tratamiento</button>
            </div>
          </form>
        </section>
      </section>
    `;
  }
  return `
    <section class="grid">
      <div class="panel">
        <h2>Plan de alimentacion</h2>
        <div class="meal-grid">
          ${plan.meals.map(meal => renderMealCard(meal, false)).join("")}
        </div>
        ${renderPlanNotes(plan)}
      </div>
    </section>
  `;
}

function renderMealCard(meal, isPro) {
  const disabled = Boolean(meal.disabled);
  return `
    <article class="panel meal-card ${disabled ? "muted-card" : ""}">
      ${renderMealArt(meal)}
      <div class="meal-card-body">
        <div class="meal-title-row">
          <div>
            <h3>${h(meal.title)}</h3>
            <div class="meal-time">${h(meal.time)}</div>
          </div>
          ${disabled ? `<span class="status-pill warn">No indicada</span>` : meal.usesPlate ? `<span class="status-pill">Plato</span>` : ""}
        </div>
        <p class="lead" style="margin-top: 8px">${h(disabled ? "Esta comida no queda indicada para este plan." : meal.short || "Pendiente de carga")}</p>
        <div class="meal-actions">
          <button class="btn ${isPro ? "primary" : ""}" data-meal-detail="${h(meal.id)}">${isPro ? "Editar" : "Ver guia"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderPlanNotes(plan) {
  if (!plan.supplements && !plan.medications) return "";
  return `
    <div class="plan-notes">
      ${plan.supplements ? `
        <div class="record-row">
          <strong>Suplementos</strong><br>
          <span class="lead">${h(plan.supplements)}</span>
        </div>
      ` : ""}
      ${plan.medications ? `
        <div class="record-row">
          <strong>Medicacion</strong><br>
          <span class="lead">${h(plan.medications)}</span>
        </div>
      ` : ""}
    </div>
  `;
}

function renderMealArt(meal) {
  return `<div class="meal-art ${h(meal.art)}"></div>`;
}

function renderRecords(isPro) {
  const patient = currentPatient();
  if (!patient) return isPro ? renderNoSelectedPatient("Registros") : renderPatientEmptyState();
  return `
    <section class="grid sidebar-main">
      ${isPro ? `
        <div class="panel">
          <h2>Registros de ${h(firstName(patient.name))}</h2>
          <p class="lead">Aca la nutricionista revisa lo que el paciente fue cargando.</p>
          <div class="empty" style="margin-top: 12px">${patient.status === "Registro pendiente" ? "Este paciente figura como pendiente de revisar." : "Sin alerta activa para este paciente."}</div>
        </div>
      ` : `
        <div class="panel">
          <h2>Cargar registro</h2>
          <form class="form-grid" data-record-form>
            <label class="field">
              <span>Hora</span>
              <input name="time" value="${new Date().toTimeString().slice(0, 5)}" />
            </label>
            <label class="field">
              <span>Tipo</span>
              <select name="title">
                <option>Desayuno</option>
                <option>Colacion</option>
                <option>Almuerzo</option>
                <option>Merienda</option>
                <option>Cena</option>
                <option>Actividad</option>
              </select>
            </label>
            <label class="field full">
              <span>Detalle</span>
              <textarea name="detail" placeholder="Que comiste, como fue la porcion, actividad o comentario para tu nutricionista"></textarea>
            </label>
            <button class="btn primary" type="submit">Agregar registro</button>
          </form>
        </div>
      `}
      <div class="panel">
        <h2>${isPro ? "Registros del paciente" : "Registros cargados"}</h2>
        <div class="stack">
          ${patient.records.length ? patient.records.slice().reverse().map(record => recordRow(record)).join("") : `<div class="empty">Todavia no hay registros cargados.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderMeasurements(isPro) {
  const patient = currentPatient();
  if (!patient) return isPro ? renderNoSelectedPatient("Mediciones") : renderPatientEmptyState();
  return `
    <section class="grid sidebar-main">
      <div class="panel">
        <h2>${isPro ? "Nueva medicion y antropometria" : "Cargar peso"}</h2>
        <form class="form-grid" data-measurement-form>
          <label class="field">
            <span>Fecha</span>
            <input name="date" value="${todayLabel()}" />
          </label>
          <label class="field">
            <span>Peso kg</span>
            <input name="weight" type="number" step="0.1" value="${h(patient.weight)}" />
          </label>
          <label class="field">
            <span>Cintura cm</span>
            <input name="waist" type="number" step="0.1" value="${h(patient.waist)}" />
          </label>
          ${isPro ? renderAnthropometryFields(patient) : ""}
          <button class="btn primary" type="submit">Guardar medicion</button>
        </form>
      </div>
      <div class="panel">
        <h2>Evolucion</h2>
        <div class="grid three">
          ${metric("Peso", display(patient.weight, "kg"), patient.targetWeight ? `Meta ${patient.targetWeight} kg` : "Sin meta cargada")}
          ${metric("Cintura", display(patient.waist, "cm"), "Seguimiento simple")}
          ${metric("Datos profesionales", patient.measurements.some(item => hasAnthropometry(item)) ? "Cargados" : "Sin cargar", isPro ? "Pliegues y perimetros" : "Los carga la nutricionista")}
        </div>
        ${renderChart(patient)}
        <div class="stack">
          ${patient.measurements.length ? patient.measurements.slice().reverse().map(measurementRow).join("") : `<div class="empty">Todavia no hay mediciones cargadas.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderAnthropometryFields(patient) {
  const last = patient.measurements.at(-1) || {};
  return `
    <label class="field">
      <span>Cadera cm</span>
      <input name="hip" type="number" step="0.1" value="${h(last.hip || "")}" />
    </label>
    <label class="field">
      <span>Cuello cm</span>
      <input name="neck" type="number" step="0.1" value="${h(last.neck || "")}" />
    </label>
    <label class="field">
      <span>Brazo relajado cm</span>
      <input name="armRelaxed" type="number" step="0.1" value="${h(last.armRelaxed || "")}" />
    </label>
    <label class="field">
      <span>Brazo contraido cm</span>
      <input name="armFlexed" type="number" step="0.1" value="${h(last.armFlexed || "")}" />
    </label>
    <label class="field">
      <span>Pliegue tricipital mm</span>
      <input name="triceps" type="number" step="0.1" value="${h(last.triceps || "")}" />
    </label>
    <label class="field">
      <span>Pliegue subescapular mm</span>
      <input name="subscapular" type="number" step="0.1" value="${h(last.subscapular || "")}" />
    </label>
    <label class="field">
      <span>Pliegue suprailíaco mm</span>
      <input name="suprailiac" type="number" step="0.1" value="${h(last.suprailiac || "")}" />
    </label>
    <label class="field">
      <span>Pliegue abdominal mm</span>
      <input name="abdominal" type="number" step="0.1" value="${h(last.abdominal || "")}" />
    </label>
    <label class="field">
      <span>Grasa %</span>
      <input name="fat" type="number" step="0.1" value="${h(patient.bodyFat)}" />
    </label>
    <label class="field">
      <span>Musculo kg</span>
      <input name="muscle" type="number" step="0.1" value="${h(patient.muscle)}" />
    </label>
  `;
}

function renderMessages(isPro) {
  const patient = currentPatient();
  return `
    <section class="grid two">
      <div class="panel appointment-card">
        <p class="eyebrow">Contacto</p>
        <h2>WhatsApp del consultorio</h2>
        <p class="lead">El canal principal puede seguir siendo WhatsApp. Este acceso queda visible sin convertir la app en un chat más.</p>
        <div class="today-actions">
          <a class="btn primary" href="https://wa.me/" target="_blank" rel="noreferrer">Abrir WhatsApp</a>
          <button class="btn" data-nav="home">Volver al inicio</button>
        </div>
      </div>
      <div class="panel">
        <h2>Mensajes internos</h2>
        <div class="empty">Queda como opcion secundaria para una etapa futura. Por ahora no compite con WhatsApp.</div>
      </div>
    </section>
  `;
}

function renderDetail() {
  const meal = currentPlan().meals.find(item => item.id === state.detail);
  if (!meal) return renderPatientHome();
  return state.role === "pro" ? renderMealEditor(meal) : renderMealGuide(meal);
}

function renderMealGuide(meal) {
  if (meal.disabled) {
    return `
      <section class="panel">
        <div class="detail-header">
          <button class="icon-btn" data-back title="Volver">‹</button>
          <div>
            <p class="eyebrow">${h(meal.time)}</p>
            <h2>${h(meal.title)}</h2>
            <p class="lead">Esta comida no fue indicada dentro de tu plan actual.</p>
          </div>
        </div>
        <div class="empty">Si tenes dudas sobre horarios o reemplazos, consultalo por WhatsApp con tu nutricionista.</div>
      </section>
    `;
  }
  return `
    <section class="panel">
      <div class="detail-header">
        <button class="icon-btn" data-back title="Volver">‹</button>
        <div>
          <p class="eyebrow">${h(meal.time)}</p>
          <h2>${h(meal.title)}</h2>
          <p class="lead">${h(meal.short || "La nutricionista todavia no cargo una descripcion para esta comida.")}</p>
        </div>
      </div>
      ${meal.usesPlate ? renderPlateForMeal(meal) : ""}
      ${renderSelectedBuilder(meal)}
      ${meal.recipes ? `
        <div class="record-row" style="margin-bottom: 16px">
          <strong>Opciones armadas / recetas</strong><br>
          <span class="lead">${h(meal.recipes)}</span>
        </div>
      ` : ""}
      <div class="grid three">
        ${detailList("Porciones guia", meal.portions, "Sin porciones cargadas.")}
        ${detailList("Opciones", meal.options, "Sin opciones cargadas.")}
        <div>
          <h3>Nota de la nutricionista</h3>
          <div class="record-row">${h(meal.note || "Sin nota cargada.")}</div>
        </div>
      </div>
    </section>
  `;
}

function renderMealEditor(meal) {
  return `
    <section class="meal-editor-page">
      <div class="editor-head panel">
        <button class="icon-btn" data-back title="Volver">‹</button>
        <div>
          <p class="eyebrow">Plan alimentario</p>
          <h2>${h(meal.title)}</h2>
        </div>
      </div>

      <form class="editor-stack professional-meal-form" data-meal-form="${h(meal.id)}">
        <section class="panel meal-config-strip">
          <label class="field mini-field">
            <span>Estado</span>
            <select name="mealDisabled">
              <option value="off" ${meal.disabled ? "" : "selected"}>Indicada</option>
              <option value="on" ${meal.disabled ? "selected" : ""}>No indicar</option>
            </select>
          </label>
          <label class="field">
            <span>Desde</span>
            <select name="startTime">${hourOptions(splitMealTime(meal.time).start)}</select>
          </label>
          <label class="field">
            <span>Hasta</span>
            <select name="endTime">${hourOptions(splitMealTime(meal.time).end)}</select>
          </label>
          <button class="btn primary save-top" type="submit">Guardar ${h(meal.title)}</button>
        </section>

        ${meal.usesPlate ? renderPlateEditor(meal) : renderFoodBuilderEditor(meal)}

        <input type="hidden" name="short" value="" />
        <input type="hidden" name="portions" value="" />
        <input type="hidden" name="recipes" value="" />
        <input type="hidden" name="options" value="" />
        <input type="hidden" name="note" value="" />
        ${!meal.usesPlate ? `
          <input type="hidden" name="vegetables" value="${h(meal.plate.vegetables)}" />
          <input type="hidden" name="protein" value="${h(meal.plate.protein)}" />
          <input type="hidden" name="carbs" value="${h(meal.plate.carbs)}" />
          <input type="hidden" name="vegetablesPercent" value="${h(meal.plate.vegetablesPercent)}" />
          <input type="hidden" name="proteinPercent" value="${h(meal.plate.proteinPercent)}" />
          <input type="hidden" name="carbsPercent" value="${h(meal.plate.carbsPercent)}" />
        ` : ""}

        <div class="form-actions">
          <button class="btn primary" type="submit">Guardar comida</button>
        </div>
      </form>
    </section>
  `;
}

function renderPlateForMeal(meal) {
  const plate = normalizePlatePercents(meal.plate);
  return `
    <div class="plate-patient-view">
      <div class="plate-dynamic" style="--veg:${plate.vegetablesPercent}; --protein:${plate.proteinPercent}; --carbs:${plate.carbsPercent}" aria-label="Metodo del plato aplicado a ${h(meal.title)}">
        <div class="plate-disc"></div>
        <div class="plate-legend">
          <span class="legend-veg"><b>Vegetales ${plate.vegetablesPercent}%</b>${h(meal.plate.vegetables || "Segun seleccion del plan")}</span>
          <span class="legend-protein"><b>Proteinas ${plate.proteinPercent}%</b>${h(meal.plate.protein || "Segun seleccion del plan")}</span>
          <span class="legend-carb"><b>Carbohidratos ${plate.carbsPercent}%</b>${h(meal.plate.carbs || "Segun seleccion del plan")}</span>
        </div>
      </div>
    </div>
  `;
}

function renderPlateEditor(meal) {
  const plate = normalizePlatePercents(meal.plate);
  return `
    <section class="panel plate-workbench">
      <div class="workbench-head">
        <div>
          <h3>Composicion del plato</h3>
          <p class="lead">Los porcentajes modifican el grafico que ve el paciente.</p>
        </div>
      </div>
      <div class="plate-workbench-grid">
        <div class="plate-dynamic plate-editor-preview" style="--veg:${plate.vegetablesPercent}; --protein:${plate.proteinPercent}; --carbs:${plate.carbsPercent}">
          <div class="plate-disc"></div>
          <div class="plate-legend">
            <span class="legend-veg"><b>Verde: vegetales</b>${plate.vegetablesPercent}%</span>
            <span class="legend-protein"><b>Rosa: proteinas</b>${plate.proteinPercent}%</span>
            <span class="legend-carb"><b>Amarillo: carbohidratos</b>${plate.carbsPercent}%</span>
          </div>
        </div>
        <div class="plate-percent-grid">
          <label class="field">
            <span>Vegetales %</span>
            <input name="vegetablesPercent" type="number" min="0" max="100" step="5" value="${h(meal.plate.vegetablesPercent)}" />
          </label>
          <label class="field">
            <span>Proteinas %</span>
            <input name="proteinPercent" type="number" min="0" max="100" step="5" value="${h(meal.plate.proteinPercent)}" />
          </label>
          <label class="field">
            <span>Carbohidratos %</span>
            <input name="carbsPercent" type="number" min="0" max="100" step="5" value="${h(meal.plate.carbsPercent)}" />
          </label>
        </div>
      </div>
      ${renderFoodBuilderEditor(meal)}
      <input type="hidden" name="vegetables" value="" />
      <input type="hidden" name="protein" value="" />
      <input type="hidden" name="carbs" value="" />
    </section>
  `;
}

function renderFoodBuilderEditor(meal) {
  const groups = getBuilderGroups(meal);
  return `
    <section class="food-selector ${meal.usesPlate ? "plate-selector" : "panel"}">
      <div class="workbench-head">
        <div>
          <h3>${meal.usesPlate ? "Alimentos disponibles" : "Armador de opciones"}</h3>
          <p class="lead">Abrí cada grupo para elegir alimentos, cantidades y excepciones.</p>
        </div>
      </div>
      <div class="builder-grid">
        ${groups.map(group => {
          const current = meal.builder?.[group.key] || { quantity: "", selected: [], notes: "", recommend: "" };
          return `
            <div class="builder-tile ${hasBuilderValue(current) ? "has-selection" : ""}">
              <div>
                <strong>${h(group.title)}</strong>
                <span>${h(builderTileSummary(group, current))}</span>
              </div>
              <button class="btn ghost" type="button" data-open-chooser="${h(group.key)}">Elegir</button>
            </div>
            <div class="chooser-modal" data-chooser-modal="${h(group.key)}" aria-hidden="true">
              <div class="chooser-backdrop" data-close-chooser></div>
              <div class="chooser-dialog" role="dialog" aria-modal="true" aria-label="${h(group.title)}">
                <div class="chooser-dialog-head">
                  <div>
                    <p class="eyebrow">Seleccion de alimentos</p>
                    <h3>${h(group.title)}</h3>
                    <p class="lead">${h(groupItemCount(group) ? `${groupItemCount(group)} opciones disponibles` : "Campo libre para indicaciones")}</p>
                  </div>
                  <button class="icon-btn" type="button" data-close-chooser title="Cerrar">×</button>
                </div>
                <label class="field">
                  <span>${h(group.quantityLabel)}</span>
                  <input name="builderQuantity:${h(group.key)}" value="${h(current.quantity)}" placeholder="Cantidad o frecuencia" />
                </label>
                ${renderGroupChecks(group, current)}
                <div class="chooser-notes">
                  <label class="field">
                    <span>${h(group.notesLabel || "Aclaraciones / excepciones")}</span>
                    <textarea class="textarea-sm" name="builderNotes:${h(group.key)}" placeholder="Aclaraciones, excepciones o criterios">${h(current.notes || "")}</textarea>
                  </label>
                  ${group.recommendLabel ? `
                    <label class="field">
                      <span>${h(group.recommendLabel)}</span>
                      <textarea class="textarea-sm" name="builderRecommend:${h(group.key)}" placeholder="Prioridades de eleccion o frecuencia">${h(current.recommend || "")}</textarea>
                    </label>
                  ` : ""}
                </div>
                <div class="form-actions">
                  <button class="btn primary" type="button" data-close-chooser>Aplicar seleccion</button>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderSelectedBuilder(meal) {
  if (!usesFoodBuilder(meal)) return "";
  const groups = getBuilderGroups(meal)
    .map(group => ({ ...group, current: meal.builder?.[group.key] || { quantity: "", selected: [], notes: "", recommend: "" } }))
    .filter(group => group.current.quantity || group.current.selected.length || group.current.notes || group.current.recommend);
  if (!groups.length) return "";
  return `
    <div class="builder-summary">
      ${groups.map(group => `
        <div class="record-row">
          <strong>${h(group.title)}</strong><br>
          <span class="lead">${h(group.current.quantity || "Cantidad a criterio")} ${group.current.selected.length ? `· ${h(group.current.selected.join(", "))}` : ""}${group.current.notes ? ` · ${h(group.current.notes)}` : ""}${group.current.recommend ? ` · ${h(group.current.recommend)}` : ""}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderGroupChecks(group, current) {
  if (group.sections?.length) {
    return `
      <div class="selector-sections">
        ${group.sections.map(section => `
          <div class="selector-section">
            <div class="selector-section-title">${h(section.title)}</div>
            <div class="check-list">
              ${section.items.map(item => checkRow(group.key, item, current)).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }
  if (!group.items?.length) return "";
  return `<div class="check-list">${group.items.map(item => checkRow(group.key, item, current)).join("")}</div>`;
}

function checkRow(groupKey, item, current) {
  return `
    <label class="check-row">
      <input type="checkbox" name="builder:${h(groupKey)}" value="${h(item)}" ${current.selected.includes(item) ? "checked" : ""} />
      <span>${h(item)}</span>
    </label>
  `;
}

function groupItemCount(group) {
  if (group.sections?.length) return group.sections.reduce((total, section) => total + section.items.length, 0);
  return group.items?.length || 0;
}

function builderTileSummary(group, current) {
  const selectedCount = current.selected?.length || 0;
  if (selectedCount) return `${selectedCount} seleccionados`;
  if (current.quantity || current.notes || current.recommend) return "Con indicaciones cargadas";
  return groupItemCount(group) ? `${groupItemCount(group)} opciones` : "Campo libre";
}

function detailList(title, items, emptyText) {
  return `
    <div>
      <h3>${h(title)}</h3>
      ${items.length ? `<ul class="list">${items.map(item => `<li>${h(item)}</li>`).join("")}</ul>` : `<div class="empty">${h(emptyText)}</div>`}
    </div>
  `;
}

function renderChart(patient) {
  const weights = patient.measurements.map(item => Number(item.weight)).filter(Boolean);
  if (!weights.length) return `<div class="empty" style="margin: 14px 0">El grafico aparecera cuando haya mediciones cargadas.</div>`;
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  return `
    <div class="chart">
      ${patient.measurements.map(item => {
        const weight = Number(item.weight);
        const percent = max === min ? 45 : 18 + ((weight - min) / (max - min)) * 72;
        return `
          <div class="bar-wrap">
            <div class="bar" style="height:${percent}%"></div>
            <div class="bar-label">${h(item.date)}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function metric(label, value, note) {
  return `
    <div class="metric">
      <div class="metric-label">${h(label)}</div>
      <div class="metric-value">${h(value)}</div>
      <div class="metric-note">${h(note)}</div>
    </div>
  `;
}

function recordRow(record) {
  return `
    <div class="record-row">
      <strong>${h(record.time)} · ${h(record.title)}</strong><br>
      <span class="lead">${h(record.detail)}</span>
    </div>
  `;
}

function measurementRow(item) {
  const details = [
    item.weight ? `${item.weight} kg` : "",
    item.waist ? `cintura ${item.waist} cm` : "",
    item.hip ? `cadera ${item.hip} cm` : "",
    item.fat ? `grasa ${item.fat}%` : "",
    item.muscle ? `musculo ${item.muscle} kg` : "",
    item.triceps ? `tricipital ${item.triceps} mm` : ""
  ].filter(Boolean).join(" · ");
  return `
    <div class="record-row">
      <strong>${h(item.date)}</strong><br>
      <span class="lead">${h(details || "Medicion sin datos.")}</span>
    </div>
  `;
}

function bindEvents() {
  bindThemeToggles();

  document.querySelectorAll("[data-nav]").forEach(button => {
    button.addEventListener("click", () => navigateTo(button.dataset.nav));
  });

  document.querySelectorAll("[data-select-patient]").forEach(button => {
    button.addEventListener("click", () => setState({ selectedPatientId: button.dataset.selectPatient, detail: null }));
  });

  const select = document.querySelector("[data-patient-select]");
  if (select) select.addEventListener("change", event => setState({ selectedPatientId: event.target.value, detail: null }));

  document.querySelectorAll("[data-meal-detail]").forEach(button => {
    button.addEventListener("click", () => openDetail(button.dataset.mealDetail));
  });

  document.querySelectorAll("[data-back], [data-go-back]").forEach(button => {
    button.addEventListener("click", navigateBack);
  });

  document.querySelectorAll("[data-logout]").forEach(button => {
    button.addEventListener("click", () => {
      sessionRole = null;
      pendingLoginRole = "patient";
      navigationHistory = [];
      render();
    });
  });

  bindRecordForm();
  bindMeasurementForm();
  bindMessageForm();
  bindPlanForm();
  bindMealForm();
  bindPatientForms();
  bindChooserModals();
  bindAppModals();
}

function bindLoginEvents() {
  bindThemeToggles();

  document.querySelectorAll("[data-login-role]").forEach(button => {
    button.addEventListener("click", () => {
      pendingLoginRole = button.dataset.loginRole;
      render();
    });
  });

  const form = document.querySelector("[data-login-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    sessionRole = pendingLoginRole;
    navigationHistory = [];
    setState({ role: sessionRole, section: "home", detail: null });
  });
}

function bindThemeToggles() {
  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    button.addEventListener("click", toggleTheme);
  });
}

function bindRecordForm() {
  const form = document.querySelector("[data-record-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    updatePatient(state.selectedPatientId, patient => ({
      ...patient,
      status: "Registro pendiente",
      records: [...patient.records, {
        time: data.get("time") || todayLabel(),
        title: data.get("title"),
        detail: data.get("detail") || "Registro sin detalle."
      }]
    }));
  });
}

function bindMeasurementForm() {
  const form = document.querySelector("[data-measurement-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const measurement = Object.fromEntries(data.entries());
    updatePatient(state.selectedPatientId, patient => ({
      ...patient,
      weight: measurement.weight || patient.weight,
      waist: measurement.waist || patient.waist,
      bodyFat: measurement.fat || patient.bodyFat,
      muscle: measurement.muscle || patient.muscle,
      measurements: [...patient.measurements, cleanMeasurement(measurement)].slice(-10)
    }));
  });
}

function bindMessageForm() {
  const form = document.querySelector("[data-message-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const text = String(data.get("message") || "").trim();
    if (!text) return;
    updatePatient(state.selectedPatientId, patient => ({
      ...patient,
      messages: [...patient.messages, {
        from: state.role === "pro" ? "Nutricionista" : "Paciente",
        text
      }]
    }));
  });
}

function bindPlanForm() {
  const form = document.querySelector("[data-plan-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    updateCurrentPlan(plan => ({
      ...plan,
      objective: data.get("objective") || "",
      supplements: data.get("supplements") || "",
      medications: data.get("medications") || ""
    }));
    showToast("Se guardo la configuracion del plan.");
  });
}

function bindMealForm() {
  const form = document.querySelector("[data-meal-form]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const mealId = form.dataset.mealForm;
    const data = new FormData(form);
    const savedMeal = currentPlan().meals.find(meal => meal.id === mealId);
    updateCurrentPlan(plan => ({
      ...plan,
      meals: plan.meals.map(meal => meal.id === mealId ? {
        ...meal,
        time: `${data.get("startTime") || "00:00"} - ${data.get("endTime") || "00:00"}`,
        image: data.get("image") || "",
        disabled: data.get("mealDisabled") === "on",
        short: data.get("short") || "",
        portions: lines(data.get("portions")),
        options: lines(data.get("options")),
        note: data.get("note") || "",
        recipes: data.get("recipes") || "",
        builder: collectBuilder(data, meal.id),
        plate: {
          vegetables: data.get("vegetables") || "",
          protein: data.get("protein") || "",
          carbs: data.get("carbs") || "",
          vegetablesPercent: Number(data.get("vegetablesPercent")) || 0,
          proteinPercent: Number(data.get("proteinPercent")) || 0,
          carbsPercent: Number(data.get("carbsPercent")) || 0
        }
      } : meal)
    }));
    showToast(`Se guardo ${savedMeal?.title || "la comida"}.`);
  });
}

function bindChooserModals() {
  document.querySelectorAll("[data-open-chooser]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = [...document.querySelectorAll("[data-chooser-modal]")]
        .find(item => item.dataset.chooserModal === button.dataset.openChooser);
      if (modal) {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
      }
    });
  });

  document.querySelectorAll("[data-close-chooser]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".chooser-modal");
      if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  });
}

function bindAppModals() {
  document.querySelectorAll("[data-open-modal]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = [...document.querySelectorAll("[data-app-modal]")]
        .find(item => item.dataset.appModal === button.dataset.openModal);
      if (modal) {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
      }
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".app-modal");
      if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  });
}

function showToast(message) {
  document.querySelectorAll(".toast").forEach(item => item.remove());
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.classList.add("visible"), 20);
  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => toast.remove(), 250);
  }, 2400);
}

function bindPatientForms() {
  document.querySelectorAll("[data-toggle-patient-status]").forEach(button => {
    button.addEventListener("click", () => {
      const patientId = button.dataset.togglePatientStatus;
      const target = state.patients.find(patient => patient.id === patientId);
      updatePatient(patientId, patient => ({ ...patient, inactive: !patient.inactive }));
      showToast(target?.inactive ? "Se reactivo el paciente." : "El paciente quedo inactivo y conserva su historial.");
    });
  });

  const deleteForm = document.querySelector("[data-delete-patient-form]");
  if (deleteForm) {
    deleteForm.addEventListener("submit", event => {
      event.preventDefault();
      const patient = currentPatient();
      if (!patient) return;
      const nextPatients = state.patients.filter(item => item.id !== patient.id);
      const nextPlans = { ...state.plansByPatient };
      delete nextPlans[patient.id];
      state = {
        ...state,
        patients: nextPatients,
        plansByPatient: nextPlans,
        selectedPatientId: nextPatients[0]?.id || "",
        section: nextPatients.length ? state.section : "patients",
        detail: null
      };
      saveState();
      render();
      showToast("Se elimino el paciente.");
    });
  }

  const newForm = document.querySelector("[data-new-patient-form]");
  if (newForm) {
    newForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(newForm);
      const name = String(data.get("name") || "").trim();
      if (!name) return;
      const patient = emptyPatient({
        id: uniqueId(name),
        name,
        initials: initials(name),
        age: data.get("age") || "",
        phone: data.get("phone") || "",
        appointmentDate: data.get("appointmentDate") || "",
        appointmentTime: data.get("appointmentTime") || ""
      });
      state.patients = [...state.patients, patient];
      state.plansByPatient[patient.id] = createBlankPlan();
      setState({ selectedPatientId: patient.id });
      showToast(`Se agrego ${patient.name}.`);
    });
  }

  const personalForm = document.querySelector("[data-patient-personal-form]");
  if (personalForm) {
    personalForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(personalForm);
      updatePatient(state.selectedPatientId, patient => ({
        ...patient,
        name: data.get("name") || patient.name,
        initials: initials(data.get("name") || patient.name),
        age: data.get("age") || "",
        height: data.get("height") || "",
        phone: data.get("phone") || ""
      }));
      showToast("Se guardaron los datos personales.");
    });
  }

  const agendaForm = document.querySelector("[data-patient-agenda-form]");
  if (agendaForm) {
    agendaForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(agendaForm);
      updatePatient(state.selectedPatientId, patient => ({
        ...patient,
        goal: data.get("goal") || "",
        appointmentDate: data.get("appointmentDate") || "",
        appointmentTime: data.get("appointmentTime") || ""
      }));
      showToast("Se guardaron el objetivo y la agenda.");
    });
  }

  const followupForm = document.querySelector("[data-patient-followup-form]");
  if (followupForm) {
    followupForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(followupForm);
      updatePatient(state.selectedPatientId, patient => ({
        ...patient,
        weight: data.get("weight") || "",
        targetWeight: data.get("targetWeight") || "",
        waist: data.get("waist") || "",
        notes: data.get("notes") || ""
      }));
      showToast("Se guardaron los datos de seguimiento.");
    });
  }
}

function cleanMeasurement(raw) {
  return Object.fromEntries(Object.entries(raw).filter(([, value]) => String(value || "").trim() !== ""));
}

function lines(value) {
  return String(value || "")
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);
}

function collectBuilder(data, mealId) {
  return Object.fromEntries(getBuilderGroups({ id: mealId }).map(group => [
    group.key,
    {
      quantity: data.get(`builderQuantity:${group.key}`) || "",
      selected: data.getAll(`builder:${group.key}`),
      notes: data.get(`builderNotes:${group.key}`) || "",
      recommend: data.get(`builderRecommend:${group.key}`) || ""
    }
  ]));
}

function normalizeBuilder(builder = {}, mealId = "") {
  return Object.fromEntries(getBuilderGroups({ id: mealId }).map(group => [
    group.key,
    {
      quantity: builder?.[group.key]?.quantity || "",
      selected: Array.isArray(builder?.[group.key]?.selected) ? builder[group.key].selected : [],
      notes: builder?.[group.key]?.notes || "",
      recommend: builder?.[group.key]?.recommend || ""
    }
  ]));
}

function usesFoodBuilder(meal) {
  return getBuilderGroups(meal).length > 0;
}

function getBuilderGroups(meal = {}) {
  if (["desayuno", "merienda"].includes(meal.id)) return breakfastBuilderGroups;
  if (meal.id === "colacion") return snackBuilderGroups;
  if (["almuerzo", "cena"].includes(meal.id)) return plateBuilderGroups;
  return [];
}

function hasBuilderValue(group = {}) {
  return Boolean(group.quantity || group.notes || group.recommend || group.selected?.length);
}

function display(value, unit = "") {
  return value ? `${value}${unit ? ` ${unit}` : ""}` : "Sin cargar";
}

function appointmentText(patient) {
  if (!patient) return "";
  if (!patient.appointmentDate && !patient.appointmentTime) return "";
  const date = patient.appointmentDate ? dateText(patient.appointmentDate) : "Sin fecha";
  const time = patient.appointmentTime ? patient.appointmentTime : "sin hora";
  return `${date}, ${time}`;
}

function dateText(value) {
  const [year, month, day] = String(value).split("-");
  if (!year || !month || !day) return value;
  return `${day}/${month}/${year}`;
}

function hourOptions(selected = "") {
  const hours = [];
  for (let hour = 7; hour <= 22; hour += 1) {
    hours.push(`${String(hour).padStart(2, "0")}:00`);
  }
  return [`<option value="">Seleccionar</option>`, ...hours.map(hour => `<option value="${hour}" ${hour === selected ? "selected" : ""}>${hour}</option>`)].join("");
}

function splitMealTime(value) {
  const [start = "", end = ""] = String(value || "").split(" - ");
  return { start, end };
}

function normalizePlatePercents(plate = {}) {
  return {
    vegetablesPercent: clampPercent(plate.vegetablesPercent, 50),
    proteinPercent: clampPercent(plate.proteinPercent, 25),
    carbsPercent: clampPercent(plate.carbsPercent, 25)
  };
}

function clampPercent(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.min(100, number));
}

function cssUrl(value) {
  return String(value || "").replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}

function isOwnMessage(message) {
  return state.role === "pro" ? message.from === "Nutricionista" : message.from === "Paciente";
}

function hasAnthropometry(item) {
  return ["hip", "neck", "armRelaxed", "armFlexed", "triceps", "subscapular", "suprailiac", "abdominal", "fat", "muscle"].some(key => item[key]);
}

function upcomingAppointments() {
  return state.patients.filter(patient => patient.appointmentDate || patient.appointmentTime).length;
}

function firstName(name) {
  return String(name || "Paciente").split(" ")[0];
}

function initials(name) {
  return String(name || "Paciente")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join("") || "NP";
}

function uniqueId(name) {
  return String(name || "paciente")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") + "-" + Date.now().toString(36);
}

function todayLabel() {
  const date = new Date();
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function h(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
