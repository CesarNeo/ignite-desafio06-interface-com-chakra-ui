import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
    const { asPath } = useRouter();
    const isPhoneVersion = useBreakpointValue({
        base: true,
        lg: false
    });

    return (
        <Flex
            as="header"
            width="100%"
            h={["50px", "100px"]}
            align="center"
            justifyContent={["space-between", "center"]}
            p={["4", "7"]}
        >
            <Flex>
                {asPath !== '/' && (
                    <Link href="/" passHref>
                        <Image src="/images/chevron-left.svg" alt="Voltar" />
                    </Link>
                )}
            </Flex>
            <Flex>
                {isPhoneVersion ? (
                    <Image src="/images/LogoPhone.svg" alt="Worldtrip" />
                ) : (
                    <Image src="/images/Logo.svg" alt="Worldtrip" />
                )}
            </Flex>
        </Flex>
    );
}