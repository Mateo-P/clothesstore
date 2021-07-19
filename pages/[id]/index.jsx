import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';
import { Layout } from '../../src/components/Layouts/Layout';
import useProducts from '../../src/Hooks/useProducts';
import { ProductList } from '../../src/components/Product/ProductList';
const index = () => {
    const router = useRouter();
    const category = router.query.id;
    const { isLoading, products } = useProducts({ site_id: 'MCO', category });

    return (
        <Layout>
            {isLoading ? (
                <Flex alignItems="center" justifyContent="center" w="100%" minH="300">
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                </Flex>
            ) : (
                <ProductList products={products} />
            )}
        </Layout>
    );
};
export default index;
