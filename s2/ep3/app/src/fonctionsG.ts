function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

interface Voiture {
    marque: string;
    modele: string;
    annee: number;
  }

const maVoiture: Voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2020,
};

console.log(getProperty(maVoiture, "marque")); // Output: Toyota