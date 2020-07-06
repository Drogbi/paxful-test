import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { initialData } from '../data';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
    preloadedState: initialData
});

epicMiddleware.run(rootEpic);
