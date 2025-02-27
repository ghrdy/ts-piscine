interface IAnimal {
    nom: string;
    seDeplacer(): void;
}

class IAnimal implements IAnimal {
    constructor(public nom: string) { }
    seDeplacer(): void {
        console.log(`${this.nom} se déplace`);
    }
}

let Leo = new IAnimal('Léon');
Leo.seDeplacer();