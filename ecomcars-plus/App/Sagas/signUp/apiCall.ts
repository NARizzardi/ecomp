import { ApiResponse } from 'apisauce';

import { api } from '../../Services/api';
import { SignUp } from '../../Models/SignUp';
import { User } from '../../Models/User';

export const signUpCall = {
    signUpRequest: (signUpInfo: SignUp): Promise<ApiResponse<User>> => {
        return api.post<User>(
            '4aa5bb0c-3368-478c-aea4-eb4e9a47649a?mocky-delay=1000ms',
            signUpInfo,
        );
    },
};

export type signUpCall = typeof signUpCall;
