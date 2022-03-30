name1 = "Pikachu";
maxHealth = 60;
attacks = [new Attack("Electric Ring", 50), new Attack("Pika Punch", 20)]
energy = new energyType("Lightning", 0);
weak = new weakness(new energyType("Fire", 0), 1.5);
Resistance = new resistance(new energyType("Fighting", 0), 20)

Pokemon.pokemonArray.push(new Pokemon(name1, maxHealth, energy, attacks, weak, Resistance))


/////////////////////////////////////////////////////////////////////////////

name1 = "Charmeleon";
maxHealth = 60;
attacks = [new Attack("Head butt", 10), new Attack("Flare", 30)]
energy = new energyType("Fire", 0);
weak = new weakness(new energyType("Water", 0), 2);
Resistance = new resistance(new energyType("Lightning", 0), 10)

Pokemon.pokemonArray.push(new Pokemon(name1, maxHealth, energy, attacks, weak, Resistance))

///////////////////////////////////////////////////////////////////////////////



// Pokemon.pokemonArray[0].attack(Pokemon.pokemonArray[1], 0);
// Pokemon.pokemonArray[1].attack(Pokemon.pokemonArray[0], 1);

// console.log(Pokemon.pokemonArray[0].health)
// console.log(Pokemon.pokemonArray[0].health)

document.write("Charmeleon has " + Pokemon.pokemonArray[1].health + " Health")
document.write("<br>")
document.write("Pikachu attacks Charmeleon with Electric Ring!");
Pokemon.pokemonArray[0].attack(Pokemon.pokemonArray[1], 0);
document.write("<br>")
document.write("Charmeleon has " + Pokemon.pokemonArray[1].health + " Health")
document.write("<br>")
document.write("Pikachu has " + Pokemon.pokemonArray[0].health + " Health")
document.write("<br>")
document.write("Charmeleon attacks Pikachu with Flare Attack!")
Pokemon.pokemonArray[1].attack(Pokemon.pokemonArray[0], 1);
document.write("<br>")
document.write("Pikachu has " + Pokemon.pokemonArray[0].health + " Health")
document.write("<br>")
document.write("GGWP")
