import { useMedia } from 'react-use';

export const useScreenSize = () => {
    const isSmall = useMedia('(max-width: 700px)');
    const isMedium = useMedia('(min-width: 700px) and (max-width: 1270px)');
    const isLarge = useMedia('(min-width: 1270px)')

    return [
        { size: 'small', isActive: isSmall },
        { size: 'medium', isActive: isMedium },
        { size: 'large', isActive: isLarge }
    ].find((screen) => screen.isActive)?.size || 'large'
}

