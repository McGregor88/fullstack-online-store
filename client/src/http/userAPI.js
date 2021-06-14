import jwtDecode from 'jwt-decode';
import { $authHost, $host } from '.';

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', {
        email, password
    });

    return jwtDecode(data.token);
};

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', {
        email, password
    });

    return jwtDecode(data.token);
};

export const auth = async () => {
    const response = await $host.post('api/auth/registration');

    return response;
};