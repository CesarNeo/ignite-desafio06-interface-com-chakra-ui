import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "650": "#47585B",
            "95": "#F5F8FA"
        },
        orange: {
            "300": "#FFBA08"
        },
        darkinfo: {
            "100": "#999999"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.95',
                color: 'gray.650'
            }
        }
    }
});