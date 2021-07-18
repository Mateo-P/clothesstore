import { Button, Flex, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';

export const Media = () => {
    const media = ['facebook', 'twitter', 'instagram', 'youtube'];
    return (
        <Box>
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
                            <Image src={`/${md}.svg`} width="32" height="32" />
                        </Flex>
                    );
                })}
            </Flex>
        </Box>
    );
};
