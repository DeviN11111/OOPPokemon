class Pokemon{
    static pokemonArray = [];
    static amountOfPokemon = 0;
    
    constructor(alias, hitpoints, energyType, attacks){
        this.name = alias;
        this.hitpoints = hitpoints;
        this.health = hitpoints;
        this.energyType = energyType;
        this.attacks = attacks;
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

