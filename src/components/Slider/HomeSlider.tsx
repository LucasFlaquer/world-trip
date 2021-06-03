import { Image } from "@chakra-ui/image"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from "../../service/api"
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Box, Text } from "@chakra-ui/layout";
import { DefaultHeader } from "../Headings/DefaultHeader";



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

export function HomeSlider() {
  SwiperCore.use([Navigation, Pagination]);
  const [photos, setPhotos] = useState<PhotoInterface[]>([])
  useEffect(() => {
    fetchPhotos()
  }, [])

  async function fetchPhotos() {
    const response = await api.get<UnsplashResponseInterface>('/search/photos?page=1&query=continents&per_page=5&orientation=landscape&crop=edges&h=600')

    setPhotos(response.data.results)

  }

  return (
    <Swiper
      className="homeSlider"
      slidesPerView={1}
      navigation={{}}
      pagination={{ clickable: true, }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <Box
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bgSize: "cover",
              pos: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              opacity: 0.35,
              zIndex: 1,
              backgroundColor: '#1C1401'
            }}
          >
            <Image src={photo.urls.regular} w="100%" maxHeight="500px" objectFit="cover" background="blackAlpha.200" />
            <Box
              position="absolute"
              top="40%"
              left="0"
              w="100%"
              textAlign="center"
              zIndex={2}
              color="white">
              <DefaultHeader fontSize="6xl" fontWeight="bold">Europa</DefaultHeader>
              <Text fontSize="2xl">O continente mais antigo</Text>
            </Box>
          </Box>

        </SwiperSlide>

      ))}

    </Swiper>

  )
}