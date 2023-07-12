"use client";
import App from "../app/_app";

import React from "react";
import {
  Box,
  Heading,
  Card,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  CardFooter,
} from "@chakra-ui/react";

export default function Sportif() {
  // State pour les champs du formulaire
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [clubAffiliations, setClubAffiliations] = React.useState([]);
  const [Vote, setVote] = React.useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Implémenter la logique de soumission du formulaire
  };

  return (
    <Card padding={4} margin={5}>
      <Heading as="h1" size="lg" padding={4} margin={5}>
        Tes informations
      </Heading>

      <Box as="form" onSubmit={handleSubmit}>
        <FormControl padding={4} margin={5}>
          <FormLabel>Nom</FormLabel>
          <Input
            placeholder="Entrez votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl padding={4} margin={5}>
          <FormLabel>Prenom</FormLabel>
          <Input
            placeholder="Entrez votre prenom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl padding={4} margin={5}>
          <FormLabel>Âge</FormLabel>
          <Input
            type="number"
            placeholder="Entrez votre âge"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormControl>

        <FormControl padding={4} margin={5}>
          <FormLabel>Votes pour la / les propositions en cours</FormLabel>
          <Select value={Vote} onChange={(e) => setVote(e.target.value)}>
            <option value="Sabstenir">Sabstenir</option>
            <option value="Pour">Pour</option>
            <option value="Contre">Contre</option>
          </Select>
          <Button colorScheme="blue" type="submit">
            Valider votre choix
          </Button>
        </FormControl>
        <CardFooter display="flex" alignItems="center" justifyContent="center">
          <FormControl padding={4} margin={5}>
            <FormLabel>Vos dernieres news</FormLabel>
            <Select
              multiple
              placeholder="Sélectionnez les clubs affiliés"
              value={clubAffiliations}
              onChange={(e) =>
                setClubAffiliations(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="club1">Club 1</option>
              <option value="club2">Club 2</option>
              <option value="club3">Club 3</option>
            </Select>
          </FormControl>
        </CardFooter>
      </Box>
    </Card>
  );
}
