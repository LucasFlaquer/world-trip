import { Flex, Image, Text } from "@chakra-ui/react";
import { DefaultHeader } from "../Headings/DefaultHeader";

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
        flexBasis="50%"
        pl="36"
        pb="16"
        color="white"
      >
        <DefaultHeader color="inherit" fontSize="36" >
          5 Continentes,
          <br />
            infinitas possibilidades.
        </DefaultHeader>

        <Text color="inherit" mt="8" fontSize="18">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      <Image
        src="/assets/Airplane.svg"
        position="absolute"
        right="36"
        bottom="-30px"
        rotate="-3deg"
      />
    </Flex >
  )
}