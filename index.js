'use strict';

const Boom = require('boom');
const Seaquell = require('seaquell');

module.exports = (options) => {

  return {

    detect: (value) => {
      return (value instanceof Seaquell.EmptyResult);
    },

    handle: (value) => {
      return Boom.notFound(value.toString());
    }

  };
};
