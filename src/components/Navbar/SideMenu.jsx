import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Drawer,
    Text,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react';
export const SideMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const placement = 'left';
    const categories = ['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];
    return (
        <>
            <Box onClick={onOpen} as="button">
                <HamburgerIcon w={6} h={6} />
            </Box>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color="#5B17AA" size="lg" />

                    <DrawerBody mt="12">
                        {categories.map((cat, i) => {
                            return (
                                <Text
                                    p="1"
                                    fontWeight="bold"
                                    fontSize="18"
                                    textColor="black"
                                    key={i}>
                                    {cat}
                                </Text>
                            );
                        })}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
