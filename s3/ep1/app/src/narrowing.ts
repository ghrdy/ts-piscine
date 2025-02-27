function traiterValeur (valeur: string | number): number {
  if (typeof valeur === 'string') {
    return valeur.length;
  }
  return valeur*2;
}

console.log(traiterValeur('abc')); // 3
console.log(traiterValeur(3)); // 6