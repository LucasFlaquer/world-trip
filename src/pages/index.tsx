import { Box, Container, Flex, Heading, Image, Text, } from "@chakra-ui/react";
import { Hero } from "../components/Banner/Hero";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <TravelTypes />
    </Box>
  )
}
