import { useEffect, useState } from 'react';
import { Layout } from '../src/components/Layouts/Layout';
import { Landing } from '../src/components/Landing/Landing';
import { ProductList } from '../src/components/Product/ProductList';
import useProducts from '../src/Hooks/useProducts';

export default function Home() {
    const { products } = useProducts({ site_id: 'MCO', category: 'MCO1430' });
    const [paging, setpaging] = useState(0);
    const [currentProducts, setcurrentProducts] = useState(products.slice(2, 5));
    useEffect(() => {
        let newProducts = products.slice(paging, paging + 1);
        setcurrentProducts(newProducts);
    }, [paging]);
    const handlePaging = (direction) => {
        direction < 0 ? setpaging(-4) : setpaging(4);
    };
    console.log(products);
    console.log(currentProducts);
    return (
        <Layout>
            <Landing />
            <ProductList products={currentProducts} handlePaging={handlePaging} />
        </Layout>
    );
}
