/**
 * 1. restar(a, b)
 * Devuelve la resta de b a a.
 * Lanza un error si alguno de los valores no es un número.
 *   restar(10, 3)  → 7
 *   restar(3, 10)  → -7
 *   restar('10', 3) → Error: "Ambos valores deben ser números"
 */
export function restar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos valores deben ser números')
  }
  return a - b
}

/**
 * 2. multiplicar(a, b)
 * Devuelve el producto de dos números.
 * Lanza un error si alguno de los valores no es un número.
 *   multiplicar(4, 5) → 20
 *   multiplicar(-2, 3) → -6
 */
export function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos valores deben ser números')
  }
  return a * b
}

/**
 * 3. potencia(base, exponente)
 * Devuelve base elevado al exponente.
 * Lanza un error si el exponente no es un entero no negativo.
 *   potencia(2, 3)  → 8
 *   potencia(5, 0)  → 1
 *   potencia(2, -1) → Error
 */
export function potencia(base, exponente) {
  if (!Number.isInteger(exponente) || exponente < 0) {
    throw new Error('El exponente debe ser un entero mayor o igual a cero')
  }
  return base ** exponente
}

/**
 * 4. modulo(a, b)
 * Devuelve el residuo de dividir a entre b.
 * Lanza un error si el divisor es cero.
 *   modulo(10, 3) → 1
 *   modulo(8, 4)  → 0
 */
export function modulo(a, b) {
  if (b === 0) {
    throw new Error('El divisor no puede ser cero')
  }
  return a % b
}

/**
 * 5. redondear(numero, decimales)
 * Redondea un número a la cantidad indicada de decimales.
 * Lanza un error si decimales no es un entero entre 0 y 10.
 *   redondear(3.14159, 2) → 3.14
 *   redondear(5.678, 0)   → 6
 */
export function redondear(numero, decimales) {
  if (!Number.isInteger(decimales) || decimales < 0 || decimales > 10) {
    throw new Error('Los decimales deben estar entre 0 y 10')
  }
  const factor = 10 ** decimales
  return Math.round((numero + Number.EPSILON) * factor) / factor
}

/**
 * 6. absoluto(numero)
 * Devuelve el valor absoluto de un número.
 *   absoluto(-8) → 8
 *   absoluto(8)  → 8
 *   absoluto(0)  → 0
 */
export function absoluto(numero) {
  return Math.abs(numero)
}

/**
 * 7. esMultiplo(numero, divisor)
 * Devuelve true si numero es múltiplo de divisor.
 * Lanza un error si divisor es cero.
 *   esMultiplo(12, 3) → true
 *   esMultiplo(10, 3) → false
 */
export function esMultiplo(numero, divisor) {
  if (divisor === 0) {
    throw new Error('El divisor no puede ser cero')
  }
  return numero % divisor === 0
}

/**
 * 8. sumarArreglo(numeros)
 * Devuelve la suma de todos los números de un arreglo.
 * Lanza un error si el arreglo está vacío.
 *   sumarArreglo([1, 2, 3]) → 6
 *   sumarArreglo([-2, 2])   → 0
 */
export function sumarArreglo(numeros) {
  if (numeros.length === 0) {
    throw new Error('El arreglo no puede estar vacío')
  }
  return numeros.reduce((suma, numero) => suma + numero, 0)
}

/**
 * 9. menorDeArreglo(numeros)
 * Devuelve el número más pequeño de un arreglo.
 * Lanza un error si el arreglo está vacío.
 *   menorDeArreglo([5, 2, 9]) → 2
 *   menorDeArreglo([-4, 0])   → -4
 */
export function menorDeArreglo(numeros) {
  if (numeros.length === 0) {
    throw new Error('El arreglo no puede estar vacío')
  }
  return Math.min(...numeros)
}

/**
 * 10. contarPares(numeros)
 * Devuelve cuántos números pares contiene el arreglo.
 *   contarPares([1, 2, 4, 7, 8]) → 3
 *   contarPares([1, 3, 5])       → 0
 *   contarPares([])              → 0
 */
export function contarPares(numeros) {
  return numeros.filter(numero => numero % 2 === 0).length
}

// ───────────────────────────────────────────────────────────────
// BLOQUE 2: REGLAS DE NEGOCIO Y CÁLCULOS
// ───────────────────────────────────────────────────────────────

/**
 * 11. calcularPropina(total, porcentaje)
 * Devuelve el total de la cuenta más la propina indicada.
 * Lanza un error si el total es negativo o el porcentaje está fuera de 0 a 100.
 *   calcularPropina(200, 10) → 220
 *   calcularPropina(100, 0)  → 100
 */
export function calcularPropina(total, porcentaje) {
  if (total < 0) {
    throw new Error('El total no puede ser negativo')
  }
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('El porcentaje debe estar entre 0 y 100')
  }
  return total + (total * porcentaje) / 100
}

/**
 * 12. calcularDescuentoFijo(precio, descuento)
 * Resta una cantidad fija al precio.
 * Lanza un error si precio o descuento son negativos, o si el descuento supera el precio.
 *   calcularDescuentoFijo(100, 20) → 80
 *   calcularDescuentoFijo(50, 50)  → 0
 */
export function calcularDescuentoFijo(precio, descuento) {
  if (precio < 0 || descuento < 0) {
    throw new Error('El precio y el descuento no pueden ser negativos')
  }
  if (descuento > precio) {
    throw new Error('El descuento no puede superar el precio')
  }
  return precio - descuento
}

/**
 * 13. calcularEnvio(totalCompra)
 * Devuelve 0 si la compra es de $500 o más; en otro caso devuelve $80.
 * Lanza un error si la compra es negativa.
 *   calcularEnvio(600) → 0
 *   calcularEnvio(499) → 80
 */
export function calcularEnvio(totalCompra) {
  if (totalCompra < 0) {
    throw new Error('La compra no puede ser negativa')
  }
  return totalCompra >= 500 ? 0 : 80
}

/**
 * 14. calcularPagoSemanal(horas, pagoPorHora)
 * Calcula el pago semanal. Las horas mayores a 40 se pagan al doble.
 * Lanza un error si las horas o el pago por hora son negativos.
 *   calcularPagoSemanal(35, 100) → 3500
 *   calcularPagoSemanal(45, 100) → 5000
 */
export function calcularPagoSemanal(horas, pagoPorHora) {
  if (horas < 0 || pagoPorHora < 0) {
    throw new Error('Las horas y el pago deben ser positivos')
  }
  const horasNormales = Math.min(horas, 40)
  const horasExtra = Math.max(horas - 40, 0)
  return horasNormales * pagoPorHora + horasExtra * pagoPorHora * 2
}

/**
 * 15. calcularComision(ventas, porcentaje)
 * Calcula la comisión sobre el total de ventas.
 * Lanza un error si ventas es negativo o el porcentaje no está entre 0 y 100.
 *   calcularComision(10000, 5) → 500
 *   calcularComision(2000, 0)  → 0
 */
export function calcularComision(ventas, porcentaje) {
  if (ventas < 0) {
    throw new Error('Las ventas no pueden ser negativas')
  }
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('El porcentaje debe estar entre 0 y 100')
  }
  return ventas * porcentaje / 100
}

/**
 * 16. puedeComprar(edad, precio, saldo)
 * Devuelve true si la persona tiene al menos 18 años y saldo suficiente.
 * Lanza un error si edad, precio o saldo son negativos.
 *   puedeComprar(20, 100, 150) → true
 *   puedeComprar(16, 100, 150) → false
 *   puedeComprar(20, 100, 50)  → false
 */
export function puedeComprar(edad, precio, saldo) {
  if (edad < 0 || precio < 0 || saldo < 0) {
    throw new Error('Los valores no pueden ser negativos')
  }
  return edad >= 18 && saldo >= precio
}

/**
 * 17. calcularCalificacionFinal(parciales, proyecto)
 * Calcula el promedio de tres parciales y un proyecto, todos con el mismo peso.
 * Lanza un error si no recibe exactamente tres parciales o alguna calificación está fuera de 0 a 10.
 *   calcularCalificacionFinal([8, 9, 10], 9) → 9
 */
export function calcularCalificacionFinal(parciales, proyecto) {
  if (parciales.length !== 3) {
    throw new Error('Se requieren tres parciales')
  }
  const calificaciones = [...parciales, proyecto]
  if (calificaciones.some(n => n < 0 || n > 10)) {
    throw new Error('Las calificaciones deben estar entre 0 y 10')
  }
  return calificaciones.reduce((suma, n) => suma + n, 0) / 4
}

/**
 * 18. validarExistencia(stock, cantidad)
 * Devuelve true si hay suficiente stock para cubrir la cantidad solicitada.
 * Lanza un error si stock o cantidad son negativos, o si cantidad es cero.
 *   validarExistencia(10, 4) → true
 *   validarExistencia(3, 5)  → false
 */
export function validarExistencia(stock, cantidad) {
  if (stock < 0) {
    throw new Error('El stock no puede ser negativo')
  }
  if (cantidad <= 0) {
    throw new Error('La cantidad debe ser mayor a cero')
  }
  return stock >= cantidad
}

/**
 * 19. calcularPuntosCompra(total)
 * Otorga 1 punto por cada $100 completos de compra.
 * Lanza un error si el total es negativo.
 *   calcularPuntosCompra(350) → 3
 *   calcularPuntosCompra(99)  → 0
 *   calcularPuntosCompra(500) → 5
 */
export function calcularPuntosCompra(total) {
  if (total < 0) {
    throw new Error('El total no puede ser negativo')
  }
  return Math.floor(total / 100)
}

/**
 * 20. estadoPedido(estado)
 * Convierte el código de estado en una descripción:
 *   "P" → "Pendiente"
 *   "E" → "Enviado"
 *   "R" → "Entregado"
 * Lanza un error si el código no es válido.
 */
export function estadoPedido(estado) {
  const estados = { P: 'Pendiente', E: 'Enviado', R: 'Entregado' }
  if (!Object.hasOwn(estados, estado)) {
    throw new Error('Estado de pedido no válido')
  }
  return estados[estado]
}