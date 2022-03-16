import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Pokemon } from '../models';
import { UpdatePokemon, PokemonType } from '../DTOs/Pokemon';
import pokemonjson from '../../pokemonjson.json';

@EntityRepository(Pokemon)
export default class PokemonRepository extends Repository<Pokemon> {
  public async findById(id: string): Promise<Pokemon | false | string> {
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

  public async createAll() {
    const count = await this.count();
    console.log(count);
    if (count === 0) {
      await this.createQueryBuilder().insert().values(pokemonjson).execute();
    }
    console.log(count);
  }

  public async findAllPokemons(): Promise<false | Pokemon[]> {
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

  public async patch(
    id: string,
    user: PokemonType,
  ): Promise<Pokemon | string> {
    try {
      const auxUser = { ...user };
      await UpdatePokemon.validateAsync(auxUser);

      await this.update(id, auxUser);
      const updatedUser = await this.findOne(id);

      return updatedUser;
    } catch (error) {
      return error;
    }
  }

  public async deleteByName(name: string): Promise<DeleteResult> {
    try {
      const pokemon = await this.findOne({ where: { name } });
      return await this.delete(pokemon.id);
    } catch (error) {
      return error;
    }
  }
}
