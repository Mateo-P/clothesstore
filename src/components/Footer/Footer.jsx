import { Text, Box, Flex } from '@chakra-ui/react';
import { AboutUs } from './AboutUs';
import { Media } from './Media';
import { Politics } from './Politics';

export const Footer = () => {
    return (
        <Flex
            pl="32"
            pr="32"
            pt="24"
            justifyContent="space-between"
            w="100%"
            h="559"
            backgroundColor="black">
            <Politics />
            <AboutUs />
            <Media />
        </Flex>
    );
};
