import { useRouter } from 'next/router';
import { Layout } from '../../src/components/Layouts/Layout';
import useProducts from '../../src/Hooks/useProducts';
import { ProductList } from '../../src/components/Product/ProductList';
const index = () => {
    const router = useRouter();
    const category = router.query.id;
    const { products } = useProducts({ site_id: 'MCO', category });
    return (
        <Layout>
            <ProductList products={products} />
        </Layout>
    );
};
export default index;
