import { useState, useEffect } from 'react';
import useApi from './useApi';

const Products = ({ site_id = 'MCO', category = 'MCO1430' }) => {
    const [products, setProducts] = useState([]);

    const { payload, isLoading, error } = useApi('GET', `${site_id}/search?category=${category}`);

    useEffect(() => {
        if (payload) {
            setProducts(payload.results);
        }
    }, [payload]);

    return { isLoading, error, products };
};
export default Products;
