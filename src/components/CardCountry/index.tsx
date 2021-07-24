import { Wrap, WrapItem, Flex, Image, Box, Text, SimpleGrid } from '@chakra-ui/react';

interface CardCountryProps {
    imageCard: string;
    imageCardAlt: string;
    iconFlag: string;
    iconFlagAlt: string;
    nameCountry: string;
}

export function CardCountry({
    imageCard,
    imageCardAlt,
    iconFlag,
    iconFlagAlt,
    nameCountry
}: CardCountryProps) {
    return (
        <Box flex="1" borderRadius={8}>
            <Flex>
                <Image src={imageCard} alt={imageCardAlt} />
            </Flex>
            <Flex
                p="3.5"
                justifyContent="space-between"
                align="center"
                borderLeft="1px"
                borderRight="1px"
                borderBottom="1px"
                borderColor="orange.300"
            >
                <Flex display="block">
                    <Text fontWeight="semibold" fontSize="lg">{imageCardAlt}</Text>
                    <Text as="span" color="darkinfo.100" fontWeight="medium">{nameCountry}</Text>
                </Flex>
                <Flex display="block">
                    <Image src={iconFlag} alt={iconFlagAlt} />
                </Flex>
            </Flex>
        </Box>
    );
}