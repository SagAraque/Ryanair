let posicion=0;
let textos=["Sed eros lectus, gravida sit amet tincidunt vel.", "Morbi ipsum leo, efficitur et lacinia sit amet", "Nulla purus neque, ullamcorper at gravida at, aliquet","Ut tempor, neque in elementum condimentum, dui dolor"];
let titulos=["Lorem ipsum dolor sit amet.","Consectetur adipiscing elit."," Vivamus maximus facilisis neque.","Donec vel semper lectus."];
let timer;
/**
 * Funciones asignadas a los botones. Cada uno aumenta o disminuye
 * la variable position y llama a la funcion change(). Previamente
 * se detiene cualquier timeOut que se estuviese ejecutando para
 * evitar errores
 */
function izquierda(){
    posicion--;
    clearTimeout(timer);
    change();
}
function derecha(){
    posicion++;
    clearTimeout(timer);
    change();
}
/**
 * La funcion change se encarga de cambiar tanto las imagenes como los textos en base
 * al valor de posicion. Por ultimo se llama a la funcion changeTimed() con un delay 
 * de 5 segundos
 */
function change(){
    if(posicion<textos.length+1 && posicion>0){
        document.getElementById("textoGaleria").innerHTML=textos[posicion-1];
        document.getElementById("tituloGaleria").innerHTML=titulos[posicion-1];      
        document.getElementById("imagenGaleria").src="img/galeria"+posicion+".jpg";
        timer=setTimeout("changeTimed()",5000);  
    }else if(posicion<=0){
        document.getElementById("textoGaleria").innerHTML=textos[3];
        document.getElementById("tituloGaleria").innerHTML=titulos[3];      
        document.getElementById("imagenGaleria").src="img/galeria4.jpg";
        posicion=4;
        timer=setTimeout("changeTimed()",5000); 
    }else{
        document.getElementById("textoGaleria").innerHTML=textos[0];
        document.getElementById("tituloGaleria").innerHTML=titulos[0];
        document.getElementById("imagenGaleria").src="img/galeria1.jpg";
        posicion=1;
        timer=setTimeout("changeTimed()",5000); 
    }
}
/**
 * Incrementa el valor de position y llama a la funcion change.
 * Esta funcion siempre es llamada con un delay de 5 segundos desde
 * la funcion change()
 */
function changeTimed(){
    posicion++; 
    change();
}

function formulario(){
    alert("El formulario ha sido enviado correctamente.");
}