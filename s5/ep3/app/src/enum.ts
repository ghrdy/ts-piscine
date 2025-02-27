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

function deplacer(
  point: [number, number],
  direction: Direction
): [number, number] {
  const [dx, dy] = vecteurDirection(direction);
  return [point[0] + dx, point[1] + dy];
}

let initpoint: [number, number] = [0, 0];
deplacer(initpoint, Direction.Nord);

console.log(`Point de départ: ${initpoint}`);
console.log(`Point d'arrivée: ${deplacer(initpoint, Direction.Nord)}`);

console.log(`Point de départ: ${initpoint}`);
console.log(`Point d'arrivée: ${deplacer(initpoint, Direction.Sud)}`);