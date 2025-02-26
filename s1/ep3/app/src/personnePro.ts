interface Employe {
    nom: string,
    poste: string
}

interface Client {
    nom: string,
    entreprise: string
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionelle(PersonnePro: Employe | Client){
    console.log('poste' in PersonnePro ? `Employe: ${PersonnePro.nom}, travaille comme poste ${PersonnePro.poste}` : `Client: ${PersonnePro.nom}, est associé a l'entreprise ${PersonnePro.entreprise}`);
}

const personnePro1: PersonnePro = {
    nom: 'Jean',
    poste: 'Developpeur'
};

const personnePro2: PersonnePro = {
    nom: 'Jean',
    entreprise: 'Google'
};

afficherInfoProfessionelle(personnePro1);

afficherInfoProfessionelle(personnePro2);