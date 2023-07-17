// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract SBT {
    // Structure de données pour représenter un NTT (Soul)
    struct Soul {
        string nom;
        string prenom;
        string dateNaissance;
        uint8 grade;
        bool license;
    }


    // Mapping pour stocker les NTT associés à une adresse Ethereum
    mapping (address => Soul) private souls;

    // Événements
    event Mint(address _soul);
    event Burn(address _soul);
    event Update(address _soul);

    // Variables publiques
    string public name;
    string public ticker;
    address public operator;
    bytes32 private zeroHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;

    constructor(string memory _name, string memory _ticker) {
        name = _name;
        ticker = _ticker;
        operator = msg.sender;
    }

    // Fonction pour créer un nouveau NTT (Soul)
    function mint(address _soul, Soul memory _soulData) external {
        // Vérifier si le NTT (Soul) existe déjà
        require(keccak256(bytes(souls[_soul].nom)) == zeroHash, "Soul already exists");
        // Vérifier si l'appelant est l'opérateur
        require(msg.sender == operator, "Only operator can mint new souls");
        // Ajouter le nouveau NTT (Soul) à la liste
        souls[_soul] = _soulData;
        emit Mint(_soul);
    }

    // Fonction pour supprimer un NTT (Soul)
    function burn(address _soul) external {
        // Vérifier si l'appelant est le propriétaire du NTT ou l'opérateur
        require(msg.sender == _soul || msg.sender == operator, "Only users and issuers have rights to delete their data");
        // Supprimer le NTT
        delete souls[_soul];
        emit Burn(_soul);
    }

    // Fonction pour mettre à jour les informations d'un NTT (Soul)
    function update(address _soul, Soul memory _soulData) external {
        // Vérifier si l'appelant est l'opérateur
        require(msg.sender == operator, "Only operator can update soul data");
        // Vérifier si le NTT (Soul) existe
        require(keccak256(bytes(souls[_soul].nom)) != zeroHash, "Soul does not exist");
        // Mettre à jour les informations du NTT (Soul)
        souls[_soul] = _soulData;
        emit Update(_soul);
    }

    // Fonction pour vérifier si un NTT (Soul) existe
    function hasSoul(address _soul) external view returns (bool) {
        if (keccak256(bytes(souls[_soul].nom)) == zeroHash) {
            return false;
        } else {
            return true;
        }
    }

    // Fonction pour obtenir les informations d'un NTT (Soul)
    function getSoul(address _soul) external view returns (Soul memory) {
        return souls[_soul];
    }
}