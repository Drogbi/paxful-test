import React from 'react';
import './App.css';
import { Header } from './shared/components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SellBitcoinsPage } from './pages/sellBitcons/SellBitcoinsPage';
import { Provider, useDispatch } from 'react-redux';
import { store } from './shared/store';
import { SELL_BITCOINS_ROUTE } from './shared/constants';
import { interval, timer } from 'rxjs';
import { fetchBitcoinPrice } from './shared/reducers/bitcoinPriceSlice';
import { Currency } from './shared/types';

function App() {
    const dispatch = useDispatch();
    const observable = timer(0, 100000);
    observable.subscribe(() => dispatch(fetchBitcoinPrice(Currency.USD)));

    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path={ SELL_BITCOINS_ROUTE }>
                        <SellBitcoinsPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
