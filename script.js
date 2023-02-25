//funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelector('#link a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

