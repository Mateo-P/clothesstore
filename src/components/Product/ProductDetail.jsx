import { Box, Text, GridItem, Flex, useBreakpointValue, Button } from '@chakra-ui/react';
export const ProductDetail = ({ price, original_price, title }) => {
    return (
        <Box p="8" h="211" backgroundColor="#F4F4F4" w="100%">
            <Text size="23" color="black">
                {title}
            </Text>
            <Flex justifyContent="space-between">
                <Text fontWeight="bold" color="#5B17AA">
                    {price}
                </Text>
                <Text decoration="line-through">{original_price}</Text>
            </Flex>
            <Button backgroundColor="black" textColor="white">
                Agregar al carrito
            </Button>
        </Box>
    );
};
