import { useState } from 'react';
import { Flex, InputGroup, Box, Input, InputRightAddon } from '@chakra-ui/react';
import Image from 'next/image';
import { SearchResults } from './SearchResults';
import useCategories from '../../Hooks/useCategories';
import { useRouter } from 'next/router';

export const SearchBar = () => {
    const { categories } = useCategories();
    const router = useRouter();
    const [filteredCategories, setfilteredCategories] = useState([]);
    const [selectedCategory, setselectedCategory] = useState('');

    const handleFilterCategories = (e) => {
        const searchWord = e.target.value;

        setselectedCategory({ ...setselectedCategory, name: searchWord });
        const filtered = categories.filter(({ name }) => {
            return name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord == '') {
            setfilteredCategories([]);
        } else {
            setfilteredCategories(filtered);
        }
    };

    const selectCategory = (id, name) => () => {
        setselectedCategory({ id, name });
        setfilteredCategories([]);
        console.log(router.pathname);
        router.push(`/${id}`);
    };

    return (
        <Flex position="relative" alignItems="center">
            <Flex width="700px" justifyContent="center" alignItems="center">
                <InputGroup>
                    <Input
                        value={selectedCategory.name}
                        width="100%"
                        backgroundColor="#EEEEEE"
                        height="10"
                        onChange={handleFilterCategories}
                        size="lg"
                        placeholder="Buscar aquí producto"
                    />
                    <InputRightAddon
                        backgroundColor="#DEDEDE"
                        pt="0"
                        pb="0"
                        pl="2"
                        pr="2"
                        children={<Image src="/search.svg" width="32" height="32" />}
                    />
                </InputGroup>
            </Flex>
            <SearchResults categories={filteredCategories} selectCategory={selectCategory} />
        </Flex>
    );
};
