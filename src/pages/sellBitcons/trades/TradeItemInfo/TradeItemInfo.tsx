import React from 'react';
import css from './TradeItemInfo.module.scss';
import { Avatar, Button } from '../../../../shared/components';
import { useCurrentTrade } from '../hooks';
import { useDispatch } from 'react-redux';
import { releaseTrade, reopenTrade } from '../tradesSlice';
import { TradeStatus } from '../../../../shared/types';
import { TradeItemInfoBlock } from './TradeItemInfoBlock';
import { useBitcoinAmount } from '../../../../shared/hooks';

interface TradeItemInfoProps {

}

export const TradeItemInfo: React.FC<TradeItemInfoProps> = (props) => {
    const trade = useCurrentTrade();
    const user = trade.user;
    const dispatch = useDispatch();
    const bitcoinAmount = useBitcoinAmount(user.amountBalance)

    const onRelease = () => {
        dispatch(releaseTrade(trade));
    };

    const onReopen = () => {
        dispatch(reopenTrade(trade));
    };

    const isPaid = trade.status === TradeStatus.PAID;

    return (
        <div className={ css.tradeItemInfo }>
            <div className={ css.user }>You are trading with <b>{ `${ user.name }` } </b></div>
            <div className={ css.startDate }>{ trade.startDate }</div>
            <Button
                shadow
                label={ isPaid ? 'Reopen trade' : 'Release bitcoins' }
                color={ isPaid ? 'red-secondary' : 'green-secondary' }
                onClick={ isPaid ? onReopen : onRelease }
            />
            <div className={ css.info }>
                <TradeItemInfoBlock>
                    <Avatar url={ user.avatarUrl }/>
                    <div>{ `+${ user.rating.likes } / -${ user.rating.dislikes }` }</div>
                </TradeItemInfoBlock>
                <TradeItemInfoBlock label='# OF TRADES'>{ user.tradesCount }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='TRADE STATUS'>{ trade.status }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='TRADE HASH'>{ trade.tradeHash }</TradeItemInfoBlock>
                <TradeItemInfoBlock label={ `AMOUNT ${ user.amountBalance.currency }` }>{ user.amountBalance.value }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='AMOUNT BTC'>{ bitcoinAmount.value }</TradeItemInfoBlock>
            </div>
        </div>
    );
};
