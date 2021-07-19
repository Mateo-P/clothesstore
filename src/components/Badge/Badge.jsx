import { Flex } from '@chakra-ui/react';
import { useStateValue } from '../../State/StateProvider';
export const Badge = () => {
    const [{ basket }] = useStateValue();
    return (
        basket.length != 0 && (
            <Flex
                fontWeight="bold"
                textColor="white"
                justifyContent="center"
                alignItems="center"
                borderRadius="24"
                backgroundColor="#5B17AA"
                h="5"
                w="5"
                top="-1"
                right="-3"
                position="absolute">
                {basket.length}
            </Flex>
        )
    );
};
