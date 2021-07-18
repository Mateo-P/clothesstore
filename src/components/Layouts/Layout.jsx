import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
export const Layout = (props) => {
    return (
        <Box minW="100%" minH="100%">
            <Head>
                <title>Clothesstore</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Box marginTop="150">{props.children}</Box>

            <Footer />
        </Box>
    );
};
