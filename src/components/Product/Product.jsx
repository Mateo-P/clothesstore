import { Box, Grid, GridItem, Flex, useBreakpointValue } from '@chakra-ui/react';
import { ProductImage } from './ProductImage';
import { ProductDetail } from './ProductDetail';
export const Product = (product) => {
    const { price, original_price, thumbnail, title } = product;
    return (
        <Box ml="8px" mr="8" border="1px solid #E6E6E6" maxW="337" position="relative">
            <ProductImage image={thumbnail} />
            <ProductDetail price={price} original_price={original_price} title={title} />
        </Box>
    );
};
