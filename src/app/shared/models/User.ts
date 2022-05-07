export interface User {
    id: string;
    name: {
        firstname: string;
        lastname: string
    }
    email: string;
    address: {
        postcode: number;
        city: string;
        street: string
    }
}