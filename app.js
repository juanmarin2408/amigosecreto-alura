
// crear array para almancenar los nombres de las personas
let arrayNombrePersonas = [];
let lista = document.getElementById('listaAmigos');
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
    //limpiar la lista
    lista.innerHTML = '';
    //crear for para recorrer el array de los nombres 
    for(let i = 0; i < arrayNombrePersonas.length; i++){
        //crear un elemento li por cada nombre dentro del array
        let li = document.createElement('li');
        //darle un valor a cada li con el nombre del usuario
        li.textContent = arrayNombrePersonas[i];
        //agregar el li a la lista
        lista.appendChild(li);
    }
}

//funcion para sortear el amigo secreto
function sortearAmigo(){
    //verificar si no hay personas o solo se encuentra una persona
    if(arrayNombrePersonas.length === 0 || arrayNombrePersonas.length === 1){
        //mensaje de alerta
        alert("No hay usuarios para sortear o solo hay un usuario");
    
    }else{
        //obtener el numero de usuarios dentro del array
        let numeroUsuarios = arrayNombrePersonas.length;
        //generar un numero aleatorio para seleccionar un usuario
        let sorteoAleatorio = Math.floor(Math.random()*numeroUsuarios);
        //realizar el sorteo
        let amigoSeleccionado = arrayNombrePersonas[sorteoAleatorio];
        //limpiar la lista y mostrar el usuario seleccionado
        lista.innerHTML = '';
        lista.innerHTML = `El amigo ganador fue ${amigoSeleccionado}`;
    }
    
}