// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sportif {
    // Structure du sportif
    struct SportifData {
        string name;
        uint256 age;
        string[] clubAffiliations;
        address[] licenses;
        string visibility;
    }
    
    // Mapping des données des sportifs
    mapping(address => SportifData) private sportifs;
    
    // Événements
    event SportifCreated(address sportif, string name, uint256 age);
    event SportifUpdated(address sportif, string name, uint256 age);
    event LicenseAdded(address sportif, address license);
    event VisibilityUpdated(address sportif, string visibility);
    
    // Modificateurs
    modifier onlySportif {
        // Vérifier si l'adresse du msg.sender est un sportif valide
        _;
    }
    
    // Fonction pour créer un profil de sportif
    function createSportif(string memory name, uint256 age) public {
        // Implémenter la logique pour créer un profil de sportif
        // Émettre l'événement SportifCreated
    }
    
    // Fonction pour mettre à jour les informations du sportif
    function updateSportif(string memory name, uint256 age) public onlySportif {
        // Implémenter la logique pour mettre à jour les informations du sportif
        // Émettre l'événement SportifUpdated
    }
    
    // Fonction pour ajouter une licence au sportif
    function addLicense(address license) public onlySportif {
        // Implémenter la logique pour ajouter une licence au sportif
        // Émettre l'événement LicenseAdded
    }
    
    // Fonction pour mettre à jour la visibilité des informations du sportif
    function updateVisibility(string memory visibility) public onlySportif {
        // Implémenter la logique pour mettre à jour la visibilité des informations du sportif
        // Émettre l'événement VisibilityUpdated
    }
    
    // Autres fonctions liées à la gestion des sportifs
}



// Sportif : Un sportif est une personne qui pratique un sport. 

// Ils peuvent également être associés à des clubs sportifs et détenir des licences.

 // Wallet avec web3auth

 //Inscription competition - resultat

// Modification de visibiliter de ses informations

// Parametre:  Sport (Cv numerique) - resultat competition - Grade  -club inscrit

// Emission Nft(SBT)  (modifiable, non transferable) (Parametre) to address sportif. 

// Base de données -nom -âge -adresse

