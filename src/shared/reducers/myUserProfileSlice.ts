import { createReducer } from '@reduxjs/toolkit';
import { UserModel } from '../types';

type State = UserModel | null;

export default createReducer<State>(null, {});
