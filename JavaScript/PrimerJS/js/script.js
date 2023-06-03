//comentarios de linea
/*
Comentarios de Bloque 
*/
//alert("Hola Mundo de Desarrollo Web");

// acceder a los elementos por id del html
//1. crear una variable-> un lugar en memoria donde se almacena un valor
//  1.1 declarar la variable indicando un nombre -(comenzar: letras, no numero,no caracteres especiales)
//      debe ser en minuscula o camello -> nombreDelUsuario
//      no debe contener especios (no-> nombre del Usuario)

let nombre='Maria Perez';// las comillas indican que es una cadena de caracteres
 //declaramos una variable llamada parrafo que se enlaza con  id del HTML
let parrafo=document.getElementById("parrafo");
//le indicamos a esa variable que inserte el valor de la otra variable nombre
parrafo.innerHTML=nombre;
//console.log -> es una instruccion que se muestra en la consola del navegador;
console.log(nombre);
document.getElementById("demo").innerHTML = "Hello JavaScript";

// variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido="Ruiz";
//reemplazo el valor de nombre concatenando con el apellido
nombre=nombre+" "+apellido; //concatenar cadenas de caracteres
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML=nombre;
// caracteristicas de javaScript ...no declaras el tipo de dato

numero1="uno";
suma=numero1+numero2;
console.log(suma);

