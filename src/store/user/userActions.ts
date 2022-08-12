import { API } from 'helpers/apiInstance';
import { AppDispatch, setLoading, setError, setUser, setRepos } from 'store';
import settings from 'settings';


export const getUser = (login?: string) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    API.get(settings.API_PATH + '/users/' + login)
        .then((response) => {
            dispatch(setUser(response.data));
        })
        .catch(error => {
            dispatch(setError({ status: error.status, message: error.data.message }));
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
};


export const getRepos = (login?: string) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    API.get(settings.API_PATH + '/users/' + login + '/repos')
        .then((response) => {
            console.log(response.data);
            dispatch(setRepos(response.data));
        })
        .catch(error => {
            dispatch(setError({ status: error.status, message: error.data.message }));
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
};
