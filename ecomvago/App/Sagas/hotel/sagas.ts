import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { hotelCall } from './apiCall';

import { HotelActions } from '../../Redux/hotel/actionCreators';

export function* hotelRequest(instance: hotelCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(instance.hotelRequest);
        if (response.ok) {
            const hotelArray = response.data;
            yield put(HotelActions.hotelSuccess(hotelArray));
        } else {
            const error = response.data.mensagem;
            yield put(HotelActions.hotelFailure(error));
        }
    } catch (error) {
        yield put(HotelActions.hotelFailure(error.message));
    }
}
