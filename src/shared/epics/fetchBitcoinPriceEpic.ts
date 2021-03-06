import { Epic, ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Currency } from '../types';
import { fetchBitcoinPrice, fetchBitcoinPriceFulfilled } from '../reducers/bitcoinPriceSlice';

type FetchedPrice = { bpi: Record<Currency, { code: string, rate_float: number }> };

export const fetchBitcoinPriceEpic: Epic = (action$) => action$.pipe(
    ofType(fetchBitcoinPrice.type),
    mergeMap((action: { payload: Currency, type: string }) =>
        ajax.getJSON<any>(`https://api.coindesk.com/v1/bpi/currentprice/${ action.payload }.json`).pipe(
            map((response: FetchedPrice) => response.bpi[action.payload]),
            map((price: { code: string, rate_float: number }) => fetchBitcoinPriceFulfilled({ currency: price.code as Currency, value: price.rate_float }))
        )
    )
);
