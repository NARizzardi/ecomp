import { Token } from './Token';

export interface User {
    name: string | null;
    email: string | null;
    token: Token | null;
}
