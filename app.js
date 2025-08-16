//FASE #1: ENTRADAS (LOS DATOS A CALCULAR)

// prompts para pedir los numeros al usuario y lo convertimos a float
let numero1;
while(true){
   numero1 = prompt('Escribale el primer numero: ')
   if(isNaN(numero1)){
      alert('el valor ingresado no es valido: ')
   }else{
      numero1 = parseInt(numero1)
      break;
   }
}
let numero2;
while(true){
   numero2 = prompt('escriba el segundo digito:  ')
   if(isNaN(numero2)){
      alert('el valor ingresado no es valido: ')
   }else{
      numero2 = parseInt(numero2)
      break;
   }
}

let operador = prompt('Ingrese el operador que desea (+,-,*,/,%): ')

while(true){
    if(operador === '+' || operador === '-' || operador === '*' || operador === '/' || operador === '%'){
        break
    }else{
        alert('El operador no es valido, vuelva a ingresar el operador')

       operador = prompt('ingrese el el operador (+,-,*,/,%)')
    }
}

console.log(numero1)
console.log(numero2)
console.log(operador)

// prompts para pedir la operacion
// validar que los valores ingresados sean numeros 


   let resultado = 0;

   if (operador == "+") {
      resultado = numero1 + numero2; 
    
   }
   else if (operador == "-") {
      resultado = numero1 - numero2; 
      
   }
   else if (operador == "*") {
      resultado = numero1 * numero2; 
      
   }
   else if (operador == "/") {
      if (numero2 == 0){
         console.error("no se puede dividir entre 0");
      } 
      else {
         resultado = numero1 / numero2;
        
      }
   }   

   else if (operador == "%") {
      resultado = numero1 % numero2;
      }
      
      else{
         alert("introduzca una operacion valida");
      }

   console.log("el resultado de la operacion es " + resultado);
