import { Flex, Button, Box, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import { Badge } from '../Badge/Badge';
import { useStateValue } from '../../State/StateProvider';
export const Actions = () => {
    const [{ open }, dispatch] = useStateValue();
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const width = isLargerThan720 ? '500px' : '45px';
    const openBasket = () => {
        dispatch({
            type: 'OPEN_BASKET'
        });
    };

    if (isLargerThan720) {
        return (
            <Flex width={width} justifyContent="flex-start" alignItems="center">
                <Box onClick={() => openBasket()} ml="8" as="button" position="relative">
                    <Image src="/cart.svg" width="32" height="32" />
                    <Badge />
                </Box>
                <Box ml="8" as="button">
                    <Image src="/user.svg" width="32" height="32" />
                </Box>
                <Button ml="8" colorScheme="" variant="outline">
                    Iniciar sesion
                </Button>
            </Flex>
        );
    } else {
        return (
            <Flex justifyContent="flex-start" alignItems="center">
                <Box onClick={() => openBasket()} ml="8" as="button" position="relative">
                    <Image src="/cart.svg" width="32" height="32" />
                    <Badge />
                </Box>
            </Flex>
        );
    }
};
