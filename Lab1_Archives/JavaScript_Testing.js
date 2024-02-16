console.log("hola");
console.info("Esta es una info");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1==1);

// 1. Tabla de cuadrados y cubos
let num = prompt("Por favor, introduce un numero");
document.write("<table><tr><th><i>Numero</i></th><th>Cuadrado</th><th>Cubo</th></tr>");
for(let i = 1; i <= num; i++){
    document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
}
document.write("</table>");

// 2. Suma de números aleatorios
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let start = new Date();
let userAnswer = prompt("¿Cuanto es " + num1 + " + " + num2 + "?");
let end = new Date();
let timeTaken = (end - start) / 1000;
if(userAnswer == num1 + num2){
    alert("Correcto! Te tomo " + timeTaken + " segundos.");
} else {
    alert("Incorrecto. Te tomo " + timeTaken + " segundos.");
}

// 3. Contador
function contador(arr){
    let negativos = arr.filter(x => x < 0).length;
    let ceros = arr.filter(x => x === 0).length;
    let positivos = arr.filter(x => x > 0).length;
    return [negativos, ceros, positivos];
}

var arreglo=[-5,-4,-3,-2,-1,0,1,2,3,4,5];
var result = contador(arreglo);

console.log("Pregunta 3")
console.log(arreglo);
console.log(result);



// 4. Promedios
function promedios(arr){
    return arr.map(x => x.reduce((a, b) => a + b, 0) / x.length);
}


var arreglo2=[[1,2,3],[4,5,6],[7,8,9]];
var result2= promedios(arreglo2);

console.log("Pregunta 4")
console.log(arreglo2);
console.log(result2);


// 5. Inverso
function inverso(num){
    return parseInt(num.toString().split('').reverse().join(''));
}

var numero=12345;
var result3=inverso(numero);


console.log("Pregunta 5")
console.log(numero);
console.log(result3);





