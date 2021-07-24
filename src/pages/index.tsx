import { Flex, Image, SimpleGrid, Box, Text, Heading, useBreakpointValue } from '@chakra-ui/react';

import { Header } from "../components/Header";
import { Swiper } from '../components/Swiper';
import { TravelTypes } from '../components/TravelTypes';


export default function Home() {
  const isPhoneVersion = useBreakpointValue({
    base: true,
    lg: false
  });

  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />

      <Flex>
        {isPhoneVersion ?
          (<Image src="/images/Banner-phone.svg" alt="5 continentes, infinitas possibilidades" w="100%" />) :
          (<Image src="/images/Banner.svg" alt="Banner de viagens" w="100%" />)}
      </Flex>

      <Flex
        my="10"
        mx="auto"
        maxW={1240}
        direction="column"
        w="100%"
        p="3"
      >
        <TravelTypes isMobile={!!isPhoneVersion} />

        <Flex my={["10", "20"]} w="100%" justifyContent="center">
          <Box w="90px" h="3px" bgColor="gray.650" borderRadius={8} ></Box>
        </Flex>

        <Box mb="3" w="100%" align="center" >
          <Text fontSize={["larger", "3xl"]} fontWeight="medium">Vamos nessa?</Text>
          <Text fontSize={["larger", "3xl"]} fontWeight="medium">Então escolha seu continente</Text>
        </Box>

        <Swiper />

      </Flex>
    </Flex>
  )
}
