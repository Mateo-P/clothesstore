import { Flex, Button, Divider, Text } from '@chakra-ui/react';
export const Categories = () => {
    const categories = ['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];
    return (
        <Flex w="100%" justifyContent="center" alignContent="center" p={4}>
            {categories.map((category, i) => {
                if (i < categories.length - 1) {
                    return (
                        <Flex key={i}>
                            <Button key pl="6" pr="6" variant="link">
                                <Text fontSize="18" fontWeight="bold" color="#ffff">
                                    {category}
                                </Text>
                            </Button>
                            <Divider orientation="vertical" />
                        </Flex>
                    );
                }
                return (
                    <>
                        <Button pl="6" pr="6" variant="link">
                            <Text fontSize="18" fontWeight="bold" color="#ffff">
                                {category}
                            </Text>
                        </Button>
                    </>
                );
            })}
        </Flex>
    );
};
