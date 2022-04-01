import { Router } from 'express';
import { PokemonController } from '../controllers';

const pokemonRouter = Router();

pokemonRouter.route('/')
  .post(
    PokemonController.create,
  )
  .get(
    PokemonController.findAll,
  );

pokemonRouter.route('/:userId')
  .get(
    PokemonController.read,
  )
  .delete(
    PokemonController.delete,
  )
  .patch(
    PokemonController.patch,
  );

pokemonRouter.route('/createAll')
  .post(
    PokemonController.createAll,
  );

export default pokemonRouter;
