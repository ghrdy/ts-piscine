function premierElement<T>(tableau: [T, ...T[]]): T {
    if (tableau.length === 0) {
        throw new Error("Le tableau ne doit pas être vide");
    }
    return tableau[0];
}

const tab1: [number, ...number[]] = [1, 2, 3];
const tab2: [string, ...string[]] = ["a", "b", "c"];

console.log(premierElement(tab1)); // Output: 1
console.log(premierElement(tab2)); // Output: a
