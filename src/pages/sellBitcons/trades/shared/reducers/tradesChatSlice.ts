import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TradeModel } from '../../../../../shared/types';

type State = Record<number, string>;
type CaseReducers = {
    handleChatInputChange: CaseReducer<State, PayloadAction<{ trade: TradeModel, inputValue: string }>>;
}


const tradesChatSlice = createSlice<State, CaseReducers>({
    name: 'trades',
    initialState: [],
    reducers: {
        handleChatInputChange: (state, { payload }) => {
            state[payload.trade.id] = payload.inputValue;
        }
    }
});

export const { handleChatInputChange } = tradesChatSlice.actions;

export default tradesChatSlice.reducer;
