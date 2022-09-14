import { ApiResponse } from 'apisauce';

import { Cars } from '../../Models/Cars';
import { api } from '../../Services/api';

export const CarsCall = {
    carsRequest: (): Promise<ApiResponse<Cars>> => {
        return api.post<Cars>(
            'c4fd1252-5fec-40ef-9d15-f357dbda5d9a',
        );
    },
};

export type CarsCall = typeof CarsCall;
