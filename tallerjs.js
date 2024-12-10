//asi se utiliza los comentarios en javascript de una sola linea

console.log("Bienvenidos al mundo de la programacion frontend con javascript");

console.log("Esta es otra linea" + " y se concatena con el +");

/*Este es un comentario de mas de una linea*/

/*En javascript no existe un compilador dado que es un lenguaje interpretado. es por ello que tenemos que utilizar la instrucción
console.log para monitorear el avance y flujo de la logica que implementemos. sin embargo Chrome afrece unas herramientas para revisar los errores*/

//ahora vamos a trabajar con declaracion de variables:
let estudiante="Juan Perez";
let edad= 19;
let isEstudiante=true;
let calificacion=92.2;

console.log("Estudiante: " + estudiante);
console.log("Edad: " + edad);
console.log("¿Estudia?: " + isEstudiante);
console.log("Calificacion: " + calificacion);
console.log(typeof calificacion);
console.log("El promedio global del estudiante es ${calificacion} ");

/*javascript es un lenguaje debilmentetipeado, esto significa que no es estricto en la declaracion de tipos de datos. es decir, no 
fuerza a que inicialmente digas el tipo de dato de la variable. y esta cambiar en el transcurso de logica por otro tipo de dato segun sea la 
necesidad*/


let valor_1=123
let valor_2=123
console.log("el resultado es: " + (valor_1+valor_2));

/*let val1;
let val2;
    val1= prompt("ingresa un primer numero ");
    val2= prompt("ingresa un segundo numero ");
let num1=parseInt(val1);
let num2=parseInt(val2);
    console.log("La suma es: " + (num1+num2));*/

let edadd=17;

    //estructura de control usando solo el if
    if(edadd>= 18){
        console.log("eres un adulto y debes registrarte en el SAT")
    }

    //estructura de control usando el if/else
    if(edadd>= 18){
        console.log("eres un adulto y debes registrarte en el SAT")
    }else{
        console.log("Todavia no pagaras impuestos");
    }


//1.- operadores aritmeticos
let a=10;
let b=20;
console.log(a+b);  //suma
console.log(a-b);  //resta
console.log(a*b);  //multiplicacion
console.log(a/b);  //divicion
console.log(a%b);  //modulo

//2.- operadores de asignacion
let x=10;
x +=5;  //x = 15
x -=5;  //x = 13
x *=5;  //x = 39
x /=5;  //x = 13
x %=5;  //x = 3

//3.-operadores de comparacion
let y=5; let z='5'
console.log(y == z);  //true (compara el valor, pero el tipo)
console.log(y === z);  //false (compara el valor y el tipo)
console.log(y != z);  //false
console.log(y!== z);  //true
console.log(y > 3);  //true
console.log(y <= 5);  //true

//4.- operadores logicos
let m= true;
let n=false;
console.log(m && n); //false (ambas deben ser true)
console.log(m || n);  //true (al menos una es true)
console.log(!m)  //false(niega el valor de a)

//estructuras de control if/else anidado

let cargo=200;
    if( cargo >= 100 && cargo <= 150) {
        alert("impuesto bajo")
    }else if(cargo >= 151 && cargo <= 200){
        alert("impuesto medio")
    }else{
        alert("Revisar el tabulador")
    }