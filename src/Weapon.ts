export type WeaponKind = 'sword'|'axe'|'staff'|'dagger';

export class Weapon {
    public readonly name: string;           //Le nom de l'arme. 
    public readonly kind: WeaponKind;       //Le type d'arme. 
    public readonly attackBonus: number;    //Le bonus d'attaque apporté par l'arme.

    public constructor(name: string, kind: WeaponKind, attackBonus: number) {
        if (attackBonus <= 0) {
            console.log("The attack bonus of  cannot be negative.")
        }
        this.kind = kind
        this.name = name
    }

    public describe(): string | number {
        return `${this.name} ${this.kind} ${this.attackBonus}`
        console.log(this.describe())
    }   
}