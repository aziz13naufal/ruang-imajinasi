import axios from 'axios';
import { config } from '.';
import errorHandler from './error-handler';

const instance = axios.create({
    baseURL: config.BASE_URL_API,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
