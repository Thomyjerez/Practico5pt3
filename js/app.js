let tareas = []
let listaTarea = document.querySelector('#listaTarea')
let formTarea = document.querySelector('#formulario')
formulario.addEventListener('submit', agregarTarea);

function agregarTarea(e){
    e.preventDefault(e);
    tareas.push(document.querySelector('#tarea').value)
    crearTarea(document.querySelector('#tarea').value, tareas.length - 1)
    formulario.reset()
}

function crearTarea(tarea, lista){
    listaTarea.innerHTML += `<li class = list-group-item d-flex justify-content-between> <p class = m-2>${tarea}</p> 
     <button class="btn btn-danger" onclick="eliminarTarea(${lista})">Eliminar tarea</button> </li>`
    
}

function eliminarTarea(lista){
    tareas.splice(lista, 1)
    listaTarea.innerHTML = "";
    tareas.forEach((tarea) => crearTarea(tarea))
}