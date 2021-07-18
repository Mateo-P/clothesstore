import { Box, Text } from '@chakra-ui/react';

export const SearchResults = ({ categories = [], selectCategory }) => {
    const height = categories.length < 4 ? categories.length * 46 : 4 * 46;

    if (categories.length != 0) {
        return (
            <Box
                overflow="hidden"
                backgroundColor="white"
                zIndex="2"
                position="absolute"
                bottom={-height}
                border="1px solid #E6E6E6"
                w="50%"
                height={height}>
                {categories.map(({ id, name }, i) => {
                    return (
                        <Text
                            p="2"
                            fontSize="20"
                            key={i}
                            _hover={{ cursor: 'pointer', backgroundColor: '#EEEEEE' }}
                            onClick={selectCategory(id, name)}>
                            {name}
                        </Text>
                    );
                })}
            </Box>
        );
    }
    return null;
};
