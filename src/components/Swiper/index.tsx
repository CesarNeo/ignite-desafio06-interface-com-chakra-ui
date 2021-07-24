import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard, A11y } from 'swiper';
import { Image, Text, Heading, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Keyboard, A11y]);

export function Swiper() {
    const slidesImg = [
        "/images/europe",
        "/images/asia",
        "/images/paris"
    ];

    const slides = [];

    for (let i = 0; i < slidesImg.length; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    backgroundImage={`url(${slidesImg[i]}.jpg)`}
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                >

                    <Link href={`/continents/europe`}>
                        <a >
                            <Heading
                                color="white"
                                fontSize={["3xl", "4xl", "5xl"]}
                                mb="4"
                                _hover={{ color: 'gray.300' }}
                            >
                                Europa
                            </Heading>

                            <Text
                                fontSize={["0.8rem", "1xl", "2xl"]}
                                fontWeight="bold"
                                color="white"
                                marginTop={["2", "4"]}
                                _hover={{ color: 'gray.300' }}
                            >
                                O continente mais antigo.
                            </Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide >
        );
    }

    return (
        <Flex w="100%" h={["250px", "450px"]} maxW={1440} mx="auto" mb={["5", "10"]}>
            <SwiperComponent
                navigation
                pagination={{ clickable: true }}
                keyboard
                slidesPerView={1}
                style={{ width: '100%', flex: '1' }}
            >
                {slides}
            </SwiperComponent>
        </Flex>
    );
}