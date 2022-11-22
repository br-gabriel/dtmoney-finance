import axios from "axios";

export const api = axios.create({
    baseURL: 'https://react-finance.herokuapp.com/api',
})