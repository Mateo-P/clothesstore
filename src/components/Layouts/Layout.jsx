import { Box, useMediaQuery } from '@chakra-ui/react';
import Head from 'next/head';
import { Footer } from '../Footer/Footer';
import { ModalBasket } from '../Modal/Modal';
import { Navbar } from '../Navbar/Navbar';
export const Layout = (props) => {
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const height = isLargerThan720 ? '150' : '100';
    return (
        <Box minW="100%" minH="100%">
            <Head>
                <title>Clothesstore</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ModalBasket />
            <Navbar />
            <Box marginTop={height}>{props.children}</Box>

            <Footer />
        </Box>
    );
};
