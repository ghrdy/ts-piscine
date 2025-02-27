interface Vehicule {
    marque: string;
    annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
    return obj.marque !== undefined && obj.annee !== undefined;
}

function afficherVehicule(obj: any): void {
    if (isVehicule(obj)) {
        console.log(`Véhicule : ${obj.marque} de l'année ${obj.annee}`);
    } else {
        console.log('Cet objet n\'est pas un véhicule');
    }
}

let voiture = { marque: 'Peugeot', annee: 2000 };
afficherVehicule(voiture);
// Véhicule : Peugeot de l'année 2000
let voiture2 = { marque: 'Renault',annee:undefined };
afficherVehicule(voiture2);
// Cet objet n'est pas un véhicule