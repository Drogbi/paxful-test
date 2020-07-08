import React, { Reducer, useEffect, useMemo, useReducer } from 'react';
import css from './Trades.module.scss';
import { TradesList } from './TradesList/TradesList';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../shared/constants';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { TradesChat } from './TradesChat/TradesChat';
import { TradeItemInfo } from './TradeItemInfo/TradeItemInfo';
import { Button } from '../../../shared/components/controls';
import { useScreenSize } from './shared/hooks';
import { faInfoCircle, faListUl } from '@fortawesome/free-solid-svg-icons';
import { getDefaultLayoutState, TradesLayoutAction, tradesLayoutReducer, TradesLayoutState } from './shared/reducers/tradesLayoutReducer';

export const Trades: React.FC = () => {
    const match = useRouteMatch({ path: `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }`, exact: true });
    const screenSize = useScreenSize();
    const initialState: TradesLayoutState = useMemo(() => getDefaultLayoutState(screenSize, match), []);
    const [state, dispatch] = useReducer<Reducer<TradesLayoutState, TradesLayoutAction>>(tradesLayoutReducer, initialState);
    const [isListOpen, isChatOpen, isInfoOpen] = state;

    useEffect(() => {
        dispatch({ type: 'handle-state-change', state: getDefaultLayoutState(screenSize, match) });
    }, [screenSize]);

    useEffect(() => {
        dispatch({ type: 'handle-state-change', state: getDefaultLayoutState(screenSize, match) });
    }, [match?.path]);


    const dispatchWithScreenSize = (action: Exclude<TradesLayoutAction, { type: 'handle-state-change', state: TradesLayoutState }>) => dispatch({ screenSize, ...action });
    const isInfoButtonVisible = !isInfoOpen && !match && (!isListOpen || isChatOpen);
    const isListButtonVisible = !isListOpen && !match;

    return (
        <div className={ css.trades }>
            { isInfoButtonVisible && <Button color='gray' fill='none' icon={ faInfoCircle } className={ css.tradesInfoOpenButton } onClick={ () => dispatch({ type: 'toggle-info', screenSize }) }/> }
            { isListButtonVisible && <Button color='gray' fill='none' icon={ faListUl } className={ css.tradesListOpenButton } onClick={ () => dispatch({ type: 'toggle-list', screenSize }) }/> }
            { (isListOpen) && <TradesList dispatch={ dispatchWithScreenSize } className={ css.tradesList }/> }
            <Switch>
                <Route path={ `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }/:id` }>
                    { isChatOpen && <TradesChat className={ css.tradesChat }/> }
                    { isInfoOpen && <TradeItemInfo dispatch={ dispatchWithScreenSize } className={ css.tradeItemInfo }/> }
                </Route>
            </Switch>
        </div>
    );
};
