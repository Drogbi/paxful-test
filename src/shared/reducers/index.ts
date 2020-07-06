import tradesReducer from '../../pages/sellBitcons/trades/tradesSlice';
import currentUserReducer from './currentUserSlice';
import myUserProfileReducer from './myUserProfileSlice';
import bitcoinPriceReducer from './bitcoinPriceSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    trades: tradesReducer,
    currentUser: currentUserReducer,
    myUserProfile: myUserProfileReducer,
    bitcoinPrice: bitcoinPriceReducer
});

export type RootState = ReturnType<typeof rootReducer>
