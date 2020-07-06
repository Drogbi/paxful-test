import { combineEpics } from 'redux-observable';
import { fetchBitcoinPriceEpic } from './fetchBitcoinPriceEpic';

export const rootEpic = combineEpics(
    fetchBitcoinPriceEpic
);
