import React, { useEffect } from 'react';
import css from './TradeItem.module.scss';
import { Currency, TradeModel, UserModel } from '../../../../shared/types';
import { Link, useRouteMatch } from 'react-router-dom';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../../shared/constants';
import { Avatar } from '../../../../shared/components';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { readMessages } from '../shared/reducers/tradesSlice';
import { useBitcoinAmount, useTypedSelector } from '../../../../shared/hooks';
import { TradeStatus } from '../shared/components';

interface TradeItemProps {
    item: TradeModel;
    onClick: () => void
}


export const TradeItem: React.FC<TradeItemProps> = ({ item, onClick }) => {
    const match = useRouteMatch(`${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }/${ item.id }`);
    const myUserProfile = useTypedSelector((state) => state.myUserProfile) as UserModel;
    const currentUser = useTypedSelector((state) => state.currentUser) as UserModel;
    const bitcoinPrice = useBitcoinAmount(item.price);

    const dispatch = useDispatch();

    useEffect(() => {
        if (match && currentUser.id === myUserProfile.id) {
            dispatch(readMessages(item));
        }
    }, [match]);


    return (
        <Link onClick={ onClick } className={ cx(css.tradeItem, match && css.active) } to={ `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }/${ item.id }` }>
            <div title={ item.isNewMessagesAvailable ? 'New messages available' : '' } className={ cx(css.notificationIcon, item.isNewMessagesAvailable && css.notificationIconActive) }/>
            <div className={ css.info }>
                <div className={ css.type }>
                    { `${ item.user.name }` } <b>is { `${ item.type.toLowerCase() }` }</b>
                </div>
                <div className={ css.product }>
                    { item.product.name }
                </div>
                <div className={ css.price }>
                    { `${ item.price.value } ${ item.price.currency }` }
                </div>
                <div className={ css.bitcoinPrice }>
                    { bitcoinPrice.isLoading ? 'Loading...' : `(${ bitcoinPrice.value } BTC)` }
                </div>
            </div>
            <div className={ css.status }>
                <Avatar url={ item.user.avatarUrl }/>
                <TradeStatus status={ item.status } className={ css.itemStatus }/>
            </div>
        </Link>
    );
};
