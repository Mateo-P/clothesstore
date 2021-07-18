import { Flex, Button, Box } from '@chakra-ui/react';
import Image from 'next/image';
export const Actions = () => {
    return (
        <Flex w="500px" justifyContent="flex-start" alignItems="center">
            <Box ml="8" as="button">
                <Image src="/cart.svg" width="32" height="32" />
            </Box>
            <Box ml="8" as="button">
                <Image src="/user.svg" width="32" height="32" />
            </Box>
            <Button ml="8" colorScheme="" variant="outline">
                Iniciar sesion
            </Button>
        </Flex>
    );
};
