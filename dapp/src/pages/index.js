"use client";
import Image from "next/image";
import backimg from "../components/img/background.png";
import logo from "../components/img/logo.png";
import {
  Heading,
  Text,
  CardFooter,
  CardBody,
  CardHeader,
  Button,
  Card,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Card padding={4} margin={5}>
        <CardHeader display="flex" alignItems="center" justifyContent="center">
          <Image src={logo} height={100} alt="Logo BCS" />
          <Heading margin={5}>BC - Sport</Heading>
        </CardHeader>
        <CardBody align="center">
          <Text margin={5}>Le portail des associations sportives</Text>
          <Image src={backimg} />
        </CardBody>
        <CardFooter display="flex" alignItems="center" justifyContent="center">
          <Button colorScheme="blue">CONNEXION</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
