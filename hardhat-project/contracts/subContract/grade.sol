// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Grade {
    // Structure du grade
    struct SportifGrade {
        address sportif;
        string grade;
        uint256 date;
        bool approved;
    }
    
    // Mapping des grades
    mapping(address => SportifGrade) private grades;
    
    // Événements
    event GradeAwarded(address sportif, string grade, uint256 date);
    event GradeApproval(address sportif, bool approved);
    
    // Modificateurs
    modifier onlyJudge {
        // Vérifier si l'adresse du msg.sender est un juge valide
        _;
    }
    
    // Fonction pour attribuer un grade
    function awardGrade(address sportif, string memory grade, uint256 date) public onlyJudge {
        // Implémenter la logique pour attribuer un grade
        // Émettre l'événement GradeAwarded
    }
    
    // Fonction pour approuver ou désapprouver un grade
    function approveGrade(address sportif, bool approved) public onlyJudge {
        // Implémenter la logique pour approuver ou désapprouver un grade
        // Émettre l'événement GradeApproval
    }
    
    // Autres fonctions liées à la gestion des grades
}




// Grade : Un grade représente le niveau de compétence ou de qualification d'un sportif dans un sport spécifique. 
// Les grades peuvent être décernés par une fédération sportive en fonction des performances et des résultats du sportif dans les compétitions.

// Grade par numero de 10 le plus faible a 1 le plus haut 

// Qui signe pour "accept" or "declin" le grade

// Parametre du grade: Date - Grade(1-10) - Signataire (juge)

// Emission Nft  (modifiable, non transferable) (Parametre) to address sportif. 

