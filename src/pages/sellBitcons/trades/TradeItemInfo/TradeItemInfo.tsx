import React from 'react';
import css from './TradeItemInfo.module.scss';
import { TradeItemInfoBlock } from './TradeItemInfoBlock';
import { Avatar, Button } from '../../../../shared/components';
import { useCurrentTrade } from '../hooks';

interface TradeItemInfoProps {

}

export const TradeItemInfo: React.FC<TradeItemInfoProps> = (props) => {
    const trade = useCurrentTrade();
    const user = trade.user;

    return (
        <div className={ css.tradeItemInfo }>
            <div className={ css.user }>You are trading with <b>{ `${user.name}` } </b></div>
            <div className={ css.startFrom }></div>
            <Button label='Release bitcoins' color='green-secondary'/>
            <div className={ css.info }>
                <TradeItemInfoBlock>
                    <Avatar url={ user.avatarUrl }/>
                    <div>{ `${user.rating.likes} / ${user.rating.dislikes}` }</div>
                </TradeItemInfoBlock>
                <TradeItemInfoBlock label='# OF TRADES'>{ user.tradesCount }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='TRADE STATUS'>{ trade.status }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='TRADE HASH'>{ trade.tradeHash }</TradeItemInfoBlock>
                <TradeItemInfoBlock label={ `AMOUNT ${user.amountBalance.currency}` }>{ user.amountBalance.value }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='AMOUNT BTC'></TradeItemInfoBlock>
            </div>
        </div>
    );
};
