import axios from "axios";

const PIZZERIA_HOST = '';

export default function getAxios(token) {
    const NODE_ENV = process.env.NODE_ENV;

    let headers = { 'Content-Type': 'application/json' };

    if (token) {
        headers['Authorization'] = 'Bearer ' + token;
    }

    const instance = axios.create({
        baseURL: NODE_ENV === 'development' ? ' http://127.0.0.1:3333/api' : PIZZERIA_HOST,
        timeout: 1000,
        headers
    });

    return instance;
}