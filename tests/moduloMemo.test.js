import { describe, it, expect } from 'vitest';
import {
  obtenerPrimero, obtenerUltimo, eliminarDuplicados, filtrarMayores,
  buscarPorNombre, obtenerNombres, contarAprobados, ordenarAscendente,
  dividirEnGrupos, actualizarPrecio, quitarEspacios, convertirMayusculas,
  reemplazarPalabra, empiezaConMayuscula, ocultarTelefono, validarCorreo,
} from '../src/moduloMemo.js';

describe('obtenerPrimero', () => {
  it('devuelve el primer elemento', () => {
    expect(obtenerPrimero(['a', 'b'])).toBe('a');
  });
  it('funciona con un solo elemento', () => {
    expect(obtenerPrimero([10])).toBe(10);
  });
  it('lanza error si el arreglo está vacío', () => {
    expect(() => obtenerPrimero([])).toThrow('El arreglo no puede estar vacío');
  });
});

describe('obtenerUltimo', () => {
  it('devuelve el último elemento', () => {
    expect(obtenerUltimo(['a', 'b', 'c'])).toBe('c');
  });
  it('funciona con un solo elemento', () => {
    expect(obtenerUltimo([10])).toBe(10);
  });
  it('lanza error si el arreglo está vacío', () => {
    expect(() => obtenerUltimo([])).toThrow('El arreglo no puede estar vacío');
  });
});

describe('eliminarDuplicados', () => {
  it('quita números repetidos', () => {
    expect(eliminarDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
  it('quita textos repetidos conservando el orden', () => {
    expect(eliminarDuplicados(['a', 'a', 'b'])).toEqual(['a', 'b']);
  });
  it('devuelve arreglo vacío si recibe uno vacío', () => {
    expect(eliminarDuplicados([])).toEqual([]);
  });
});

describe('filtrarMayores', () => {
  it('devuelve solo los mayores al límite', () => {
    expect(filtrarMayores([2, 5, 8, 3], 4)).toEqual([5, 8]);
  });
  it('no incluye los números iguales al límite', () => {
    expect(filtrarMayores([4, 5], 4)).toEqual([5]);
  });
  it('devuelve vacío si ninguno es mayor', () => {
    expect(filtrarMayores([1, 2], 5)).toEqual([]);
  });
  it('devuelve vacío con arreglo vacío', () => {
    expect(filtrarMayores([], 3)).toEqual([]);
  });
});

describe('buscarPorNombre', () => {
  it('encuentra sin distinguir mayúsculas', () => {
    expect(buscarPorNombre([{ nombre: 'Ana' }], 'ana')).toEqual({ nombre: 'Ana' });
  });
  it('devuelve null si no existe', () => {
    expect(buscarPorNombre([{ nombre: 'Luis' }], 'Eva')).toBeNull();
  });
  it('devuelve null con lista vacía', () => {
    expect(buscarPorNombre([], 'Ana')).toBeNull();
  });
});

describe('obtenerNombres', () => {
  it('devuelve los nombres de cada persona', () => {
    expect(obtenerNombres([{ nombre: 'Ana' }, { nombre: 'Luis' }])).toEqual(['Ana', 'Luis']);
  });
  it('devuelve vacío con lista vacía', () => {
    expect(obtenerNombres([])).toEqual([]);
  });
});

describe('contarAprobados', () => {
  it('cuenta las calificaciones de 6 o más', () => {
    expect(contarAprobados([5, 6, 8, 10])).toBe(3);
  });
  it('devuelve 0 si todos reprueban', () => {
    expect(contarAprobados([4, 5])).toBe(0);
  });
  it('devuelve 0 con arreglo vacío', () => {
    expect(contarAprobados([])).toBe(0);
  });
});

describe('ordenarAscendente', () => {
  it('ordena de menor a mayor', () => {
    expect(ordenarAscendente([8, 2, 5])).toEqual([2, 5, 8]);
  });
  it('ordena numéricamente y no como texto', () => {
    expect(ordenarAscendente([10, 9, 1])).toEqual([1, 9, 10]);
  });
  it('no modifica el arreglo original', () => {
    const original = [8, 2, 5];
    ordenarAscendente(original);
    expect(original).toEqual([8, 2, 5]);
  });
  it('funciona con un elemento y con vacío', () => {
    expect(ordenarAscendente([1])).toEqual([1]);
    expect(ordenarAscendente([])).toEqual([]);
  });
});

describe('dividirEnGrupos', () => {
  it('divide en grupos y el último queda más corto', () => {
    expect(dividirEnGrupos([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it('devuelve un solo grupo si el tamaño es mayor al arreglo', () => {
    expect(dividirEnGrupos([1, 2], 3)).toEqual([[1, 2]]);
  });
  it('devuelve vacío con arreglo vacío', () => {
    expect(dividirEnGrupos([], 2)).toEqual([]);
  });
  it('lanza error con tamaño cero o negativo', () => {
    expect(() => dividirEnGrupos([1, 2], 0)).toThrow('El tamaño debe ser mayor a cero');
    expect(() => dividirEnGrupos([1, 2], -1)).toThrow();
  });
  it('lanza error si el tamaño no es entero', () => {
    expect(() => dividirEnGrupos([1, 2], 1.5)).toThrow();
  });
});

describe('actualizarPrecio', () => {
  it('devuelve el producto con el nuevo precio', () => {
    expect(actualizarPrecio({ nombre: 'Libro', precio: 100 }, 120))
      .toEqual({ nombre: 'Libro', precio: 120 });
  });
  it('no modifica el producto original', () => {
    const producto = { nombre: 'Libro', precio: 100 };
    actualizarPrecio(producto, 120);
    expect(producto.precio).toBe(100);
  });
  it('acepta precio cero', () => {
    expect(actualizarPrecio({ nombre: 'Libro', precio: 100 }, 0).precio).toBe(0);
  });
  it('lanza error con precio negativo', () => {
    expect(() => actualizarPrecio({ nombre: 'Libro', precio: 100 }, -5))
      .toThrow('El precio no puede ser negativo');
  });
});

describe('quitarEspacios', () => {
  it('quita espacios al inicio y al final', () => {
    expect(quitarEspacios('  hola  ')).toBe('hola');
  });
  it('deja igual un texto sin espacios', () => {
    expect(quitarEspacios('hola')).toBe('hola');
  });
  it('lanza error si no es texto', () => {
    expect(() => quitarEspacios(123)).toThrow('Se esperaba un texto');
    expect(() => quitarEspacios(null)).toThrow('Se esperaba un texto');
  });
});

describe('convertirMayusculas', () => {
  it('convierte a mayúsculas', () => {
    expect(convertirMayusculas('Hola mundo')).toBe('HOLA MUNDO');
  });
  it('devuelve vacío con texto vacío', () => {
    expect(convertirMayusculas('')).toBe('');
  });
  it('lanza error si no es texto', () => {
    expect(() => convertirMayusculas(42)).toThrow('Se esperaba un texto');
  });
});

describe('reemplazarPalabra', () => {
  it('reemplaza todas las apariciones', () => {
    expect(reemplazarPalabra('gato y gato', 'gato', 'perro')).toBe('perro y perro');
  });
  it('no cambia nada si no encuentra el fragmento', () => {
    expect(reemplazarPalabra('hola', 'x', 'y')).toBe('hola');
  });
});

describe('empiezaConMayuscula', () => {
  it('devuelve true si inicia con mayúscula', () => {
    expect(empiezaConMayuscula('Hola')).toBe(true);
  });
  it('devuelve false si inicia con minúscula', () => {
    expect(empiezaConMayuscula('hola')).toBe(false);
  });
  it('devuelve false con texto vacío', () => {
    expect(empiezaConMayuscula('')).toBe(false);
  });
  it('devuelve false si inicia con número', () => {
    expect(empiezaConMayuscula('1abc')).toBe(false);
  });
  it('reconoce mayúsculas con acento o ñ', () => {
    expect(empiezaConMayuscula('Ñandú')).toBe(true);
  });
});

describe('ocultarTelefono', () => {
  it('muestra solo los últimos 4 dígitos', () => {
    expect(ocultarTelefono('4491234567')).toBe('******4567');
  });
  it('lanza error si tiene menos de 10 dígitos', () => {
    expect(() => ocultarTelefono('1234')).toThrow('El teléfono debe tener 10 dígitos');
  });
  it('lanza error si tiene más de 10 dígitos', () => {
    expect(() => ocultarTelefono('44912345678')).toThrow();
  });
  it('lanza error si contiene letras', () => {
    expect(() => ocultarTelefono('44912345ab')).toThrow();
  });
  it('lanza error con texto vacío', () => {
    expect(() => ocultarTelefono('')).toThrow();
  });
});

describe('validarCorreo', () => {
  it('acepta un correo válido', () => {
    expect(validarCorreo('ana@mail.com')).toBe(true);
  });
  it('rechaza un correo sin @', () => {
    expect(validarCorreo('ana.mail.com')).toBe(false);
  });
  it('rechaza un correo sin usuario', () => {
    expect(validarCorreo('@mail.com')).toBe(false);
  });
  it('rechaza un correo sin dominio', () => {
    expect(validarCorreo('ana@')).toBe(false);
  });
  it('rechaza un correo sin punto en el dominio', () => {
    expect(validarCorreo('ana@mail')).toBe(false);
  });
  it('rechaza un correo con espacios', () => {
    expect(validarCorreo('ana @mail.com')).toBe(false);
  });
});