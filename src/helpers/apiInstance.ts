import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import settings from 'settings';


const ApiInstance = (): AxiosInstance => {
    const _API = axios.create({
        baseURL: settings.API_PATH,
        responseType: 'json',
        withCredentials: false,
        headers: {
            'Content-Type': 'application/json',
            // 'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=40000',
        },
    });

    _API.interceptors.request.use(request => {
        // if(!request.headers)
        //     request.headers = {};

        if(process.env.NODE_ENV === 'development') {
            request.params = {
                ...request.params,
                debug: true
            };
        }

        return request;
    });

    _API.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            return Promise.reject(error.response);
        }
    );

    return _API;
};

const API = ApiInstance();

export { ApiInstance, API };
