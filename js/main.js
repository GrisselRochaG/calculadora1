var press = document.getElementById("text");

function muestra(num){
    var numero = document.contenedor.res.value; 
    document.contenedor.res.value = numero + num; 
};

function iguala(valor) {
  press.value = eval(press.value);
};


function elimina(){ 
  press = "";
}
