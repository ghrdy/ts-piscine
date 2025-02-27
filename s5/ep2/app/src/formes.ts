enum Direction {
  Nord,
  Sud,
  Est,
  Ouest
}

function vecteurDirection(dir: Direction): [number, number] {
  switch (dir) {
      case Direction.Nord:
          return [0, 1];
      case Direction.Sud:
          return [0, -1];
      case Direction.Est:
          return [1, 0];
      case Direction.Ouest:
          return [-1, 0];
  }
}

const dir = Direction.Nord;
const vecteur = vecteurDirection(dir);
console.log(`Direction: ${dir}, vecteur: ${vecteur}`);

const dir2 = Direction.Sud;
const vecteur2 = vecteurDirection(dir2);
console.log(`Direction: ${dir2}, vecteur: ${vecteur2}`);

const dir3 = Direction.Est;
const vecteur3 = vecteurDirection(dir3);
console.log(`Direction: ${dir3}, vecteur: ${vecteur3}`);