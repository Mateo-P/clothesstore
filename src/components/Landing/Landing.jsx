import { Box, Grid, GridItem, Flex, useBreakpointValue } from '@chakra-ui/react';

import Image from 'next/image';
export const Landing = () => {
    const src = useBreakpointValue({ base: '/banner-desktop.png', md: '/banner-mobile.png' });
    return (
        <Box position="relative">
            <Image src={'/banner-desktop.png'} layout="responsive" width="1920" height="745" />
            <Grid
                w="100%"
                h={[]}
                p={['0', '2', '4', '8']}
                templateRows={['repeat(2, 1fr)', 'repeat(1, 1fr)']}
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
                <GridItem
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    rowSpan={[1, 1]}
                    colSpan={[1, 1]}>
                    <Image
                        src="/categorias-infantil.png"
                        alt="Picture of the author"
                        width={842}
                        height={631}
                    />
                </GridItem>
                <GridItem
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    rowSpan={[1, 1]}
                    colSpan={[1, 1]}>
                    <Image
                        src="/categorias-proteccion.png"
                        alt="Picture of the author"
                        width={842}
                        height={631}
                    />
                </GridItem>
            </Grid>
        </Box>
    );
};
