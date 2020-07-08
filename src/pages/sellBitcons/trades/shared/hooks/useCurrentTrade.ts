import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../../../shared/hooks';
import { TradeModel } from '../../../../../shared/types';

export const useCurrentTrade = () => {
    const { id: selectedTradeId } = useParams<{ id: string }>();
    return useTypedSelector(state => state.trades.find((trade) => trade.id === +selectedTradeId)) as TradeModel;
}

