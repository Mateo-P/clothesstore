import { Text, Box, Flex, Button } from '@chakra-ui/react';
import { formatCurrency } from '../../shared/currencyFormat';
import { ProductDiscount } from './ProductDiscount';
import Image from 'next/image';
export const ProductDetail = ({ price, original_price, title, addToBasketCallback }) => {
    const discount = (1 - price / original_price) * 100;
    return (
        <Flex
            justifyContent="space-between"
            direction="column"
            p="8"
            pt="4"
            h="211"
            backgroundColor="#F4F4F4"
            w="100%">
            {original_price && <ProductDiscount discount={Math.round(discount)} />}
            <Flex direction="column">
                <Text fontSize="20" fontWeight="medium" color="black">
                    {title}
                </Text>
                <Flex justifyContent="space-between">
                    <Text fontSize="22" fontWeight="bold" color="#5B17AA">
                        {formatCurrency(price)}
                    </Text>
                    <Text fontSize="22" color="#6B6B6B" decoration="line-through">
                        {original_price && formatCurrency(original_price)}
                    </Text>
                </Flex>
            </Flex>
            <Button
                onClick={addToBasketCallback}
                w="100%"
                backgroundColor="black"
                textColor="white">
                <Image src="/invertCart.png" width="24" height="24" />
                &nbsp;Agregar al carrito
            </Button>
        </Flex>
    );
};
