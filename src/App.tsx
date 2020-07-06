import React from 'react';
import './App.css';
import { Header } from './shared/components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SellBitcoinsPage } from './pages/sellBitcons/SellBitcoinsPage';
import { Provider } from 'react-redux';
import { store } from './shared/store';
import { SELL_BITCOINS_ROUTE } from './shared/constants';

function App() {
    return (
        <div className="App">
            <Provider store={ store }>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path={ SELL_BITCOINS_ROUTE }>
                            <SellBitcoinsPage/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
