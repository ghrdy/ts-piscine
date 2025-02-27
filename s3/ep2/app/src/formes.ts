class Rectangle {
    constructor(private largeur: number, private hauteur: number) {}
    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle {
    constructor(private rayon: number) {}
    calculerSurface(): number {
        return Math.PI * this.rayon ** 2;
    }
}

function afficherSurface(forme: Rectangle | Cercle): void {
    if (forme instanceof Rectangle) {
        console.log("Ceci est un rectangle de surface" ,forme.calculerSurface());
    } else if (forme instanceof Cercle) {
        console.log("Ceci est un cercle de surface",forme.calculerSurface());
    }
}

const myCercle = new Cercle(5);
afficherSurface(myCercle);
const myRectangle = new Rectangle(5, 10);
afficherSurface(myRectangle);