"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

const pokemonRouter = (0, _express.Router)();
pokemonRouter.route('/').post(_controllers.PokemonController.create).get(_controllers.PokemonController.findAll);
pokemonRouter.route('/:userId').get(_controllers.PokemonController.read).delete(_controllers.PokemonController.delete).patch(_controllers.PokemonController.patch);
var _default = pokemonRouter;
exports.default = _default;