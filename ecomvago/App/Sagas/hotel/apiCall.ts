import { ApiResponse } from 'apisauce';

import { api } from '../../Services/api';
import { Hoteis } from '../../Models/Hoteis';

export const hotelCall = {
    hotelRequest: (): Promise<ApiResponse<Hoteis>> => {
        return api.get<Hoteis>('/a5bdb2c1-e61f-4f0b-ab47-01c9743fa577');
    },
};

export type hotelCall = typeof hotelCall;
