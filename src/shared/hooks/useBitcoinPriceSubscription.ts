import { useDispatch } from 'react-redux';
import { timer } from 'rxjs';
import { fetchBitcoinPrice } from '../reducers/bitcoinPriceSlice';
import { Currency } from '../types';
import { useEffect } from 'react';

export const useBitcoinSubscription = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const observable = timer(0, 100000);
        const subscription = observable.subscribe(() => dispatch(fetchBitcoinPrice(Currency.USD)));
        return () => subscription.unsubscribe();
    }, [])
}

