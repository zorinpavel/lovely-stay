import { createSlice } from '@reduxjs/toolkit';
import { UserDataType, ErrorType } from 'types';


interface AppInitialType {
    loading: boolean,
    users: UserDataType[],
    totalCount: number,
    error?: ErrorType,
}


const initialState: AppInitialType = {
    loading: false,
    users: [],
    totalCount: 0,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.totalCount = action.payload.total_count ?? 0;
            state.users = action.payload.items;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    }
});

export const appReducer = appSlice.reducer;
export const { setLoading, setUsers, setError } = appSlice.actions;
