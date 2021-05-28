import { Box, Container, Flex, Heading, Image, Text, } from "@chakra-ui/react";
import { Hero } from "../components/Banner/Hero";
import { Header } from "../components/Header";
import { DefaultHeader } from "../components/Headings/DefaultHeader";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <TravelTypes />
      <Box mt="8">
        <DefaultHeader textAlign="center" mb="4">
          Vamos nessa?
           <br />
          Então escolha seu continente
        </DefaultHeader>

      </Box>
    </Box>
  )
}
