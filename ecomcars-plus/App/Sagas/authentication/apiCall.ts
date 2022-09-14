import { ApiResponse } from 'apisauce';

import { Login } from '../../Models/Login';
import { User } from '../../Models/User';
import { api } from '../../Services/api';

export const authenticationCall = {
    loginRequest: (loginInfo: Login): Promise<ApiResponse<User>> => {
        return api.post<User>(
            '4aa5bb0c-3368-478c-aea4-eb4e9a47649a?mocky-delay=1000ms',
            loginInfo,
        );
    },

    tokenRequest: (): Promise<ApiResponse<User>> => {
        return api.post<User>('/api/refresh');
    },
};

export type authenticationCall = typeof authenticationCall;
