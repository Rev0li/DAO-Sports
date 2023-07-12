"use client";
import React from "react";
import { Button, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <GridItem
      pl="2"
      bg="orange.300"
      area={"header"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="4"
      marginBottom={2}
    >
      <Image src={logo} height={100} alt="Logo BCS" />
      <Button>CONNEXION</Button>
    </GridItem>
  );
};

export default Header;
