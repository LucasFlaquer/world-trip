import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

interface Props {
  imageUrl: string
  text: string
}

export function TravelType({ imageUrl, text }: Props) {
  return (
    <Box flexBasis="20%">
      <Image src={imageUrl} mx="auto" mb="2" />
      <Text
        textAlign="center"
        fontSize="22"
        fontWeight="semibold"
      >
        {text}
      </Text>
    </Box>
  )
}