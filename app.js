const F17_FOLDERS = [
  { id: "f17_01", name: "1. Caminos", desc: "Fotos caminos, calles desde custodia hacia site, incluye caminata hacia cerro" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "Fotos panorámicas del edificio o site por los 4 lados" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "Fotos panorámicas de los tableros, suministros y contadores" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "Fotos de acceso a edificio, puertas, escaleras incluye llaves o candados" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "Fotos de pedestal de torre y base de vientos o arriostres por los 4 lados" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "Fotos panorámicas de gabinetes incluye plataforma, módulos, GPS en piso" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "Fotos de barras en piso y torre, cable de bajada de aterramiento, pararrayo, pozos tierra limpieza y mediciones" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "Fotos de escalerilla en piso y torre" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "Fotos de fanales, fotocelda, cable vulcanizado, limpieza de fanales y prueba de funcionamiento" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "Fotos panorámico de equipos, etiqueta, cables, inicio y fin de soportes, medición de tubo, altura de equipo" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "Fotos de torres hacia abajo por los 4 lados" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "Fotos panorámico de torre incluye zoom de área de roldana por los 4 lados" },
  { id: "f17_13", name: "13. Vista de site general", desc: "Fotos generales, pisos, paredes, equipos, letrero, luminarias, tomacorrientes, techos, soportes" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "Fotos de postes de cometida, fotos de poste de transformador incluye zoom a transformador" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "Fotos en horizontal 12 fotos cada 30 grados, fotos barrido 0 a 180 y 180 a 360 (3 rondas) - Alta resolución" },
  { id: "f17_16", name: "16. Generadores", desc: "Fotos de generadores, tanque combustible, fotos de área de generador" },
  { id: "f17_17", name: "17. Estado de torre", desc: "Fotos de ángulos, pernería y prueba de torque, estado de pintura, verificar corrosión y faltantes" },
  { id: "f17_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "Fotos panorámicas de paredes por dentro y fuera por 4 lados" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "Fotos etiquetar operador fibra óptica, fotos de recorrido, cámaras" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "Dibujar diagrama de recorrido de suministro ATP hacia tablero ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "Dibujar diagrama de recorrido de suministro operador hacia tablero operador" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "Escribir el recorrido de la ruta desde el custodio hacia el site, zonas puntuales y tiempo" },
  { id: "f17_23", name: "23. Vista de concertina", desc: "Fotos verificar corrosión y cortado de concertina, incluye reparar concertina, foto antes y después" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "Fotos de buzones abierto y cerrado, fibra óptica, llave y candado, limpieza de buzones" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "Fotos de llaves sueltas del manojo y etiquetado en piso, video funcionamiento de la llave en la puerta principal" },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "Fotos panorámica de polímero o PVC, pernería, empalmes, pintura" },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "Fotos de luminarias apagadas y prendidas en sala equipos y poste si aplica" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "Fotos de charla y personal con EPPs, señalización y gestión de residuos, uso de EPPs de técnico" },
  { id: "f17_29", name: "29. Fotos de cambio de batería", desc: "Fotos y videos de proceso de cambio de batería, medición de batería, video funcionamiento de candado nuevo" }
];

const FORMATOS_FOLDERS = [
  { id: "fmt_01", name: "2. FORMATOS MP", desc: "Subir fotografías y documentos PDF de formatos de mantenimiento preventivo" }
];

const MP_FOLDERS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "Foto de personal con EPPs y charla de 5 minutos, equipos utilizados, telurómetro, pinza, desarmadores, brújula" },
  { id: "mp_02", name: "2. Altura de torre", desc: "Foto de arriba hacia abajo, de abajo hacia arriba, incluye altura torre base, roldana superior e inferior" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "Foto panorámica de altura, largo y ancho" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "Fotos limpieza de fanales y fotocelda" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "Fotos limpieza de pozos tierra, incluye pintado" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "Fotos de limpieza de pisos, paredes, escalerilla, bastidores, polímero o PVC en torre" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "Fotos panorámica, limpieza y medición de contadores" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "Fotos de limpieza y aceitado de chapas, bisagras de todas las puertas en site" },
  { id: "mp_09", name: "9. Validación de diagrama unifilar de tableros", desc: "Fotos dibujar en hoja el diagrama actual desde suministro hacia tableros incluye todas las llaves" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "Fotos de espesor de pintura y galvanizado en valor mils en varias partes de la torre" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "Fotos de corte, cinta cerrada, cinta abierta en varias partes de la torre" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "Fotos antes, con espátula y después engrasado de todas las barras en piso y torre" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "Fotos de limpieza con brocha y torque de todos los tableros en la estación" },
  { id: "mp_14", name: "14. Medición de tableros", desc: "Fotos de mediciones de amperios (R,S,T) y voltaje (RS, RT, ST) en I.G y salida de equipos o tablero operador" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "Fotos de limpieza con escoba en pedestal y base de vientos u arriostres" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "Fotos de mantenimiento de limpieza con escoba y medición con wincha de todos los equipos en piso (ancho, largo y altura)" },
  { id: "mp_17", name: "17. Brujula", desc: "Fotos de brújula y escrito con plumón el azimut en la pata de torre" },
  { id: "mp_18", name: "18. GPS", desc: "Fotos panorámica y de cerca a GPS en base de torre, que se note las coordenadas (grados, minutos y segundos)" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "Altura edificio, altura parapeto, altura escalera azotea" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "Foto panorámica de nivel en montante de torre, en torre ventada, mástil y autosoportada, monopolo" },
  { id: "mp_21", name: "21. Aplicación de spray", desc: "Foto aplicación en accesorios de línea de vida, accesorios de vientos, grampas y grilletes si están oxidados" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "Fotos panorámica de tubo, foto de medida de tubo, azimut, altura eje de tubo de todos los soportes vacíos" },
  { id: "mp_23", name: "23. Vistas de las cordenadas de cada arista del site", desc: "Fotos panorámica de GPS en cada esquina de sala equipos, escribir con plumón A, B, C, D" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "Fotos panorámica y cerca de medida de wincha de ancho, largo y altura de sala de equipo" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "Fotos de limpieza de ojos y cambio de cintillo de hojas en mimetizado si aplica" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "Fotos de panorámica, limpieza, placas, medición de inyector y extractor, fotos exterior de extractor y limpieza rejilla" },
  { id: "mp_27", name: "27. Altura soporte ocupados", desc: "Fotos panorámica de altura de eje de soportes ocupados, escribir qué operador y equipo está en ese soporte" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "Fotos panorámica de azotea de propietario por los 4 lados" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "Fotos de limpieza exterior, limpiar basura y maleza 1 metro y medio aprox., fotos de antes y después" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "Fotos de limpieza de cámara, torque tablero, reiniciar cámara si requiere, verificar funcionamiento con Cristian Salazar" }
];

const ALL_SUBFOLDERS_COUNT = F17_FOLDERS.length + FORMATOS_FOLDERS.length + MP_FOLDERS.length; // 60

// IndexedDB
let db;
const DB_NAME = "ReportesSiteDB_v15";
const DB_VERSION = 1;

function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains("projects")) {
        database.createObjectStore("projects", { keyPath: "id" });
      }
      if (!database.objectStoreNames.contains("files")) {
        const store = database.createObjectStore("files", { keyPath: "id" });
        store.createIndex("projectId", "projectId", { unique: false });
      }
    };
    req.onsuccess = (e) => {
      db = e.target.result;
      resolve(db);
    };
    req.onerror = (e) => reject(e);
  });
}

function dbGetAllProjects() {
  return new Promise((resolve) => {
    const tx = db.transaction("projects", "readonly");
    const req = tx.objectStore("projects").getAll();
    req.onsuccess = () => resolve(req.result || []);
  });
}

function dbSaveProject(proj) {
  return new Promise((resolve) => {
    const tx = db.transaction("projects", "readwrite");
    tx.objectStore("projects").put(proj);
    tx.oncomplete = () => resolve();
  });
}

function dbDeleteProject(projId) {
  return new Promise((resolve) => {
    const tx = db.transaction(["projects", "files"], "readwrite");
    tx.objectStore("projects").delete(projId);
    const idx = tx.objectStore("files").index("projectId");
    const req = idx.getAllKeys(projId);
    req.onsuccess = () => {
      (req.result || []).forEach((k) => tx.objectStore("files").delete(k));
    };
    tx.oncomplete = () => resolve();
  });
}

function dbGetProjectFiles(projId) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readonly");
    const idx = tx.objectStore("files").index("projectId");
    const req = idx.getAll(projId);
    req.onsuccess = () => resolve(req.result || []);
  });
}

function dbSaveFile(fileRecord) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(fileRecord);
    tx.oncomplete = () => resolve();
  });
}

function dbDeleteFile(fileId) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").delete(fileId);
    tx.oncomplete = () => resolve();
  });
}

// Estado global
let projects = [];
let activeProjectId = null;
let activeTab = "f17";
let currentFiles = [];
let uploadTargetSubId = null;
let preparedZipBlob = null;
let preparedZipName = "";

// GPS
let currentCoords = "GPS no disponible";
let currentPlace = "Ubicación en campo";

function updateGPS() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      currentCoords = `${lat}, ${lon}`;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=14`);
        const data = await res.json();
        if (data && data.address) {
          const dist = data.address.suburb || data.address.city_district || data.address.town || data.address.city || "";
          const reg = data.address.state || data.address.region || "";
          currentPlace = [dist, reg].filter(Boolean).join(", ") || "Ubicación verificada";
        }
      } catch (e) {}
    },
    () => {},
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

// Compresión y Sello de Agua
async function processImageWithWatermark(blobOrFile, applyWatermark, isHighRes) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(blobOrFile);
    img.onload = async () => {
      URL.revokeObjectURL(url);
      let w = img.width;
      let h = img.height;

      if (!isHighRes && Math.max(w, h) > 1600) {
        const ratio = 1600 / Math.max(w, h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      if (applyWatermark) {
        const proj = projects.find((p) => p.id === activeProjectId);
        const siteName = proj ? proj.name : "SITE";
        const now = new Date();
        const dateStr = now.toLocaleDateString("es-PE");
        const timeStr = now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

        const lines = [
          siteName,
          `${dateStr} ${timeStr}`,
          currentCoords,
          currentPlace
        ];

        const fontSize = Math.max(18, Math.round(w * 0.024));
        ctx.font = `600 ${fontSize}px sans-serif`;
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";

        ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
        ctx.shadowBlur = Math.max(4, Math.round(fontSize * 0.25));
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.fillStyle = "#ffffff";

        const padX = Math.round(w * 0.02);
        const padY = Math.round(h * 0.02);
        const lineHeight = Math.round(fontSize * 1.25);

        lines.slice().reverse().forEach((line, idx) => {
          ctx.fillText(line, w - padX, h - padY - idx * lineHeight);
        });
      }

      let quality = isHighRes ? 0.95 : 0.82;
      canvas.toBlob(async (outBlob) => {
        if (!isHighRes && outBlob && outBlob.size > 1024 * 1024) {
          canvas.toBlob((smallerBlob) => resolve(smallerBlob || outBlob), "image/jpeg", 0.65);
        } else {
          resolve(outBlob);
        }
      }, "image/jpeg", quality);
    };
    img.src = url;
  });
}

function buildAutoFileName(subId, ext) {
  const proj = projects.find((p) => p.id === activeProjectId);
  const cleanSite = (proj ? proj.name : "SITE").replace(/[^a-zA-Z0-9_-]/g, "_");
  const existingInSub = currentFiles.filter((f) => f.subId === subId).length;
  const num = String(existingInSub + 1).padStart(2, "0");
  return `${cleanSite}_${num}.${ext}`;
}

// Renderizado UI
function updateProgressUI() {
  const proj = projects.find((p) => p.id === activeProjectId);
  if (!proj) return;
  document.getElementById("activeProjectTitle").textContent = proj.name;

  const filledSet = new Set(currentFiles.map((f) => f.subId));
  const filledCount = filledSet.size;
  const pct = Math.round((filledCount / ALL_SUBFOLDERS_COUNT) * 100);

  const badge = document.getElementById("projectPctBadge");
  const bar = document.getElementById("projectProgressBar");

  badge.textContent = `${pct}% (${filledCount}/${ALL_SUBFOLDERS_COUNT})`;
  bar.style.width = `${pct}%`;

  if (pct >= 100) {
    badge.classList.add("done");
    bar.classList.add("done");
  } else {
    badge.classList.remove("done");
    bar.classList.remove("done");
  }
}

function renderSavedProjects() {
  const container = document.getElementById("savedProjectsList");
  container.innerHTML = "";
  projects.forEach((p) => {
    const chip = document.createElement("button");
    chip.className = "saved-chip" + (p.id === activeProjectId ? " active" : "");
    chip.textContent = p.name;
    chip.onclick = () => selectProject(p.id);
    container.appendChild(chip);
  });
}

async function selectProject(projId) {
  activeProjectId = projId;
  preparedZipBlob = null;
  document.getElementById("shareReadyBar").style.display = "none";
  currentFiles = await dbGetProjectFiles(projId);
  renderSavedProjects();
  document.getElementById("activeProjectArea").style.display = "block";
  updateProgressUI();
  renderSubfolders();
}

function renderSubfolders() {
  const container = document.getElementById("subfoldersContainer");
  container.innerHTML = "";

  let list = F17_FOLDERS;
  if (activeTab === "formatos") list = FORMATOS_FOLDERS;
  if (activeTab === "mp") list = MP_FOLDERS;

  list.forEach((sub) => {
    const subFiles = currentFiles.filter((f) => f.subId === sub.id);
    const card = document.createElement("div");
    card.className = "sub-card";

    const statusClass = subFiles.length > 0 ? "status-filled" : "status-empty";
    const statusText = subFiles.length > 0 ? `${subFiles.length} archivo(s)` : "Vacía";

    card.innerHTML = `
      <div class="sub-top">
        <div class="sub-title">${sub.name}</div>
        <span class="sub-status ${statusClass}">${statusText}</span>
      </div>
      <div class="sub-desc">${sub.desc}</div>
      <div class="sub-btns">
        <button class="btn btn-primary btn-sm" data-action="cam" data-sub="${sub.id}">Tomar Foto</button>
        <button class="btn btn-outline btn-sm" data-action="up" data-sub="${sub.id}">Subir Foto</button>
      </div>
      <div class="thumb-grid" id="grid_${sub.id}"></div>
    `;

    card.querySelector('[data-action="cam"]').onclick = () => openCamera(sub);
    card.querySelector('[data-action="up"]').onclick = () => triggerUpload(sub.id);

    const grid = card.querySelector(`#grid_${sub.id}`);
    subFiles.forEach((fileRec, idx) => {
      const item = document.createElement("div");
      item.className = "thumb-item";

      if (fileRec.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(fileRec.blob);
        item.appendChild(img);
      } else if (fileRec.type.startsWith("video/")) {
        const vid = document.createElement("video");
        vid.src = URL.createObjectURL(fileRec.blob);
        item.appendChild(vid);
      } else {
        const pdfDiv = document.createElement("div");
        pdfDiv.className = "pdf-badge";
        pdfDiv.textContent = "PDF: " + fileRec.name;
        item.appendChild(pdfDiv);
      }

      item.onclick = (e) => {
        if (e.target.classList.contains("del-mini")) return;
        openViewer(sub.id, idx);
      };

      const delBtn = document.createElement("button");
      delBtn.className = "del-mini";
      delBtn.textContent = "×";
      delBtn.onclick = async (e) => {
        e.stopPropagation();
        if (confirm(`¿Seguro que deseas eliminar "${fileRec.name}"?`)) {
          await dbDeleteFile(fileRec.id);
          currentFiles = currentFiles.filter((f) => f.id !== fileRec.id);
          updateProgressUI();
          renderSubfolders();
        }
      };
      item.appendChild(delBtn);
      grid.appendChild(item);
    });

    container.appendChild(card);
  });
}

// Cámara en ráfaga + botones de volumen
let camStream = null;
let camSubObj = null;
let camSessionFiles = [];
let lastCaptureTime = 0;

async function openCamera(sub) {
  camSubObj = sub;
  camSessionFiles = [];
  document.getElementById("camSubTitle").textContent = sub.name;
  document.getElementById("camSessionCount").textContent = "0";
  document.getElementById("camLastImg").style.display = "none";
  updateGPS();

  try {
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    const video = document.getElementById("camVideo");
    video.srcObject = camStream;
    document.getElementById("camModal").classList.add("open");
  } catch (err) {
    alert("No se pudo acceder a la cámara directa. Puedes usar 'Subir Foto' para cargar desde tu cámara o galería.");
  }
}

function closeCamera() {
  if (camStream) {
    camStream.getTracks().forEach((t) => t.stop());
    camStream = null;
  }
  document.getElementById("camModal").classList.remove("open");
  camSubObj = null;
  updateProgressUI();
  renderSubfolders();
}

async function captureFromCamera() {
  if (!camStream || !camSubObj) return;
  const now = Date.now();
  if (now - lastCaptureTime < 450) return;
  lastCaptureTime = now;

  const video = document.getElementById("camVideo");
  if (!video.videoWidth) return;

  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = video.videoWidth;
  tempCanvas.height = video.videoHeight;
  tempCanvas.getContext("2d").drawImage(video, 0, 0);

  tempCanvas.toBlob(async (rawBlob) => {
    if (!rawBlob) return;
    const isHighRes = camSubObj.id === "f17_15";
    const finalBlob = await processImageWithWatermark(rawBlob, true, isHighRes);
    const fileName = buildAutoFileName(camSubObj.id, "jpg");

    const rec = {
      id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
      projectId: activeProjectId,
      subId: camSubObj.id,
      name: fileName,
      type: "image/jpeg",
      blob: finalBlob
    };

    await dbSaveFile(rec);
    currentFiles.push(rec);
    camSessionFiles.push(rec);

    const previewImg = document.getElementById("camLastImg");
    previewImg.src = URL.createObjectURL(finalBlob);
    previewImg.style.display = "block";
    document.getElementById("camSessionCount").textContent = String(camSessionFiles.length);
  }, "image/jpeg", 0.92);
}

window.addEventListener("keydown", (e) => {
  if (!document.getElementById("camModal").classList.contains("open")) return;
  if (e.key === "AudioVolumeUp" || e.key === "AudioVolumeDown" || e.key === "VolumeUp" || e.key === "VolumeDown") {
    e.preventDefault();
    captureFromCamera();
  }
});

// Subida desde galería / PDFs
function triggerUpload(subId) {
  uploadTargetSubId = subId;
  const input = document.getElementById("fileUploadInput");
  input.accept = subId === "fmt_01" ? "image/*,application/pdf" : "image/*,video/*";
  input.value = "";
  input.click();
}

document.getElementById("fileUploadInput").onchange = async (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length || !uploadTargetSubId) return;

  const isHighRes = uploadTargetSubId === "f17_15";

  for (const file of files) {
    let finalBlob = file;
    const ext = file.name.split(".").pop() || "jpg";
    const autoName = buildAutoFileName(uploadTargetSubId, ext);

    if (file.type.startsWith("image/")) {
      finalBlob = await processImageWithWatermark(file, false, isHighRes);
    }

    const rec = {
      id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
      projectId: activeProjectId,
      subId: uploadTargetSubId,
      name: autoName,
      type: file.type || "application/octet-stream",
      blob: finalBlob
    };

    await dbSaveFile(rec);
    currentFiles.push(rec);
  }

  updateProgressUI();
  renderSubfolders();
};

// Visor deslizable
let viewerSubId = null;
let viewerIndex = 0;

function openViewer(subId, index) {
  viewerSubId = subId;
  viewerIndex = index;
  renderViewer();
  document.getElementById("viewerModal").classList.add("open");
}

function renderViewer() {
  const list = currentFiles.filter((f) => f.subId === viewerSubId);
  if (!list.length) {
    document.getElementById("viewerModal").classList.remove("open");
    return;
  }
  if (viewerIndex >= list.length) viewerIndex = list.length - 1;
  if (viewerIndex < 0) viewerIndex = 0;

  const fileRec = list[viewerIndex];
  document.getElementById("viewerCounter").textContent = `${viewerIndex + 1} / ${list.length} · ${fileRec.name}`;

  const content = document.getElementById("viewerContent");
  content.innerHTML = "";
  const url = URL.createObjectURL(fileRec.blob);

  if (fileRec.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = url;
    content.appendChild(img);
  } else if (fileRec.type.startsWith("video/")) {
    const vid = document.createElement("video");
    vid.src = url;
    vid.controls = true;
    content.appendChild(vid);
  } else {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileRec.name;
    link.className = "btn btn-primary";
    link.textContent = "Abrir PDF: " + fileRec.name;
    content.appendChild(link);
  }
}

let touchStartX = 0;
document.getElementById("viewerTouchArea").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
document.getElementById("viewerTouchArea").addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 45) {
    if (diff < 0) viewerIndex++;
    else viewerIndex--;
    renderViewer();
  }
});

// Generación ZIP con NO_APLICA.png en vacías
async function buildProjectZip() {
  const proj = projects.find((p) => p.id === activeProjectId);
  if (!proj) return null;

  const zip = new JSZip();
  const root = zip.folder(proj.name);

  let noAplicaBlob = null;
  try {
    const res = await fetch("./no_aplica.png");
    noAplicaBlob = await res.blob();
  } catch (e) {}

  const f17Root = root.folder("1. F17-CARPETA DE FOTOS");
  for (const sub of F17_FOLDERS) {
    const sf = f17Root.folder(sub.name);
    const files = currentFiles.filter((f) => f.subId === sub.id);
    if (files.length === 0 && noAplicaBlob) {
      sf.file("NO_APLICA.png", noAplicaBlob);
    } else {
      files.forEach((f) => sf.file(f.name, f.blob));
    }
  }

  const fmtRoot = root.folder("2. FORMATOS MP");
  const fmtFiles = currentFiles.filter((f) => f.subId === "fmt_01");
  if (fmtFiles.length === 0 && noAplicaBlob) {
    fmtRoot.file("NO_APLICA.png", noAplicaBlob);
  } else {
    fmtFiles.forEach((f) => fmtRoot.file(f.name, f.blob));
  }

  const mpRoot = root.folder("3. MANTENIMIENTO PREVENTIVO");
  for (const sub of MP_FOLDERS) {
    const sf = mpRoot.folder(sub.name);
    const files = currentFiles.filter((f) => f.subId === sub.id);
    if (files.length === 0 && noAplicaBlob) {
      sf.file("NO_APLICA.png", noAplicaBlob);
    } else {
      files.forEach((f) => sf.file(f.name, f.blob));
    }
  }

  const blob = await zip.generateAsync({ type: "blob" });
  return { blob, fileName: `${proj.name}.zip` };
}

// Eventos principales
document.getElementById("btnCreateProject").onclick = async () => {
  const input = document.getElementById("newProjectName");
  const name = input.value.trim();
  if (!name) return alert("Escribe un nombre para la carpeta principal.");
  const proj = { id: "proj_" + Date.now(), name };
  await dbSaveProject(proj);
  projects.push(proj);
  input.value = "";
  selectProject(proj.id);
};

document.getElementById("btnRenameProject").onclick = async () => {
  const proj = projects.find((p) => p.id === activeProjectId);
  if (!proj) return;
  const newName = prompt("Nuevo nombre para la carpeta principal:", proj.name);
  if (newName && newName.trim()) {
    proj.name = newName.trim();
    await dbSaveProject(proj);
    renderSavedProjects();
    updateProgressUI();
  }
};

document.getElementById("btnDeleteProject").onclick = async () => {
  const proj = projects.find((p) => p.id === activeProjectId);
  if (!proj) return;
  if (confirm(`¿Eliminar toda la carpeta "${proj.name}" y sus fotos?`)) {
    await dbDeleteProject(proj.id);
    projects = projects.filter((p) => p.id !== proj.id);
    activeProjectId = projects.length ? projects[0].id : null;
    renderSavedProjects();
    if (activeProjectId) {
      selectProject(activeProjectId);
    } else {
      document.getElementById("activeProjectArea").style.display = "none";
    }
  }
};

document.getElementById("btnDownloadZip").onclick = async () => {
  const btn = document.getElementById("btnDownloadZip");
  btn.textContent = "Comprimiendo...";
  btn.disabled = true;
  const res = await buildProjectZip();
  btn.textContent = "Descargar ZIP";
  btn.disabled = false;
  if (!res) return;

  const a = document.createElement("a");
  a.href = URL.createObjectURL(res.blob);
  a.download = res.fileName;
  a.click();
};

document.getElementById("btnPrepareShare").onclick = async () => {
  const btn = document.getElementById("btnPrepareShare");
  btn.textContent = "Preparando...";
  btn.disabled = true;
  const res = await buildProjectZip();
  btn.textContent = "Compartir";
  btn.disabled = false;
  if (!res) return;

  preparedZipBlob = res.blob;
  preparedZipName = res.fileName;
  document.getElementById("shareFileNameText").textContent = `${res.fileName} listo`;
  document.getElementById("shareReadyBar").style.display = "flex";
};

document.getElementById("btnTriggerNativeShare").onclick = async () => {
  if (!preparedZipBlob) return;
  const file = new File([preparedZipBlob], preparedZipName, { type: "application/zip" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: preparedZipName });
    } catch (e) {}
  } else {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(preparedZipBlob);
    a.download = preparedZipName;
    a.click();
  }
};

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.onclick = () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTab = btn.dataset.tab;
    renderSubfolders();
  };
});

document.getElementById("btnShutter").onclick = captureFromCamera;
document.getElementById("btnCloseCam").onclick = closeCamera;
document.getElementById("camLastPreview").onclick = () => {
  if (camSubObj && camSessionFiles.length > 0) {
    const subId = camSubObj.id;
    closeCamera();
    const allInSub = currentFiles.filter((f) => f.subId === subId);
    openViewer(subId, allInSub.length - 1);
  }
};

document.getElementById("btnCloseViewer").onclick = () => document.getElementById("viewerModal").classList.remove("open");
document.getElementById("btnPrevPhoto").onclick = () => { viewerIndex--; renderViewer(); };
document.getElementById("btnNextPhoto").onclick = () => { viewerIndex++; renderViewer(); };
document.getElementById("btnViewerDelete").onclick = async () => {
  const list = currentFiles.filter((f) => f.subId === viewerSubId);
  const fileRec = list[viewerIndex];
  if (!fileRec) return;
  if (confirm(`¿Seguro que deseas eliminar "${fileRec.name}"?`)) {
    await dbDeleteFile(fileRec.id);
    currentFiles = currentFiles.filter((f) => f.id !== fileRec.id);
    updateProgressUI();
    renderSubfolders();
    renderViewer();
  }
};

// Inicio
initDB().then(async () => {
  projects = await dbGetAllProjects();
  renderSavedProjects();
  if (projects.length > 0) {
    selectProject(projects[projects.length - 1].id);
  }
});
