import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dt-money.adnfig.me/api',
    // baseURL: 'http://localhost:3000/api',
})