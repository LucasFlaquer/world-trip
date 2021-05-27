import { Box, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Box width="100%" padding="2" textAlign="center">
      <Image src="/assets/Logo.svg" mx="auto" />
    </Box>
  )
}