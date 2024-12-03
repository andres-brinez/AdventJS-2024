// Organizacon el inventario

/* Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. 
Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada.
 Necesitas ayudar a Santa a organizar el inventario. */

/* Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:
name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
*/


/* Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}. */


function organizeInventory(inventory) {

  // Se crea el objeto vacío
  const organizeInventory={}; 

  // Obtiene las categorías de los productos en el inventario
  const categorias=  inventory.map(item =>item.category);

  // Agrega las cavles del objeto que son las categorias
  categorias.forEach(category => {
    // Si la categoria es repetida se reemplaza
    organizeInventory[category]={};
  });

  // Recorre el inventario para organizar los productos dentro de sus categorías
  inventory.forEach((producto)=>{

    // Desestructuración para acceder directamente a las propiedades del producto
    const {category,name,quantity}=producto

    // Si el producto no existe dentro de la categoría, se inicializa con su cantidad
    if(organizeInventory[category][name]===undefined){
      organizeInventory[category][name] = quantity
    }
    // Si el producto ya existe, se suma la cantidad al valor existente
    else {
      organizeInventory[category][name] += quantity
    }

  })


  return organizeInventory;
}

const inventary = [
  { name: 'doll', quantity: 10, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },

]

console.log(organizeInventory(inventary));