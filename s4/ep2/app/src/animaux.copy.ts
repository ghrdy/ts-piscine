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

class Chien extends IAnimal {
    constructor(nom: string) {
        super(nom);
    }
    seDeplacer(): void {
        console.log(`le chien ${this.nom} court`);
    }
}

class Chat extends IAnimal {
    constructor(nom: string) {
        super(nom);
    }
    seDeplacer(): void {
        console.log(`le chat ${this.nom} saute`);
    }
}

function faireSeDeplacer(animaux: IAnimal[]): void {
    animaux.forEach(element => {
        element.seDeplacer();
    });
}

let animalstab = [new Chien('Rex'), new Chat('Felix')];
faireSeDeplacer(animalstab);