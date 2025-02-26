interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adress?: Adress;
}

interface Adress{
    rue: string;
    ville: string;
}

function afficherPersonne(personne: Personne) {
    console.log(`ID: ${personne.id} ,Nom: ${personne.nom}, Age: ${personne.age}, Adress: ${personne.adress?.rue}, ${personne.adress?.ville}`);
}

const personne1: Personne = {
    id: 1,
    nom: 'Jean',
    age: 30,
    adress: {
        rue: 'rue 1',
        ville: 'Paris'
    }
};

const personne2: Personne = {
    id: 1,
    nom: 'Jean',
    age: 30,
};

afficherPersonne(personne1);

afficherPersonne(personne2);