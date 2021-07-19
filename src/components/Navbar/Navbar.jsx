import { Flex, Box, useMediaQuery } from '@chakra-ui/react';
import { Actions } from './Actions';
import { SearchBar } from './SearchBar';
import { Logo } from './Logo';
import { Categories } from './Categories';
import { SideMenu } from './SideMenu';

export const Navbar = () => {
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    return (
        <Box position="fixed" top="0" zIndex="1" width="100%">
            {isLargerThan720 ? (
                <>
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
                </>
            ) : (
                <Box paddingLeft={[4]} paddingRight={[4]} backgroundColor="white" width="375px">
                    <Flex justifyContent="space-between">
                        <SideMenu />
                        <Logo />
                        <Actions />
                    </Flex>
                    <Flex>
                        <SearchBar />
                    </Flex>
                </Box>
            )}
        </Box>
    );
};
