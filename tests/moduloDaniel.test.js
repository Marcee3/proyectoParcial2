import { describe, test, expect } from 'vitest';

import {
  validarCodigoPostal,
  generarIniciales,
  contarCaracteresSinEspacios,
  contieneSoloLetras,
  esFinDeSemana,
  obtenerNombreDia,
  diasDelMes,
  formatearFecha,
  puedeAgendarCita,
  cambiarEstadoPedido,
  calcularPorcentajeAvance,
  clasificarAvance,
  obtenerProductosDisponibles,
  validarUsuario
} from '../src/moduloDaniel';

describe('Bloque 5: Fechas, estados y otras funciones (37-50)', () => {

  test('37. validarCodigoPostal', () => {
    expect(validarCodigoPostal('20000')).toBe(true);
    expect(validarCodigoPostal('1234')).toBe(false);
    expect(validarCodigoPostal('12A45')).toBe(false);
  });

  test('38. generarIniciales', () => {
    expect(generarIniciales('Ana López')).toBe('AL');
    expect(generarIniciales('   Juan Pérez ')).toBe('JP');
    expect(generarIniciales('')).toBe('');
  });

  test('39. contarCaracteresSinEspacios', () => {
    expect(contarCaracteresSinEspacios('hola mundo')).toBe(9);
    expect(contarCaracteresSinEspacios(' a b ')).toBe(2);
    expect(contarCaracteresSinEspacios('')).toBe(0);
  });

  test('40. contieneSoloLetras', () => {
    expect(contieneSoloLetras('Ana Maria')).toBe(true);
    expect(contieneSoloLetras('Ana2')).toBe(false);
    expect(contieneSoloLetras('')).toBe(false);
  });

test('41. esFinDeSemana', () => {
    expect(esFinDeSemana(new Date(2026, 10, 7))).toBe(true); // Sábado
    expect(esFinDeSemana(new Date(2026, 10, 9))).toBe(false); // Lunes
  });

  test('42. obtenerNombreDia', () => {
    expect(obtenerNombreDia(new Date(2026, 10, 9))).toBe('lunes');
    expect(obtenerNombreDia(new Date(2026, 10, 8))).toBe('domingo');
  });

  test('43. diasDelMes', () => {
    expect(diasDelMes(2, 2024)).toBe(29);
    expect(diasDelMes(2, 2025)).toBe(28);
    expect(() => diasDelMes(13, 2025)).toThrow('El mes debe estar entre 1 y 12');
  });

  test('44. formatearFecha', () => {
    expect(formatearFecha(new Date(2026, 10, 9))).toBe('09/11/2026');
    expect(formatearFecha(new Date(2025, 0, 5))).toBe('05/01/2025');
  });

  test('45. puedeAgendarCita', () => {
    expect(puedeAgendarCita('10:00', ['09:00', '11:00'])).toBe(true);
    expect(puedeAgendarCita('10:00', ['10:00', '11:00'])).toBe(false);
  });

  test('46. cambiarEstadoPedido', () => {
    const pedido = { id: 1, estado: 'pendiente' };
    expect(cambiarEstadoPedido(pedido, 'entregado')).toEqual({ id: 1, estado: 'entregado' });
    expect(() => cambiarEstadoPedido(pedido, 'cancelado')).toThrow('Estado no válido');
  });

  test('47. calcularPorcentajeAvance', () => {
    expect(calcularPorcentajeAvance(5, 10)).toBe(50);
    expect(calcularPorcentajeAvance(10, 10)).toBe(100);
    expect(() => calcularPorcentajeAvance(5, 0)).toThrow('La meta debe ser mayor a cero');
  });

  test('48. clasificarAvance', () => {
    expect(clasificarAvance(40)).toBe('bajo');
    expect(clasificarAvance(65)).toBe('medio');
    expect(clasificarAvance(90)).toBe('alto');
    expect(() => clasificarAvance(105)).toThrow('El porcentaje debe estar entre 0 y 100');
  });

  test('49. obtenerProductosDisponibles', () => {
    const productos = [
      { nombre: 'A', stock: 2 },
      { nombre: 'B', stock: 0 }
    ];
    expect(obtenerProductosDisponibles(productos)).toEqual([{ nombre: 'A', stock: 2 }]);
    expect(obtenerProductosDisponibles([])).toEqual([]);
  });

  test('50. validarUsuario', () => {
    // Nota: Asume que `validarCorreo` está disponible o importada si se usa internamente en la función original
    const usuarioValido = { nombre: 'Ana', correo: 'ana@mail.com', password: 'Secreto123' };
    const usuarioSinNombre = { nombre: '', correo: 'ana@mail.com', password: 'Secreto123' };
    const usuarioPasswordCorto = { nombre: 'Ana', correo: 'ana@mail.com', password: '123' };

    expect(validarUsuario(usuarioValido)).toBe(true);
    expect(validarUsuario(usuarioSinNombre)).toBe(false);
    expect(validarUsuario(usuarioPasswordCorto)).toBe(false);
  });

});