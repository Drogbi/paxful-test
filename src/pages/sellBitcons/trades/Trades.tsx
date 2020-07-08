import React, { useEffect, useMemo, useReducer, useState } from 'react';
import css from './Trades.module.scss';
import { TradesList } from './TradesList/TradesList';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../shared/constants';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { TradesChat } from './TradesChat/TradesChat';
import { TradeItemInfo } from './TradeItemInfo/TradeItemInfo';
import { Button } from '../../../shared/components/controls';
import { useMedia } from 'react-use';
import cx from 'classnames';
import { useScreenSize } from './hooks';
import { faInfoCircle, faListUl } from '@fortawesome/free-solid-svg-icons';


interface TradesProps {

}

const tradesScreenReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'toggle-list':
            if (action.screenSize === 'small') {
                if (state[0]) {
                    return [false, true, false];
                } else {
                    return [true, false, false];
                }
            }
            if (action.screenSize === 'medium') {
                if (state[0]) {
                    return [false, true, true];
                } else {
                    return [true, true, false];
                }
            }
            return [true, true, true];
        case 'toggle-info': {
            if (action.screenSize === 'small') {
                if (state[3]) {
                    return [false, true, false];
                } else {
                    return [false, false, true];
                }
            }
            if (action.screenSize === 'medium') {
                if (state[3]) {
                    return [true, false, false];
                } else {
                    return [false, true, true];
                }
            }
            return [true, true, true];
        }
        case 'handle-state-change': {
            return action.state;
        }
        default:
            return [true, true, true];
    }
};

const initState = (screen: string, match: any) => {
    if (match) {
        return [true];
    }
    switch (screen) {
        case 'small':
            return [false, true, false];
        case 'medium':
            return [false, true, true];
        case 'large':
            return [true, true, true];
    }
};

export const Trades: React.FC<TradesProps> = (props) => {
    const match = useRouteMatch({ path: `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }`, exact: true });
    const screenSize = useScreenSize();
    const initialState = useMemo(() => initState(screenSize, match), []);
    const [state, dispatch] = useReducer(tradesScreenReducer, initialState);
    const [isListOpen, isChatOpen, isInfoOpen] = state;

    useEffect(() => {
        dispatch({ type: 'handle-state-change', state: initState(screenSize, match) });
    }, [screenSize]);
    useEffect(() => {
        dispatch({ type: 'handle-state-change', state: initState(screenSize, match) });
    }, [match?.path]);


    const dispatchWithScreenSize = (action: any) => dispatch({ screenSize, ...action });

    return (
        <div className={ css.trades }>
            { !isListOpen && !match && <Button color='gray' fill='none' icon={ faListUl } className={ css.tradesListOpenButton } onClick={ () => dispatch({ type: 'toggle-list', screenSize }) }/> }
            { !isInfoOpen && !match && <Button color='gray' fill='none' icon={ faInfoCircle } className={ css.tradesInfoOpenButton } onClick={ () => dispatch({ type: 'toggle-info', screenSize }) }/> }
            { (isListOpen) && <TradesList dispatch={ dispatchWithScreenSize } className={ css.tradesList }/> }
            <Switch>
                <Route path={ `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }/:id` }>
                    { isChatOpen && <TradesChat className={ css.tradesChat }/> }
                    { isInfoOpen && <TradeItemInfo className={ css.tradeItemInfo }/> }
                </Route>
            </Switch>
        </div>
    );
};
