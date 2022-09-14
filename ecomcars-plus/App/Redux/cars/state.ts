import { Cars } from '../../Models/Cars';
import { RequestStatus } from '../../Models/RequestStatus';

export interface CarsState {
    car?: Cars | null;
    message?: string | null;
    status: RequestStatus | null;
}
