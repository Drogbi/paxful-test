import { useDispatch } from 'react-redux';
import { timer } from 'rxjs';
import { useEffect } from 'react';
import { fetchBitcoinPrice } from '../reducers/bitcoinPriceSlice';
import { Currency } from '../types';

export const useBitcoinSubscription = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const observable = timer(0, 60 * 1000);
        const subscription = observable.subscribe(() => dispatch(fetchBitcoinPrice(Currency.USD)));
        return () => subscription.unsubscribe();
    }, [])
}

