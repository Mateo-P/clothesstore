import { Text, Flex, Box, useMediaQuery } from '@chakra-ui/react';
export const Politics = () => {
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
                    POLÍTICAS
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
                        Políticas de privacidad
                    </Text>
                    <Text textColor="white" mb="2" fontSize="20">
                        Políticas de cambio
                    </Text>
                    <Text textColor="white" mb="2" fontSize="20">
                        Políticas de envio
                    </Text>
                    <Text textColor="white" mb="2" fontSize="20">
                        Terminos y condiciones
                    </Text>
                    <Text textColor="white" mb="2" fontSize="20">
                        Responsabilidad social
                    </Text>
                </>
            )}
        </Box>
    );
};
