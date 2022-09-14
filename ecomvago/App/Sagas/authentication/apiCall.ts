import { ApiResponse } from 'apisauce';

import { Login } from '../../Models/Login';
import { User } from '../../Models/User';
import { api } from '../../Services/api';

export const authenticationCall = {
    loginRequest: (loginInfo: Login): Promise<ApiResponse<User>> => {
        return api.post<User>('/api/login', loginInfo);
    },

    tokenRequest: (): Promise<ApiResponse<User>> => {
        return api.post<User>('/api/refresh');
    },
};

export type authenticationCall = typeof authenticationCall;
