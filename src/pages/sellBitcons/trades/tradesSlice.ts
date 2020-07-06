import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageModel, TradeModel } from '../../../shared/types/data';

type State = TradeModel[];
type CaseReducers = {
    deleteTrade: CaseReducer<State, PayloadAction<number>>;
    addTradeMessage: CaseReducer<State, PayloadAction<{ tradeId: number, message: MessageModel }>>;
}


const tradesSlice = createSlice<State, CaseReducers>({
    name: 'trades',
    initialState: [],
    reducers: {
        deleteTrade(state, action) {
            return state.filter((trade) => trade.id !== action.payload);
        },
        addTradeMessage: (state, action) => {
            const trade = state.find((trade) => trade.id === action.payload.tradeId) as TradeModel;
            /* I know it looks like a bad practice to mutate state, but Redux Tookit uses
               Immer Library to handle tree mutation and return new state */
            trade.messages.push(action.payload.message);
        },
    }
});

export const { deleteTrade, addTradeMessage } = tradesSlice.actions;

export default tradesSlice.reducer;
