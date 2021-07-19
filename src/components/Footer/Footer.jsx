import { Flex, useMediaQuery } from '@chakra-ui/react';
import { AboutUs } from './AboutUs';
import { Media } from './Media';
import { Politics } from './Politics';

export const Footer = () => {
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const direction = isLargerThan720 ? 'row' : 'column';
    const justifyContent = isLargerThan720 ? 'space-between' : 'flex-start';
    const h = isLargerThan720 ? '559' : '300';
    return (
        <Flex
            direction={direction}
            pl={['8', '32']}
            pr={['8', '32']}
            pt={['8', '24']}
            justifyContent={justifyContent}
            w="100%"
            h={h}
            backgroundColor="black">
            <Politics />
            <AboutUs />
            <Media />
        </Flex>
    );
};
