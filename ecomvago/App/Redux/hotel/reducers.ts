import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { HotelState } from './state';
import { RequestStatus } from '../../Models/RequestStatus';
import { HotelActionTypes } from './actionTypes';

const initialState: HotelState = {
    hotel: null,
    message: null,
    status: RequestStatus.NOOP,
};

const hotelRequest: Reducer = (state: HotelState): HotelState => {
    return { ...state, status: RequestStatus.WIP };
};

const hotelSuccess: Reducer = (
    state: HotelState,
    actions: AnyAction,
): HotelState => {
    return { ...state, hotel: actions.payload, status: RequestStatus.SUCCESS };
};

const hotelFailure: Reducer = (
    state: HotelState,
    actions: AnyAction,
): HotelState => {
    return {
        ...state,
        message: actions.payload,
        status: RequestStatus.FAILURE,
    };
};

const cleanState: Reducer = (state: HotelState): HotelState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const hotelReducer: Reducer = createReducer(initialState, {
    [HotelActionTypes.HOTEL_REQUEST]: hotelRequest,
    [HotelActionTypes.HOTEL_SUCCESS]: hotelSuccess,
    [HotelActionTypes.HOTEL_FAILURE]: hotelFailure,
    [HotelActionTypes.CLEAN_STATE]: cleanState,
});
