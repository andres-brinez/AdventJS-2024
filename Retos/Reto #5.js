// Emparejando botas
/*Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller.
Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño! */


function organizeShoes(shoes) {
  
  const matchedPairs=[];
  
  // Se itera sobre cada bota
  shoes.forEach((currentShoe,currentShoeIndex) => {

    // Se define el tipo de zapato que se necesita para formar un par
    const matchingType=currentShoe.type==="I" ?"R":"I";  

    // Se itera sobre cada bota para buscar el par correspondiente
    shoes.forEach((potentialMatch,matchIndex)=>{

      // Si se encuentra alguna coincidencia (tipo opuesto y tamaño igual) es decir que es el zapato para formar el par 
      if (potentialMatch.type===matchingType && potentialMatch.size===currentShoe.size){
        matchedPairs.push(currentShoe.size) // se agrega a la lista el tamaño que es lo que se debe retornar
        /* Se elimina el zapato emparejado para evitar usarlo nuevamente  */
        shoes.splice(matchIndex,1); 
        shoes.splice(currentShoeIndex,1);

      }
    })

  });
  return matchedPairs
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes));