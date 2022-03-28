name = "Pikachu1";
maxHealth = 50;
attacks = [new Attack("Fireball", 100), new Attack("Jump", 50)]
energyType = new energyType("Lightning", 0);

Pokemon.pokemonArray.push(new Pokemon("1", 10, energyType, attacks))


/////////////////////////////////////////////////////////////////////////////

name = "Pikachu2";
maxHealth = 50;
attacks = [new Attack("Fireball", 100), new Attack("Jump", 50)]

Pokemon.pokemonArray.push(new Pokemon("1", 10, "fire", attacks))



console.log(Pokemon.pokemonArray[0].health)

Pokemon.pokemonArray[1].attack(Pokemon.pokemonArray[0], 0);
Pokemon.pokemonArray[0].attack(Pokemon.pokemonArray[1], 0);

console.log(Pokemon.pokemonArray[0].health)