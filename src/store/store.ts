import { useDispatch } from 'react-redux';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { appReducer } from './app/appReducer';
import { userReducer } from './user/userReducer';


export const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
};

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
