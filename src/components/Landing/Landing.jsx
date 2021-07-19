import { Box, Text, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

import Image from 'next/image';
export const Landing = () => {
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const src = isLargerThan720 ? '/banner-desktop.png' : '/banner-mobile.png';
    const width = isLargerThan720 ? '1920' : '345px';
    const height = isLargerThan720 ? '745' : '255px';
    const picsArray = [
        { src: '/categorias-infantil.png', text: 'MODA INFANTIL' },
        { src: '/categorias-proteccion.png', text: 'PROTECCIÓN' }
    ];
    return (
        <Box position="relative">
            <Image src={src} layout="responsive" width={width} height={height} />
            <Grid
                w="100%"
                h={[]}
                p={['4', '4', '8']}
                templateRows={['repeat(2, 1fr)', 'repeat(1, 1fr)']}
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
                {picsArray.map(({ src, text }, i) => {
                    return (
                        <GridItem
                            position="relative"
                            mb="4"
                            key={i}
                            display="flex"
                            justifyContent="center"
                            alignContent="center"
                            rowSpan={[1, 1]}
                            colSpan={[1, 1]}>
                            <Image src={src} alt="Picture of the author" width={842} height={631} />
                            <Text
                                position="absolute"
                                bottom="5"
                                right="50"
                                left="50"
                                fontStyle="italic"
                                fontWeight="bold"
                                textColor="white"
                                fontSize="32">
                                {text}
                            </Text>
                        </GridItem>
                    );
                })}
            </Grid>
        </Box>
    );
};
