import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const {KEY, HOST, URL} = getEnvVariables();
console.log(URL);
console.log("AAA");

const formulaApi = axios.create({
    baseURL: URL
});

formulaApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'x-rapidapi-host': HOST,
        'x-rapidapi-key': KEY
    }
    return config;
})


export default formulaApi;