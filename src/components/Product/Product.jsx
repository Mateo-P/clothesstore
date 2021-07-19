import { Box } from '@chakra-ui/react';
import { ProductImage } from './ProductImage';
import { ProductDetail } from './ProductDetail';
import { useStateValue } from '../../State/StateProvider';
export const Product = (product) => {
    const [, dispatch] = useStateValue();
    const { price, original_price, thumbnail, title } = product;

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            product
        });
    };

    return (
        <Box ml="8px" mr="8px" border="1px solid #E6E6E6" minW="337" maxW="337" position="relative">
            <ProductImage image={thumbnail} />
            <ProductDetail
                addToBasketCallback={addToBasket}
                price={price}
                original_price={original_price}
                title={title}
            />
        </Box>
    );
};
