import { Ability } from "./ability.model";
import { Attack } from "./attack.model";
import { Resistance } from "./resistance.model";
import { Weakness } from "./weakness.model";

export interface Pokemon {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: string[];
    supertype: string;
    subtype: string;
    evolvesFrom: string;
    hp: string;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: Attack[];
    weaknesses: Weakness[];
    retreatCost: string[];
    convertedRetreatCost?: number;
    resistances: Resistance[];
    text: string[];
    ability: Ability;
}
