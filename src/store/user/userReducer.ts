import { createSlice } from '@reduxjs/toolkit';
import { UserDataType, ErrorType, RepoDataType } from 'types';


interface AppInitialType {
    loading: boolean,
    data?: UserDataType,
    error?: ErrorType,
    repos?: RepoDataType[],
}


const initialState: AppInitialType = {
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.data = action.payload;
        },
        setRepos(state, action) {
            state.repos = action.payload;
        },
    }
});

export const userReducer = userSlice.reducer;
export const { setUser, setRepos } = userSlice.actions;
