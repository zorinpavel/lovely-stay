import { API } from 'helpers/apiInstance';
import { AppDispatch, setLoading, setUsers, setError } from 'store';
import settings from 'settings';


export const searchUsers = (searchString: string, page: number = 1) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setUsers({}));

    API.get(settings.API_PATH + '/search/users', {
        params: {
            q: searchString,
            sort: settings.ORDER_BY,
            per_page: settings.PAGE_SIZE,
            page: page,
        }
    })
        .then((response) => {
            if(response.data.items.length) {
                dispatch(setUsers(response.data));
            } else {
                dispatch(setError({ status: 400, message: 'Can\'t find any user' }));
            }
        })
        .catch(error => {
            dispatch(setError({ status: error.status, message: error.data.message }));
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
};
