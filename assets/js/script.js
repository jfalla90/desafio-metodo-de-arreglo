// ---------------- Elementos del DOM
const inputTarea = document.querySelector(".inputTarea");
const buttonAgregar = document.querySelector(".buttonAgregar");
const listaTareas = document.querySelector(".listaTareas");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");
const noRealizadas = document.querySelector("#noRealizadas");

// ------ > Array Objetos Lista de Tareas
const tareas = [
  {
    id: randomId(),
    nombre: "Pelota",
    confirmado: false,
  },
  {
    id: randomId(),
    nombre: "Raqueta",
    confirmado: false,
  },
  {
    id: randomId(),
    nombre: "Bicicleta",
    confirmado: false,
  },
];

// ------------- Crear IDs
function randomId(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ---------------  Crear Tareas:

buttonAgregar.addEventListener("click", () => {
  const nuevaTarea = {
    id: randomId(),
    nombre: inputTarea.value,
    confirmado: false,
  };
  tareas.push(nuevaTarea);
  inputTarea.value = "";
  renderizarTareas();
});

// --------------- Agregar Tareas:
const renderizarTareas = function () {
  let html = "";

  for (const tarea of tareas) {
    if (tarea.confirmado) {
      chequeado = "checked";
    } else {
      chequeado = "";
    }

    html += `
    <tr>
    <td >${
      tarea.confirmado
        ? "<span style='color:green'> <del>" + tarea.id + "</del></span>"
        : "<span style='color:black'> " + tarea.id + "</span>"
    } </td>

    <td >
        ${
          tarea.confirmado
            ? "<span style='color:green'>" + tarea.nombre + "</span>"
            : "<span style='color:black'>" + tarea.nombre + "</span>"
        } </td>
    <td><input onclick="actualizarConfirmacion(${
      tarea.id
    })" type="checkbox" ${chequeado}  ></td>
    <td><button class="buttonEliminar" onclick="borrar (${
      tarea.id
    })"> X </button></td>
  </tr> `;
  }

  listaTareas.innerHTML = `  <tr>
 <td><strong>ID - </strong></td>
  <td><strong>Tarea</strong></td>
</tr> ${html}`;

  recuento();
};

// ------------ Función para borrar por id
const borrar = (id) => {
  const index = tareas.findIndex((e) => e.id === id);
  tareas.splice(index, 1);
  renderizarTareas();
};

// ------- Función para chequear tarea
const actualizarConfirmacion = function (id) {
  const index = tareas.findIndex((e) => e.id === id);
  tareas[index].confirmado = !tareas[index].confirmado;
  renderizarTareas();
};

const recuento = () => {
  total.innerHTML = tareas.length;
  realizadas.innerHTML = tareas.filter((e) => e.confirmado === true).length;
  noRealizadas.innerHTML = tareas.filter((e) => e.confirmado === false).length;
};

renderizarTareas();