import tradesReducer from '../../pages/sellBitcons/trades/tradesSlice';
import currentUserReducer from './currentUserSlice';
import myUserProfileReducer from './myUserProfile';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
        trades: tradesReducer,
        currentUser: currentUserReducer,
        myUserProfile: myUserProfileReducer
})

export type RootState = ReturnType<typeof rootReducer>
