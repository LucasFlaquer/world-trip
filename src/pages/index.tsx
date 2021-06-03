import { Box, Container, } from "@chakra-ui/react";
import { Hero } from "../components/Banner/Hero";
import { Header } from "../components/Header";
import { DefaultHeader } from "../components/Headings/DefaultHeader";
import { TravelTypes } from "../components/TravelTypes";
import { HomeSlider } from "../components/Slider/HomeSlider";



interface PhotoInterface {
  id: string
  urls: {
    full: string,
    raw: string,
    regular: string
  }

}
interface UnsplashResponseInterface {
  results: PhotoInterface[]
}

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
        <Container maxW="container.lg" pb="40px">
          <HomeSlider />
        </Container>

      </Box>
    </Box>
  )
}
