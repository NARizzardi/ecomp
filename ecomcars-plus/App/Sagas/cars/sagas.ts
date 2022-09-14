import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { CarsCall } from './apiCall';
import { CarsActions } from '../../Redux/cars/actionCreators';

export function* carRequest(instance: CarsCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.carsRequest,
        );
        console.log('not an error')
        if (response.ok) {
            const carArray = response.data;
            yield put(CarsActions.carsSuccess(carArray));
        } else {
            const error = response.data.mensagem;
            yield put(CarsActions.carsFailure(error));
        }
    } catch (error: any) {
        console.log('error')
        yield put(CarsActions.carsFailure(error.message));
    }
}
