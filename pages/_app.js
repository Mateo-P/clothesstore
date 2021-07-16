import '../styles/globals.css';
import { StateProvider } from '../src/State/StateProvider';
import { ChakraProvider } from '@chakra-ui/react';
import reducer from '../src/State/reducer';
import initialStates from '../src/State/initialStates';
function MyApp({ Component, pageProps }) {
    return (
        <StateProvider initialState={initialStates} reducer={reducer}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </StateProvider>
    );
}

export default MyApp;
