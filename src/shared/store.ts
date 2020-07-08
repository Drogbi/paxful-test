import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { initialData } from '../data';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
    preloadedState: initialData
});

epicMiddleware.run(rootEpic);
