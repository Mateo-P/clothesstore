import { Flex, Text } from '@chakra-ui/react';

export const ProductDiscount = ({ discount }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            w="60px"
            h="27px"
            backgroundColor="#5B17AA"
            zIndex="1"
            position="absolute"
            top="5"
            left="5">
            <Text fontWeight="medium" textColor="white">
                -{discount}%
            </Text>
        </Flex>
    );
};
