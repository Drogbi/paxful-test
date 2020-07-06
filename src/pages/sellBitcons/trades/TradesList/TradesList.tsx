import React from 'react';
import css from './TradesList.module.scss';
import { TradeItem } from './TradeItem';
import { useTypedSelector } from '../../../../shared/hooks';

interface TradesListProps {
}

export const TradesList: React.FC<TradesListProps> = (props) => {
    const trades = useTypedSelector(state => state.trades)
    return (
        <div className={ css.tradesList }>
            {
                trades.map((item) => <TradeItem item={ item }/>)
            }
        </div>
    );
};
