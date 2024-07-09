const nombreTarea = document.getElementById('nombreTarea');
const agregarTarea = document.getElementById('agregarTarea');
const listaTarea = document.getElementById('listaTarea');
const contarTareas = document.querySelector("#contarTareas");
const tareasRealizadas = document.querySelector("#tareasRealizadas");


const tareas = []



function renderTareas() {
    let html = ""
    for (tarea of tareas) {
    html += `<li>${tarea.id} ${tarea.nombre}<input onclick="tareasMarcadas(${tarea.id})" type ="checkbox"/> <button onclick="borrar(${tarea.id})"> eliminar </button> </li>`;
    };
    listaTarea.innerHTML = html;
    contarTareas.innerHTML = `${tareas.length}`;
};


agregarTarea.addEventListener('click', () => {
    const nuevaTarea = nombreTarea.value;
    tareas.push( { id: Date.now(), nombre: nuevaTarea});
    nombreTarea.value = "" ;
    renderTareas()    
});

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderTareas()
};


    
