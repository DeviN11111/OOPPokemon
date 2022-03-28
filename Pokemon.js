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
        if(energyType.name == this.weakness.name){
            this.health = this.health - attack.value;
        }
    }

}

