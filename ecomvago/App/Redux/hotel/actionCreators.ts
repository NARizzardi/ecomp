import { createAction } from '@reduxjs/toolkit';

import { Hoteis } from '../../Models/Hoteis';
import { HotelActionTypes } from './actionTypes';

export const HotelActions = {
    hotelRequest: createAction(HotelActionTypes.HOTEL_REQUEST),
    hotelSuccess: createAction<Hoteis>(HotelActionTypes.HOTEL_SUCCESS),
    hotelFailure: createAction<string>(HotelActionTypes.HOTEL_FAILURE),

    cleanState: createAction(HotelActionTypes.CLEAN_STATE),
};

export type HotelActions = typeof HotelActions;
