import { createSelector } from '@reduxjs/toolkit';
import type { RepoDataType, UserDataType } from 'types';
import { RootState } from 'store';


export const userSelector = createSelector((state: RootState) => state.user.data,
    (data?: UserDataType) => data
);

export const reposSelector = createSelector((state: RootState) => state.user.repos,
    (repos?: RepoDataType[]) => repos
);
