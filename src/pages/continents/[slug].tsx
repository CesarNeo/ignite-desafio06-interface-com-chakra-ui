import { Flex, Image, Grid, Box, Text, Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

import { Header } from "../../components/Header";
import { CardCountry } from "../../components/CardCountry";


export default function Continent() {
    const isPhoneVersion = useBreakpointValue({
        base: true,
        lg: false
    });

    return (
        <Flex direction="column" h="100vh" w="100vw">
            <Header />

            <Flex justifyContent="center" alignItems="center">
                <Image src="/images/europe.jpg" alt="Banner de viagens" w="100%" h={["150px", "500px"]} objectFit="cover" position="relative" />
                {isPhoneVersion && <Heading position="absolute" color="white" fontWeight="semibold">Europa</Heading>}
            </Flex>

            <Flex
                my={["5", "10"]}
                mx="auto"
                maxW={1240}
                direction="column"
                p="3"
            >
                <Grid templateColumns={["1fr", "1fr 1fr"]} gap={[9, 16]}>
                    <Box w="100%" h="211px" textAlign="justify">
                        <Text fontSize={["lg", "xl"]}>
                            A Europa é, por convenção, um dos seis continentes do mundo.
                            Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da
                            Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                            o Cáucaso, e o mar Negro a sudeste
                        </Text>
                    </Box>
                    <Box w="100%" h="211px">
                        <Grid templateColumns="repeat(3, 1fr)" h="100%" align="center" alignContent="center">
                            <Box>
                                <Text
                                    as="span"
                                    color="orange.300"
                                    fontWeight="semibold"
                                    fontSize={["3xl", "5xl"]}

                                >
                                    50
                                </Text>
                                <Text
                                    fontSize="xl"
                                    fontWeight={["normal", "semibold"]}
                                >
                                    países
                                </Text>
                            </Box>
                            <Box >
                                <Text
                                    as="span"
                                    color="orange.300"
                                    fontWeight="semibold"
                                    fontSize={["3xl", "5xl"]}
                                >
                                    60
                                </Text>
                                <Text
                                    fontSize="xl"
                                    fontWeight={["normal", "semibold"]}
                                >
                                    línguas
                                </Text>
                            </Box>
                            <Box >
                                <Text
                                    as="span"
                                    color="orange.300"
                                    fontWeight="semibold"
                                    fontSize={["3xl", "5xl"]}
                                >
                                    27
                                </Text>
                                <Text
                                    fontSize="xl"
                                    fontWeight={["normal", "semibold"]}
                                >
                                    cidades +100
                                </Text>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>

                <Heading fontWeight="medium" mb="9" mt={["3", "6"]}>Cidades +100</Heading>

                <SimpleGrid minChildWidth={["164px", "256px"]} spacing="15px" px={["6"]}>
                    <CardCountry
                        imageCard="/europe/londres.jpg"
                        imageCardAlt="Londres"
                        iconFlag="/europe/reino-unido.svg"
                        iconFlagAlt="Bandeira do Reino Unido"
                        nameCountry="Reino unído"
                    />
                    <CardCountry
                        imageCard="/europe/paris.jpg"
                        imageCardAlt="Paris"
                        iconFlag="/europe/franca.svg"
                        iconFlagAlt="Bandeira da França"
                        nameCountry="França"
                    />
                    <CardCountry
                        imageCard="/europe/roma.jpg"
                        imageCardAlt="Roma"
                        iconFlag="/europe/italia.svg"
                        iconFlagAlt="Bandeira da Itália"
                        nameCountry="Itália"
                    />
                    <CardCountry
                        imageCard="/europe/praga.jpg"
                        imageCardAlt="Praga"
                        iconFlag="/europe/republica-tcheca.svg"
                        iconFlagAlt="Bandeira da República Tcheca"
                        nameCountry="República Tcheca"
                    />
                    <CardCountry
                        imageCard="/europe/amsterdam.jpg"
                        imageCardAlt="Amsterdã"
                        iconFlag="/europe/holanda.svg"
                        iconFlagAlt="Bandeira da Holanda"
                        nameCountry="Holanda"
                    />
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}
