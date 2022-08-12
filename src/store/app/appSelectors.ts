import { createSelector } from '@reduxjs/toolkit';
import type { UserDataType, ErrorType } from 'types';
import { RootState } from 'store';


export const usersSelector = createSelector((state: RootState) => state.app.users,
    (users: UserDataType[]) => users
);

export const countSelector = createSelector((state: RootState) => state.app.totalCount,
    (totalCount: number) => totalCount
);

export const loadingSelector = createSelector((state: RootState) => state.app.loading,
    (loading: boolean) => loading
);

export const errorSelector = createSelector((state: RootState) => state.app.error,
    (error?: ErrorType) => error
);
