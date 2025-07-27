import axios from 'axios';

let API_URL = process.env.EXPO_PUBLIC_URL;

const formulaApi = axios.create({
    baseURL: API_URL,
    headers: {
        'x-rapidapi-host': process.env.EXPO_PUBLIC_HOST,
        'X-rapidapi-key': process.env.EXPO_PUBLIC_KEY
    }
});

export { formulaApi };

