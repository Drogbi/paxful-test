import { useMedia } from 'react-use';
import { TradesLayout } from '../types';

export const useScreenSize = (): TradesLayout => {
    const isSmall = useMedia('(max-width: 700px)');
    const isMedium = useMedia('(min-width: 700px) and (max-width: 1270px)');
    const isLarge = useMedia('(min-width: 1270px)');

    return [
        { size: TradesLayout.SMALL, isActive: isSmall },
        { size: TradesLayout.MEDIUM, isActive: isMedium },
        { size: TradesLayout.LARGE, isActive: isLarge }
    ].find((screen) => screen.isActive)?.size || TradesLayout.SMALL;
};

