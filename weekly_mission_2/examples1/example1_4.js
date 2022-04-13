//Ejemplo 4: uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map(function(num){ return num * num });
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)
console.log(numbersSquare);