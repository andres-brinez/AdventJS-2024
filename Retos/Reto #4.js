// Reto #3 Decorando en arbol de navidad

/* ¡Es hora de poner el árbol de Navidad en casa! 🎄 
Pero este año queremos que sea especial. 
Vamos a crear una función que recibe:
- la altura del árbol (un entero positivo entre 1 y 100) y
-  un carácter especial para decorarlo.
 */

/* La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

- El árbol está compuesto de triángulos de caracteres especiales.
- Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
- El árbol siempre debe tener la misma longitud por cada lado.
- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea. */


/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {


  let arbol = [];

  // Construcción del triángulo del árbol
  for (let i = 0; i < height; i++) {

    // Calcula los espacios a la izquierda y derecha
    const espacios = '_'.repeat(height - i - 1);

    // Calcula el número de ornamentos para esta línea
    const ornamentos = ornament.repeat(2 * i + 1);

    // Forma la línea combinando espacios y ornamentos
    const linea = espacios + ornamentos + espacios;

    // Agrega la línea al árbol
    arbol.push(linea);
  }

  // Construcción del tronco (2 líneas con un solo '#', centrado)
  const tronco = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  arbol.push(tronco, tronco); // Agregamos dos líneas para el tronco

  // Une todas las líneas con saltos de línea y devuelve el árbol
  return arbol.join('\n');
}

const altura = 10; // Altura del árbol
const ornamento = 'P'; // Carácter especial para decorar
console.log(createXmasTree(altura, ornamento));
