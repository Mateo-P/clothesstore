import { useEffect, useState } from 'react';
import { Layout } from '../src/components/Layouts/Layout';
import { Landing } from '../src/components/Landing/Landing';
import { ProductList } from '../src/components/Product/ProductList';
import useProducts from '../src/Hooks/useProducts';
import useCategories from '../src/Hooks/useCategories';

export default function Home() {
    const { categories } = useCategories();
    const random = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[random];
    const category = randomCategory && randomCategory.id;

    const { products } = useProducts({
        site_id: 'MCO',
        category
    });
    return (
        <Layout>
            <Landing />
            <ProductList products={products} />
        </Layout>
    );
}
