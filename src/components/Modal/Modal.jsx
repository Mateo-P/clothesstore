import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button
} from '@chakra-ui/react';
import { useStateValue } from '../../State/StateProvider';
import { Product } from '../Product/Product';

export const ModalBasket = () => {
    const [{ open, basket }, dispatch] = useStateValue();
    const openBasket = () => {
        dispatch({
            type: 'OPEN_BASKET'
        });
    };
    return (
        <Modal isOpen={open} onClose={openBasket}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Tu carrito</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {basket.map((product, i) => {
                        return <Product key={i} {...product} />;
                    })}
                </ModalBody>

                <ModalFooter>
                    <Button w="100%" colorScheme="blue" mr={3} onClick={() => openBasket}>
                        Comprar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
