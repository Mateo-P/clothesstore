import { Flex, Box } from '@chakra-ui/react';
import { Actions } from './Actions';
import { SearchBar } from './SearchBar';
import { Logo } from './Logo';
import { Categories } from './Categories';
export const Navbar = () => {
    return (
        <Box position="fixed" top="0" zIndex="1" width="100%">
            <Flex
                paddingLeft={[65]}
                backgroundColor="white"
                width="100%"
                justifyContent="space-between"
                height={85}>
                <Logo />
                <Flex>
                    <SearchBar />
                    <Actions />
                </Flex>
            </Flex>
            <Flex backgroundColor="black" width="100%" height={65}>
                <Categories />
            </Flex>
        </Box>
    );
};
