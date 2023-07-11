 // SPDX-License-Identifier: MIT

 pragma solidity ^0.8.9;

contract BCS {

  Proposal[] public proposals;

  struct Proposal {
    uint uniqueId;
    string description;
    uint voteCount;
    bool executed;
}

address[] public members;
address[] public federations;
address[] public clubs;

mapping(address => Member) public memberInfo;
mapping(address => Club) public clubInfo;
mapping(address => Fede) public fedeInfo;

mapping(address => mapping(uint => bool)) public votes;

struct Member {
    address memberAddress;
    uint memberId;

        uint tokenBalance;
}

struct Club{
  address clubAddress;
  uint clubId;

        uint tokenBalance;
}

struct Fede{
  address fedeAddress;
  uint fedeId;

        uint tokenBalance;
 
}

// Maintenant, analysons les relations entre ces entités :

// Un club sportif peut être associé à une ou plusieurs fédérations sportives.
// Un sportif peut être affilié à un ou plusieurs clubs sportifs.
// Un sportif peut détenir une ou plusieurs licences, délivrées par une fédération sportive.
// Les fédérations sportives peuvent décerner des grades aux sportifs en fonction de leurs performances.


}