import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import css from './App.module.scss';
import { Header, PagePlaceholder } from './shared/components';
import { SellBitcoinsPage } from './pages/sellBitcons/SellBitcoinsPage';
import { SELL_BITCOINS_ROUTE } from './shared/constants';
import { useBitcoinSubscription } from './shared/hooks/useBitcoinPriceSubscription';

function App() {
    useBitcoinSubscription();

    return (
        <div className={ css.App }>
            <Router>
                <Header/>
                <Switch>
                    <Route path={ SELL_BITCOINS_ROUTE }>
                        <SellBitcoinsPage/>
                    </Route>
                    <Route>
                        <PagePlaceholder/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
