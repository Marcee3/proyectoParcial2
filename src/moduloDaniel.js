/**
* 37. validarCodigoPostal(codigo)
* Devuelve true si el código postal contiene exactamente cinco dígitos.
*   validarCodigoPostal("20000") → true
*   validarCodigoPostal("1234")  → false
*   validarCodigoPostal("12A45") → false
*/
export function validarCodigoPostal(codigo) {
  return /^\d{5}$/.test(codigo)
}
 
/**
* 38. generarIniciales(nombreCompleto)
* Devuelve las iniciales de cada palabra en mayúsculas.
* Ignora espacios adicionales.
*   generarIniciales("Ana López")       → "AL"
*   generarIniciales("  Juan Pérez ")   → "JP"
*   generarIniciales("")                → ""
*/
export function generarIniciales(nombreCompleto) {
  return nombreCompleto.trim().split(/\s+/).filter(Boolean)
    .map(palabra => palabra[0].toUpperCase()).join('')
}
 
/**
* 39. contarCaracteresSinEspacios(texto)
* Devuelve la cantidad de caracteres sin contar espacios en blanco.
*   contarCaracteresSinEspacios("hola mundo") → 9
*   contarCaracteresSinEspacios(" a b ")      → 2
*   contarCaracteresSinEspacios("")           → 0
*/
export function contarCaracteresSinEspacios(texto) {
  return texto.replace(/\s/g, '').length
}
 
/**
* 40. contieneSoloLetras(texto)
* Devuelve true si el texto contiene únicamente letras y espacios.
* No acepta números ni signos de puntuación.
*   contieneSoloLetras("Ana Maria") → true
*   contieneSoloLetras("Ana2")      → false
*   contieneSoloLetras("")          → false
*/
export function contieneSoloLetras(texto) {
  return texto.length > 0 && /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(texto)
}
 
// ───────────────────────────────────────────────────────────────
// BLOQUE 5: FECHAS, ESTADOS Y OTRAS FUNCIONES
// ───────────────────────────────────────────────────────────────
 
/**
* 41. esFinDeSemana(fecha)
* Devuelve true si la fecha corresponde a sábado o domingo.
* Recibe un objeto Date.
*   esFinDeSemana(new Date("2026-11-07")) → true
*   esFinDeSemana(new Date("2026-11-09")) → false
*/
export function esFinDeSemana(fecha) {
  const dia = fecha.getDay()
  return dia === 0 || dia === 6
}
 
/**
* 42. obtenerNombreDia(fecha)
* Devuelve el nombre del día de la semana en español.
* Recibe un objeto Date.
*   obtenerNombreDia(new Date("2026-11-09")) → "lunes"
*   obtenerNombreDia(new Date("2026-11-08")) → "domingo"
*/
export function obtenerNombreDia(fecha) {
  const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
  return dias[fecha.getDay()]
}
 
/**
* 43. diasDelMes(mes, anio)
* Devuelve la cantidad de días del mes indicado.
* mes va de 1 a 12.
* Lanza un error si el mes no está entre 1 y 12.
*   diasDelMes(2, 2024) → 29
*   diasDelMes(2, 2025) → 28
*   diasDelMes(13, 2025) → Error: "El mes debe estar entre 1 y 12"
*/
export function diasDelMes(mes, anio) {
  if (!Number.isInteger(mes) || mes < 1 || mes > 12) {
    throw new Error('El mes debe estar entre 1 y 12')
  }
  return new Date(anio, mes, 0).getDate()
}
 
/**
* 44. formatearFecha(fecha)
* Devuelve la fecha en formato DD/MM/AAAA.
* Recibe un objeto Date.
*   formatearFecha(new Date(2026, 10, 9)) → "09/11/2026"
*   formatearFecha(new Date(2025, 0, 5)) → "05/01/2025"
*/
export function formatearFecha(fecha) {
  const dia = String(fecha.getDate()).padStart(2, '0')
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const anio = fecha.getFullYear()
  return `${dia}/${mes}/${anio}`
}
 
/**
* 45. puedeAgendarCita(hora, citasAgendadas)
* Devuelve false si la hora ya está ocupada y true si está disponible.
* Las horas se reciben como texto en formato HH:MM.
*   puedeAgendarCita("10:00", ["09:00", "11:00"]) → true
*   puedeAgendarCita("10:00", ["10:00", "11:00"]) → false
*/
export function puedeAgendarCita(hora, citasAgendadas) {
  return !citasAgendadas.includes(hora)
}
 
/**
* 46. cambiarEstadoPedido(pedido, nuevoEstado)
* Devuelve una copia del pedido con el estado actualizado.
* Solo acepta "pendiente", "en proceso" o "entregado".
* Lanza un error si el estado no es válido.
*   cambiarEstadoPedido({id:1, estado:"pendiente"}, "entregado")
*     → {id:1, estado:"entregado"}
*   cambiarEstadoPedido({id:1}, "cancelado")
*     → Error: "Estado no válido"
*/
export function cambiarEstadoPedido(pedido, nuevoEstado) {
  const estadosValidos = ['pendiente', 'en proceso', 'entregado']
  if (!estadosValidos.includes(nuevoEstado)) {
    throw new Error('Estado no válido')
  }
  return { ...pedido, estado: nuevoEstado }
}
 
/**
* 47. calcularPorcentajeAvance(actual, meta)
* Devuelve el porcentaje de avance respecto a una meta.
* Lanza un error si meta es cero o negativa, o actual es negativo.
*   calcularPorcentajeAvance(5, 10) → 50
*   calcularPorcentajeAvance(10, 10) → 100
*   calcularPorcentajeAvance(5, 0) → Error: "La meta debe ser mayor a cero"
*/
export function calcularPorcentajeAvance(actual, meta) {
  if (meta <= 0) {
    throw new Error('La meta debe ser mayor a cero')
  }
  if (actual < 0) {
    throw new Error('El avance no puede ser negativo')
  }
  return actual / meta * 100
}
 
/**
* 48. clasificarAvance(porcentaje)
* Devuelve el nivel de avance:
*   menos de 50  → "bajo"
*   50 a menos de 80 → "medio"
*   80 o más → "alto"
* Lanza un error si el porcentaje está fuera de 0 a 100.
*   clasificarAvance(40)  → "bajo"
*   clasificarAvance(65)  → "medio"
*   clasificarAvance(90)  → "alto"
*/
export function clasificarAvance(porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('El porcentaje debe estar entre 0 y 100')
  }
  if (porcentaje < 50) {
    return 'bajo'
  }
  if (porcentaje < 80) {
    return 'medio'
  }
  return 'alto'
}
 
/**
* 49. obtenerProductosDisponibles(productos)
* Devuelve únicamente los productos cuyo stock sea mayor que cero.
*   obtenerProductosDisponibles([{nombre:"A", stock:2}, {nombre:"B", stock:0}])
*     → [{nombre:"A", stock:2}]
*   obtenerProductosDisponibles([]) → []
*/
export function obtenerProductosDisponibles(productos) {
  return productos.filter(producto => producto.stock > 0)
}
 
/**
* 50. validarUsuario(usuario)
* Comprueba que el objeto tenga nombre, correo y contraseña.
* El nombre no puede estar vacío, el correo debe tener formato válido
* y la contraseña debe tener al menos 8 caracteres.
* Devuelve true si cumple todas las reglas y false en caso contrario.
*   validarUsuario({nombre:"Ana", correo:"ana@mail.com", password:"Secreto123"}) → true
*   validarUsuario({nombre:"", correo:"ana@mail.com", password:"Secreto123"}) → false
*   validarUsuario({nombre:"Ana", correo:"ana", password:"123"}) → false
*/
export function validarUsuario(usuario) {
  if (!usuario || typeof usuario.nombre !== 'string' ||
      typeof usuario.correo !== 'string' || typeof usuario.password !== 'string') {
    return false
  }
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo)
  return usuario.nombre.trim().length > 0 &&
    correoValido &&
    usuario.password.length >= 8
}