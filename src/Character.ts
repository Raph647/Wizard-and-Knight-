import { Weapon } from './Weapon';

export abstract class Character {
    public readonly  name: string;
    public readonly  maxHealth: number;
    public readonly  baseAttack: number;
    public readonly  baseDefense: number;
    private health: number;
    private weapon: Weapon | null;

    public constructor(name: string, health: number, baseAttack: number, baseDefense: number, maxHealth: number,) {
        if (this.health > 0) {
            console.log(`The health of ${name} must be strictly positive.`)
        }
    this.name = name
    this.maxHealth = maxHealth
    this.baseAttack = baseAttack
    this.baseDefense = baseDefense
    this.weapon = null 
    }

    public getHealth(): number {
        return this.health
    }

    public getAttack(): number {
        return ${this.baseAttack} + ${this.weapon.attackBonus}
    }
}

