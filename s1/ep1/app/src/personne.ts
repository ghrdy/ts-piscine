interface Personne {
    nom: string;
    age: number;
}

function afficherPersonne(personne: Personne) {
    console.log(`Nom: ${personne.nom}, Age: ${personne.age}`);
}

const personne: Personne = {
    nom: 'Jean',
    age: 30
};

afficherPersonne(personne);
