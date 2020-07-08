import React, { Dispatch } from 'react';
import css from './TradeItemInfo.module.scss';
import { Avatar, Button, Rating } from '../../../../shared/components';
import { useCurrentTrade } from '../shared/hooks';
import { useDispatch } from 'react-redux';
import { deleteTrade, releaseTrade, reopenTrade } from '../shared/reducers/tradesSlice';
import { IHaveClassname, TradeStatus as TradeStatusType } from '../../../../shared/types';
import { TradeItemInfoBlock } from './TradeItemInfoBlock';
import { useBitcoinAmount } from '../../../../shared/hooks';
import cx from 'classnames';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../../shared/constants';
import { useHistory } from 'react-router-dom';
import { TradeItemInfoDate } from './TradeItemInfoDate';
import { TradeStatus } from '../shared/components';

interface TradeItemInfoProps extends IHaveClassname {
    dispatch: Dispatch<any>;
}

export const TradeItemInfo: React.FC<TradeItemInfoProps> = ({ className, dispatch: propsDispatch }) => {
    const trade = useCurrentTrade();
    const user = trade.user;
    const dispatch = useDispatch();
    const bitcoinAmount = useBitcoinAmount(trade.price);
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


    const isPaid = trade.status === TradeStatusType.PAID;

    return (
        <div className={ cx(css.tradeItemInfo, className) }>
            <Button color='gray' fill='none' icon={ faTimes } className={ css.closeIcon } onClick={ () => propsDispatch({ type: 'toggle-info' }) }/>
            <div className={ css.user }>You are trading with <b>{ `${ user.name }` } </b></div>
            <TradeItemInfoDate date={ trade.startDate }/>
            <Button
                shadow
                label={ isPaid ? 'Reopen trade' : 'Release bitcoins' }
                color={ isPaid ? 'gray' : 'green-secondary' }
                onClick={ isPaid ? onReopen : onRelease }
            />
            <div className={ css.info }>
                <TradeItemInfoBlock>
                    <Avatar className={ css.avatar } url={ user.avatarUrl }/>
                    <Rating className={ css.rating } { ...user.rating }/>
                </TradeItemInfoBlock>
                <TradeItemInfoBlock label='# OF TRADES'>{ user.tradesCount }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='TRADE STATUS'><TradeStatus status={ trade.status }/></TradeItemInfoBlock>
                <TradeItemInfoBlock label='TRADE HASH'>{ trade.tradeHash }</TradeItemInfoBlock>
                <TradeItemInfoBlock label={ `AMOUNT ${ trade.price.currency }` }>{ trade.price.value }</TradeItemInfoBlock>
                <TradeItemInfoBlock label='AMOUNT BTC'>{ bitcoinAmount.value }</TradeItemInfoBlock>
            </div>
            <Button shadow color='red-secondary' label='Delete trade' className={ css.deleteButton } onClick={ onTradeDelete } icon={ faTrashAlt }/>
        </div>
    );
};
