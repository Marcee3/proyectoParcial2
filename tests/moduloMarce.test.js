import { describe, it, expect } from 'vitest';
import { restar, multiplicar, potencia, modulo, redondear, absoluto, esMultiplo, sumarArreglo, menorDeArreglo, contarPares} from '../src/moduloMarce'
import { calcularPropina, calcularDescuentoFijo, calcularEnvio, calcularPagoSemanal, calcularComision, puedeComprar, calcularCalificacionFinal, validarExistencia, calcularPuntosCompra, estadoPedido} from '../src/moduloMarce'

/* Prueba 1 */
describe('restar', () => {
    it('Resta dos números positivos', () => {
        expect(restar(10, 3)).toBe(7)
    })

    it('Devuelve un resultado negativo', () => {
        expect(restar(3, 10)).toBe(-7)
    })

    it('Resta números negativos', () => {
        expect(restar(-5, -3)).toBe(-2)
    })

    it('Lanza error si los valores no son números', () => {
        expect(() => restar('10', 3)).toThrow('Ambos valores deben ser números')
    })
})

/* Prueba 2 */
describe('multiplicar', () => {
    it('Multiplica dos números positivos', () => {
        expect(multiplicar(4, 5)).toBe(20)
    })

    it('Multiplica números negativos', () => {
        expect(multiplicar(-2, 3)).toBe(-6)
    })

    it('Multiplica por cero', () => {
        expect(multiplicar(8, 0)).toBe(0)
    })

    it('Lanza error si los valores no son números', () => {
        expect(() => multiplicar('4', 5)).toThrow('Ambos valores deben ser números')
    })
})

/* Prueba 3 */
describe('potencia', () => {
    it('Calcula una potencia positiva', () => {
        expect(potencia(2, 3)).toBe(8)
    })

    it('Eleva un número a la potencia cero', () => {
        expect(potencia(5, 0)).toBe(1)
    })

    it('Calcula una potencia con base negativa', () => {
        expect(potencia(-2, 2)).toBe(4)
    })

    it('Lanza error con exponente negativo', () => {
        expect(() => potencia(2, -1)).toThrow('El exponente debe ser un entero mayor o igual a cero')
    })

    it('Lanza error con exponente decimal', () => {
        expect(() => potencia(2, 2.5)).toThrow('El exponente debe ser un entero mayor o igual a cero')
    })
})

/* Prueba 4 */
describe('modulo', () => {
    it('Devuelve el residuo de una división', () => {
        expect(modulo(10, 3)).toBe(1)
    })

    it('Devuelve cero cuando la división es exacta', () => {
        expect(modulo(8, 4)).toBe(0)
    })

    it('Calcula el módulo con números negativos', () => {
        expect(modulo(-10, 3)).toBe(-1)
    })

    it('Lanza error cuando el divisor es cero', () => {
        expect(() => modulo(10, 0)).toThrow('El divisor no puede ser cero')
    })
})

/* Prueba 5 */
describe('redondear', () => {
    it('Redondea a dos decimales', () => {
        expect(redondear(3.14159, 2)).toBe(3.14)
    })

    it('Redondea a cero decimales', () => {
        expect(redondear(5.678, 0)).toBe(6)
    })

    it('Redondea a tres decimales', () => {
        expect(redondear(2.12356, 3)).toBe(2.124)
    })

    it('Lanza error con decimales negativos', () => {
        expect(() => redondear(3.14, -1)).toThrow('Los decimales deben estar entre 0 y 10')
    })

    it('Lanza error con más de diez decimales', () => {
        expect(() => redondear(3.14, 11)).toThrow('Los decimales deben estar entre 0 y 10')
    })

    it('Lanza error con decimales no enteros', () => {
        expect(() => redondear(3.14, 2.5)).toThrow('Los decimales deben estar entre 0 y 10')
    })
})

/* Prueba 6 */
describe('absoluto', () => {
    it('Devuelve el valor positivo de un número negativo', () => {
        expect(absoluto(-8)).toBe(8)
    })

    it('Mantiene el valor de un número positivo', () => {
        expect(absoluto(8)).toBe(8)
    })

    it('Devuelve cero cuando recibe cero', () => {
        expect(absoluto(0)).toBe(0)
    })
})

/* Prueba 7 */
describe('esMultiplo', () => {
    it('Devuelve true cuando un número es múltiplo', () => {
        expect(esMultiplo(12, 3)).toBe(true)
    })

    it('Devuelve false cuando un número no es múltiplo', () => {
        expect(esMultiplo(10, 3)).toBe(false)
    })

    it('Considera cero como múltiplo', () => {
        expect(esMultiplo(0, 5)).toBe(true)
    })

    it('Lanza error cuando el divisor es cero', () => {
        expect(() => esMultiplo(12, 0)).toThrow('El divisor no puede ser cero')
    })
})

/* Prueba 8 */
describe('sumarArreglo', () => {
    it('Suma todos los números positivos', () => {
        expect(sumarArreglo([1, 2, 3])).toBe(6)
    })

    it('Suma números negativos y positivos', () => {
        expect(sumarArreglo([-2, 2])).toBe(0)
    })

    it('Suma un arreglo con un solo elemento', () => {
        expect(sumarArreglo([5])).toBe(5)
    })

    it('Lanza error cuando el arreglo está vacío', () => {
        expect(() => sumarArreglo([])).toThrow('El arreglo no puede estar vacío')
    })
})

/* Prueba 9 */
describe('menorDeArreglo', () => {
    it('Encuentra el número menor', () => {
        expect(menorDeArreglo([5, 2, 9])).toBe(2)
    })

    it('Encuentra el menor entre números negativos', () => {
        expect(menorDeArreglo([-4, 0])).toBe(-4)
    })

    it('Devuelve el mismo número cuando solo hay un elemento', () => {
        expect(menorDeArreglo([7])).toBe(7)
    })

    it('Lanza error cuando el arreglo está vacío', () => {
        expect(() => menorDeArreglo([])).toThrow('El arreglo no puede estar vacío')
    })
})

/* Prueba 10 */
describe('contarPares', () => {
    it('Cuenta correctamente los números pares', () => {
        expect(contarPares([1, 2, 4, 7, 8])).toBe(3)
    })

    it('Devuelve cero cuando no hay números pares', () => {
        expect(contarPares([1, 3, 5])).toBe(0)
    })

    it('Devuelve cero cuando el arreglo está vacío', () => {
        expect(contarPares([])).toBe(0)
    })

    it('Cuenta el cero como número par', () => {
        expect(contarPares([0, 2, 4])).toBe(3)
    })
})

/* Prueba 11 */
describe('calcularPropina', () => {
    it('Calcula el total más el diez por ciento de propina', () => {
        expect(calcularPropina(200, 10)).toBe(220)
    })

    it('Devuelve el mismo total cuando la propina es cero', () => {
        expect(calcularPropina(100, 0)).toBe(100)
    })

    it('Calcula una propina del cien por ciento', () => {
        expect(calcularPropina(100, 100)).toBe(200)
    })

    it('Lanza error cuando el total es negativo', () => {
        expect(() => calcularPropina(-100, 10)).toThrow('El total no puede ser negativo')
    })

    it('Lanza error cuando el porcentaje supera cien', () => {
        expect(() => calcularPropina(100, 120)).toThrow('El porcentaje debe estar entre 0 y 100')
    })

    it('Lanza error cuando el porcentaje es negativo', () => {
        expect(() => calcularPropina(100, -5)).toThrow('El porcentaje debe estar entre 0 y 100')
    })
})

/* Prueba 12 */
describe('calcularDescuentoFijo', () => {
    it('Resta una cantidad fija al precio', () => {
        expect(calcularDescuentoFijo(100, 20)).toBe(80)
    })

    it('Devuelve cero cuando el descuento es igual al precio', () => {
        expect(calcularDescuentoFijo(50, 50)).toBe(0)
    })

    it('Devuelve el precio cuando el descuento es cero', () => {
        expect(calcularDescuentoFijo(100, 0)).toBe(100)
    })

    it('Lanza error cuando el precio es negativo', () => {
        expect(() => calcularDescuentoFijo(-100, 20)).toThrow('El precio y el descuento no pueden ser negativos')
    })

    it('Lanza error cuando el descuento es negativo', () => {
        expect(() => calcularDescuentoFijo(100, -20)).toThrow('El precio y el descuento no pueden ser negativos')
    })

    it('Lanza error cuando el descuento supera el precio', () => {
        expect(() => calcularDescuentoFijo(50, 60)).toThrow('El descuento no puede superar el precio')
    })
})

/* Prueba 13 */
describe('calcularEnvio', () => {
    it('Devuelve cero cuando la compra es de quinientos', () => {
        expect(calcularEnvio(500)).toBe(0)
    })

    it('Devuelve cero cuando la compra supera quinientos', () => {
        expect(calcularEnvio(600)).toBe(0)
    })

    it('Devuelve ochenta cuando la compra es menor a quinientos', () => {
        expect(calcularEnvio(499)).toBe(80)
    })

    it('Lanza error cuando la compra es negativa', () => {
        expect(() => calcularEnvio(-100)).toThrow('La compra no puede ser negativa')
    })
})

/* Prueba 14 */
describe('calcularPagoSemanal', () => {
    it('Calcula el pago de horas normales', () => {
        expect(calcularPagoSemanal(35, 100)).toBe(3500)
    })

    it('Calcula el pago con horas extras al doble', () => {
        expect(calcularPagoSemanal(45, 100)).toBe(5000)
    })

    it('Calcula el pago de exactamente cuarenta horas', () => {
        expect(calcularPagoSemanal(40, 100)).toBe(4000)
    })

    it('Devuelve cero cuando las horas son cero', () => {
        expect(calcularPagoSemanal(0, 100)).toBe(0)
    })

    it('Lanza error cuando las horas son negativas', () => {
        expect(() => calcularPagoSemanal(-5, 100)).toThrow('Las horas y el pago deben ser positivos')
    })

    it('Lanza error cuando el pago por hora es negativo', () => {
        expect(() => calcularPagoSemanal(40, -100)).toThrow('Las horas y el pago deben ser positivos')
    })
})

/* Prueba 15 */
describe('calcularComision', () => {
    it('Calcula el cinco por ciento de comisión', () => {
        expect(calcularComision(10000, 5)).toBe(500)
    })

    it('Devuelve cero cuando el porcentaje es cero', () => {
        expect(calcularComision(2000, 0)).toBe(0)
    })

    it('Calcula el cien por ciento de comisión', () => {
        expect(calcularComision(1000, 100)).toBe(1000)
    })

    it('Lanza error cuando las ventas son negativas', () => {
        expect(() => calcularComision(-1000, 5)).toThrow('Las ventas no pueden ser negativas')
    })

    it('Lanza error cuando el porcentaje supera cien', () => {
        expect(() => calcularComision(1000, 120)).toThrow('El porcentaje debe estar entre 0 y 100')
    })

    it('Lanza error cuando el porcentaje es negativo', () => {
        expect(() => calcularComision(1000, -5)).toThrow('El porcentaje debe estar entre 0 y 100')
    })
})

/* Prueba 16 */
describe('puedeComprar', () => {
    it('Devuelve true cuando es mayor de edad y tiene saldo suficiente', () => {
        expect(puedeComprar(20, 100, 150)).toBe(true)
    })

    it('Devuelve false cuando es menor de edad', () => {
        expect(puedeComprar(16, 100, 150)).toBe(false)
    })

    it('Devuelve false cuando no tiene saldo suficiente', () => {
        expect(puedeComprar(20, 100, 50)).toBe(false)
    })

    it('Devuelve true cuando tiene exactamente el saldo necesario', () => {
        expect(puedeComprar(18, 100, 100)).toBe(true)
    })

    it('Lanza error cuando la edad es negativa', () => {
        expect(() => puedeComprar(-1, 100, 150)).toThrow('Los valores no pueden ser negativos')
    })

    it('Lanza error cuando el precio es negativo', () => {
        expect(() => puedeComprar(20, -100, 150)).toThrow('Los valores no pueden ser negativos')
    })

    it('Lanza error cuando el saldo es negativo', () => {
        expect(() => puedeComprar(20, 100, -150)).toThrow('Los valores no pueden ser negativos')
    })
})

/* Prueba 17 */
describe('calcularCalificacionFinal', () => {
    it('Calcula correctamente el promedio de tres parciales y un proyecto', () => {
        expect(calcularCalificacionFinal([8, 9, 10], 9)).toBe(9)
    })

    it('Calcula el promedio cuando todas las calificaciones son diez', () => {
        expect(calcularCalificacionFinal([10, 10, 10], 10)).toBe(10)
    })

    it('Calcula el promedio cuando todas las calificaciones son cero', () => {
        expect(calcularCalificacionFinal([0, 0, 0], 0)).toBe(0)
    })

    it('Lanza error cuando recibe menos de tres parciales', () => {
        expect(() => calcularCalificacionFinal([8, 9], 10)).toThrow('Se requieren tres parciales')
    })

    it('Lanza error cuando recibe más de tres parciales', () => {
        expect(() => calcularCalificacionFinal([8, 9, 10, 7], 9)).toThrow('Se requieren tres parciales')
    })

    it('Lanza error cuando una calificación supera diez', () => {
        expect(() => calcularCalificacionFinal([8, 9, 11], 9)).toThrow('Las calificaciones deben estar entre 0 y 10')
    })

    it('Lanza error cuando una calificación es negativa', () => {
        expect(() => calcularCalificacionFinal([8, -1, 10], 9)).toThrow('Las calificaciones deben estar entre 0 y 10')
    })

    it('Lanza error cuando el proyecto supera diez', () => {
        expect(() => calcularCalificacionFinal([8, 9, 10], 11)).toThrow('Las calificaciones deben estar entre 0 y 10')
    })
})

/* Prueba 18 */
describe('validarExistencia', () => {
    it('Devuelve true cuando hay suficiente stock', () => {
        expect(validarExistencia(10, 4)).toBe(true)
    })

    it('Devuelve false cuando no hay suficiente stock', () => {
        expect(validarExistencia(3, 5)).toBe(false)
    })

    it('Devuelve true cuando el stock es exactamente igual a la cantidad', () => {
        expect(validarExistencia(5, 5)).toBe(true)
    })

    it('Lanza error cuando el stock es negativo', () => {
        expect(() => validarExistencia(-5, 2)).toThrow('El stock no puede ser negativo')
    })

    it('Lanza error cuando la cantidad es cero', () => {
        expect(() => validarExistencia(10, 0)).toThrow('La cantidad debe ser mayor a cero')
    })

    it('Lanza error cuando la cantidad es negativa', () => {
        expect(() => validarExistencia(10, -2)).toThrow('La cantidad debe ser mayor a cero')
    })
})

/* Prueba 19 */
describe('calcularPuntosCompra', () => {
    it('Otorga tres puntos por una compra de trescientos cincuenta', () => {
        expect(calcularPuntosCompra(350)).toBe(3)
    })

    it('Devuelve cero cuando la compra es menor a cien', () => {
        expect(calcularPuntosCompra(99)).toBe(0)
    })

    it('Otorga cinco puntos por una compra de quinientos', () => {
        expect(calcularPuntosCompra(500)).toBe(5)
    })

    it('Devuelve cero cuando la compra es cero', () => {
        expect(calcularPuntosCompra(0)).toBe(0)
    })

    it('Lanza error cuando el total es negativo', () => {
        expect(() => calcularPuntosCompra(-100)).toThrow('El total no puede ser negativo')
    })
})

/* Prueba 20 */
describe('estadoPedido', () => {
    it('Convierte el código P en Pendiente', () => {
        expect(estadoPedido('P')).toBe('Pendiente')
    })

    it('Convierte el código E en Enviado', () => {
        expect(estadoPedido('E')).toBe('Enviado')
    })

    it('Convierte el código R en Entregado', () => {
        expect(estadoPedido('R')).toBe('Entregado')
    })

    it('Lanza error cuando el código no es válido', () => {
        expect(() => estadoPedido('X')).toThrow('Estado de pedido no válido')
    })

    it('Lanza error cuando recibe un código vacío', () => {
        expect(() => estadoPedido('')).toThrow('Estado de pedido no válido')
    })
})
