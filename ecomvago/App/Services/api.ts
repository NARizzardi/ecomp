import apisauce, { ApisauceInstance } from 'apisauce';

export const EXPIRE_TIME = 30;

export const instanceApi = (
    baseURL: string = 'https://run.mocky.io/v3/',
): ApisauceInstance => {
    const api: ApisauceInstance = apisauce.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 15000,
    });

    return api;
};

export const api = instanceApi();

export const setAuthorizationToken = (access_token: string) => {
    api.setHeader('Authorization', 'Bearer ' + access_token);
};

export default {
    api,
    setAuthorizationToken,
};
