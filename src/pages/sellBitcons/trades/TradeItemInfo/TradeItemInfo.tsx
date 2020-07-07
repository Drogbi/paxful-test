import React, { useState } from 'react';
import css from './TradeItemInfo.module.scss';
import { Avatar, Button } from '../../../../shared/components';
import { useCurrentTrade } from '../hooks';
import { useDispatch } from 'react-redux';
import { deleteTrade, releaseTrade, reopenTrade } from '../tradesSlice';
import { IHaveClassname, TradeStatus } from '../../../../shared/types';
import { TradeItemInfoBlock } from './TradeItemInfoBlock';
import { useBitcoinAmount } from '../../../../shared/hooks';
import cx from 'classnames';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../../shared/constants';
import { useHistory } from 'react-router-dom';

interface TradeItemInfoProps extends IHaveClassname {
    onOpen?: () => void;
    isOpen?: boolean;
}

export const TradeItemInfo: React.FC<TradeItemInfoProps> = ({ isOpen, className }) => {
    const trade = useCurrentTrade();
    const user = trade.user;
    const dispatch = useDispatch();
    const bitcoinAmount = useBitcoinAmount(user.amountBalance)
    const history = useHistory();

    const onRelease = () => {
        dispatch(releaseTrade(trade));
    };

    const onReopen = () => {
        dispatch(reopenTrade(trade));
    };

    const onTradeDelete = () => {
        dispatch(deleteTrade(trade.id));
        history.push(`${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }`);
    };


    const isPaid = trade.status === TradeStatus.PAID;

    return (
        <div className={ cx(css.tradeItemInfo, isOpen && css.isOpen, className) }>
            <div className={ css.user }>You are trading with <b>{ `${ user.name }` } </b></div>
            <div className={ css.startDate }>{ trade.startDate }</div>
            <Button
                shadow
                label={ isPaid ? 'Reopen trade' : 'Release bitcoins' }
                color={ isPaid ? 'gray' : 'green-secondary' }
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
            <Button shadow color='red-secondary' label='Delete trade' className={ css.deleteButton } onClick={ onTradeDelete } icon={ faTrashAlt }/>
        </div>
    );
};
