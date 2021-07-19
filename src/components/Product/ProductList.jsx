import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, WrapItem, Wrap, useMediaQuery, Text, Flex } from '@chakra-ui/react';
import { Product } from './Product';
import { useRouter } from 'next/router';
export const ProductList = ({ products = [] }) => {
    const router = useRouter();
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const fontSize = isLargerThan720 ? '34' : '20';
    const [paging, setpaging] = useState(0);
    const [elementsToPage, setElementsToPage] = useState(4);

    useEffect(() => {
        router.query.id && setElementsToPage(12);
    }, []);
    const handlePaging = (direction) => () => {
        direction < 0 ? setpaging(paging - elementsToPage) : setpaging(paging + elementsToPage);
    };
    return (
        <Flex justifyContent="center" alignItems="center">
            <Box onClick={handlePaging(-1)} as="button">
                <Image src="/back.svg" width="44" height="77" />
            </Box>
            <Box>
                {!router.query.id && (
                    <Flex justifyContent="center" alignContent="center" p={['2', '4', '8']}>
                        <Text fontSize={fontSize} fontWeight="bold">
                            PRODUCTOS MÁS BUSCADOS
                        </Text>
                    </Flex>
                )}

                <Wrap p="8" pl="16" pr="16" spacing="24px">
                    {products.map((product, i) => {
                        if (paging <= i && i < paging + elementsToPage) {
                            return (
                                <WrapItem key={i}>
                                    <Product {...product} />
                                </WrapItem>
                            );
                        }
                    })}
                </Wrap>
            </Box>
            <Box onClick={handlePaging(1)} as="button">
                <Image src="/forward.svg" width="44" height="77" />
            </Box>
        </Flex>
    );
};
