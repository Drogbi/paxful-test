import { combineReducers } from 'redux';
import tradesReducer from '../../pages/sellBitcons/trades/shared/reducers/tradesSlice';
import tradesChatReducer from '../../pages/sellBitcons/trades/shared/reducers/tradesChatSlice';
import currentUserReducer from './currentUserSlice';
import myUserProfileReducer from './myUserProfileSlice';
import bitcoinPriceReducer from './bitcoinPriceSlice';

export const rootReducer = combineReducers({
    trades: tradesReducer,
    tradesChat: tradesChatReducer,
    currentUser: currentUserReducer,
    myUserProfile: myUserProfileReducer,
    bitcoinPrice: bitcoinPriceReducer
});

export type RootState = ReturnType<typeof rootReducer>
