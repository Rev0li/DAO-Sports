const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("SBT Contract", function () {
  let sbt;
  let owner;

  beforeEach(async function () {
    const SBT = await ethers.getContractFactory("SBT");
    sbt = await SBT.deploy("SBT-Sport", "BCS");
    await sbt.deployed();

    // Créer une instance d'ethers.js pour l'adresse du propriétaire
    [owner] = await ethers.getSigners();
  });

  it("should mint a new Soul", async function () {
    const soulData = {
      nom: "John",
      prenom: "Doe",
      dateNaissance: "01/01/2000",
      grade: 1,
      license: true,
    };

    await sbt.connect(owner).mint(owner.address, soulData);

    const hasSoul = await sbt.hasSoul(owner.address);
    expect(hasSoul).to.equal(true);
  });

  it("should burn a Soul", async function () {
    const soulData = {
      nom: "John",
      prenom: "Doe",
      dateNaissance: "01/01/2000",
      grade: 1,
      license: true,
    };

    await sbt.connect(owner).mint(owner.address, soulData);

    await sbt.connect(owner).burn(owner.address);

    const hasSoul = await sbt.hasSoul(owner.address);
    expect(hasSoul).to.equal(false);
  });

  it("should update a Soul", async function () {
    const initialSoulData = {
      nom: "John",
      prenom: "Doe",
      dateNaissance: "01/01/2000",
      grade: 1,
      license: true,
    };

    const updatedSoulData = {
      nom: "John",
      prenom: "Doe",
      dateNaissance: "01/01/2000",
      grade: 2,
      license: false,
    };

    await sbt.connect(owner).mint(owner.address, initialSoulData);

    await sbt.connect(owner).update(owner.address, updatedSoulData);

    const soul = await sbt.getSoul(owner.address);
    expect(soul.grade).to.equal(2);
    expect(soul.license).to.equal(false);
  });
});
