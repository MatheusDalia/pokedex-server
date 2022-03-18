"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _paths = require("./paths");

var _schemas = require("./schemas");

var _default = {
  openapi: '3.0.0',
  info: {
    title: 'Pokemon API',
    description: 'API para as aplicações da pokedex',
    version: '0.0.1'
  },
  servers: [{
    url: 'http://localhost:3001',
    description: 'Local Server'
  }],
  paths: { ..._paths.pokemonPath
  },
  components: {
    schemas: {
      pokemon: _schemas.pokemonSchema
    }
  }
};
exports.default = _default;