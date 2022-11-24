import axios from "axios";

export const api = axios.create({
    baseURL: 'https://effulgent-crepe-8e024f.netlify.app/api',
})