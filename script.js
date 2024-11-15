/*
//alert() muestra una ventana emergente
alert("hola mundo");
alert(1+9+41);
alert("1+9+41");
*/

/* comentario bloque */
// comentario de línea


// creo variable y la relleno
let saludo = "Holaaa";

//crear variable
let despedida;
//rellenar variable
despedida = "Adios";

//igualar una variable a otra
saludo = despedida;

/*
//Operadores Númericos
alert(1+2); //Sumar
alert(1-2); //Restar
alert(8+12/2); //Dividir
alert(8*2); //Multiplicar
alert(8%2); //Resto de división
*/

let edad = 16;
edad = 17;
edad+1; //puedo sumar a la variable porque guarda un valor númerico
edad++; //suma uno
edad--; //resta uno

//muestra lo que pongamos entre los paréntesis en la consola
console.log(edad);

let nombreUsuario = "Roxana";

//alert(saludo+" "+nombreUsuario); //puedo concatenar strings usando +
//alert(saludo);

// constantes
const SALUDO_USUARIO = "Hola de nuevo "+nombreUsuario; //"Hola de nuevo Roxana"

//no se puede cambiar el valor de las constantes
//SALUDO_USUARIO = "Hola"; 

alert(SALUDO_USUARIO);