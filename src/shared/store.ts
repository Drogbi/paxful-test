import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { initialData } from '../data';

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialData
});
