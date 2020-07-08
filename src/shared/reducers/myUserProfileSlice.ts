import { createReducer } from '@reduxjs/toolkit';
import { UserModel } from '../types';

type State = UserModel | null;

//just to store my user profile
export default createReducer<State>(null, {});
