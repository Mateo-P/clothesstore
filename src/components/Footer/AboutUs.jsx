import { Text, Box, useMediaQuery, Flex } from '@chakra-ui/react';
export const AboutUs = () => {
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const size = isLargerThan720 ? '26' : '18';
    const fontWeight = isLargerThan720 ? 'bold' : 'normal';
    const mb = isLargerThan720 ? '8' : '0';
    return (
        <Box>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                borderBottom="0.1px solid white">
                <Text textColor="white" mb={mb} fontSize={size} fontWeight={fontWeight}>
                    SOBRE NOSOTROS
                </Text>
                {!isLargerThan720 && (
                    <Text textColor="white" fontSize={30} fontWeight={fontWeight}>
                        +
                    </Text>
                )}
            </Flex>
            {isLargerThan720 && (
                <>
                    <Text textColor="white" mb="2" fontSize="20">
                        Encuentra tu tienda
                    </Text>
                    <Text textColor="white" mb="2" fontSize="20">
                        Contáctanos
                    </Text>
                    <Text textColor="white" mb="2" fontSize="20">
                        Trabaja con nosotros
                    </Text>
                </>
            )}
        </Box>
    );
};
