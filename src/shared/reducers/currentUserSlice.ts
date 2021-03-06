import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../types';

type State = UserModel | null;
type CaseReducers = {
    changeUser: CaseReducer<State, PayloadAction<UserModel>>;
}

const currentUserSlice = createSlice<State, CaseReducers>({
    name: 'currentUser',
    initialState: null,
    reducers: {
        changeUser(state, { payload }) {
            return payload;
        },
    }
});

export const { changeUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
