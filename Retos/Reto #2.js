// Reto #2 - Enmarvando nombre

/* Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️,
pero el marco debe cumplir unas reglas específicas.
Tu tarea es ayudar a los elfos a generar este marco mágico. 
*/

/* Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

*/


function createFrame(names) {

  // Se utiliza el método reduce para recorrer todos los elementos del array 'names' y calcular el largo del nombre más largo.
  // 'longest' es el acumulador, que guarda la palabra más larga encontrada hasta ahora, empezando con el primer elemento del array.
  // 'current' es el nombre que se está evaluando actualmente durante la iteración.
  const lengthLongestName=names.reduce((longest,current)=>{
    // lo que se retorna en la función de callback se convierte en el nuevo valor del acumulador para la siguiente iteración
    // comparación para decidir cuál palabra es más larga
    return current.length>longest.length?current:longest;
  }).length


  // Otro ejemplo para usar reduce 
  // const numeros = [2,2,2,2,2,2,2,2,2,2,2,2,2]

  // const sumaNumeros = numeros.reduce((suma,numeroActual)=>{
  //   return suma+numeroActual
  // })

  // console.log(sumaNumeros)

  const position= lengthLongestName+4
  // La longitud del marco se establece en el largo del nombre más largo + 4 (para añadir 2 espacios de margen a cada lado y un asterisco al principio y final).
  const border = "*".repeat(position)
  
  const marco =[];
  marco.push(border);

  names.forEach(name => {
    // Si la longitud del texto es menor que la posición deseada, rellenamos con espacios hasta esa longitud
    // padEnd  Agrega un número de caracteres al final de una cadena hasta alcanzar una longitud determinada.
    const paddedText = name.padEnd(position - 2 - 1, ' '); 

    marco.push(`* ${paddedText}*`);

  });

  marco.push(border);

  return marco.join('\n');
}

const frame = createFrame(['midu', 'madeval', 'educalvolpz'])
console.log(frame)