
// crear array para almancenar los nombres de las personas
let arrayNombrePersonas = [];

//crear funcion para almacenar los nombres de las personas dentro del array
function almacenarNombres(){
    //verificar que el input no este vacio
    if(document.getElementById('amigo').value === ''){
        //en caso de estarlo mostrar un mensaje de alerta
        alert("Ingresa el nombre de tu amigo");
    }else{
        //almacenar nombre del usuario dentro del array
        arrayNombrePersonas.push(document.getElementById('amigo').value);
        
    }

    //limpiar el input
    document.getElementById('amigo').value = '';
    mostrarUsuario()
}

//funcion para mostrar la lista de amigos dentro de la pagina
function mostrarUsuario(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < arrayNombrePersonas.length; i++){
        let li = document.createElement('li');
        li.textContent = arrayNombrePersonas[i];
        lista.appendChild(li);
    }
}