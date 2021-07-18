import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
export const Logo = () => {
    const router = useRouter();
    return (
        <Box onClick={() => router.push('/')} as="button">
            <Image src="/ClothesStore.png" width="375" height="80" />
        </Box>
    );
};
