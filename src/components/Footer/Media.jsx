import { useMediaQuery, Flex, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';

export const Media = () => {
    const media = ['facebook', 'twitter', 'instagram', 'youtube'];

    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const width = isLargerThan720 ? '32' : '20';
    const height = isLargerThan720 ? '32' : '20';
    const mt = isLargerThan720 ? '0' : '4';
    return (
        <Box mt={mt}>
            <Text textColor="white" mb="8" size="32" fontWeight="bold">
                SÍGUENOS EN:
            </Text>
            <Flex mb="2" size="26">
                {media.map((md, i) => {
                    return (
                        <Flex
                            key={i}
                            justifyContent="center"
                            p="2"
                            alignItems="center"
                            borderRadius="24"
                            as="button"
                            marginRight="4"
                            backgroundColor="white">
                            <Image src={`/${md}.svg`} width={width} height={height} />
                        </Flex>
                    );
                })}
            </Flex>
        </Box>
    );
};
