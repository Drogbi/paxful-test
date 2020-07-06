import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Trades } from './trades/Trades';
import { Navigation, NavigationItem } from '../../shared/components/common/Navigation';
import {
    DISPUTES_NAV, MY_TEAM_NAV, OVERVIEW_NAV, TRADE_HISTORY_NAV, TRADES_NAV, YOUR_OFFERS_NAV
} from '../../shared/constants';
import { Page } from '../../shared/components';

interface SellBitcoinsPageProps {

}

export const SellBitcoinsPage: React.FC<SellBitcoinsPageProps> = (props) => {
    let { path } = useRouteMatch();
    return (
        <Page>
            <Navigation>
                <NavigationItem to={ OVERVIEW_NAV } label='Overview'/>
                <NavigationItem to={ TRADES_NAV } label='Trades'/>
                <NavigationItem to={ DISPUTES_NAV } label='Disputes'/>
                <NavigationItem to={ YOUR_OFFERS_NAV } label='Your offers'/>
                <NavigationItem to={ MY_TEAM_NAV } label='My team'/>
                <NavigationItem to={ TRADE_HISTORY_NAV } label='Trade history'/>
            </Navigation>
            <Switch>
                <Route path={ `${ path }${ TRADES_NAV }` }>
                    <Trades/>
                </Route>
            </Switch>
        </Page>
    );
};
