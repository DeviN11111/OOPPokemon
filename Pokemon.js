class Pokemon{
    static pokemonArray = [];
    static amountOfPokemon = 0;
    
    constructor(alias, hitpoints, energyType, attacks, weakness, resistance){
        this.name = alias;
        this.weakness = weakness;
        this.hitpoints = hitpoints;
        this.health = hitpoints;
        this.energyType = energyType;
        this.attacks = attacks;
        this.resistance = resistance;
        Pokemon.amountOfPokemon++;
    }

    attack(target, attack){
        target.takeDamage(this.energyType, this.attacks[attack]);
    }

    takeDamage(energyType, attack){
        if(energyType.name == this.resistance.energyType.name){
            attack.value = attack.value - this.resistance.value;
        }
        if(energyType.name == this.weakness.energyType.name){
            this.health = this.health - attack.value * this.weakness.value;
        }else{
            this.health = this.health - attack.value
        }
        // if(!this.health <= 0){
        //     Pokemon.pokemonArray.splice(Pokemon.pokemonArray[Pokemon.pokemonArray.indexOf(this)], 1)
        // }
    }

}

