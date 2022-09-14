import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { CarsState } from './state';
import { CarsActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: CarsState = {
    car: null,
    message: null,
    status: RequestStatus.NOOP,
};

const carsRequest: Reducer = ( state: CarsState ): CarsState => {
    return {
        ...state,
        status: RequestStatus.WIP,
    };
};

const carsSuccess: Reducer = (
    state: CarsState,
    action: AnyAction,
): CarsState => {
    return { ...state, car: action.payload, status: RequestStatus.SUCCESS };
};

const carsFailure: Reducer = (
    state: CarsState,
    action: AnyAction,
): CarsState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const cleanState: Reducer = (state: CarsState): CarsState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const carsReducer: Reducer = createReducer(initialState, {
    [CarsActionTypes.CARS_REQUEST]: carsRequest,
    [CarsActionTypes.CARS_SUCCESS]: carsSuccess,
    [CarsActionTypes.CARS_FAILURE]: carsFailure,
    [CarsActionTypes.CLEAN_STATE]: cleanState,
});
