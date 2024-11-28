/*
//alert() muestra una ventana emergente
alert("hola mundo");
alert(1+9+41);
alert("1+9+41");*/

/* comentario bloque */
// comentario de línea


// creo variable y la relleno
let saludo = "Holaaa";

//crear variable
let despedida;
//rellenar variable
despedida = "Adios";
console.log(despedida); //"Adios"
despedida = "adiosss";
console.log(despedida); //"adioss"

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
edad = edad + 7; //puedo sumar a la variable porque guarda un valor númerico
edad += 5;
edad++; //suma uno
edad--; //resta uno

//muestra lo que pongamos entre los paréntesis en la consola
console.log(edad);

let nombreUsuario = "Roxana";

//alert(saludo+" "+nombreUsuario); //puedo concatenar strings usando +
//alert(saludo);

// constantes
const SALUDO_USUARIO = "Hola de nuevo " + nombreUsuario; //"Hola de nuevo Roxana"

//no se puede cambiar el valor de las constantes
//SALUDO_USUARIO = "Hola"; 

//alert(SALUDO_USUARIO);

// Operadores lógicos;
console.log(5 > 4); //mayor que
console.log(5 < 8); //menor que


console.log(5 >= 6); //mayor o igual que
console.log(5 <= 7); //menor o igual que

console.log(5 == "5"); //igual que
console.log(5 === "5"); // estrictamente igual que (compara también si es el mismo tipo de dato)
console.log(5 != 7); //no es igual

//puedo comparar texto
console.log("a" > "b"); //false
console.log("Cortazar" > "Navarro");

let buleano = 4 < 2; // el valor que devuelve es un boolean
console.log(buleano); 

//Condicionales
if (edad >= 18) {
    //alert("Eres mayor de edad");
} else {
    //alert("No eres mayor de edad");
}


let premium = true;

if (premium) {
    console.log("tienes cuenta premium"); //si es premium
   // alert("Bienvenido " + nombreUsuario)
} else if (edad >= 18) {
    console.log("puedes crear una cuenta"); //si no es premium, pero es +18
} else {
    console.log("no puedes crear una cuenta"); //si no es premium ni +18
}

//Interactuar con html DOM
//Selectores
//     recojo el elemento      // que hago //
document.getElementById("texto").innerHTML = "Holaaaaaa " + nombreUsuario;
document.getElementById("caja").innerHTML = "<p>Hola otra vez</p>";
//document.getElementsByClassName("")

//selecciona primer elemento
document.body.querySelector("#texto").innerHTML = "Metiendo codigo en p";

//Podemos guardar nuestra selección en una variable o const para reutilizarla
let texto = document.getElementById("texto");
let body = document.body;
texto.innerHTML = "He guardado mi selector en una variable";
texto.style.color = "blue";

//Funciones
function saludar() {
    alert("Bienvenido");
}

function modoNoche() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
}

function modoDia() {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
}

function saludarUsuario(){
    let inputUsuario = document.querySelector("#nombre-usuario").value
    let generoFemenino = document.getElementById("femenino")
    let generoMasculino = document.getElementById("masculino")

    if(generoFemenino.checked){
        alert("Bienvenida "+inputUsuario);
    }else if(generoMasculino.checked){
        alert("Bienvenido "+inputUsuario);
    }else {
        alert("Hola "+inputUsuario);
    }

    mostrarUsuario(inputUsuario);
}

function mostrarUsuario(inputUsuario){
    const contenedorUsuarios = document.querySelector("#contenedor-usuarios")
    const elementoUsuario = document.createElement("li")

    ///Ejemplos de usar texto + datos js
    //elementoUsuario.innerHTML = "hola "+inputUsuario;
    //elementoUsuario.innerHTML = `hola ${inputUsuario} blablabla etc etc`;
   
    elementoUsuario.innerHTML = inputUsuario;
    contenedorUsuarios.appendChild(elementoUsuario);
}



