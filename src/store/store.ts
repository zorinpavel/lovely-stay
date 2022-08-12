import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './app/appReducer';
import { userReducer } from './user/userReducer';

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
