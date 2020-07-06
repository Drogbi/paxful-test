import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency, CurrencyAmountModel } from '../types';

type State = { isLoading: boolean; prices: Record<Currency, number> };
type CaseReducers = {
    fetchBitcoinPrice: CaseReducer<State, PayloadAction<Currency>>;
    fetchBitcoinPriceFulfilled: CaseReducer<State, PayloadAction<CurrencyAmountModel>>
}

const bitcoinPriceSlice = createSlice<State, CaseReducers>({
    name: 'currentUser',
    initialState: { prices: {} } as State,
    reducers: {
        fetchBitcoinPrice(state, action) {
            state.isLoading = true;
        },
        fetchBitcoinPriceFulfilled(state, action) {
            const price = action.payload;
            state.isLoading = false;
            state.prices[price.currency] = price.value;
        }
    }
});

export const { fetchBitcoinPrice, fetchBitcoinPriceFulfilled } = bitcoinPriceSlice.actions;



export default bitcoinPriceSlice.reducer;
