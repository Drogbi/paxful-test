import React, { Dispatch } from 'react';
import css from './TradesList.module.scss';
import { TradeItem } from './TradeItem';
import { useTypedSelector } from '../../../../shared/hooks';
import cx from 'classnames';
import { IHaveClassname } from '../../../../shared/types';
import Scrollbars from 'react-custom-scrollbars';

interface TradesListProps extends IHaveClassname {
    dispatch: Dispatch<any>
}

export const TradesList: React.FC<TradesListProps> = ({ className, dispatch }) => {
    const trades = useTypedSelector(state => state.trades);
    return (
        <div className={ cx(css.tradesList, className) }>
            <Scrollbars>
                { trades.map((item) => <TradeItem onClick={ () => {
                    dispatch({ type: 'toggle-list' });
                } } item={ item }/>) }
            </Scrollbars>

        </div>
    );
};
