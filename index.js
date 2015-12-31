'use strict';

module.exports = (options) => {

  const Seaquell = options.Seaquell;
  const Boom = options.Boom;

  return {

    detect: (value) => {
      return (value instanceof Seaquell.EmptyResult);
    },

    handle: (value) => {
      return Boom.notFound(value.toString());
    }

  };
};
