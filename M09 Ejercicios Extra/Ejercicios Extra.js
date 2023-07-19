/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {//object.entries() toma el objeto y nos devuelve un Arrray de Arrays.
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arrayDeObjeto = Object.entries(objeto);
   return arrayDeObjeto;

   /* var array = []; //alternativa de mas lineas a traves del FOR IN que recorre las propiedades del
   for(prop in objeto) {
      array.push([prop, objeto[prop]]);
   }

   return array; */
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   /* var objeto = {};
   var arrayDeString = Array.from(string);
   arrayDeString = arrayDeString.sort(); */

   var obj = {};

   for (let i = 0; i < string.length; i++) {
      var letra = string[i];

      if(obj[letra]) {
         obj[letra] = obj[letra] +1;
      } else {
         obj[letra] = 1;
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var miArray = Array.from(string);

   var maiuscula = new Array;
   var minuscula = new Array;
   var nuevoArray = new Array;
   var nuevoString;

   for (i = 0; i < miArray.length; i++) {
      let caracter = miArray[i];

      if (caracter == caracter.toUpperCase()) {
         maiuscula.push(caracter);
      
      } else 
         minuscula.push(caracter);
   }
   nuevoArray = (maiuscula.concat(minuscula));
   nuevoString = nuevoArray.join('');//con .toString() me quedaban las comas.
   return nuevoString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
   let nuevoString ;
   let array = frase.split(' ');

   for (i =0; i < array.length; i ++) {
      let elemento = array.splice(0, 1);
      let elemenString = elemento.toString();
      let elementArr = elemenString.split('');
      let elementReverse = elementArr.reverse();
      array.push(elementReverse.join(''));
   }
   nuevoString = array.join(' ');
   return nuevoString;
   /* let arrayInverso = array.reverse();
   frase = arrayInverso.join("");
   return frase; */
}
  
function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numString = numero.toString(); //paso el numero a string
   let numArray = Array.from(numString);//paso el string a Array
   let arrayInvertido = numArray.reverse();//invierto elo array
   let nuevoString = arrayInvertido.join('');//paso el Array a string nuevamente
   let capicua;//declaro variable que voy a retornar
   if(numero == Number(nuevoString)) {//el if evalua la condicion
      capicua = "Es capicua";//y asigna un valor
   } else {
      capicua = "No es capicua";//u otro
   }
   return capicua;//y por ultimo, fuera del if pero dentro de la funcion 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
   let arr = string.split('');
   let sinAbc = arr.filter(character => character !== 'a' & character !== 'b' & character !== 'c');
   let newString = sinAbc.join('');
   
   return newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newArray = Array.from(arrayOfStrings);//pide un nuevo arreglo, pero como sort muta el arreglo, primero hacemos una copia.

   //para entender .sort() "https://desarrolloweb.com/articulos/ordenacion-arrays-javascript-sort"
   newArray.sort(function(a, b) {
      a = a.length;
      b = b.length;

      if (a == b) {
         return 0;
      } 
      if (a < b) {
         return -1;
      }
      return 1;
   });
   
   return newArray;
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];

   for (i = 0; i< array1.length; i++) {
      if (array2.includes(array1[i])) {
         newArray.push(array1[i])
      }
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
