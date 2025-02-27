function creerScore(nom: string, score: number): [string, number] {
  return [nom, score];
}   

function afficherScore(score: [string, number]): void {
  console.log(score[0] + " : " + score[1]);
}

let score1 = creerScore("Alice", 100);
afficherScore(score1);