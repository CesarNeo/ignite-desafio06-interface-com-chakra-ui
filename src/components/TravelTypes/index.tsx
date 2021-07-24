import { Flex, Image, SimpleGrid, Box, Text, Heading, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypesProps {
    isMobile: boolean | undefined;
}

export function TravelTypes({ isMobile }: TravelTypesProps) {
    return (
        <>
            {isMobile ? (
                <SimpleGrid minChildWidth="129px" spacing="29px" w="100%" alignItems="center" justifyItems="center" px="1">
                    <Flex>
                        <Image
                            src="/images/Ellipse.svg"
                            alt="Ponto"
                        />
                        <Heading fontSize="18px" ml="4" fontWeight="medium">vida noturna</Heading>
                    </Flex>
                    <Flex>
                        <Image
                            src="/images/Ellipse.svg"
                            alt="Ponto"
                        />
                        <Heading fontSize="18px" ml="4" fontWeight="medium">praia</Heading>
                    </Flex>
                    <Flex>
                        <Image
                            src="/images/Ellipse.svg"
                            alt="Ponto"
                        />
                        <Heading fontSize="18px" ml="4" fontWeight="medium">moderno</Heading>
                    </Flex>
                    <Flex>
                        <Image
                            src="/images/Ellipse.svg"
                            alt="Ponto"
                        />
                        <Heading fontSize="18px" ml="4" fontWeight="medium">clássico</Heading>
                    </Flex>
                    <Flex>
                        <Image
                            src="/images/Ellipse.svg"
                            alt="Ponto"
                        />
                        <Heading fontSize="18px" ml="4" fontWeight="medium">e mais...</Heading>
                    </Flex>
                </SimpleGrid>
            ) : (
                <SimpleGrid minChildWidth="158px" spacing="40px" w="100%">
                    <Box flex="1" align="center">
                        <Image
                            src="/images/Nightlife.svg"
                            alt="Vida noturna"
                        />
                        <Heading fontSize="24px" mt="4">vida noturna</Heading>
                    </Box>
                    <Box flex="1" align="center">
                        <Image
                            src="/images/Beach.svg"
                            alt="Vida noturna"
                        />
                        <Heading fontSize="24px" mt="4">praia</Heading>
                    </Box>
                    <Box flex="1" align="center">
                        <Image
                            src="/images/Modern.svg"
                            alt="Vida noturna"
                        />
                        <Heading fontSize="24px" mt="4">moderno</Heading>
                    </Box>
                    <Box flex="1" align="center">
                        <Image
                            src="/images/Classic.svg"
                            alt="Vida noturna"
                        />
                        <Heading fontSize="24px" mt="4">clássico</Heading>
                    </Box>
                    <Box flex="1" align="center">
                        <Image
                            src="/images/More.svg"
                            alt="Vida noturna"
                        />
                        <Heading fontSize="24px" mt="4">e mais...</Heading>
                    </Box>
                </SimpleGrid>
            )}

        </>
    )
}