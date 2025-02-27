abstract class Forme {
    abstract calculateSurface(): number;
}

class Rectangle extends Forme {

    constructor(private largeur: number, private hauteur: number) {
        super();
    }

    calculateSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme {

    constructor(private rayon: number) {
        super();
    }

    calculateSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

let Cercle1 = new Cercle(5);
let Rectangle1 = new Rectangle(5, 10);

console.log(Cercle1.calculateSurface());
console.log(Rectangle1.calculateSurface());