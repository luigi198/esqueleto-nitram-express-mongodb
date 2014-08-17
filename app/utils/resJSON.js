// ===============================
// Autor: Martin
// ===============================
'use strict';

var _ = require('underscore');

/**
 * Genera un JSON de respuesta con status error y un array de mensajes.
 * El mensaje del error puede contener // para separar mensajes en un array.
 * - err <Error/String> Error o string
 * returns: <Object>
 */
exports.error = function(err) {
  var message = typeof err.message !== 'undefined' ? err.message : err;
  return {
    status: 'error',
    messages: typeof message === 'string' ?
      message.split('//') : message
  };
};

/**
 * Genera un JSON de respuesta con status ok
 * returns: <Object>
 */
exports.ok = function(data) {
  var o = {
    status: 'ok'
  };
  if (typeof data === 'undefined') return o;
  o = _.extend(o, data);
  return o;
};

/**
 * Genera objeto de error especial para formularios hecho string
 * returns: <String>
 */
exports.formErrorString = function(name, msg) {
  var o = {
    name: name,
    msg: msg
  };
  o = JSON.stringify(o);
  return o;
};