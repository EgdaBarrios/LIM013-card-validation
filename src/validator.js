/*Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```*/

    const validator = {
      isValid:(cardNumber) => {
        let credicardNumArray = cardNumber.split("");
        let sum = 0;
        let singleNums = [];
        let doubleNums = [];
        let finalArray = undefined;
        let validCard = false;
              
        /*if(credicardNumArray.length === 15){  //american express
           for(var i = credicardNumArray.length-1; i>=0; i--){
              if(i % 2 === 0){
                 singleNums.push(credicardNumArray[i]);
              }else{
                 doubleNums.push((credicardNumArray[i] * 2).toString());
              }
           }
        }*/ if(credicardNumArray.length === 16){ //else if
           for(var i = credicardNumArray.length-1; i>=0; i--){
              if(i % 2 !== 0){
                 singleNums.push(credicardNumArray[i]);
              }else{
                 doubleNums.push((credicardNumArray[i] * 2).toString());
              }
           }
        }
        //joining makes an array to a string, then split them up again
        //so that every number is a single digit and convert back to array
    
        doubleNums = doubleNums.join("").split("");
        finalArray = doubleNums.concat(singleNums);
    
        for(var j = 0; j<finalArray.length; j++){
           sum += parseInt(finalArray[j]);
        }
    
        if(sum % 10 === 0){
           validCard = true;
           
        }
        else{
           validCard = false;
           
        }
                
        return validCard;
      },
    
      maskify:(cardNumber) => {
        
        let lengthCardNumber = cardNumber.length;
        let stringResult = "";
              
        for(var i = 0; i < lengthCardNumber - 4; i++){
        stringResult += "#";  
      }
        return stringResult + cardNumber.substring(lengthCardNumber-4, lengthCardNumber);
      }
      } 
             
    export default validator;
      
    

    // 1.- Definir los dos métodos: isValid y maskify.
    // 2.- Escribir las funciones respectivas de acuerdo a las especificaciones solicitadas.
  