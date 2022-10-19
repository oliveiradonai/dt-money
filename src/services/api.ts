import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://adnfig-dt-money.vercel.app/api',
    // baseURL: 'http://localhost:3000/api',
})