import React from 'react';
import css from './TradeItem.module.scss';
import { TradeModel } from '../../../../shared/types/data';
import { Link, useRouteMatch } from 'react-router-dom';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../../shared/constants';
import { Avatar } from '../../../../shared/components';
import cx from 'classnames';

interface TradeItemProps {
    item: TradeModel;
}

export const TradeItem: React.FC<TradeItemProps> = ({ item }) => {
    const match = useRouteMatch(`${SELL_BITCOINS_ROUTE}${TRADES_NAV}/${item.id}`);
    return (
        <Link className={ cx(css.tradeItem, match && css.active) } to={ `${SELL_BITCOINS_ROUTE}${TRADES_NAV}/${item.id}` }>
            <div className={ css.notificationIcon }></div>
            <div className={ css.info }>
                <div className={ css.type }>
                    { `${item.user.name}` } <b>is { `${item.type.toLowerCase()}` }</b>
                </div>
                <div className={ css.product }>
                    { item.product.name }
                </div>
                <div className={ css.price }>
                    { `${item.price.value} ${item.price.currency}` }
                </div>
            </div>
            <div className={ css.status }>
                <Avatar url={ item.user.avatarUrl }/>
                <div className={ css.itemStatus }>{ item.status }</div>
            </div>
        </Link>
    );
};
