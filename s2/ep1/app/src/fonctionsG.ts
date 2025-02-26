function premierElement<T>(tableau: T[]): T {

    return tableau[0];
}

const tab1 = [1, 2, 3];
const tab2 = ["a", "b", "c"];
console.log(premierElement(tab1));
console.log(premierElement(tab2));