import { useState } from 'react';
import Image from 'next/image';
import { Box, WrapItem, Wrap, Text, Flex } from '@chakra-ui/react';
import { Product } from './Product';
import { useRouter } from 'next/router';
export const ProductList = ({ products = [], handlePaging }) => {
    const router = useRouter();

    return (
        <Flex justifyContent="center" alignItems="center">
            <Box onClick={handlePaging(-1)} as="button">
                <Image src="/back.svg" width="44" height="77" />
            </Box>
            <Box>
                {!router.query.id && (
                    <Flex justifyContent="center" alignContent="center" p={['2', '4', '8']}>
                        <Text fontSize="34px" fontWeight="bold">
                            PRODUCTOS MÁS BUSCADOS
                        </Text>
                    </Flex>
                )}

                <Wrap pt="8" pl="16" pr="16" spacing="24px">
                    {products.map((product, i) => {
                        return (
                            <WrapItem>
                                <Product key={i} {...product} />
                            </WrapItem>
                        );
                    })}
                </Wrap>
            </Box>
            <Box onClick={handlePaging(1)} as="button">
                <Image src="/forward.svg" width="44" height="77" />
            </Box>
        </Flex>
    );
};
