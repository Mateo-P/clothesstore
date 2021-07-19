import { useState, useEffect } from 'react';
import useApi from './useApi';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const { payload, isLoading, error } = useApi('GET', `MCO/categories`);

    useEffect(() => {
        if (payload) {
            setCategories(payload);
        }
    }, [payload]);

    return { isLoading, error, categories };
};
export default Categories;
