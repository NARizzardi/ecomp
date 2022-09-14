import { createAction } from '@reduxjs/toolkit';

import { CarsActionTypes } from './actionTypes';
import { Cars } from '../../Models/Cars';


export const CarsActions = {
    carsRequest: createAction(CarsActionTypes.CARS_REQUEST),
    carsSuccess: createAction<Cars>(CarsActionTypes.CARS_SUCCESS),
    carsFailure: createAction<string>(CarsActionTypes.CARS_FAILURE),

    cleanState: createAction(CarsActionTypes.CLEAN_STATE),
};

export type CarsActions = typeof CarsActions;
