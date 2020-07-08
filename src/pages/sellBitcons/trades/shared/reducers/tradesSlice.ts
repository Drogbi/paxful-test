import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageModel, TradeModel, TradeStatus } from '../../../../../shared/types';

type State = TradeModel[];
type CaseReducers = {
    deleteTrade: CaseReducer<State, PayloadAction<number>>;
    addTradeMessage: CaseReducer<State, PayloadAction<{ trade: TradeModel, message: MessageModel }>>;
    readMessages: CaseReducer<State, PayloadAction<TradeModel>>;
    releaseTrade: CaseReducer<State, PayloadAction<TradeModel>>;
    reopenTrade: CaseReducer<State, PayloadAction<TradeModel>>;
}


const tradesSlice = createSlice<State, CaseReducers>({
    name: 'trades',
    initialState: [],
    reducers: {
        deleteTrade(state, action) {
            return state.filter((trade) => trade.id !== action.payload);
        },
        addTradeMessage: (state, { payload }) => {
            const trade = state.find((trade) => payload.trade.id === trade.id) as TradeModel;
            const message = payload.message;
            /* I know it looks like a bad practice to mutate state, but Redux Tookit uses
               Immer Library to handle tree mutation and return new state */
            trade.messages.push(message);
            trade.isNewMessagesAvailable = true;
        },
        readMessages: (state, { payload }) => {
            const trade = state.find((trade) => payload.id === trade.id) as TradeModel;
            trade.isNewMessagesAvailable = false;
        },
        releaseTrade: (state, { payload }) => {
            const trade = state.find((trade) => payload.id === trade.id) as TradeModel;
            trade.status = TradeStatus.PAID;
        },
        reopenTrade: (state, { payload }) => {
            const trade = state.find((trade) => payload.id === trade.id) as TradeModel;
            trade.status = TradeStatus.NOT_PAID;
        }
    }
});

export const { deleteTrade, addTradeMessage, readMessages, releaseTrade, reopenTrade } = tradesSlice.actions;

export default tradesSlice.reducer;
