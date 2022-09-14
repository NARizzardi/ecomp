import { Hoteis } from '../../Models/Hoteis';
import { RequestStatus } from '../../Models/RequestStatus';

export interface HotelState {
    hotel?: Hoteis | null;
    message: string | null;
    status: RequestStatus | null;
}
