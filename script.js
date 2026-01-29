const malla = [
  {
    semestre: "Semestre 1",
    ramos: [
      { id: 1, nombre: "Biología Celular y Molecular" },
      { id: 2, nombre: "Fundamentos de la Química" },
      { id: 3, nombre: "Zoología" },
      { id: 4, nombre: "Introducción a las Ciencias Veterinarias" },
      { id: 5, nombre: "Fundamentos de Física" },
      { id: 6, nombre: "Matemática" }
    ]
  },
  {
    semestre: "Semestre 2",
    ramos: [
      { id: 7, nombre: "Ecología" },
      { id: 8, nombre: "Fundamentos de Bioquímica", prereq: [2] },
      { id: 9, nombre: "Histoembriología Veterinaria", prereq: [1] },
      { id: 10, nombre: "Anatomía Animal I", prereq: [3] },
      { id: 11, nombre: "Praderas y Especies Forrajeras", prereq: [1] },
      { id: 12, nombre: "Nanomedicina para la Salud a Nanoescala" }
    ]
  },
  {
    semestre: "Semestre 3",
    ramos: [
      { id: 13, nombre: "Inmunología", prereq: [1, 8] },
      { id: 14, nombre: "Anatomía Animal II", prereq: [10] },
      { id: 15, nombre: "Nutrición y Alimentación Animal", prereq: [8, 11] },
      { id: 16, nombre: "Fisiología Veterinaria", prereq: [8, 9] },
      { id: 17, nombre: "Práctica Inicial", prereq: [7, 10] },
      { id: 18, nombre: "Restauración Ecológica de Ecosistemas", prereq: [7, 10] },
      { id: 19, nombre: "Bioestadísticas", prereq: [7, 10] }
    ]
  },
  {
    semestre: "Semestre 4",
    ramos: [
      { id: 20, nombre: "Etología y Bienestar Animal", prereq: [16] },
      { id: 21, nombre: "Histopatología", prereq: [16] },
      { id: 22, nombre: "Microbiología Veterinaria", prereq: [13] },
      { id: 23, nombre: "Conservación de Fauna Silvestre", prereq: [7] },
      { id: 24, nombre: "Justicia del Cuidado y Género" },
      { id: 25, nombre: "Métodos de Investigación en Salud", prereq: [7] }
    ]
  },
  {
    semestre: "Semestre 5",
    ramos: [
      { id: 26, nombre: "Gestión Contable y Financiera", prereq: [19] },
      { id: 27, nombre: "Genética en Ciencias Veterinarias", prereq: [19] },
      { id: 28, nombre: "Epidemiología Veterinaria", prereq: [25] },
      { id: 29, nombre: "Fisiopatología Veterinaria", prereq: [14, 21] },
      { id: 30, nombre: "Gestión Ambiental y Desarrollo Sustentable", prereq: [23] },
      { id: 31, nombre: "Electivo 4 Medicina Veterinaria" }
    ]
  },
  {
    semestre: "Semestre 6",
    ramos: [
      { id: 32, nombre: "Semiología Veterinaria", prereq: [20, 29] },
      { id: 33, nombre: "Reproducción Animal", prereq: [14, 16] },
      { id: 34, nombre: "Anatomía Patológica", prereq: [29] },
      { id: 35, nombre: "Microbiología de los Alimentos", prereq: [22, 25] },
      { id: 36, nombre: "Práctica Intermedia", prereq: [17, 20] },
      { id: 37, nombre: "CERT III – Grupo Electivo", prereq: [17, 20] }
    ]
  },
  {
    semestre: "Semestre 7",
    ramos: [
      { id: 38, nombre: "CERT II – Grupo Electivo" },
      { id: 39, nombre: "Sistemas de Producción Animal", prereq: [15, 27] },
      { id: 40, nombre: "Farmacología Veterinaria", prereq: [29] },
      { id: 41, nombre: "Enfermedades por Agentes Biológicos I", prereq: [28, 35] },
      { id: 42, nombre: "Procedimientos Clínicos", prereq: [32] },
      { id: 43, nombre: "Imagenología", prereq: [34] }
    ]
  },
  {
    semestre: "Semestre 8",
    ramos: [
      { id: 44, nombre: "CERT I – Grupo Electivo" },
      { id: 45, nombre: "Laboratorio Clínico y Biotecnología", prereq: [34, 41] },
      { id: 46, nombre: "Investigación en Ciencias Veterinarias", prereq: [25, 40] },
      { id: 47, nombre: "Enfermedades por Agentes Biológicos II", prereq: [41] },
      { id: 48, nombre: "Principios de Cirugía y Anestesiología", prereq: [40, 42] },
      { id: 49, nombre: "Medicina Interna", prereq: [32, 43] }
    ]
  },
  {
    semestre: "Semestre 9",
    ramos: [
      { id: 50, nombre: "Salud Pública Veterinaria", prereq: [47] },
      { id: 51, nombre: "Unidad de Investigación I", prereq: [44, 46] },
      { id: 52, nombre: "Internado de Pequeños Animales I", prereq: [45, 48, 49] },
      { id: 53, nombre: "Internado de Animales Mayores I", prereq: [45, 48, 49] },
      { id: 54, nombre: "Formulación y Evaluación de Proyectos Veterinarios", prereq: [26, 39] },
      { id: 55, nombre: "Gestión Veterinaria", prereq: [26, 39] },
      { id: 56, nombre: "Práctica Profesional", prereq: [45, 46, 47, 48, 49] }
    ]
  },
  {
    semestre: "Semestre 10",
    ramos: [
      { id: 57, nombre: "Una Salud", prereq: [50, 54] },
      { id: 58, nombre: "Unidad de Investigación II", prereq: [51] },
      { id: 59, nombre: "Orientación Profesional y Ética en Medicina Veterinaria", prereq: [36] },
      { id: 60, nombre: "Grupo Internado Electivo", prereq: [50, 52] }
    ]
  }
];

const contenedor = document.getElementById("malla");
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function actualizarProgreso() {
  const totalRamos = malla.reduce(
    (total, sem) => total + sem.ramos.length,
    0
  );

  const porcentaje = Math.round((aprobados.length / totalRamos) * 100);

  document.getElementById("progreso-texto").textContent =
    `${porcentaje}% aprobado`;

  document.getElementById("progreso-relleno").style.width =
    `${porcentaje}%`;
}

function render() {
  contenedor.innerHTML = "";

  malla.forEach(sem => {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";
    semDiv.innerHTML = `<h2>${sem.semestre}</h2>`;

    const ramosDiv = document.createElement("div");
    ramosDiv.className = "ramos";

    sem.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";

      const prereq = ramo.prereq || [];
      const bloqueado = prereq.some(id => !aprobados.includes(id));

      if (bloqueado) {
        div.classList.add("bloqueado");
      } else if (aprobados.includes(ramo.id)) {
        div.classList.add("aprobado");
      } else {
        div.classList.add("no-aprobado");
      }

      div.textContent = ramo.nombre;

      div.onclick = () => {
        if (bloqueado) return;

        if (aprobados.includes(ramo.id)) {
          aprobados = aprobados.filter(id => id !== ramo.id);
        } else {
          aprobados.push(ramo.id);
        }

        localStorage.setItem("aprobados", JSON.stringify(aprobados));
        render();
      };

      ramosDiv.appendChild(div);
    });

    semDiv.appendChild(ramosDiv);
    contenedor.appendChild(semDiv);
  });

  actualizarProgreso();
}

render();
