"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _models = require("../models");

var _Pokemon = require("../DTOs/Pokemon");

var _pokemonjson = _interopRequireDefault(require("../../pokemonjson.json"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PokemonRepository = (_dec = (0, _typeorm.EntityRepository)(_models.Pokemon), _dec(_class = class PokemonRepository extends _typeorm.Repository {
  async findById(id) {
    try {
      const user = await this.findOne(id);

      if (!user) {
        return false;
      }

      return user;
    } catch (error) {
      return error.severity || error;
    }
  }

  async createAll() {
    const count = await this.count();
    console.log(count);

    if (count === 0) {
      await this.createQueryBuilder().insert().values(_pokemonjson.default).execute();
    }

    console.log(count);
  }

  async findAllPokemons() {
    try {
      const pokemons = await this.find();

      if (pokemons.length === 0) {
        return false;
      }

      return pokemons;
    } catch (error) {
      return error;
    }
  }

  async patch(id, user) {
    try {
      const auxUser = { ...user
      };
      await _Pokemon.UpdatePokemon.validateAsync(auxUser);
      await this.update(id, auxUser);
      const updatedUser = await this.findOne(id);
      return updatedUser;
    } catch (error) {
      return error;
    }
  }

  async deleteByName(name) {
    try {
      const pokemon = await this.findOne({
        where: {
          name
        }
      });
      return await this.delete(pokemon.id);
    } catch (error) {
      return error;
    }
  }

}) || _class);
exports.default = PokemonRepository;