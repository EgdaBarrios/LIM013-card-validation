/*Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).*/


import validator from './validator.js';
const myBtn = document.getElementById("myBtn");
const response1 = document.getElementById("message1");
const response2 = document.getElementById("message2");
const response3 = document.getElementById("message3");

function validation() {
// console.log('Hola mundo!');
// variable de campo de usuario
const cardNumber = document.getElementById("cardNumber").value;


if (cardNumber === ""){
  response1.innerHTML = '<p>*Ingrese el número de tarjeta</p>';
  
  document.getElementById("message1").style.display = "block";
  document.getElementById("message2").style.display = "none";
  document.getElementById("message3").style.display = "none";
  
}

else if ((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(cardNumber)) || (cardNumber.length >16)){
    response3.innerHTML = '<p>Tarjeta inválida, verifique</p>';    
    document.getElementById("message1").style.display = "none";
    document.getElementById("message2").style.display = "none";
    document.getElementById("message3").style.display = "block";
    return false;
}

// Dígito entre 15 y 16 de longitud; sin símbolos ni letras
if ((/\d{15,16}(~\W[a-zA-Z])*$/g.test(cardNumber)) ){
  
  const maskifyNumber = validator.maskify(cardNumber);
  const isValidCard = validator.isValid(cardNumber);
  
  document.getElementById("cardNumber").value=`${maskifyNumber}`;
  
  if (isValidCard === true) {
    response2.innerHTML = '<p>Tarjeta válida, continúe</p>';
    document.getElementById("message1").style.display = "none";
    document.getElementById("message2").style.display = "block";
    document.getElementById("message3").style.display = "none";
    
  } 
  else {
    response3.innerHTML = '<p>Tarjeta inválida, verifique</p>';    
    document.getElementById("message1").style.display = "none";
    document.getElementById("message2").style.display = "none";
    document.getElementById("message3").style.display = "block";
    
  } 
  
}

    
    
  
  }


myBtn.addEventListener("click", validation);


console.log(validator);

// 1.- Enumerar las funciones.
// 2.- Agregar funcionalidad al botón.
// 3.- Asignar variables.
// 4.- Establecer condiciones.

/*4417123456789113
Test Credit Card Numbers
American Express: 378282246310005
American Express: 371449635398431
Discover: 6011111111111117
Discover: 6011000990139424
JCB: 3530111333300000
JCB: 3566002020360505
Mastercard: 5555555555554444
Mastercard: 5105105105105100
Visa: 4111111111111111*/



