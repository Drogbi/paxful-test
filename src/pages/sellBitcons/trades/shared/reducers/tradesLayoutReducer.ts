import { TradesLayout } from '../types';
import React from 'react';

export type TradesLayoutState = [boolean, boolean, boolean] // tuple that represents visibility of layout parts [TradeList, TradeChat, TradeItemInfo];
export type TradesLayoutAction =
    | { type: 'toggle-list', screenSize: TradesLayout }
    | { type: 'toggle-info', screenSize: TradesLayout }
    | { type: 'handle-state-change', state: TradesLayoutState }


/* This solution may seems massive but I really have tried different ways to handle 3 columns layout in different ways.
All my tries had been leading to the unsupportable handlers in different components or strange media queries. So I think this is great solution for this kind of layout.
The idea is handle layout changes in one place instead of handle layout change in different components.
*/
export const tradesLayoutReducer: React.Reducer<TradesLayoutState, TradesLayoutAction> = (state, action) => {
    switch (action.type) {
        case 'toggle-list':
            if (action.screenSize === TradesLayout.SMALL) {
                if (state[0]) {
                    return [false, true, false];
                } else {
                    return [true, false, false];
                }
            }
            if (action.screenSize === TradesLayout.MEDIUM) {
                if (state[0]) {
                    return [false, true, true];
                } else {
                    return [true, true, false];
                }
            }
            return [true, true, true];
        case 'toggle-info': {
            if (action.screenSize === TradesLayout.SMALL) {
                if (state[2]) {
                    return [false, true, false];
                } else {
                    return [false, false, true];
                }
            }
            if (action.screenSize === TradesLayout.MEDIUM) {
                if (state[2]) {
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

export const getDefaultLayoutState = (screen: TradesLayout, match: any): TradesLayoutState => {
    if (match) {
        return [true, true, true];
    }
    switch (screen) {
        case TradesLayout.SMALL:
            return [false, true, false];
        case TradesLayout.MEDIUM:
            return [false, true, true];
        case TradesLayout.LARGE:
            return [true, true, true];
    }
};
