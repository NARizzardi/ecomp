import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { authenticationCall } from './apiCall';
import { setAuthorizationToken, EXPIRE_TIME } from '../../Services/api';
import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { User } from '../../Models/User';

export function* loginRequest(instance: authenticationCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.loginRequest,
            action.payload,
        );
        if (response.ok) {
            const data = response.data.dados;
            let date = new Date();
            date.setDate(date.getDate() + EXPIRE_TIME);
            const user: User = {
                name: data.user.nome,
                email: data.user.email,
                token: {
                    access_token: data.Authorization,
                    expires_date: +date,
                },
            };
            setAuthorizationToken(data.Authorization);
            yield put(AuthenticationActions.loginSuccess(user));
        } else {
            const error = response.data.mensagem;
            yield put(AuthenticationActions.loginFailure(error));
        }
    } catch (error) {
        yield put(AuthenticationActions.loginFailure(error.message));
    }
}

export function* tokenRequest(instance: authenticationCall, action: AnyAction) {
    setAuthorizationToken(action.payload);
    try {
        const response: ApiResponse<any> = yield call(instance.tokenRequest);
        if (response.ok) {
            const data = response.data.dados;
            let date = new Date();
            date.setDate(date.getDate() + EXPIRE_TIME);
            const user: User = {
                name: data.user.nome,
                email: data.user.email,
                token: {
                    access_token: data.Authorization,
                    expires_date: +date,
                },
            };
            setAuthorizationToken(data.Authorization);
            yield put(AuthenticationActions.tokenSuccess(user));
        } else {
            const error = response.data.mensagem;
            yield put(AuthenticationActions.tokenFailure(error));
        }
    } catch (error) {
        yield put(AuthenticationActions.tokenFailure(error.message));
    }
}
