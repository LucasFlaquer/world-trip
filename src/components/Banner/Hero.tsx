import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      w="100%"
      backgroundImage="/assets/Background.jpg"
      height="335px"
      position="relative"
      marginBottom="5"
    >
      <Flex
        justifyContent="flex-end"
        flexDirection="column"
        flexBasis="45%"
        pl="36"
        pb="16"
        color="white"
      >
        <Heading
          color="inherit"
          fontWeight="medium"
        >
          5 Continentes,
             <br />
            infinitas possibilidades
          </Heading>
        <Text color="inherit">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
      </Flex>
      <Image
        src="/assets/Airplane.svg"
        position="absolute"
        right="36"
        bottom="-30px"
        rotate="-3deg"
      />
    </Flex>
  )
}