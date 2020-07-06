import React from 'react';
import css from './Trades.module.scss';
import { TradesList } from './TradesList/TradesList';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../shared/constants';
import { Route, Switch } from 'react-router-dom';
import { TradesChat } from './TradesChat/TradesChat';
import { TradeItemInfo } from './TradeItemInfo/TradeItemInfo';

interface TradesProps {

}

export const Trades: React.FC<TradesProps> = (props) => {
    return (
        <div className={ css.trades }>
            <TradesList/>
            <Switch>
                <Route path={ `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }/:id` }>
                    <TradesChat/>
                    <TradeItemInfo/>
                </Route>
            </Switch>
        </div>
    );
};
