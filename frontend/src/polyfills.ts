/***************************************************************************************************
 * Importaciones necesarias para compatibilidad con navegadores más antiguos
 **************************************************************************************************/

/** Polyfill para `Promise`, usado por Angular y otros frameworks modernos */
import 'core-js/es/promise';

/** Polyfill para `Map`, `Set`, `WeakMap`, `WeakSet`, y otros tipos de colecciones */
import 'core-js/es/map';
import 'core-js/es/set';

/** Polyfill para `Object.assign`, utilizado para copias superficiales de objetos */
import 'core-js/es/object/assign';

/** Polyfill para el método `Array.includes()` */
import 'core-js/es/array/includes';

/** Polyfill para `Symbol`, necesario para trabajar con ciertas bibliotecas */
import 'core-js/es/symbol';

/***************************************************************************************************
 * Fase de configuración y arranque de Angular
 **************************************************************************************************/

