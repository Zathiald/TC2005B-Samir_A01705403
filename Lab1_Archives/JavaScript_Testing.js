console.log("hola");
console.info("Esta es una info");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1==1);

//Constante 
const precio = 50;

//Forma mas moderna de establecer variable
let cantidad=1;

//Alert, Prompt, Confirm
alert("ADVERTENCIA");

const nombre = prompt("Como te llamas?");

console.log("Hola"+nombre);


// Primero, definimos las dos imágenes
var imagen1 = "https://pbs.twimg.com/media/FDfDlc5VIAU4qq_?format=jpg&name=large";
var imagen2 = "https://i.imgflip.com/37hey3.png?a473544";

const hambre = confirm("Tienes hambre?");


if(hambre){
    console.log("pues compra");
}
else{
    console.log("ta bien");
}

//Funciones tradicionales
function construir(){
    console.log("Casa construida");
}

construir();

//Funciones modernas
const casa = () => {
    console.log("Construyendo bomba de hidrogeno");
};

casa();

const desayuno = (comida) => {
    console.log("El desayuno es " + comida);
}

desayuno("amog us");

// Arreglos
const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo.push(5);

arreglo[10]="uno mas";

console.log(arreglo);

arreglo["dos"]= 8;

//Recorrer arreglos
for(let posicion of arreglo){
    console.log(posicion);
}

//Objetos

const objeto = {atributo: "valor",atributo: "valor2"};
objeto.atributo+5;
console.log(objeto);

for(let atributo in objeto){
    console.log(atributo);
}

//Modificar html
// Dependiendo del resultado, mostramos una imagen u otra
if (hambre) {
    document.getElementById("image").src = imagen2;
    document.write("wahoo");
} else {
    document.getElementById("image").src = imagen1;
    document.write("cringe");
}




