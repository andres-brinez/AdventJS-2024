// RETO #1 - !Primer regalo repetido! 

// Instrucciones
// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones.
//  Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.


 function prepareGifts(gifts) {
 
  // Se Crea un Set para eliminar los duplicados, ya que un Set no permite elementos repetidos
  const giftsNoRepeat = new Set(gifts);
  const giftsNoRepeatArray =  [... giftsNoRepeat] /* Se pasa a un array con el operado de propagación */
  
  // const giftsNoRepeatArray = [...new Set(gifts)] /* Forma mas sencilla de hacerlo, primero crea el set */
  
  // Se ordena numericamente
  const sortGifts = giftsNoRepeatArray.sort((a,b)=>a-b);
  return sortGifts
 }


const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)
