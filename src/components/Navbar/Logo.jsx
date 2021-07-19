import Image from 'next/image';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
export const Logo = () => {
    const router = useRouter();
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const width = isLargerThan720 ? '375' : '250';
    const height = isLargerThan720 ? '80' : '50';
    return (
        <Box onClick={() => router.push('/')} as="button">
            <Image src="/ClothesStore.png" width={width} height={height} />
        </Box>
    );
};
