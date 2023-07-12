// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract License {
    // Structure de la licence
    struct myLicense {
        address sportif;
        string licenseType;
        uint256 expirationDate;
        bool isActive;
    }
    
    // Mapping des licences
    mapping(address => myLicense) private licenses;
    
    // Événements
    event LicenseIssued(address sportif, string licenseType, uint256 expirationDate);
    event LicenseRenewed(address sportif, uint256 expirationDate);
    
    // Modificateurs
    modifier onlySportif {
        // Vérifier si l'adresse du msg.sender est un sportif valide
        _;
    }
    
    // Fonction pour émettre une licence
    function issueLicense(address sportif, string memory licenseType, uint256 expirationDate) public onlySportif {
        // Implémenter la logique pour émettre une licence
        // Émettre l'événement LicenseIssued
    }
    
    // Fonction pour renouveler une licence
    function renewLicense(address sportif, uint256 expirationDate) public onlySportif {
        // Implémenter la logique pour renouveler une licence
        // Émettre l'événement LicenseRenewed
    }
    
    // Autres fonctions liées à la gestion des licences
}


// Licence : Une licence est un document officiel délivré par une fédération sportive qui atteste que le sportif 
// est autorisé à participer à des compétitions dans un sport spécifique. Les licences peuvent avoir des informations telles que le nom du sportif,
//  le type de licence, la date d'expiration, etc.

 // License avec Id Unique

// Qui signe pour "accept" or "declin" la license

// Parametre License: Date(emission- expiration) - Sport - Signataire (Club -bureau)

// Emission Nft(SBT)  (modifiable, non transferable) (Parametre) to address sportif. 