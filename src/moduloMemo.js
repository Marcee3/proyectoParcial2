/**

* 21. obtenerPrimero(elementos)

* Devuelve el primer elemento de un arreglo.

* Lanza un error si el arreglo está vacío.

*   obtenerPrimero(["a", "b"]) → "a"

*   obtenerPrimero([10])       → 10

*/

export function obtenerPrimero(elementos) {

  if (elementos.length === 0) {

    throw new Error('El arreglo no puede estar vacío')

  }

  return elementos[0]

}
 
/**

* 22. obtenerUltimo(elementos)

* Devuelve el último elemento de un arreglo.

* Lanza un error si el arreglo está vacío.

*   obtenerUltimo(["a", "b", "c"]) → "c"

*   obtenerUltimo([10])            → 10

*/

export function obtenerUltimo(elementos) {

  if (elementos.length === 0) {

    throw new Error('El arreglo no puede estar vacío')

  }

  return elementos[elementos.length - 1]

}
 
/**

* 23. eliminarDuplicados(elementos)

* Devuelve un nuevo arreglo sin elementos repetidos, conservando el orden.

*   eliminarDuplicados([1, 2, 2, 3]) → [1, 2, 3]

*   eliminarDuplicados(["a", "a", "b"]) → ["a", "b"]

*   eliminarDuplicados([]) → []

*/

export function eliminarDuplicados(elementos) {

  return [...new Set(elementos)]

}
 
/**

* 24. filtrarMayores(numeros, limite)

* Devuelve un arreglo con los números mayores que limite.

*   filtrarMayores([2, 5, 8, 3], 4) → [5, 8]

*   filtrarMayores([1, 2], 5)      → []

*   filtrarMayores([], 3)          → []

*/

export function filtrarMayores(numeros, limite) {

  return numeros.filter(numero => numero > limite)

}
 
/**

* 25. buscarPorNombre(personas, nombre)

* Busca una persona por nombre sin distinguir mayúsculas y minúsculas.

* Devuelve el objeto encontrado o null si no existe.

*   buscarPorNombre([{nombre:"Ana"}], "ana") → {nombre:"Ana"}

*   buscarPorNombre([{nombre:"Luis"}], "Eva") → null

*/

export function buscarPorNombre(personas, nombre) {

  return personas.find(persona => persona.nombre.toLowerCase() === nombre.toLowerCase()) ?? null

}
 
/**

* 26. obtenerNombres(personas)

* Devuelve un arreglo con el nombre de cada persona.

*   obtenerNombres([{nombre:"Ana"}, {nombre:"Luis"}]) → ["Ana", "Luis"]

*   obtenerNombres([]) → []

*/

export function obtenerNombres(personas) {

  return personas.map(persona => persona.nombre)

}
 
/**

* 27. contarAprobados(calificaciones)

* Devuelve cuántas calificaciones son iguales o mayores a 6.

*   contarAprobados([5, 6, 8, 10]) → 3

*   contarAprobados([4, 5])        → 0

*   contarAprobados([])            → 0

*/

export function contarAprobados(calificaciones) {

  return calificaciones.filter(calificacion => calificacion >= 6).length

}
 
/**

* 28. ordenarAscendente(numeros)

* Devuelve un nuevo arreglo ordenado de menor a mayor, sin modificar el original.

*   ordenarAscendente([8, 2, 5]) → [2, 5, 8]

*   ordenarAscendente([1])       → [1]

*   ordenarAscendente([])        → []

*/

export function ordenarAscendente(numeros) {

  return [...numeros].sort((a, b) => a - b)

}
 
/**

* 29. dividirEnGrupos(elementos, tamano)

* Divide un arreglo en grupos del tamaño indicado.

* El último grupo puede tener menos elementos.

* Lanza un error si tamano no es un entero mayor que cero.

*   dividirEnGrupos([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]

*   dividirEnGrupos([1, 2], 3)          → [[1, 2]]

*/

export function dividirEnGrupos(elementos, tamano) {

  if (!Number.isInteger(tamano) || tamano <= 0) {

    throw new Error('El tamaño debe ser mayor a cero')

  }

  const grupos = []

  for (let i = 0; i < elementos.length; i += tamano) {

    grupos.push(elementos.slice(i, i + tamano))

  }

  return grupos

}
 
/**

* 30. actualizarPrecio(producto, nuevoPrecio)

* Devuelve una copia del producto con el precio actualizado.

* Lanza un error si nuevoPrecio es negativo.

*   actualizarPrecio({nombre:"Libro", precio:100}, 120)

*     → {nombre:"Libro", precio:120}

*/

export function actualizarPrecio(producto, nuevoPrecio) {

  if (nuevoPrecio < 0) {

    throw new Error('El precio no puede ser negativo')

  }

  return { ...producto, precio: nuevoPrecio }

}
 
// ───────────────────────────────────────────────────────────────

// BLOQUE 4: TEXTO Y VALIDACIONES

// ───────────────────────────────────────────────────────────────
 
/**

* 31. quitarEspacios(texto)

* Elimina los espacios al inicio y al final del texto.

* Lanza un error si recibe un valor que no sea texto.

*   quitarEspacios("  hola  ") → "hola"

*   quitarEspacios("hola")     → "hola"

*   quitarEspacios(123)        → Error: "Se esperaba un texto"

*/

export function quitarEspacios(texto) {

  if (typeof texto !== 'string') {

    throw new Error('Se esperaba un texto')

  }

  return texto.trim()

}
 
/**

* 32. convertirMayusculas(texto)

* Convierte todo el texto a mayúsculas.

* Lanza un error si recibe un valor que no sea texto.

*   convertirMayusculas("Hola mundo") → "HOLA MUNDO"

*   convertirMayusculas("")           → ""

*/

export function convertirMayusculas(texto) {

  if (typeof texto !== 'string') {

    throw new Error('Se esperaba un texto')

  }

  return texto.toUpperCase()

}
 
/**

* 33. reemplazarPalabra(texto, buscar, reemplazo)

* Reemplaza todas las apariciones de una palabra o fragmento.

*   reemplazarPalabra("gato y gato", "gato", "perro") → "perro y perro"

*   reemplazarPalabra("hola", "x", "y") → "hola"

*/

export function reemplazarPalabra(texto, buscar, reemplazo) {

  return texto.replaceAll(buscar, reemplazo)

}
 
/**

* 34. empiezaConMayuscula(texto)

* Devuelve true si el primer carácter es una letra mayúscula.

* Devuelve false si el texto está vacío o inicia con otro carácter.

*   empiezaConMayuscula("Hola") → true

*   empiezaConMayuscula("hola") → false

*   empiezaConMayuscula("")     → false

*/

export function empiezaConMayuscula(texto) {

  if (texto.length === 0) {

    return false

  }

  return texto[0] !== texto[0].toLowerCase() && texto[0] === texto[0].toUpperCase()

}
 
/**

* 35. ocultarTelefono(telefono)

* Muestra únicamente los últimos cuatro dígitos y reemplaza el resto por asteriscos.

* Lanza un error si el teléfono no contiene exactamente 10 dígitos.

*   ocultarTelefono("4491234567") → "******4567"

*   ocultarTelefono("1234")       → Error: "El teléfono debe tener 10 dígitos"

*/

export function ocultarTelefono(telefono) {

  if (!/^\d{10}$/.test(telefono)) {

    throw new Error('El teléfono debe tener 10 dígitos')

  }

  return '******' + telefono.slice(-4)

}
 
/**

* 36. validarCorreo(correo)

* Devuelve true si el correo tiene un formato básico válido.

* Devuelve false si no contiene usuario, @ y dominio.

*   validarCorreo("ana@mail.com") → true

*   validarCorreo("ana.mail.com") → false

*   validarCorreo("@mail.com")    → false

*/

export function validarCorreo(correo) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)

}
