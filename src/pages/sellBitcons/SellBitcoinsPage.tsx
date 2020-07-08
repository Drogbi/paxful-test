import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Navigation } from '../../shared/components/common/Navigation';
import { DISPUTES_NAV, MY_TEAM_NAV, OVERVIEW_NAV, SELL_BITCOINS_ROUTE, TRADE_HISTORY_NAV, TRADES_NAV, YOUR_OFFERS_NAV } from '../../shared/constants';
import { Page, PagePlaceholder } from '../../shared/components';
import { Trades } from './trades/Trades';

interface SellBitcoinsPageProps {

}

export const SellBitcoinsPage: React.FC<SellBitcoinsPageProps> = (props) => {
    let { path } = useRouteMatch();
    return (
        <Page>
            <Navigation
                items={ [
                    { to: OVERVIEW_NAV, label: 'Overview' },
                    { to: TRADES_NAV, label: 'Trades' },
                    { to: DISPUTES_NAV, label: 'Disputes' },
                    { to: YOUR_OFFERS_NAV, label: 'Your offers' },
                    { to: MY_TEAM_NAV, label: 'My team' },
                    { to: TRADE_HISTORY_NAV, label: 'Trade history' },
                ] }
            />
            <Switch>
                <Route path={ `${ path }${ TRADES_NAV }` }>
                    <Trades/>
                </Route>
                <Route path={ `${ SELL_BITCOINS_ROUTE }/*` }>
                    <PagePlaceholder/>
                </Route>
                <Redirect to={ `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }` }/>
            </Switch>
        </Page>
    );
};
