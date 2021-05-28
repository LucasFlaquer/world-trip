import { Container, Divider, Flex } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Container maxW="container.xl" pt="6">
      <Flex w="100%" justifyContent="space-between" mb={12}>
        <TravelType imageUrl="/assets/cocktail.svg" text="vida noturna" />
        <TravelType imageUrl="/assets/surf.svg" text="praia" />
        <TravelType imageUrl="/assets/building.svg" text="moderno" />
        <TravelType imageUrl="/assets/museum.svg" text="clássico" />
        <TravelType imageUrl="/assets/earth.svg" text="e mais..." />
      </Flex>
      <Divider orientation="horizontal" borderBottomWidth="3px" w={24} mx="auto" />
    </Container>
  )
}